import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';

type Props = {
  onBack: () => void;
  onContinue: () => void;
};

export default function RegisterFilledScreen({
  onBack,
  onContinue,
}: Props) {
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

        <View style={styles.info}>
          <Text style={styles.text}>👤  Руслан</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.text}>☎  +7 (700) 555 77 55</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.text}>🔒  ••••••••</Text>
        </View>

        <Pressable
          style={styles.button}
          onPress={onContinue}
        >
          <Text style={styles.buttonText}>
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
  },

  info: {
    height: 52,
    backgroundColor: '#F7F7F7',
    borderRadius: 14,
    justifyContent: 'center',
    paddingHorizontal: 18,
    marginBottom: 12,
  },

  text: {
    fontSize: 14,
  },

  button: {
    height: 52,
    backgroundColor: '#A900E8',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});