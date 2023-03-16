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

export function normalizeText(text: string): string {
  const lower = text.trim().toLocaleLowerCase(['pt-BR', 'pt']);

  const cleaned = lower
    .replace(/[àáâãäå]/g, 'a')
    .replace(/[éèêẽë]/g, 'e')
    .replace(/[íìîĩ]/g, 'i')
    .replace(/[òóôõ]/g, 'o')
    .replace(/[úùûũ]/g, 'u')
    .replace(/[ç]/g, 'c')
    .replace(/[ñ]/g, 'n');

  return cleaned;
}

export function isSubstring(text: string, testTerm: string): boolean {
  return normalizeText(text).includes(normalizeText(testTerm));
}
