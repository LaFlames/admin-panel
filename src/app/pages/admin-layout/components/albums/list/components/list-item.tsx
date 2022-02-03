import React from "react";
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Td,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { BsArrowDownShort } from "react-icons/all";
import { Link } from "react-router-dom";
import { MyModal } from "../../../../../../components";

type AlbumListItemProps = {
  id: string;
  title: string;
  userName: string;
  numberOfPhotos: number;
  handleDeleteAlbum: (id: string) => void;
};
const ListItem: React.FC<AlbumListItemProps> = ({
  id,
  title,
  userName,
  numberOfPhotos,
  handleDeleteAlbum,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const deleteAlbumCallback = () => {
    handleDeleteAlbum(id as string);
    onClose();
  };

  return (
    <Tr>
      <Td>{id}</Td>
      <Td>{title}</Td>
      <Td>{userName}</Td>
      <Td>{numberOfPhotos}</Td>
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
            <MenuItem as={Link} to={`./${id}`}>
              Show
            </MenuItem>
            <MenuItem as={Link} to={`./${id}/edit`}>
              Edit
            </MenuItem>
            <MenuItem onClick={onOpen}>Delete</MenuItem>
          </MenuList>
        </Menu>
        <MyModal
          header="Delete album"
          description="Do you want to delete this album?"
          isOpen={isOpen}
          onClose={onClose}
          onSubmit={deleteAlbumCallback}
        />
      </Td>
    </Tr>
  );
};

export default ListItem;
