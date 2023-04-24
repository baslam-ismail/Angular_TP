import { Ticket } from '../models/ticket';

const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: 'SI4 in Madrid',
    description: '',
    date: dateToday,
    student: 'Paul',
    major: 'GE',
  },
  {
    title: 'SI5 in Paris -- Modified',
    description: 'Description du voyage',
    date: dateToday,
    student: 'Anakin',
    major: 'SI',
  },
];
