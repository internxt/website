// convertWorker.js

const originHostname = process.env.NODE_ENV === 'production' ? 'https://internxt.com' : 'http://localhost:3001';

self.addEventListener('message', async (event) => {
  console.log('[WORKER EVENT]:', event);

  if (event.data.type !== 'convert') return;

  const { file, mimeType, format } = event.data;

  console.log('[FILE]:', file);

  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await fetch(`/api/convert?format=${format}`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok || !response.body) {
      return self.postMessage({ message: 'error', error: response.text() });
    }

    const chunks: Uint8Array[] = [];
    const reader = response.body.getReader();

    while (true) {
      const { done, value } = await reader.read();

      if (done) {
        break;
      }

      chunks.push(value);
    }

    const blob = new Blob(chunks, { type: mimeType });

    self.postMessage({ blob });
  } catch (err) {
    const error = err as Error;
    console.error('[WORKER ERROR]:', error.stack ?? error.message);
    self.postMessage({ error: `Error converting file: ${error.message}` });
  }
});
