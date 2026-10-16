import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';

type Props = {
  onProfile: () => void;
  onSettings: () => void;
};

export default function HomeScreen({
  onProfile,
  onSettings,
}: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <Text style={styles.title}>Главная</Text>

        <Text style={styles.welcome}>
          Добро пожаловать! 👋
        </Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            Ваш аккаунт
          </Text>

          <Text style={styles.cardText}>
            Вы успешно зарегистрировались.
            {'\n'}
            Теперь вы можете пользоваться приложением.
          </Text>
        </View>

        <Pressable
          style={styles.button}
          onPress={onProfile}
        >
          <Text style={styles.buttonText}>
            Мой профиль
          </Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={onSettings}
        >
          <Text style={styles.buttonText}>
            Настройки
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
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 30,
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 12,
  },

  welcome: {
    fontSize: 20,
    color: '#555555',
    marginBottom: 25,
  },

  card: {
    backgroundColor: '#F7F7F7',
    borderRadius: 14,
    padding: 20,
    marginBottom: 25,
  },

  cardTitle: {
    fontSize: 19,
    fontWeight: '700',
    marginBottom: 10,
  },

  cardText: {
    color: '#888888',
    lineHeight: 22,
  },

  button: {
    height: 52,
    backgroundColor: '#A900E8',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});