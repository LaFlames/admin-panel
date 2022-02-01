import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { SubmitButton } from "../index";

type ModalProps = {
  header: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
};

const MyModal: React.FC<ModalProps> = ({
  header,
  description,
  isOpen,
  onClose,
  onSubmit,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{header}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{description}</ModalBody>
        <ModalFooter>
          <SubmitButton colorScheme="teal" mr={3} onClick={onSubmit}>
            Yes
          </SubmitButton>
          <SubmitButton colorScheme="red" onClick={onClose}>
            Close
          </SubmitButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default MyModal;
