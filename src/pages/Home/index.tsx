import { useCallback, useState, KeyboardEvent } from "react";
import DragAndDrop from "../../components/DragAndDrop";
import { Button } from "./styles";

const preventEnter = (event: KeyboardEvent): void => {
  if (event.key === 'Enter') event.preventDefault();
};

const Home: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const [isErroredFile, setIsErroredFile] = useState(false);

  const validateFile = useCallback((): boolean => {
    const fileError = !file;

    setIsErroredFile(fileError);

    return fileError;
  }, [file]);

  const handleSubmit = useCallback(
    async () => {
      const isErrored = validateFile();

      if (isErrored) return;

      console.log('envia formulario');
    },
    [validateFile],
  );

  return (
    <form onSubmit={handleSubmit} onKeyPress={(event) => preventEnter(event)}>
      <DragAndDrop isErrored={isErroredFile} file={file} setFile={setFile} />

      <Button type="submit">Send</Button>
    </form>
  );
};

export default Home;