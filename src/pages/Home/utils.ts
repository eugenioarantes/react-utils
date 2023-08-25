import { isSubstring } from '../../utils/text';

export function evaluateSearchTerm(task: any, term: string): boolean {
  const { name } = task;

  console.log(name);

  const match = [name].some((prop) => isSubstring(prop, term));

  return match;
}
