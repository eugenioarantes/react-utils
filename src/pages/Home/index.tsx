import { useState } from "react";
import { Pagination } from "../../components/Pagination";

const Home: React.FC = () => {
  const [page, setPage] = useState(1);
  const totalCount = 100;

  return (
    <Pagination
    totalCountOfRegisters={totalCount}
    currentPage={page}
    onPageChange={setPage}
  />
  );
};

export default Home;