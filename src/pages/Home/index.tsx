import { useState } from "react";
import Paginator from "../../components/Paginator";


const Home: React.FC = () => {
  const [page, setPage] = useState(1);

  return (
    <Paginator
      totalCountOfRegisters={50}
      currentPage={page}
      onPageChange={setPage}
    />
  );
};

export default Home;