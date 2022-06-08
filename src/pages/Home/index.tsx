import { useState } from "react";
import Paginator from "../../components/Paginator";
import { REGISTERS } from "../../utils/fakeRegisters";
import SingleRegister from "./SingleRegister";
import { RegistersList } from "./styles";

export interface Register {
  id: number;
  name: string;
  date: string;
}

const Home: React.FC = () => {
  const [page, setPage] = useState(1);

  return (
    <Paginator
      totalCountOfRegisters={REGISTERS.length}
      registersPerPage={5}
      currentPage={page}
      onPageChange={setPage}
      items={REGISTERS}
    >
      {(displayRegisters) => (
        <RegistersList>
          {displayRegisters.map((register) => (
            <SingleRegister key={register.id} register={register} />
          ))}
        </RegistersList>   
      )}
    </Paginator>
  );
};

export default Home;