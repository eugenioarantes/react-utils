export interface User {
  id: string;
  name: string;
  tasks: Array<string>;
}

export const USERS: User[] = [
  {
    id: '1',
    name: 'João',
    tasks: ['1', '2'],
  },
  {
    id: '2',
    name: 'Bruno',
    tasks: ['2', '5', '4'],
  },
  {
    id: '3',
    name: 'Pedro',
    tasks: ['5', '3'],
  },
  {
    id: '4',
    name: 'Cláudio',
    tasks: ['3'],
  },
  {
    id: '5',
    name: 'Alberto',
    tasks: [],
  },
  {
    id: '6',
    name: 'Gilberto',
    tasks: ['6', '4'],
  },
];
