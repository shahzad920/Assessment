import React from 'react';
import { Block, Content, Text, Button, TextInput, Form } from '@components';

export const _Blank = () => {
    return (
        <Block flex>
            <Content padder>
                <Text margin={{ Top: 18 }} size="H1" font="SemiBold">
                    Content type
                </Text>
                <Text lineHeight={35} color="primary" font="Medium">
                    Choose a content type that best fits your needs.
                </Text>
                <Form onSubmit={() => new Promise(resolve => { })}>
                    {({ register, submit, loading }) => (
                        <Block flex >

                            <TextInput {...register({ id: "email", next: "password" })} label="Email" type="Email" leftIcon='message' />
                            <TextInput {...register({ id: "password" })} label="Password" type="Password" leftIcon='message' />
                            <Text
                                lineHeight={50}
                                font="SemiBold"
                                onPress={() => { }}
                                align="right">
                                Forgot Password
                            </Text>
                            <Button label="Sign In" loading={loading} onPress={submit} />
                            <Text lineHeight={48} font="SemiBold" align="center">
                                Social Login
                            </Text>
                            <Text
                                align="center"
                                onPress={() => { }}
                                margin={{ Top: 0 }}>
                                Don’t have an account?{' '}
                                <Text font="SemiBold" color="primary">
                                    Create One
                                </Text>
                            </Text>

                        </Block>
                    )}
                </Form>
            </Content>
        </Block>
    );
};