import React from 'react';
import { Pressable, Text, ViewStyle } from 'react-native';

import { styles } from './button.styles';

type ButtonProps = {
  title?: string;
  onPress?: () => void;
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'icon';
};

export const Button = ({
  title,
  onPress,
  children,
  variant = 'primary',
}: ButtonProps) => {
  const getButtonStyles = () => {
    const style: ViewStyle[] = [styles.button];
    if (variant === 'secondary') {
      style.push(styles.secondaryButton);
    }
    if (variant === 'icon') {
      style.push(styles.iconButton);
    }
    return style;
  };

  return (
    <Pressable style={getButtonStyles()} onPress={onPress}>
      {children ? children : <Text style={styles.buttonText}>{title}</Text>}
    </Pressable>
  );
};
