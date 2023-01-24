export interface User {
  id: string;
  name: string;
  age: number;
  profession: string;
}

export const USERS: User[] = [
  {
    id: '1',
    name: 'Eugênio',
    age: 22,
    profession: 'Front end developer',
  },
  {
    id: '2',
    name: 'Bruno',
    age: 19,
    profession: 'Back end developer',
  },
  {
    id: '3',
    name: 'Pedro',
    age: 28,
    profession: 'Front end developer',
  },
  {
    id: '4',
    name: 'Cláudio',
    age: 35,
    profession: 'Back end developer',
  },
  {
    id: '5',
    name: 'Alberto',
    age: 40,
    profession: 'Dev Ops',
  },
  {
    id: '6',
    name: 'Gilberto',
    age: 36,
    profession: 'Programmer',
  },
];
