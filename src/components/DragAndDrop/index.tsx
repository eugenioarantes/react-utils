import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

import { BsFileEarmark } from 'react-icons/bs';
import { ReactComponent as DragAndDropIcon } from '../../assets/drag-and-drop.svg';

import { getFirstItem } from '../../utils/array';

import { Dropzone, DropzoneContainer, Error, FileInfo } from './styles';

interface DragAndDropProps {
  isErrored: boolean;
  file: File | null;
  setFile: (newValue: File) => void;
}

const ACCEPTED_FORMATS = ['.mp4'];
const DRAG_ADVICE = 'Drag and drop the file or select from your computer.';

const DragAndDrop: React.FC<DragAndDropProps> = ({ isErrored, file, setFile }) => {
  const onDrop = useCallback((acceptedFiles) => {
    setFile(getFirstItem(acceptedFiles) as File);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1,
    multiple: false,
    accept: ACCEPTED_FORMATS,
  });

  return (
    <DropzoneContainer>
      <span>UPLOAD FILE</span>

      <Dropzone {...getRootProps()} $isErrored={isErrored}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <>
            <DragAndDropIcon />
            <span>Drop file here ...</span>
          </>
        ) : (
          <>
            {file ? <BsFileEarmark /> : <DragAndDropIcon />}

            <FileInfo>{file ? file.name : DRAG_ADVICE}</FileInfo>
          </>
        )}
      </Dropzone>

      {isErrored && <Error>Mandatory file</Error>}
    </DropzoneContainer>
  );
};

export default DragAndDrop;
