import React, { ChangeEvent } from "react";
import {
  Pagination,
  PaginationContainer,
  PaginationNext,
  PaginationPage,
  PaginationPageGroup,
  PaginationPrevious,
  PaginationSeparator,
  usePagination,
} from "@ajna/pagination";
import { Box, Select } from "@chakra-ui/react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/all";
import { useSearchParams } from "react-router-dom";

type PaginationPropsType = {
  total: number;
};

const Paginator: React.FC<PaginationPropsType> = ({ total }) => {
  const [searchParams, setSearchParams] = useSearchParams({
    page: "1",
    size: "10",
  });

  const currentPageFromQuery = parseInt(searchParams.get("page") as string);
  const pageSizeFromQuery = parseInt(searchParams.get("size") as string);

  const { setPageSize, setCurrentPage, pagesCount, pages } = usePagination({
    total,
    initialState: {
      currentPage: currentPageFromQuery,
      pageSize: pageSizeFromQuery,
    },
    limits: {
      outer: 1,
      inner: 1,
    },
  });

  const handlePageSizeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const pageSize = Number(event.target.value);
    setSearchParams({
      ...Object.fromEntries(searchParams),
      size: `${pageSize.toString()}`,
    });
    setPageSize(pageSize);
  };
  const handleCurrentPageChange = (page: number) => {
    setSearchParams({
      ...Object.fromEntries(searchParams),
      page: `${page.toString()}`,
    });
    setCurrentPage(page);
  };
  return (
    <Box>
      <Pagination
        pagesCount={pagesCount}
        currentPage={currentPageFromQuery}
        onPageChange={handleCurrentPageChange}
      >
        <PaginationContainer>
          <PaginationPrevious
            _hover={{
              bg: "blue.300",
            }}
            bg="none"
            pl={0}
          >
            <AiOutlineArrowLeft />
          </PaginationPrevious>
          <PaginationPageGroup
            separator={
              <PaginationSeparator
                isDisabled
                bg="purple.300"
                fontSize="sm"
                w={6}
              />
            }
          >
            {pages.map((page: number) => (
              <PaginationPage
                key={`pagination_page_${page}`}
                w={7}
                page={page}
                bg="none"
                _hover={{
                  bg: "blue.300",
                }}
                _current={{
                  bg: "purple.300",
                }}
              />
            ))}
          </PaginationPageGroup>
          <PaginationNext
            _hover={{
              bg: "blue.300",
            }}
            pr={0}
            bg="none"
          >
            <AiOutlineArrowRight />
          </PaginationNext>
        </PaginationContainer>
      </Pagination>
      <Select
        onChange={handlePageSizeChange}
        bg="#805ad5"
        borderColor="#805ad5"
        _hover={{ cursor: "pointer" }}
        w={40}
        mt={3}
        defaultValue={pageSizeFromQuery.toString()}
      >
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
      </Select>
    </Box>
  );
};

export default Paginator;
