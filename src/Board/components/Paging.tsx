import { useState } from "react";
import Pagination from "react-js-pagination";
import "./Paging.css";

function Paging({ page, count, setPage, postPerPage }: any) {
    const handlePageChange = (page: any) => {
        setPage(page);
    };

    return (
        <Pagination
            // 현재 페이지
            activePage={page}
            // 한페이지당 개수
            itemsCountPerPage={postPerPage}
            // 총합 페이지수
            totalItemsCount={count}
            // 페이지 네이션 개수
            pageRangeDisplayed={5}
            prevPageText={"‹"}
            nextPageText={"›"}
            // 페이지 변경 함수
            onChange={handlePageChange}
        />
    );
}

export default Paging;
