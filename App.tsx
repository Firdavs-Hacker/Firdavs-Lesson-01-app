import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import LoginScreen from './screens/LoginScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import ConfirmNumberScreen from './screens/ConfirmNumberScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
import RegisterScreen from './screens/RegisterScreen';
import RegisterFilledScreen from './screens/RegisterFilledScreen';
import CityScreen from './screens/CityScreen';

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';

type Screen =
  | 'login'
  | 'forgot'
  | 'confirm'
  | 'reset'
  | 'register'
  | 'registerFilled'
  | 'city'
  | 'home'
  | 'profile'
  | 'settings';

export default function App() {
  const [screen, setScreen] = useState<Screen>('login');

  console.log('ҚАЗІРГІ ЭКРАН:', screen);

  return (
    <View style={styles.container}>

      {/* LOGIN */}
      {screen === 'login' && (
        <LoginScreen
          onForgot={() => setScreen('forgot')}
          onRegister={() => setScreen('register')}
        />
      )}

      {/* FORGOT PASSWORD */}
      {screen === 'forgot' && (
        <ForgotPasswordScreen
          onBack={() => setScreen('login')}
          onContinue={() => setScreen('confirm')}
        />
      )}

      {/* CONFIRM NUMBER */}
      {screen === 'confirm' && (
        <ConfirmNumberScreen
          onBack={() => setScreen('forgot')}
          onContinue={() => setScreen('reset')}
        />
      )}

      {/* RESET PASSWORD */}
      {screen === 'reset' && (
        <ResetPasswordScreen
          onBack={() => setScreen('confirm')}
          onContinue={() => setScreen('login')}
        />
      )}

      {/* REGISTER */}
      {screen === 'register' && (
        <RegisterScreen
          onBack={() => setScreen('login')}
          onContinue={() => setScreen('registerFilled')}
        />
      )}

      {/* REGISTER FILLED */}
      {screen === 'registerFilled' && (
        <RegisterFilledScreen
          onBack={() => setScreen('register')}
          onContinue={() => setScreen('city')}
        />
      )}

      {/* CITY */}
      {screen === 'city' && (
        <CityScreen
          onBack={() => setScreen('registerFilled')}
          onContinue={() => setScreen('home')}
        />
      )}

      {/* HOME */}
      {screen === 'home' && (
        <HomeScreen
          onProfile={() => setScreen('profile')}
          onSettings={() => setScreen('settings')}
        />
      )}

      {/* PROFILE */}
      {screen === 'profile' && (
        <ProfileScreen
          onBack={() => setScreen('home')}
        />
      )}

      {/* SETTINGS */}
      {screen === 'settings' && (
        <SettingsScreen
          onBack={() => setScreen('home')}
          onLogout={() => setScreen('login')}
        />
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});