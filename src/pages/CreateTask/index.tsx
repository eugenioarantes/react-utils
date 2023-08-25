import { useCallback, useMemo } from 'react';

import { useToast } from '../../providers/Toast';
import { useFormControl } from '../../hooks/formControl';
import Select from '../../components/Select';
import { InputWithLabel } from '../../components/Inputs';
import { Column } from '../../components/Containers';
import { Button } from '../../components/Buttons';
import { MESSAGES } from './utils';
import { projectsMock } from './projectMock';
import { useToggle } from '../../hooks/toggle';

type Languages = { label: string; id: 'en' | 'pt' | 'es' };

export interface CodingProjectCreationProps {
  name: string;
  client: string;
  language: 'en' | 'pt' | 'es';
}

export const languages: Languages[] = [
  { label: 'Portuguese', id: 'pt' },
  { label: 'English', id: 'en' },
  { label: 'Spanish', id: 'es' },
];

const defaultValues: CodingProjectCreationProps = {
  name: '',
  client: '',
  language: '' as 'en' | 'pt' | 'es',
};

function CreateTask(): JSX.Element {
  const { state, dispatch, handleChange, resetDefault } = useFormControl(defaultValues);

  const { isOn, turnOn, turnOff } = useToggle();

  const { addToast } = useToast();

  const uniqueClients = useMemo(() => {
    const projectList = Object.values(projectsMock);

    const clients = Array.from(
      new Set(projectList.map(({ client, clientName }) => `${client}#${clientName}`)),
    );

    return clients.map((clientId) => {
      const [id, clientName] = clientId.split('#');
      return {
        clientName,
        client: id,
      };
    }) as { clientName: string; client: string }[];
  }, []);

  const saveProject = useCallback(async () => {
    turnOn();

    const created = await new Promise((resolve) => {
      setTimeout(() => {
        const projectCreated = {
          path: '/projects',
          payload: {
            ...state,
          },
        };
        resolve(projectCreated);
      }, 2000);
    });

    turnOff();

    if (!created) return;

    addToast(MESSAGES.createSuccess);

    resetDefault();
  }, [state, resetDefault, addToast, turnOn, turnOff]);

  return (
    <Column>
      <InputWithLabel
        id="name"
        value={state.name}
        handleChange={handleChange}
        label="Task Name"
        placeholder="Type a task name here."
      />

      <Select
        id="client"
        options={uniqueClients}
        value={state.client}
        onChange={(client) => dispatch({ client })}
        label="Client"
        labelPosition="top"
        placeholder="Select a Client"
        propConfig={{
          label: 'clientName',
          unique: 'client',
        }}
      />

      <Select
        id="language"
        options={languages}
        value={state.language}
        onChange={(value) => dispatch({ language: value as 'en' | 'es' | 'pt' })}
        label="Language"
        labelPosition="top"
        placeholder="Select the language"
        propConfig={{
          label: 'label',
          unique: 'id',
        }}
      />

      <div style={{ width: '50%', margin: '0 auto', display: 'flex', justifyContent: 'center' }}>
        <Button variant="contained" disabled={isOn} onClick={saveProject} fullWidth>
          Create
        </Button>
      </div>
    </Column>
  );
}

export default CreateTask;
