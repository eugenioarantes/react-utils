import { Dispatch, FC, SetStateAction, useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { v4 } from 'uuid';

import Typography from '@mui/material/Typography';

import SingleFile from './File';

import { BrowseMessage, Dropzone, DropzoneWrapper, ListWrapper } from './styles';

import { UploadedFile } from '../../types/entities';
import { Column } from '../Containers';

interface ReactDropzoneProps {
  files: UploadedFile[];
  setFiles: Dispatch<SetStateAction<UploadedFile[]>>;
  uploadPrefix: string;
  acceptedFormats?: string[];
  multiple?: boolean;
  width?: string;
}

export type FileWithId = File & { id: string };

const ReactDropzone: FC<ReactDropzoneProps> = ({
  files,
  setFiles,
  uploadPrefix,
  acceptedFormats,
  multiple = true,
  width = '100%',
}) => {
  const [filesToUpload, setFilesToUpload] = useState<FileWithId[]>([]);

  const removeFile = (toRemoveId: string): void => {
    setFiles((old) => old.filter(({ id }) => id !== toRemoveId));
    setFilesToUpload((old) => old.filter(({ id }) => id !== toRemoveId));
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFilesToUpload((old) => [
      ...old,
      ...acceptedFiles.map((file) => {
        // eslint-disable-next-line no-param-reassign
        (file as FileWithId).id = v4();

        return file as FileWithId;
      }),
    ]);
  }, []);

  const onUpload = (uploadedFile: UploadedFile): void => {
    setFilesToUpload((old) => old.filter(({ id }) => id !== uploadedFile.id));
    setFiles((old) => [...old, uploadedFile]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple,
    accept: acceptedFormats,
  });

  const allFiles = [...files, ...filesToUpload];

  return (
    <DropzoneWrapper gap={8} $width={width}>
      <Dropzone {...getRootProps()}>
        <input {...getInputProps()} />

        {isDragActive ? (
          <Typography variant="body2" fontWeight={500} color="gray">
            Drop file here ...
          </Typography>
        ) : (
          <Column alignItems="center" gap={4}>
            <Typography variant="body2" fontWeight={500} color="gray" align="center">
              Drag and drop files <br />
              or
            </Typography>

            <BrowseMessage>Browse</BrowseMessage>
          </Column>
        )}
      </Dropzone>

      <ListWrapper gap={8}>
        {allFiles.map((file) => (
          <SingleFile
            key={`file-single-${file.id}`}
            handleDelete={() => removeFile((file as UploadedFile).id)}
            file={file}
            onUpload={onUpload}
            prefix={uploadPrefix}
          />
        ))}
      </ListWrapper>
    </DropzoneWrapper>
  );
};

export default ReactDropzone;
