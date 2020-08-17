import React from "react";
import {
    Pagination,
    PaginationItem,
    PaginationLink
} from "reactstrap";
import { PAGE_SIZE } from "../../constants/globalConstants";

const PaginationList = (props) => {
    const { setCurrentPage, total, totalPages, currentPage } = props;

    if (total <= PAGE_SIZE)
        return null;

    const getPages = () => {
        const pages = [];
        for (let page = 1; page <= 2; page++) {
            pages.push(
                <PaginationItem
                    key={page}
                    active={currentPage === page}
                    onClick={() => setCurrentPage(page)}
                >
                    <PaginationLink>{page}</PaginationLink>
                </PaginationItem>
            );

        }
        return pages;
    }

    return (
        <Pagination
            style={{
                justifyContent: "center"
            }}
        >
            <PaginationItem onClick={() => setCurrentPage(1)}>
                <PaginationLink first />
            </PaginationItem>
            <PaginationItem onClick={() => setCurrentPage(currentPage - 1)}>
                <PaginationLink previous />
            </PaginationItem>
            {getPages()}
            <PaginationItem onClick={() => setCurrentPage(currentPage + 1)}>
                <PaginationLink next />
            </PaginationItem>
            <PaginationItem onClick={() => setCurrentPage(totalPages)}>
                <PaginationLink last />
            </PaginationItem>
        </Pagination>
    )
}

export default PaginationList;