import { useRef, useState } from 'react';

import {
  BagOfWordsContainer,
  Error,
  InputOfWords,
  LabelBagOfWords,
  RemoveTagSpan,
  SpanTextWarning,
  TagsContainer,
  TagSpan,
  WordsContainer,
} from './styles';

interface BagOfWordsProps {
  isErrored: boolean;
  tags: string[];
  setTags: (newValue: string[]) => void;
}

const TEXT_WARNING =
  'You can add a list of words related to the theme of your video to get more accurate transcription.';

const BagOfWords: React.FC<BagOfWordsProps> = ({ isErrored, tags, setTags }) => {
  const [tagName, setTagName] = useState('');
  const wordsSectionRef = useRef<HTMLDivElement>(null);
  const bagOfWordsInput = useRef<HTMLInputElement>(null);

  const removeTag = (indexToRemove: number): void => {
    setTags([...tags.filter((_, index) => index !== indexToRemove)]);
  };

  const addNewTag = (): void => {
    const tagToAdd = tagName.trim();

    const shouldAdd = tagToAdd && !tags.find((tag) => tag === tagToAdd);

    if (shouldAdd) setTags([...tags, tagToAdd]);

    setTagName('');

    if (wordsSectionRef.current) {
      wordsSectionRef.current.scrollTop = wordsSectionRef.current.scrollHeight;
    }
  };

  return (
    <BagOfWordsContainer>
      <LabelBagOfWords htmlFor="bag-of-words">Bag Of Words</LabelBagOfWords>
      <SpanTextWarning>{TEXT_WARNING}</SpanTextWarning>

      <TagsContainer $isErrored={isErrored} onClick={() => bagOfWordsInput.current?.focus()}>
        <InputOfWords
          id="bag-of-words"
          value={tagName}
          onChange={({ target }) => setTagName(target.value)}
          onKeyPress={({ key }) => (key === 'Enter' ? addNewTag() : null)}
          placeholder="Press enter to add words"
          ref={bagOfWordsInput}
        />

        <WordsContainer ref={wordsSectionRef}>
          <ul>
            {tags.map((tag: string, index: number) => (
              <li key={tag}>
                <TagSpan>{tag}</TagSpan>
                <RemoveTagSpan onClick={() => removeTag(index)}>x</RemoveTagSpan>
              </li>
            ))}
          </ul>
        </WordsContainer>
      </TagsContainer>

      {isErrored && <Error>Mandatory at least one word</Error>}
    </BagOfWordsContainer>
  );
};

export default BagOfWords;