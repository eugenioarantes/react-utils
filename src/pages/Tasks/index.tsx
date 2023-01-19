import { useSearchParams } from 'react-router-dom';
import { Row } from '../../components/Containers';

function Tasks(): JSX.Element {
  const [searchParams] = useSearchParams();

  const queryTab = searchParams.get('tab');

  return (
    <Row>
      <h1>Tasks page {queryTab}</h1>
    </Row>
  );
}

export default Tasks;
