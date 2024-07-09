import {StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 16,
    },
    image: {
      width: 200,
      height: 200,
      borderRadius: 100,
    },
    name: {
      fontSize: 24,
      fontWeight: 'bold',
      marginVertical: 16,
      fontFamily: 'Roboto-regular',
    },
    description: {
      fontSize: 16,
      textAlign: 'center',
      marginBottom: 16,
      fontFamily: 'Roboto-regular',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 16,
        width: '50%',
      },
  });
  