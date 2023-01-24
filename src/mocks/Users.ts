export interface User {
  id: string;
  name: string;
  age: number;
  profession: { id: string; name: string };
  level: { id: string; name: string };
}

export const USERS: User[] = [
  {
    id: '1',
    name: 'Eugênio',
    age: 22,
    profession: { id: '1', name: 'Front end developer' },
    level: { id: '2', name: 'Junior' },
  },
  {
    id: '2',
    name: 'Bruno',
    age: 19,
    profession: { id: '2', name: 'Back end developer' },
    level: { id: '1', name: 'Trainee' },
  },
  {
    id: '3',
    name: 'Pedro',
    age: 28,
    profession: { id: '1', name: 'Front end developer' },
    level: { id: '3', name: 'Pleno' },
  },
  {
    id: '4',
    name: 'Cláudio',
    age: 35,
    profession: { id: '2', name: 'Back end developer' },
    level: { id: '4', name: 'Senior' },
  },
  {
    id: '5',
    name: 'Alberto',
    age: 40,
    profession: { id: '3', name: 'Dev Ops' },
    level: { id: '4', name: 'Senior' },
  },
  {
    id: '6',
    name: 'Gilberto',
    age: 36,
    profession: { id: '4', name: 'Programmer' },
    level: { id: '3', name: 'Pleno' },
  },
];

export const PROFESSIONS = [
  {
    id: '1',
    name: 'Front end developer',
  },
  {
    id: '2',
    name: 'Back end developer',
  },
  {
    id: '3',
    name: 'Dev Ops',
  },
  {
    id: '4',
    name: 'Programmer',
  },
];

export const PROFESSION_LEVEL = [
  {
    id: '1',
    name: 'Trainee',
  },
  {
    id: '2',
    name: 'Junior',
  },
  {
    id: '3',
    name: 'Pleno',
  },
  {
    id: '4',
    name: 'Senior',
  },
];
