import { useToggle } from "../../hooks/toggle";
import { useToast } from "../../providers/Toast";
import { Container, ResultShow, Row } from "./styles";

const UsingToggle: React.FC = () => {

  const { isOn, turnOff, turnOn, toggle } = useToggle();

  const { addToast } = useToast();
  
  return (
    <Container>
      <Row>
        <button onClick={turnOn}>Turn ON</button>
        <button onClick={turnOff}>Turn OFF</button>
        <button onClick={toggle}>Toggle</button>
      </Row>

      {isOn && (
        <ResultShow>
          IS ON
          {addToast({title: 'Is On', type: 'success'})}
        </ResultShow>
      )}
    </Container>
  );
};

export default UsingToggle;