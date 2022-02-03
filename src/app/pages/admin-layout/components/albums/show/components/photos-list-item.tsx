import React from "react";
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Td,
  Tr,
} from "@chakra-ui/react";
import { BsArrowDownShort } from "react-icons/all";

type PhotosListItemProps = {
  id: string;
  title: string;
  previewUrl: string;
};
const PhotosListItem: React.FC<PhotosListItemProps> = ({
  id,
  title,
  previewUrl,
}) => {
  return (
    <Tr>
      <Td>{id}</Td>
      <Td>{title}</Td>
      <Td>{previewUrl}</Td>
      <Td isNumeric>
        <Menu>
          <MenuButton
            as={Button}
            fontSize="11px"
            size="xs"
            colorScheme="purple"
            rightIcon={<BsArrowDownShort />}
          >
            Actions
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => {}}>Show</MenuItem>
          </MenuList>
        </Menu>
      </Td>
    </Tr>
  );
};

export default PhotosListItem;
