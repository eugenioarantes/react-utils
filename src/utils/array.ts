const INDEX_TO_HUMAN_OFFSET = 1;

type OrUndefined<Entity> = Entity | undefined;

export function getFirstItem<Item>(array: Item[]): OrUndefined<Item> {
  const [item] = array;

  return item;
}

export function getLastIndex<Item>(array: Item[]): number {
  return array.length - INDEX_TO_HUMAN_OFFSET;
}

export function getLastItem<Item>(array: Item[]): OrUndefined<Item> {
  const lastIndex = getLastIndex(array);

  return array[lastIndex];
}

export function getFirstAndLastItem<Item>(array: Item[]): [OrUndefined<Item>, OrUndefined<Item>] {
  const [first, last] = [getFirstItem, getLastItem].map((callback) => callback(array));

  return [first, last];
}
