import { useTransition } from 'react-spring';
import { Portal } from '@reach/portal';

import Toast from './SingleToast';

import { Container } from './styles';

import { ToastMessage } from '../../providers/Toast';

interface ToastContainerProps {
  messages: ToastMessage[];
}

function ToastContainer({ messages }: ToastContainerProps): JSX.Element | null {
  const messagesWithTransitions = useTransition(messages, {
    from: { right: '-120%', opacity: 0 },
    enter: { right: '0', opacity: 1 },
    leave: { right: '-120%', opacity: 0 },
    keys: (message) => message.id,
  });

  if (!messages.length) return null;

  return (
    <Portal>
      <Container>
        {messagesWithTransitions((styles, item) => (
          <Toast styles={styles} message={item} />
        ))}
      </Container>
    </Portal>
  );
}

export default ToastContainer;
