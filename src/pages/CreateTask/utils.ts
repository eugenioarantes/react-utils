import { AddToastParams } from '../../providers/Toast';

type Message = Record<string, AddToastParams>;

export const MESSAGES: Message = {
  createError: { title: 'Error while creating project', type: 'error' },
  createSuccess: { title: 'Project created with success', type: 'success' },
};
