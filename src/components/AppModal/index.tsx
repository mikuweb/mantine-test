import { Modal, ModalProps } from "@mantine/core";
import { FC, ReactNode } from "react";

type Props = ModalProps & {
  opened: boolean;
  title: string;
  children: ReactNode;
};

export const AppModal: FC<Props> = ({
  opened,
  children,
  title,
  onClose,
  ...rest
}) => {
  return (
    <Modal opened={opened} onClose={onClose} title={title} {...rest}>
      {children}
    </Modal>
  );
};
