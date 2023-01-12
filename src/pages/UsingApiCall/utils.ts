import { getMessagesControl } from "../../providers/Toast";

export const MESSAGES = getMessagesControl({
  noPermission: {
    title: 'Missing required permissions',
    type: 'error',
  },
  assumePermission: {
    title: 'does not have permission',
    type: 'error',
  },

  createError: { title: 'Error while creating', type: 'error' },
  createSuccess: { title: 'created with success!', type: 'success' },
});
