import {navigation} from './navigation';
import {AuthStackScreenNames} from '../stacks/AuthStack.routes';
import {LoggedStackParams, LoggedStackScreenNames} from '../stacks/Logged.routes';
import { Member } from '@screens';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const AuthCoordinator = {
  goToSignIn: () => navigation.push(AuthStackScreenNames.SignIn),
};

type MemberDetailsNavigationProp = NativeStackNavigationProp<LoggedStackParams,'MemberDetails'>;

const LoggedCoordinator = {
  goToNews: () => navigation.push(LoggedStackScreenNames.News),
  goToMaps: () => navigation.push(LoggedStackScreenNames.Maps),
  goToMembers: () => navigation.push(LoggedStackScreenNames.Members),
  goToMemberDetails: (navigation: MemberDetailsNavigationProp, member: Member) => navigation.navigate(LoggedStackScreenNames.MemberDetails, {member})
};

export const coordinator = {
  goBack: () => navigation.goBack(),
  ...AuthCoordinator,
  ...LoggedCoordinator,
};
