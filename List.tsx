import React from 'react';
import { StyleSheet, View } from 'react-native';
import Card from './Card';

export default function List() {
  return (
    <View style={styles.list}>
      <Card
        title="Кіру"
        subtitle="Өз аккаунтыңызға кіріңіз"
      />

      <Card
        title="Тіркелу"
        subtitle="Жаңа аккаунт жасаңыз"
      />

      <Card
        title="Қаланы таңдау"
        subtitle="Өз қалаңызды таңдаңыз"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    width: '100%',
  },
});