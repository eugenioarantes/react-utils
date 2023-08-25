export interface SingleTask {
  id: string;
  name: string;
  status: string;
  owners: string[];
}

export interface Task {
  id: string;
  name: string;
  tab: string;
  tasks: SingleTask[];
}

export const TASKS = [
  {
    id: '1',
    name: 'tasks today',
    tab: 'today',
    tasks: [
      {
        id: '1',
        name: 'proj today 1',
        status: 'in progress',
        owners: ['1'],
      },
      {
        id: '2',
        name: 'test today 2',
        status: 'done',
        owners: ['1', '2'],
      },
    ],
  },
  {
    id: '2',
    name: 'task week',
    tab: 'week',
    tasks: [
      {
        id: '3',
        name: 'test week 3',
        status: 'pending',
        owners: ['3', '4'],
      },
      {
        id: '4',
        name: 'test week 4',
        status: 'to do',
        owners: ['2', '6'],
      },
    ],
  },
  {
    id: '3',
    name: 'task month',
    tab: 'month',
    tasks: [
      {
        id: '5',
        name: 'test month 5',
        status: 'in progress',
        owners: ['2', '3'],
      },
      {
        id: '6',
        name: 'test month 6',
        status: 'to do',
        owners: ['6'],
      },
    ],
  },
];

export const TABS = [
  {
    id: 'today',
    label: 'Today',
    render: true,
  },
  {
    id: 'week',
    label: 'Week',
    render: true,
  },
  {
    id: 'month',
    label: 'Month',
    render: true,
  },
];
