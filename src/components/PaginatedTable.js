import React, { useEffect, useState } from 'react';  
import ReactPaginate from 'react-paginate';  

const PaginatedItems = ({ itemsPerPage, data, columns }) =>{  
  // We start with an empty list of elements.  
    const [currentItems, setCurrentItems] = useState([]);  
    const [pageCount, setPageCount] = useState(0);  
    const [itemOffset, setItemOffset] = useState(0);  

    // elementOffsets; we also use as page scrolls  
    // API we are working with.  
  
    useEffect(() => {    // Get the items of other resources.  
    const endOffset = itemOffset + itemsPerPage;  
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);  
    setCurrentItems(data.slice(itemOffset, endOffset));  
    setPageCount(Math.ceil(data.length / itemsPerPage));  
  }, [itemOffset, itemsPerPage,data]);  
  
  // Call user clicks to request another page.  
  const handlePageClick = (event) => {  
    const newOffset = (event.selected * itemsPerPage) % data.length;  
    console.log(  
      `User requested page number ${event.selected}, offset by ${newOffset}`  
    );  
    setItemOffset(newOffset);  
  };  
  return (  
    <>  
      {/* <articles current articles={currentarticles} />   */}
      
      <ReactPaginate  
        breakLabel="..."  
        nextLabel="next >"  
        onPageChange={handlePageClick}  
        Displayed Page Range = {5}  
        pageCount={pageCount}  
        previousLabel="< previous"  
        renderOnZeroPageCount={null}
        containerClassName='paginationl'
        pageClassName='pagesl'
        previousLinkClassName='previousl'
        nextLinkClassName='nextl'
        activeLinkClassName='activel'
      />  
    </>  
  );  
}  

export default PaginatedItems;