export interface User {
  id: string;
  name: string;
  age: number;
  profession: { id: string; name: string };
}

export const USERS: User[] = [
  {
    id: '1',
    name: 'Eugênio',
    age: 22,
    profession: { id: '1', name: 'Front end developer' },
  },
  {
    id: '2',
    name: 'Bruno',
    age: 19,
    profession: { id: '2', name: 'Back end developer' },
  },
  {
    id: '3',
    name: 'Pedro',
    age: 28,
    profession: { id: '1', name: 'Front end developer' },
  },
  {
    id: '4',
    name: 'Cláudio',
    age: 35,
    profession: { id: '2', name: 'Back end developer' },
  },
  {
    id: '5',
    name: 'Alberto',
    age: 40,
    profession: { id: '3', name: 'Dev Ops' },
  },
  {
    id: '6',
    name: 'Gilberto',
    age: 36,
    profession: { id: '4', name: 'Programmer' },
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
