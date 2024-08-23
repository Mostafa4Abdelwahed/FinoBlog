import ReactPaginate from "react-paginate";

const Pagination = ({ page, totalPages }) => {
  const handleClick = (data) => {
    page(data.selected + 1);
  };

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel="التالي"
        onPageChange={handleClick}
        marginPagesDisplayed={3}
        pageRangeDisplayed={3}
        pageCount={totalPages}
        previousLabel="السابق"
        renderOnZeroPageCount={null}
        containerClassName="flex items-center justify-center gap-x-4 my-14"
        pageLinkClassName="w-10 h-10 text-gray-500 bg-white p-2 inline-flex items-center justify-center border border-gray-200 rounded-full transition-all duration-150 hover:text-main hover:border-main"
        nextLinkClassName="bg-main hover:bg-main/60 text-white px-7 py-2 rounded inline-flex items-center md:mr-8 mr-1"
        previousLinkClassName="bg-main hover:bg-main/60 text-white px-7 py-2 rounded inline-flex items-center md:mr-8 mr-1"
        breakLinkClassName="w-10 h-10 text-gray-500 bg-white p-2 inline-flex items-center justify-center border border-gray-200 rounded-full transition-all duration-150 hover:text-main hover:border-main"
        activeClassName="bg-main text-white p-1.5 rounded-full"
      />

    </>
  );
};

export default Pagination;
