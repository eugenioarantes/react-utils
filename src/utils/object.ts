/* eslint-disable @typescript-eslint/no-explicit-any */

export function extractProperties<Obj extends Record<string, any>>(
  object: Obj,
  propsToKeep: (keyof Obj)[],
): Partial<Obj> {
  const curated = Object.entries(object).reduce(
    (acc, [prop, value]) =>
      propsToKeep.includes(prop as keyof Obj) ? { ...acc, [prop]: value } : acc,
    {} as Partial<Obj>,
  );

  return curated;
}

export function removeProperties<Obj extends Record<string, any>>(
  object: Obj,
  propsToExclude: (keyof Obj)[],
): Partial<Obj> {
  const curated = Object.entries(object).reduce(
    (acc, [prop, value]) =>
      propsToExclude.includes(prop as keyof Obj) ? acc : { ...acc, [prop]: value },
    {} as Partial<Obj>,
  );

  return curated;
}

export function removeUndefinedProperties<Obj extends Record<string, any>>(
  object: Obj,
): Partial<Obj> {
  const curated = Object.entries(object).reduce(
    (acc, [prop, value]) => (value === undefined ? acc : { ...acc, [prop]: value }),
    {} as Partial<Obj>,
  );

  return curated;
}

export function getNumericObjectTotal(obj: Record<string, number>): number {
  const total = Object.values(obj).reduce((acc, next) => acc + next);

  return total;
}

export function logObject(description: string, object: Record<string, any>): void {
  // eslint-disable-next-line no-console
  console.log(description, JSON.stringify(object, null, 2));
}
