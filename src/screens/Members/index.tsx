import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {Images} from '@assets';
import {Separator, MemberCard} from '@components';
import {styles} from './styles';
import { themeSchema } from "@utils";

export function Members(){
    const style = styles(themeSchema().theme);
    return(
        <View style={style.container}>
            <MemberCard name='Vinicius Taparosky' 
            source='https://avatars.githubusercontent.com/u/55306962?s=400&u=d26bdc5ab346fa402a28e73fb5b4df542deaa519&v=4'/>
            <Separator size={14}/>
            <MemberCard name='Vinicius Taparosky' 
            source='https://avatars.githubusercontent.com/u/55306962?s=400&u=d26bdc5ab346fa402a28e73fb5b4df542deaa519&v=4'/>
            <Separator size={14}/>
            <MemberCard name='Vinicius Taparosky' 
            source='https://avatars.githubusercontent.com/u/55306962?s=400&u=d26bdc5ab346fa402a28e73fb5b4df542deaa519&v=4'/>
        </View>
        

    );
}