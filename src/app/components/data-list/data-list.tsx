import React from "react";
import { Table, Tbody, Th, Thead, Tr } from "@chakra-ui/react";

type DataListProps = {
  listHeaders: string[];
  children: React.ReactNode;
};

const DataList: React.FC<DataListProps> = ({ listHeaders, children }) => {
  return (
    <Table variant="striped" colorScheme="purple" size="sm" m={0}>
      <Thead>
        <Tr>
          {listHeaders.map((header, index) => (
            <Th key={index} backgroundColor="#805ad5" color="white">
              {header}
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>{children}</Tbody>
    </Table>
  );
};

export default DataList;
