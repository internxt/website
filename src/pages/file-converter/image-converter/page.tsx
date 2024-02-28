'use client';

import { useState } from 'react';
import { UilAngleDown } from '@iconscout/react-unicons';

const Dropdown = ({
  currentImageFormat,
  setImageFormat,
}: {
  currentImageFormat: string;
  setImageFormat: (format: string) => void;
}) => {
  const imageFormats = ['WEBP', 'PNG', 'JPG'];

  return (
    <div
      className={`group relative flex cursor-default space-x-1 rounded-lg py-1.5 px-4 pr-2 font-medium transition duration-150 ease-in-out`}
    >
      <p className={'text-gray-60'}>Convert to:</p>
      <UilAngleDown
        className={`h-6
         w-6 translate-y-px text-gray-40 transition duration-150 ease-in-out`}
      />

      {/* Menu items */}
      <div className="pointer-events-none absolute top-full left-1/2 z-50 w-52 -translate-x-1/2 translate-y-0 rounded-xl border border-black border-opacity-5 bg-white p-1.5 opacity-0 shadow-subtle transition duration-150 ease-in-out group-hover:pointer-events-auto group-hover:translate-y-1 group-hover:opacity-100">
        <div className="absolute -top-4 left-1/2 h-4 w-4/5 -translate-x-1/2" />
        <div className="relative grid gap-0 whitespace-nowrap lg:grid-cols-1">
          {imageFormats
            .filter((format) => format.toLowerCase() !== currentImageFormat)
            .map((format) => (
              <button
                key={format}
                onClick={() => setImageFormat(format)}
                className={`flex flex-row justify-start rounded-lg py-2 px-4 text-base font-medium text-cool-gray-80  hover:bg-gray-1`}
              >
                {format}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

const ImageComponent = ({
  image,
  onNewFormatSelected,
}: {
  image: File;
  onNewFormatSelected: (format: string) => void;
}) => {
  return (
    <div className="flex flex-row items-center justify-between">
      <p className="font-medium">{image.name}</p>
      <div className="flex flex-col bg-gray-1 px-3 py-1">
        <p className="text-xs font-medium">Type: {image.type}</p>
      </div>
      <div className="flex flex-row space-x-1">
        <Dropdown currentImageFormat={image.type.split('/')[1]} setImageFormat={onNewFormatSelected} />
      </div>
    </div>
  );
};

export default function ImageConverter() {
  const [image, setImage] = useState<File | null>(null);
  const [newFormat, setNewFormat] = useState<string | null>(null);

  const handleImageConverter = async () => {
    if (!image || !newFormat) return;

    const convertedImage = await convertImage(image, newFormat);

    if (convertedImage) {
      // Download the file
      const link = document.createElement('a');
      link.href = URL.createObjectURL(convertedImage as Blob);
      link.download = `converted-image.${newFormat.toLowerCase()}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const convertImage = async (image, newFormat) => {
    return new Promise((resolve) => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');

      if (!context) {
        console.error('Canvas context not supported.');
        resolve(null);
        return;
      }

      const newImage = new Image();
      newImage.onload = () => {
        canvas.width = newImage.naturalWidth;
        canvas.height = newImage.naturalHeight;
        context.drawImage(newImage, 0, 0);

        canvas.toBlob((blob) => {
          if (!blob) {
            console.error('Conversion to blob failed.');
            resolve(null);
            return;
          }

          const convertedImage = new File([blob], `converted-image.${newFormat.toLowerCase()}`, {
            type: `image/${newFormat.toLowerCase()}`,
            lastModified: Date.now(),
          });

          resolve(convertedImage);
        }, `image/${newFormat.toLowerCase()}`);
      };

      newImage.src = URL.createObjectURL(image);
    });
  };

  function handleOnFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      console.log('image:', e.target.files[0]);
      setImage(e.target.files[0]);
    }
  }

  function onNewFormatSelected(format: string) {
    console.log('New format selected:', format);
    setNewFormat(format);
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-5">
      <h1 className="text-5xl font-semibold">Image Converter</h1>
      <div className="flex flex-col items-center space-y-4 rounded-lg border-2 border-primary/10 bg-primary/7 p-5">
        <input type="file" accept="image/*" onChange={handleOnFileChange} />
        {image ? <ImageComponent image={image} onNewFormatSelected={onNewFormatSelected} /> : null}
        {newFormat ? (
          <button
            className="flex w-max flex-col items-center rounded-lg bg-primary px-5 py-2 text-white"
            onClick={handleImageConverter}
          >
            Convert to {newFormat}
          </button>
        ) : null}
      </div>
    </div>
  );
}
