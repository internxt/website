self.addEventListener('message', async (event) => {
  console.log('[WORKER EVENT]:', event);

  if (event.data.type !== 'convert') return;

  const { file, filename } = event.data;

  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await fetch('/api/docx-to-pdf', {
      method: 'POST',
      body: formData,
    });

    const postData = await response.json();

    self.postMessage({ buffer: postData.buffer, filename });
  } catch (err) {
    const error = err as Error;
    console.error('[WORKER ERROR]:', error.stack ?? error.message);
  }
});
