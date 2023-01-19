import { Column, Row } from '../../components/Containers';

function Home(): JSX.Element {
  return (
    <Column>
      <Row gap={50}>
        <h1>Home</h1>
        <h1>My initial page</h1>
      </Row>

      <Row gap={50}>
        <h1>Other phrase</h1>
      </Row>
    </Column>
  );
}

export default Home;
