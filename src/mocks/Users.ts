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
    tasks: ['3', '4'],
  },
  {
    id: '3',
    name: 'Pedro',
    tasks: ['5'],
  },
];
