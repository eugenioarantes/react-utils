import { useCallback, useState, KeyboardEvent } from "react";
import BagOfWords from "../../components/bagOfWords";
import { Button } from "./styles";

const preventEnter = (event: KeyboardEvent): void => {
  if (event.key === 'Enter') event.preventDefault();
};

const Home: React.FC = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [isErroredBagOfWords, setIsErroredBagOfWords] = useState(false);

  const validateBagOfWordsAndFile = useCallback((): boolean => {
    const bagOfWordsError = !tags.length;

    setIsErroredBagOfWords(bagOfWordsError);

    return bagOfWordsError;
  }, [tags]);

  const handleSubmit = useCallback(
    async () => {
      const isErrored = validateBagOfWordsAndFile();

      if (isErrored) return;

      console.log('envia formulario');
    },
    [validateBagOfWordsAndFile],
  );

  return (
    <form onSubmit={handleSubmit} onKeyPress={(event) => preventEnter(event)}>
      <BagOfWords isErrored={isErroredBagOfWords} tags={tags} setTags={setTags} />

      <Button type="submit">Send</Button>
    </form>
  );
};

export default Home;