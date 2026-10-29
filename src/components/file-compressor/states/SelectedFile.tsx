interface SelectedFileProps {
  darkMode?: boolean;
  textContent: any;
  files: FileList;
  onCancel: () => void;
  onFileConvert: (files) => void;
}

const SelectedFile = ({ darkMode = false, textContent, files, onCancel, onFileConvert }: SelectedFileProps) => {
  const isMultipleFiles = files.length > 1;
  const fileName = files && isMultipleFiles ? 'Files' : files[0].name;

  return (
    <div className="flex flex-col items-center space-y-8 text-center">
      <h3 className={`text-3xl font-semibold ${darkMode ? 'text-white-95' : 'text-gray-100'}`}>{textContent.title}</h3>
      <p className={`text-lg font-semibold ${darkMode ? 'text-green-120' : 'text-gray-60'}`}>{fileName}</p>
      <div className="flex flex-col gap-2 md:flex-row">
        <button
          onClick={onCancel}
          className={`rounded-lg border ${
            darkMode ? 'border-gray-71 bg-[#1C1C1C]' : 'border-gray-5 bg-white'
          } px-5 py-2.5 font-medium ${darkMode ? 'text-cool-gray-30' : 'text-gray-80'} shadow-sm ${
            darkMode ? 'hover:bg-gray-71' : 'hover:bg-gray-10'
          }`}
        >
          {textContent.cancel}
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            onFileConvert(files);
          }}
          className="rounded-lg bg-primary px-5 py-2.5 font-medium text-white hover:bg-primary-dark"
        >
          {textContent.convert}
        </button>
      </div>
    </div>
  );
};

export default SelectedFile;
