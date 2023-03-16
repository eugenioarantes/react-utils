import { useState } from 'react';

import axios from 'axios';

import CloseIcon from '@mui/icons-material/Close';
import RefreshIcon from '@mui/icons-material/Refresh';
import UploadIcon from '@mui/icons-material/Upload';
import DescriptionIcon from '@mui/icons-material/Description';

import LinearProgress from '@mui/material/LinearProgress';
import IconButton from '@mui/material/IconButton';
import { UploadedFile } from '../../types/entities';

import { useOldEffect } from './oldEffect';

import { FileWithId } from '.';
import { useApiCall } from '../../hooks/apiCall';
import { useToggle } from '../../hooks/toggle';
import { USERS } from '../../mocks/Users';
import { ErrorContainer, ErrorNotice, FileInfo, RemoveButton } from './styles';
import { ensureTextSize } from '../../utils/text';

interface SingleFileProps {
  children?: never;
  handleDelete: () => void;
  file: FileWithId | UploadedFile;
  onUpload(file: UploadedFile): void;
  prefix: string;
}

function SingleFile({ handleDelete, file, onUpload, prefix }: SingleFileProps): JSX.Element {
  const { executeApiCall, loading } = useApiCall();
  const { isOn, turnOn, turnOff } = useToggle();

  const { isOn: isError, turnOn: turnErrorOn, turnOff: turnErrorOff } = useToggle();

  const [loadingPercentage, setLoadingPercentage] = useState(0);

  async function executeUpload(): Promise<void> {
    try {
      turnErrorOff();

      const { uploadURL, url } = await executeApiCall({
        path: '/uploads/signed-url',
        payload: {
          contentType: (file as File).type,
          fileName: file.name,
          prefix,
        },
      });

      turnOn();

      await axios.put(uploadURL, file, {
        headers: {
          'Content-Type': (file as File).type,
        },
        onUploadProgress: ({ loaded, total }) => {
          setLoadingPercentage((loaded / (total || 100000000)) * 100);
        },
      });

      turnOff();

      onUpload({
        id: file.id,
        name: file.name,
        url,
        uploadedAt: new Date().toISOString(),
        uploadedBy: USERS[0].id,
      });

      turnErrorOff();
    } catch (err) {
      turnErrorOn();
    }
  }

  useOldEffect(() => {
    if ((file as UploadedFile)?.url) return;

    executeUpload();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isUploading = loading || isOn;

  return (
    <FileInfo gap={isError ? 4 : 10} justifyContent="center" alignItems="center">
      {isUploading ? <UploadIcon /> : <DescriptionIcon />}

      {isUploading && (
        <LinearProgress
          style={{ width: '70%', borderRadius: '4px' }}
          variant="determinate"
          value={loadingPercentage}
        />
      )}

      {isError ? (
        <ErrorContainer alignItems="center" gap={4}>
          <ErrorNotice>ERROR!</ErrorNotice>

          <IconButton onClick={executeUpload}>
            <RefreshIcon />
          </IconButton>
        </ErrorContainer>
      ) : (
        <span title={file.name}>{ensureTextSize(file.name, 15)}</span>
      )}

      <RemoveButton type="button" onClick={handleDelete}>
        <CloseIcon />
      </RemoveButton>
    </FileInfo>
  );
}

export default SingleFile;
