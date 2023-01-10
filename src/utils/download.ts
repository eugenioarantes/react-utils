import axios from 'axios';

function getFileName(url: string): string {
  const [name] = url.split('/').reverse();

  return name;
}

export async function executeDownloadFromURL({
  url,
  onProgress,
  name,
}: {
  url: string;
  name?: string;
  onProgress: (progress: number) => void;
}): Promise<void> {
  const { data } = await axios.get(url, {
    responseType: 'blob',
    onDownloadProgress: ({ loaded, total }) => onProgress((loaded / (total || 100000000)) * 100),
  });

  const downloadURL = window.URL.createObjectURL(new Blob([data]));

  const fileName = name || getFileName(url);

  const link = document.createElement('a');
  link.href = downloadURL;
  link.setAttribute('download', fileName);

  document.body.appendChild(link);

  link.click();

  link.remove();
}
