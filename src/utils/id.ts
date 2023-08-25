import { v4 } from 'uuid';

export function getUniqueID(): string {
  return v4();
}
