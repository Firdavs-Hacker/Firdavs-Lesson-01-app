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

export default function RegisterScreen({
  onBack,
  onContinue,
}: Props) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.content}>

        <Pressable onPress={onBack}>
          <Text style={styles.back}>‹</Text>
        </Pressable>

        <Text style={styles.title}>
          Регистрация
        </Text>

        <Text style={styles.subtitle}>
          Создайте учетную запись,
          {'\n'}чтобы продолжить!
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Ваше имя"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          placeholder="Номер телефона"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />

        <TextInput
          style={styles.input}
          placeholder="Пароль"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Pressable
          style={styles.agreementRow}
          onPress={() => setChecked(!checked)}
        >
          <View style={[styles.checkbox, checked && styles.checked]}>
            {checked && <Text style={styles.check}>✓</Text>}
          </View>

          <Text style={styles.agreement}>
            Создавая учетную запись, вы соглашаетесь
            {'\n'}с нашими Условиями использования.
          </Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={onContinue}
        >
          <Text style={styles.buttonText}>
            Зарегистрироваться
          </Text>
        </Pressable>

        <Text style={styles.loginText}>
          Уже есть аккаунт?
        </Text>

        <Pressable onPress={onBack}>
          <Text style={styles.login}>
            Войти
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
    marginBottom: 35,
  },

  title: {
    fontSize: 24,
    fontWeight: '700',
  },

  subtitle: {
    color: '#A0A0A0',
    marginTop: 8,
    marginBottom: 20,
    lineHeight: 20,
  },

  input: {
    height: 52,
    backgroundColor: '#F7F7F7',
    borderRadius: 14,
    paddingHorizontal: 18,
    marginBottom: 12,
  },

  agreementRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 5,
  },

  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  checked: {
    backgroundColor: '#A900E8',
    borderColor: '#A900E8',
  },

  check: {
    color: '#FFFFFF',
    fontSize: 12,
  },

  agreement: {
    fontSize: 11,
    color: '#777777',
    flex: 1,
    lineHeight: 16,
  },

  button: {
    height: 52,
    backgroundColor: '#A900E8',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 22,
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },

  loginText: {
    textAlign: 'center',
    color: '#A0A0A0',
    marginTop: 18,
  },

  login: {
    textAlign: 'center',
    color: '#A900E8',
    fontWeight: '600',
    marginTop: 4,
  },
});