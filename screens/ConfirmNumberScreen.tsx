import React from 'react';
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

export default function ConfirmNumberScreen({
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
          Подтвердить номер
        </Text>

        <Text style={styles.subtitle}>
          Мы только что отправили код на
          {'\n'}+7 (700) 555 77 55
        </Text>

        <View style={styles.codeRow}>
          <TextInput style={styles.code} maxLength={1} keyboardType="number-pad" />
          <TextInput style={styles.code} maxLength={1} keyboardType="number-pad" />
          <TextInput style={styles.code} maxLength={1} keyboardType="number-pad" />
          <TextInput style={styles.code} maxLength={1} keyboardType="number-pad" />
        </View>

        <Pressable style={styles.button} onPress={onContinue}>
          <Text style={styles.buttonText}>
            Продолжить
          </Text>
        </Pressable>

        <Text style={styles.resend}>
          Отправить код еще раз
        </Text>

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

  codeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  code: {
    width: 58,
    height: 55,
    backgroundColor: '#F7F7F7',
    borderRadius: 14,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
  },

  button: {
    height: 52,
    backgroundColor: '#A900E8',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },

  resend: {
    textAlign: 'center',
    color: '#A0A0A0',
    marginTop: 18,
  },
});