import { Major, Ticket } from '../models/ticket';

const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: 'SI4 in Madrid',
    description: '',
    date: dateToday,
    student: 'Paul',
    major: Major.GE,
    archived: false,
  },
  {
    title: 'SI5 in Paris -- Modified',
    description: 'Description du voyage',
    date: dateToday,
    student: 'Anakin',
    major: Major.SI,
    archived: false,
  },

  {
    title: '  TEST',
    description: 'Decs',
    date: dateToday,
    student: 'Baslam',
    major: Major.SI,
    archived: true,
  },
];
