import { useCallback } from 'react';

const DropArea = ({
  onItemsDropped,
  isDragging,
  setIsDragging,
  children,
}: {
  onItemsDropped: (items: FileList) => void;
  children: React.ReactNode;
  isDragging: boolean;
  setIsDragging: (isDragging: boolean) => void;
}) => {
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
      className={`flex h-full w-full items-center justify-center`}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {children}
    </div>
  );
};

export default DropArea;
