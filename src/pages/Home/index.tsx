import { useState } from "react";
import { BlockColor, Button, Container, Switch } from "./styles";

const Home: React.FC = () => {
  const [status, setStatus] = useState('');
  return (
    <Container>
      <Switch>
        <BlockColor $status={status} />
        <Button
          onClick={() => setStatus('No')}
          $isSelected={status === 'No'}
          $status={status}
        >
          <span>No</span>
        </Button>

        <Button
          onClick={() => setStatus('Yes')}
          $isSelected={status === 'Yes'}
          $status={status}
        >
          <span>Yes</span>
        </Button>
      </Switch>
    </Container>
  );
};

export default Home;