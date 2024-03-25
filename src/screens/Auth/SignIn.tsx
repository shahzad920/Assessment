import React from 'react';
import { Block, Text, Button, TextInput, useAuth, Form } from '@components';
import { AuthProps } from '.';
export const SignIn = (props: AuthProps<"SignIn">) => {
  const { logIn } = useAuth()
  return (
    <Form onSubmit={() => new Promise(resolve => setTimeout(()=>{
      logIn({isLoggedIn:true})
      resolve(1)
      }, 2000))}>
      {({ register, submit,loading }) => (
        <Block flex margin={{ Bottom: 80, Horizontal: 16 }} align="bottom">
          <Block >
            <Text margin={{ Top: 18 }} size="H1" font="SemiBold">
              Welcome
            </Text>
            <Text lineHeight={35} color="primary" font="Medium">
              Login to continue using your account
            </Text>
            <TextInput {...register({ id: "email", next: "password" })} label="Email" type="Email" leftIcon='message' />
            <TextInput {...register({ id: "password" })} label="Password" type="Password" leftIcon='message' />
            <Text
              lineHeight={50}
              font="SemiBold"
              onPress={() => props.navigation.navigate("Forgot")}
              align="right">
              Forgot Password
            </Text>
            <Button label="Sign In" loading={loading} onPress={submit} />
            <Text lineHeight={48} font="SemiBold" align="center">
              Social Login
            </Text>
            <Text
              align="center"
              onPress={() => props.navigation.navigate("SignUp")}
              margin={{ Top: 0 }}>
              Don’t have an account?{' '}
              <Text font="SemiBold" color="primary">
                Create One
              </Text>
            </Text>
          </Block>
        </Block>
      )}
    </Form>
  );
};
