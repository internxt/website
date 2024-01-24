// pages/index.tsx

import ImagesToPDF from '@coderosh/images-to-pdf';
import { useState } from 'react';
import TextInput from '../../components/components/TextInput';
import { Spinner } from '@phosphor-icons/react';

const Home: React.FC = () => {
  const [selectedImages, setSelectedImages] = useState<FileList | null>(null);
  const [pdfName, setPdfName] = useState<string>('generatedPdf.pdf');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedImages(event.target.files);
    }
  };

  const handleConvertToPdf = async () => {
    try {
      if (!selectedImages || selectedImages.length === 0) {
        console.error('No images selected.');
        return;
      }
      setIsLoading(true);
      const imgArrayBuffer = await Promise.all(Array.from(selectedImages).map((image) => image.arrayBuffer()));

      const imgToPdf = new ImagesToPDF();

      imgArrayBuffer.forEach((image) => {
        imgToPdf.addImage(image);
      });

      const pdf = await imgToPdf.createPdf();

      const dataUrl = pdf.dataUrl();

      const link = document.createElement('a');
      link.href = dataUrl;
      link.setAttribute('download', pdfName);

      // Append to html link element page
      document.body.appendChild(link);

      // Start download
      link.click();

      // Clean up and remove the link
      link.parentNode.removeChild(link);
      setIsLoading(false);
    } catch (error) {
      console.error('Error converting images to PDF:', error);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-4">
      <div className="flex w-full max-w-sm flex-col items-center space-y-5">
        <input type="file" accept="image/*" multiple onChange={handleFileChange} />
        <TextInput
          className="w-full"
          placeholder="Enter PDF file name"
          onChange={(e) => {
            setPdfName(e.target.value);
          }}
        />
      </div>

      <button
        className="flex flex-col items-center rounded-lg bg-primary py-3 px-5 text-lg font-medium text-white"
        onClick={handleConvertToPdf}
      >
        {isLoading ? <Spinner className="animate-spin" /> : 'Convert to PDF'}
      </button>
    </div>
  );
};

export default Home;
