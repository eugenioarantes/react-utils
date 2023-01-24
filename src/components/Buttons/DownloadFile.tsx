import { useCallback, useState } from 'react';

import IconButton from '@mui/material/IconButton';
import CircularProgress from '@mui/material/CircularProgress';

import DownloadIcon from '@mui/icons-material/Download';

import api from '../../services/api';

import { executeDownloadFromURL } from '../../utils/download';
import { useToggle } from '../../hooks/toggle';
import { Row } from '../Containers';

interface DownloadFileButtonProps {
  children?: never;
  url: string;
  name: string;
  removeButtonWhileDownloading?: boolean;
}

function DownloadFileButton({
  url,
  name,
  removeButtonWhileDownloading,
}: DownloadFileButtonProps): JSX.Element {
  const { isOn, turnOff, turnOn } = useToggle();
  const [progress, setProgress] = useState(0);

  const handleDownload = useCallback(async () => {
    try {
      turnOn();
      setProgress(0);

      const {
        data: { accessUrl },
      } = await api.post('/uploads/access-url', { url });

      await executeDownloadFromURL({
        url: accessUrl,
        name,
        onProgress: setProgress,
      });

      setTimeout(turnOff, 500);
    } catch (err) {
      turnOff();
    }
  }, [url, turnOn, turnOff, name]);

  const showButton = removeButtonWhileDownloading ? !isOn : true;

  return (
    <Row gap={8} fullWidth={false}>
      {isOn && (
        <CircularProgress variant="determinate" thickness={5.0} value={progress} size={22} />
      )}

      {showButton && (
        <IconButton onClick={handleDownload}>
          <DownloadIcon />
        </IconButton>
      )}
    </Row>
  );
}

export default DownloadFileButton;
