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
  onBack: () => void;
  onContinue: () => void;
};

export default function ResetPasswordScreen({
  onBack,
  onContinue,
}: Props) {
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.content}>

        <Pressable onPress={onBack}>
          <Text style={styles.back}>‹</Text>
        </Pressable>

        <Text style={styles.title}>
          Сбросить пароль
        </Text>

        <Text style={styles.subtitle}>
          Не менее 8 символов, с прописными и
          {'\n'}строчными буквами
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Пароль"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TextInput
          style={styles.input}
          placeholder="Повторить пароль"
          secureTextEntry
          value={repeatPassword}
          onChangeText={setRepeatPassword}
        />

        <Pressable style={styles.button} onPress={onContinue}>
          <Text style={styles.buttonText}>
            Продолжить
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
    paddingTop: 20,
  },

  back: {
    fontSize: 34,
    marginBottom: 70,
  },

  title: {
    fontSize: 22,
    fontWeight: '700',
  },

  subtitle: {
    color: '#A0A0A0',
    fontSize: 13,
    lineHeight: 20,
    marginTop: 8,
    marginBottom: 25,
  },

  input: {
    height: 54,
    backgroundColor: '#F7F7F7',
    borderRadius: 14,
    paddingHorizontal: 18,
    marginBottom: 12,
  },

  button: {
    height: 52,
    backgroundColor: '#A900E8',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});