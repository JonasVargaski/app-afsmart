import React, { useRef, useState } from "react";
import { Keyboard, Alert } from "react-native";

import Background from "../../components/Background";
import {
  Container,
  Title,
  Form,
  Input,
  SubmitButton,
  TextButton,
} from "./styles";

import useAppContext from "../../store";

export default function SignInComponent() {
  const { signIn } = useAppContext();

  const passwordRef = useRef();

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit() {
    try {
      setLoading(true);
      Keyboard.dismiss();
      await signIn(email, password);
    } catch ({ message }) {
      Alert.alert("Erro ao efetuar autenticação!", message);
      setLoading(false);
    }
  }

  return (
    <Background>
      <Container>
        <Title>Autenticação</Title>
        <Form>
          <Input
            icon="public"
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="default"
            placeholder="Seu e-mail"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />

          <Input
            icon="lock-outline"
            autoCorrect={false}
            secureTextEntry
            autoCapitalize="none"
            placeholder="Sua senha"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />

          <SubmitButton loading={loading} onPress={handleSubmit}>
            <TextButton>Acessar</TextButton>
          </SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}
