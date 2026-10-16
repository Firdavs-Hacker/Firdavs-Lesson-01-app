import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type Props = {
  onBack: () => void;
};

export default function ProfileScreen({ onBack }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Мой профиль</Text>

      <View style={styles.avatar}>
        <Text style={styles.avatarText}>👤</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Имя</Text>
        <Text style={styles.value}>Фирдавс</Text>

        <Text style={styles.label}>Телефон</Text>
        <Text style={styles.value}>+7 700 000 00 00</Text>

        <Text style={styles.label}>Город</Text>
        <Text style={styles.value}>Алматы</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Изменить профиль</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.backButton}
        onPress={onBack}
      >
        <Text style={styles.backText}>На главную</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    paddingTop: 60,
    backgroundColor: '#f5f6fa',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#4a67ff',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },

  avatarText: {
    fontSize: 40,
  },

  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    marginBottom: 25,
  },

  label: {
    color: '#888',
    fontSize: 14,
    marginTop: 8,
  },

  value: {
    fontSize: 17,
    fontWeight: '600',
    marginTop: 4,
    marginBottom: 10,
  },

  button: {
    backgroundColor: '#4a67ff',
    padding: 17,
    borderRadius: 12,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },

  backButton: {
    alignItems: 'center',
    marginTop: 20,
  },

  backText: {
    color: '#4a67ff',
    fontSize: 16,
    fontWeight: '600',
  },
});