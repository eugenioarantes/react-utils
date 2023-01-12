import { ReactNode, createContext, useCallback, useContext, useMemo, useState } from 'react';
import { v4 } from 'uuid';

import ToastContainer from '../components/Toast';

export interface ToastMessage {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}

export type AddToastParams = Omit<ToastMessage, 'id'>;

interface ToastContextData {
  addToast(message: AddToastParams): void;
  removeToast(id: string): void;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

function ToastProvider({ children }: { children: ReactNode }): JSX.Element {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const addToast = useCallback(({ type, title, description }: AddToastParams) => {
    const id = v4();

    const toast = {
      id,
      type,
      title,
      description,
    };

    setMessages((state) => [...state, toast]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setMessages((state) => state.filter((message) => message.id !== id));
  }, []);

  const data = useMemo(
    () => ({
      addToast,
      removeToast,
    }),
    [addToast, removeToast],
  );

  return (
    <ToastContext.Provider value={data}>
      {children}

      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
}

function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context.addToast) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}

type MessageConstructor = (...params: string[]) => AddToastParams;

function getMessagesControl<T extends Record<string, AddToastParams | MessageConstructor>>(
  messages: T,
): T {
  return messages;
}

export { ToastProvider, useToast, getMessagesControl };
