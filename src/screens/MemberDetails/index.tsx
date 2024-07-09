// screens/MemberDetailScreen.tsx
import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParams } from '@routes';
import { Linking } from 'react-native';
import { LoggedStackParams } from 'src/routes/stacks/Logged.routes';
import { styles } from './styles';
import { CustomButton } from '@components';

type MemberDetailScreenRouteProp = RouteProp<LoggedStackParams, 'MemberDetails'>;

type Props = {
  route: MemberDetailScreenRouteProp;
};

export default function MemberDetails({ route }: Props) {
  const { member } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: member.photo }} style={styles.image} />
      <Text style={styles.name}>{member.name}</Text>
      <Text style={styles.description}>{member.description}</Text>
      <View style={styles.buttonContainer}>
      <CustomButton
          logo={require('../../assets/Images/Logos/Github.png')}
          text="Github"
          url={member.github}
          color="#333"
        />
        <CustomButton
          logo={require('../../assets/Images/Logos/LinkedIn.png')}
          text="LinkedIn"
          url={member.linkedin}
          color="#0077B5"
        />
      </View>
      
    </View>
  );
}
