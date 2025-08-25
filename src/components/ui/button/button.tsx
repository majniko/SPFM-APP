import React from 'react';
import { Pressable, Text, ViewStyle } from 'react-native';

import { styles } from './button.styles';

type ButtonProps = {
  title?: string;
  onPress?: () => void;
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'icon';
  disabled?: boolean;
};

export const Button = ({
  title,
  onPress,
  children,
  variant = 'primary',
  disabled = false,
}: ButtonProps) => {
  const getButtonStyles = () => {
    const style: ViewStyle[] = [styles.button];
    if (variant === 'secondary') {
      style.push(styles.secondaryButton);
    }
    if (variant === 'icon') {
      style.push(styles.iconButton);
    }
    if (disabled) {
      style.push({ opacity: 0.5 });
    }
    return style;
  };

  return (
    <Pressable style={getButtonStyles()} onPress={onPress} disabled={disabled}>
      {children ? children : <Text style={styles.buttonText}>{title}</Text>}
    </Pressable>
  );
};
