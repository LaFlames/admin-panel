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
  handleShowPhotoPage: (id: string) => void;
};
const PhotosListItem: React.FC<PhotosListItemProps> = ({
  id,
  title,
  previewUrl,
  handleShowPhotoPage,
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
            {/*<MenuItem onClick={() => handleShowEditAlbumPage(id as string)}>
                            Edit
                        </MenuItem>
                        <MenuItem onClick={onOpen}>Delete</MenuItem>*/}
          </MenuList>
        </Menu>
        {/*<MyModal
                    header="Delete album"
                    description="Do you want to delete this album?"
                    isOpen={isOpen}
                    onClose={onClose}
                    onSubmit={deleteAlbumCallback}
                />*/}
      </Td>
    </Tr>
  );
};

export default PhotosListItem;
