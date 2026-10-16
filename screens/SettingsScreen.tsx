import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type Props = {
  onBack: () => void;
  onLogout: () => void;
};

export default function SettingsScreen({
  onBack,
  onLogout,
}: Props) {
  const [notifications, setNotifications] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Настройки</Text>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Основные</Text>

        <TouchableOpacity
          style={styles.row}
          onPress={() => setNotifications(!notifications)}
        >
          <Text style={styles.rowText}>Уведомления</Text>

          <Text style={styles.status}>
            {notifications ? 'Вкл.' : 'Выкл.'}
          </Text>
        </TouchableOpacity>

        <View style={styles.row}>
          <Text style={styles.rowText}>Язык</Text>
          <Text style={styles.status}>Русский</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.rowText}>О приложении</Text>
          <Text style={styles.status}>v1.0</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.rowText}>Помощь</Text>
          <Text style={styles.arrow}>›</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.logout}
        onPress={onLogout}
      >
        <Text style={styles.logoutText}>
          Выйти из аккаунта
        </Text>
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
    marginBottom: 25,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 25,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 17,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },

  rowText: {
    fontSize: 16,
  },

  status: {
    color: '#4a67ff',
    fontWeight: '600',
  },

  arrow: {
    fontSize: 25,
    color: '#888',
  },

  logout: {
    backgroundColor: '#ff4d4d',
    padding: 17,
    borderRadius: 12,
    alignItems: 'center',
  },

  logoutText: {
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