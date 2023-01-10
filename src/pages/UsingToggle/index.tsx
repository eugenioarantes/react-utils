import { useToggle } from "../../hooks/toggle";
import { Container, ResultShow, Row } from "./styles";

const UsingToggle: React.FC = () => {

  const { isOn, turnOff, turnOn, toggle } = useToggle();
  
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
        </ResultShow>
      )}
    </Container>
  );
};

export default UsingToggle;