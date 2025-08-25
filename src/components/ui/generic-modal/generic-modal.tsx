import React from 'react';
import { Modal, Pressable, Text } from 'react-native';

import { styles } from './generic-modal.styles';

interface GenericModalProps {
  visible: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  animationType?: 'fade' | 'slide' | 'none';
}

export const GenericModal = ({
  visible,
  onClose,
  title,
  children,
  animationType = 'fade',
}: GenericModalProps) => {
  return (
    <Modal
      animationType={animationType}
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <Pressable style={styles.overlay} onPress={onClose}>
        <Pressable
          style={styles.modalView}
          onPress={(e) => e.stopPropagation()}>
          {title && <Text style={styles.modalTitle}>{title}</Text>}
          {children}
        </Pressable>
      </Pressable>
    </Modal>
  );
};
