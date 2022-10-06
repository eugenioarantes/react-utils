import { useAuth } from "../../providers/Auth";
import { useToast } from "../../providers/Toast";
import { Container } from "./styles";

const Home: React.FC = () => {
  const { addToast } = useToast();
  const { signOut } = useAuth();

  return (
    <Container>
      <h1>Home</h1>
      <button onClick={signOut}>sign out</button>
    </Container>
  );
};

export default Home;