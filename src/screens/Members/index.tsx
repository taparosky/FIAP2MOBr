import React from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {MemberCard} from '@components';
import {styles} from './styles';
import { themeSchema } from "@utils";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {LoggedStackParams} from '../../routes/stacks/Logged.routes';
import { coordinator } from '@routes';


export interface Member {
    id: string;
    name: string;
    photo: string;
    description: string;
    github: string;
    linkedin: string;
  }

const members: Member[] = [
    { id: '1', name: 'Vinícius Taparosky', photo: 'https://avatars.githubusercontent.com/u/55306962?v=4', description: 'Formado em Análise e Desenvolvimento de Sistemas e cursando MBA em Desenvolvimento Mobile na FIAP. Iniciou na área de tecnologia na empresa americana Hyland como Solutions Consultant e atualmente trabalha no Google como Technical Consultant. Gosta muito de futebol, viajar e passar tempo com a família.', github: 'https://github.com/taparosky', linkedin: 'https://linkedin.com/in/vinicius-taparosky' },
    { id: '2', name: 'Maria Fernanda Balassoni', photo: 'https://avatars.githubusercontent.com/u/33336355?v=4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', github: 'https://github.com/nandabalassoni', linkedin: 'https://www.linkedin.com/in/mariafbalassoni/' },
    { id: '3', name: 'Bruno dos Santos Silva', photo: 'https://avatars.githubusercontent.com/u/22402071?v=4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', github: 'https://github.com/bruno94silva', linkedin: 'https://linkedin.com/in/member3' }
    
];

type MemberDetailsNavigationProp = NativeStackNavigationProp<LoggedStackParams,'MemberDetails'>;

export function Members(){

    const style = styles(themeSchema().theme);

    const navigation = useNavigation<MemberDetailsNavigationProp>();

    const {goToMemberDetails} = coordinator;

    const handlePress = (member: Member) => {
        goToMemberDetails(navigation,member);
    };


    return(
        <View style={style.container}>
            <FlatList
                data={members}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handlePress(item)}>
                        <MemberCard name={item.name} source={item.photo}/>
                    </TouchableOpacity>
                    
                )}
            />
        </View>
        

    );
}