import {StyleSheet} from 'react-native';

import {type themeType} from '@utils';

export const stylesWithTheme = (theme: themeType) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      padding:10
    },
    image: {
      width: 150,
      height: 150,
      borderRadius: 80,
    },
    name: {
      fontFamily: 'Roboto-Medium',
      fontSize: 18,
      color: theme.colors.text
    }
  });
