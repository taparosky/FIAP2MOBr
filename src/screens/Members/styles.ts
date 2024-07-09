import { StyleSheet } from "react-native";

import {type themeType} from '@utils';

export const styles = (theme: themeType) => StyleSheet.create ({
    container: {
        backgroundColor: theme.colors.primary,
        padding:60
    }
})