import { useCallback, useState } from 'react';
import EmptyFile from './icons/EmptyFile';

const DropArea = ({
  onItemsDropped,
  children,
}: {
  onItemsDropped: (items: FileList) => void;
  children: React.ReactNode;
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const handleDragEnter = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setIsDragging(false);

      const files = e.dataTransfer.files;
      if (files.length > 0) {
        onItemsDropped(files);
      }
    },
    [onItemsDropped],
  );

  return (
    <div
      className="flex w-full max-w-screen-lg flex-col items-center space-y-8 border-4 border-primary/8 bg-primary/2 py-12"
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {isDragging ? (
        <div className="flex flex-col items-center space-y-4">
          <EmptyFile />
          <p className="text-lg font-semibold text-primary">Drop file here</p>
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default DropArea;
