import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Separator } from "../Separator";
import {stylesWithTheme} from './styles';
import { themeSchema } from "@utils";

type MemberCardProps = {
    name: string,
    source: string
};

export const MemberCard = (props:MemberCardProps) => {
    const styles = stylesWithTheme(themeSchema().theme);
    return (
    <View style={styles.container}>
        <Image
            source={{
                uri: props.source,
            }}
            style={styles.image}
        />
        <Separator size={10}/>
        <Text style={styles.name}>{props.name}</Text>
        <Separator size={14}/>
    </View>
    );

};
