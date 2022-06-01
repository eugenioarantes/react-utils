import PaginationItem from "./PaginationItem";
import { Button } from "./styles";

interface PaginatorProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
};

const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
  .map((_, index) => {
    return from + index + 1;
  }).filter(page => page > 0);
}

const Paginator: React.FC<PaginatorProps> = ({
  totalCountOfRegisters,
  registersPerPage = 5,
  currentPage = 1,
  onPageChange,
}) => {
  const lastPage = Math.floor(totalCountOfRegisters / registersPerPage);

  const previousPages = currentPage > 1
    ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
    : [];

  const nextPages = currentPage < lastPage
    ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
    : [];

  const backPage = () => {
    if(currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }

  const upPage = () => {
    if(currentPage < Math.ceil(totalCountOfRegisters / registersPerPage)) {
      onPageChange(currentPage + 1)
    }
  }

  return (
    <div>
      <span>
        <strong>{registersPerPage * currentPage - registersPerPage + 1}</strong>
        {` - `}
        <strong>{registersPerPage * currentPage}</strong>
        {` de `}
        <strong>{totalCountOfRegisters}</strong>
      </span>

      <div>
        <Button onClick={backPage}>
          &lt;
        </Button>
        
        {currentPage > (1 + siblingsCount) && (
          <>
            <PaginationItem onPageChange={onPageChange} number={1} />
            {(currentPage > (3 + siblingsCount)) && (
              <span>...</span>
            )}
            {((currentPage - (siblingsCount + 1)) === 2) && (
              <PaginationItem onPageChange={onPageChange} number={2} />
            )}
          </>
        )}

        {previousPages.length > 0 && previousPages.map(page => {
          return <PaginationItem onPageChange={onPageChange} key={page} number={page} />
        })}

        <PaginationItem onPageChange={onPageChange} number={currentPage} isCurrent />

        {nextPages.length > 0 && nextPages.map(page => {
          return <PaginationItem onPageChange={onPageChange} key={page} number={page} />
        })}

        {currentPage + siblingsCount < lastPage && (
          <>
            {((currentPage + 2 + siblingsCount) < lastPage) && (
              <span>...</span>
            )}
            {((lastPage - (currentPage + siblingsCount)) === 2) && (
              <PaginationItem onPageChange={onPageChange} number={lastPage - 1} />
            )}
            <PaginationItem onPageChange={onPageChange} number={lastPage} />
          </>
        )}

        <Button onClick={upPage}>
          &gt;
        </Button>
      </div>
    </div>
  );
};

export default Paginator;