self.onmessage = async (event) => {
  const { convertedImage, newFormat } = event.data;

  const blob = await convertImage(convertedImage, newFormat);

  // Enviar el blob al hilo principal
  self.postMessage({ blob, newFormat });
};

const convertImage = async (image, newFormat) => {
  return new Promise((resolve) => {
    const canvas = new OffscreenCanvas(image.width, image.height);
    const context = canvas.getContext('2d');

    if (!context) {
      console.error('Canvas context not supported.');
      resolve(null);
      return;
    }

    context.drawImage(image, 0, 0);

    canvas.convertToBlob({ type: `image/${newFormat.toLowerCase()}` }).then((blob) => {
      if (!blob) {
        console.error('Conversion to blob failed.');
        resolve(null);
        return;
      }

      resolve(blob);
    });
  });
};
