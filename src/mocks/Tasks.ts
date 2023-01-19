export const TASKS = [
  {
    id: 1,
    name: 'tasks today',
    tab: 'today',
    tasks: [
      {
        id: 1,
        name: 'test today 1',
        status: 'in progress',
      },
      {
        id: 2,
        name: 'test today 2',
        status: 'done',
      },
    ],
  },
  {
    id: 2,
    name: 'task week',
    tab: 'week',
    tasks: [
      {
        id: 3,
        name: 'test week 3',
        status: 'pending',
      },
      {
        id: 4,
        name: 'test week 4',
        status: 'to do',
      },
    ],
  },
  {
    id: 3,
    name: 'task month',
    tab: 'month',
    tasks: [
      {
        id: 5,
        name: 'test month 5',
        status: 'in progress',
      },
      {
        id: 6,
        name: 'test month 6',
        status: 'to do',
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
