/* eslint-disable @typescript-eslint/no-explicit-any */
import { INDEX_TO_HUMAN_OFFSET } from './constants';

const INDEX_OFFSET = 1;
const FIRST_ITEM = 0;

export function getLastIndex(array: any[]): number {
  const lastIndex = array.length - INDEX_TO_HUMAN_OFFSET;

  return lastIndex;
}

export function getLastItem<E = any>(array: E[]): E | undefined {
  const lastIndex = getLastIndex(array);

  return array[lastIndex];
}

export function getFirstItem<E = any>(array: E[]): E {
  return array[FIRST_ITEM];
}

export function getNextIndex(index: number): number {
  return index + 1;
}

// eg the 1st item is index 0
export function getNthItem<E = any>(list: E[], itemNumber: number): E | undefined {
  const nthIndex = itemNumber - 1;

  return list[nthIndex];
}

export function ensureMaxArraySize<Entity = any>(items: Entity[], lengthLimit: number): Entity[][] {
  if (items.length <= lengthLimit) return [items];

  const numberOfSubArrays = Math.ceil(items.length / lengthLimit);

  const subArrays = Array.from({ length: numberOfSubArrays }).map((_, index) => {
    const start = index * lengthLimit;
    const end = (index + INDEX_OFFSET) * lengthLimit;

    return items.slice(start, end);
  });

  return subArrays;
}

export function randomizeArray<E = any>(array: E[]): E[] {
  return array.slice().sort(() => Math.random() - 0.5);
}

export function sortByName<E extends { name: string }>(array: E[]): E[] {
  return array.slice().sort((a, b) => a.name.localeCompare(b.name));
}
