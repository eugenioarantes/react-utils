import { getFirstItem, getLastItem } from './array';

export function ensureTextSize(text: string, maxSize: number): string {
  if (text.length <= maxSize) return text;

  return `${text.slice(0, maxSize)}...`;
}

export function getUserInitials(name: string): string {
  const names = name.split(' ');

  const [firstNameLetter, lastNameLetter] = [getFirstItem, getLastItem].map((cb) =>
    getFirstItem((cb(names) as string)?.split('')),
  );

  if (names.length === 1) return firstNameLetter.toUpperCase();

  return `${firstNameLetter}${lastNameLetter}`.toUpperCase();
}
