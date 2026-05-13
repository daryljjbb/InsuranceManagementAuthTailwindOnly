import Button from "./Button";

const Pagination = ({
  currentPage,
  nextPage,
  previousPage,
  onPageChange,
}) => {

  return (
    <div className="flex justify-center gap-4 mt-6">

      <Button
        variant="warning"
        onClick={() =>
          onPageChange(currentPage - 1)
        }
        disabled={!previousPage}
        className={
          !previousPage
            ? "opacity-50 cursor-not-allowed"
            : ""
        }
      >
        Previous
      </Button>

      <div className="flex items-center font-semibold">
        Page {currentPage}
      </div>

      <Button
        variant="primary"
        onClick={() =>
          onPageChange(currentPage + 1)
        }
        disabled={!nextPage}
        className={
          !nextPage
            ? "opacity-50 cursor-not-allowed"
            : ""
        }
      >
        Next
      </Button>

    </div>
  );
};

export default Pagination;