import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  View,
} from 'react-native';

type Props = {
  onForgot: () => void;
  onRegister: () => void;
};

export default function LoginScreen({ onForgot, onRegister }: Props) {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.content}>

        <Text style={styles.title}>
          Привет, с возвращением!
        </Text>

        <Text style={styles.subtitle}>
          Войдите в свой аккаунт.
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Номер телефона"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />

        <TextInput
          style={styles.input}
          placeholder="Пароль"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Pressable onPress={onForgot}>
          <Text style={styles.forgot}>
            Забыли пароль?
          </Text>
        </Pressable>

        <Pressable
  style={styles.button}
  onPress={() => {
    console.log('Войти батырмасы басылды');
  }}
>
          <Text style={styles.buttonText}>
            Войти
          </Text>
        </Pressable>

        <Text style={styles.accountText}>
          У вас нет аккаунта?
        </Text>

        <Pressable onPress={onRegister}>
          <Text style={styles.register}>
            Зарегистрироваться
          </Text>
        </Pressable>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  content: {
    paddingHorizontal: 24,
    paddingTop: 90,
  },

  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#171717',
  },

  subtitle: {
    marginTop: 8,
    fontSize: 14,
    color: '#A0A0A0',
    marginBottom: 28,
  },

  input: {
    height: 54,
    backgroundColor: '#F7F7F7',
    borderRadius: 14,
    paddingHorizontal: 18,
    marginBottom: 12,
    fontSize: 14,
  },

  forgot: {
    textAlign: 'right',
    color: '#A800E8',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 20,
  },

  button: {
    height: 52,
    backgroundColor: '#A900E8',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },

  accountText: {
    textAlign: 'center',
    color: '#A0A0A0',
    marginTop: 28,
  },

  register: {
    textAlign: 'center',
    color: '#A800E8',
    fontWeight: '600',
    marginTop: 5,
  },
});