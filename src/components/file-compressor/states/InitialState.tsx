import DropArea from '@/components/shared/DropArea';
import EmptyFile from '@/components/shared/icons/EmptyFile';
import { formatText } from '@/components/utils/format-text';

interface InitialStateProps {
  textContent: any;
  isDragging: boolean;
  pathFrom: string;
  handleFileDrop: (files: FileList) => void;
  setIsDragging: (isDragging: boolean) => void;
  handleOpenFileExplorer: () => void;
}

const InitialState = ({
  textContent,
  isDragging,
  pathFrom,
  handleFileDrop,
  setIsDragging,
  handleOpenFileExplorer,
}: InitialStateProps) => {
  return (
    <DropArea onItemsDropped={handleFileDrop} isDragging={isDragging} setIsDragging={setIsDragging}>
      <div className="flex flex-col items-center space-y-8 text-center">
        {isDragging ? (
          <div className="flex flex-col items-center space-y-4">
            <EmptyFile />
            <p className="text-2xl font-semibold">{textContent.draggingFile}</p>
          </div>
        ) : (
          <>
            <div className="flex flex-col rounded-lg bg-primary/7 px-4 py-2">
              <p className="font-medium text-gray-80">{textContent.maxFileSize}</p>
            </div>
            <p className="text-3xl font-semibold text-gray-100">
              {formatText(textContent.dragYourFile, {
                pathFrom,
              })}
            </p>
            <button className="flex rounded-lg bg-primary px-5 py-2.5 text-white" onClick={handleOpenFileExplorer}>
              <p className="font-medium">
                {formatText(textContent.cta, {
                  pathFrom: pathFrom,
                })}
              </p>
            </button>
          </>
        )}
      </div>
    </DropArea>
  );
};

export default InitialState;
