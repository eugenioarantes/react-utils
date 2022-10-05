import { downloadCsv, transformListInCsv } from "./csv";
import { Container } from "./styles";

const users = [
  {
    id: 1,
    firstname: 'Fulano',
    lastname: 'de tal',
    street: 'rua 1',
    city: 'Belo Horizonte',
    state: 'MG',
  },
  {
    id: 2,
    firstname: 'Ciclano',
    lastname: 'de tal',
    street: 'rua 2',
    city: 'São Paulo',
    state: 'SP',
  },
]

const Home: React.FC = () => {
  const handleExportData = () => {
    const dataHeader = [
      'id',
      'firstname',
      'lastname',
      'street',
      'city',
      'state',
    ];

    const csv = transformListInCsv(dataHeader, users);

    downloadCsv(csv, 'users');
  };

  return (
    <Container>
      <button onClick={handleExportData}>Export CSV</button>
    </Container>
  );
};

export default Home;