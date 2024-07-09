// components/CustomButton.tsx
import React from 'react';
import { TouchableOpacity, Image, Text, Linking } from 'react-native';
import { styles } from './styles';

type CustomButtonProps = {
  logo: any;
  text: string;
  url: string;
  color: string;
};

export const CustomButton: React.FC<CustomButtonProps> = ({ logo, text, url, color }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={() => Linking.openURL(url)}
    >
      <Image source={logo} style={styles.logo} />
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};


