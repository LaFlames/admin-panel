import React, { ChangeEvent } from "react";
import {
  Pagination,
  PaginationContainer,
  PaginationNext,
  PaginationPage,
  PaginationPageGroup,
  PaginationPrevious,
  PaginationSeparator,
} from "@ajna/pagination";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/all";
import { Box, Select } from "@chakra-ui/react";

type PaginationPropsType = {
  pagesCount: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  setPageSize: (event: ChangeEvent<HTMLSelectElement>) => void;
  pages: number[];
  pageSize: number;
};

const Paginator = ({
  pages,
  pagesCount,
  pageSize,
  currentPage,
  setCurrentPage,
  setPageSize,
}: PaginationPropsType) => {
  return (
    <Box>
      <Pagination
        pagesCount={pagesCount}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
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
        onChange={setPageSize}
        bg="#805ad5"
        borderColor="#805ad5"
        _hover={{ cursor: "pointer" }}
        w={40}
        mt={3}
        defaultValue={pageSize.toString()}
      >
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
      </Select>
    </Box>
  );
};

export default Paginator;
