import React, { useState } from 'react';
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

export default function CityScreen({ onBack, onContinue }: Props) {
  const [city, setCity] = useState('Выбрать город');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <Pressable onPress={onBack}>
          <Text style={styles.back}>‹</Text>
        </Pressable>

        <Text style={styles.title}>Выберите город</Text>

        <Text style={styles.subtitle}>
          Заведения которые будут показываться
          {'\n'}
          вам, будут зависеть от вашего города.
        </Text>

        <Pressable
          style={styles.select}
          onPress={() => setCity('Алматы')}
        >
          <Text style={styles.selectText}>{city}</Text>
          <Text style={styles.arrow}>⌄</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => {
            onContinue();
          }}
        >
          <Text style={styles.buttonText}>Продолжить</Text>
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
    lineHeight: 20,
  },

  select: {
    height: 54,
    backgroundColor: '#F7F7F7',
    borderRadius: 14,
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 25,
  },

  selectText: {
    color: '#888888',
  },

  arrow: {
    fontSize: 22,
    color: '#A900E8',
  },

  button: {
    height: 52,
    backgroundColor: '#A900E8',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
    marginBottom: 20,
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});