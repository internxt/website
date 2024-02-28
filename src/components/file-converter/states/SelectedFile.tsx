interface SelectedFileProps {
  files: FileList;
  onFileConvert: (files) => void;
}

const SelectedFile = ({ files, onFileConvert }: SelectedFileProps) => {
  const isMultipleFiles = files.length > 1;
  console.log('files:', files);
  const fileName = isMultipleFiles ? 'Files' : files[0].name;

  return (
    <div>
      <h3>File selected for converting</h3>
      <p>{fileName}</p>
      <div className="flex flex-row space-x-2">
        <button className="rounded-lg border border-gray-10 bg-white px-5 py-2.5 font-medium text-gray-80 shadow-sm">
          Cancel
        </button>
        <button
          onClick={() => {
            onFileConvert(files);
          }}
          className="rounded-lg bg-primary px-5 py-2.5 font-medium text-white"
        >
          Convert to ...
        </button>
      </div>
    </div>
  );
};

export default SelectedFile;
