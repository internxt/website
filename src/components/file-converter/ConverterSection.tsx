import DropArea from '../shared/DropArea';

const ConverterSection = ({ textContent }) => {
  const handleFileDrop = (files: FileList) => {
    console.log('Archivos soltados:', files);
    // Aquí puedes manejar los archivos soltados
  };

  return (
    <section className="overflow-hidden bg-gray-1 pt-32 pb-20">
      <div className="flex flex-col items-center px-5">
        <DropArea onItemsDropped={handleFileDrop}>
          <div className="flex rounded-lg bg-primary/7 px-4 py-2">
            <p className="text-sm font-medium text-gray-80">Max file size of 1GB</p>
          </div>
        </DropArea>
      </div>
    </section>
  );
};

export default ConverterSection;
