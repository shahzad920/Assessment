
import { Button, Text, TextInput, TrainingView} from '@components';
import {Colors, Images} from '../../config';
import { AuthProps } from '.';

export const Forgot = (props:AuthProps<"Forgot"> ) => {
  return (
    <TrainingView headerTitle="Forget Password" separation={45} source={Images.icAbout}>
      <Text margin={{Top:18}} size="H4" font='SemiBold'>
        Forgot Password?
      </Text>
      <Text margin={{Top:24,Bottom:20}} color="outline" font='Medium' >
        Enter the email address associated with your account. with your account
      </Text>
      <TextInput label='Email' LeftIcon={{name: 'message'}}/>
      <Button label='Save' onPress={()=>props.navigation.pop()} />
    </TrainingView>
  );
};