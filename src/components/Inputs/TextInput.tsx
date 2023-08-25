import { Skeleton, TextFieldProps } from '../Material';

import { Input } from './InputWithLabel/styles';

type Props = {
  children?: never;
  loading?: boolean;
  height?: number;
} & TextFieldProps;

function TextInput({ loading, height, ...props }: Props): JSX.Element {
  return loading ? (
    <Skeleton height={45} variant="rounded" />
  ) : (
    <Input $height={height} {...props} />
  );
}

export default TextInput;
