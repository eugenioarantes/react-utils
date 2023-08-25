import { ChangeEvent, useMemo } from 'react';

import { getUniqueID } from '../../../utils/id';
import { Column } from '../../Containers';
import Label from '../../Label';
import { Skeleton, TextareaAutosizeProps } from '../../Material';

import { StyledTextarea } from './styles';

interface TextAreaWithLabelProps extends TextareaAutosizeProps {
  label: string;
  loading?: boolean;
  error?: boolean;
  handleChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export function TextAreaWithLabel({
  handleChange,
  className,
  label,
  loading,
  error = false,
  ...props
}: TextAreaWithLabelProps): JSX.Element {
  const id = useMemo(() => props.id || props.name || getUniqueID(), [props.id, props.name]);

  return (
    <Column gap={8} className={className}>
      <Label htmlFor={id}>{label}</Label>

      {loading ? (
        <Skeleton height={45} variant="rounded" />
      ) : (
        <StyledTextarea onChange={handleChange} $error={error} {...props} id={id} />
      )}
    </Column>
  );
}
