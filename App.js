// App.js
import React, { createContext, useEffect, useMemo, useState } from 'react';
import { useColorScheme } from 'react-native';
import { NavigationContainer, DefaultTheme as NavDefault, DarkTheme as NavDark } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MainNavigator from './navigation/MainNavigator';
import { LightTheme, DarkTheme } from './theme';

export const ThemeContext = createContext({
  themeName: 'system',
  setThemeName: () => {}
});

const THEME_KEY = 'WBL_THEME_OVERRIDE';

export default function App() {
  const systemScheme = useColorScheme();
  const [themeName, setThemeName] = useState('system');

  useEffect(() => {
    AsyncStorage.getItem(THEME_KEY).then((val) => {
      if (val === 'light' || val === 'dark' || val === 'system') {
        setThemeName(val);
      }
    });
  }, []);

  useEffect(() => {
    AsyncStorage.setItem(THEME_KEY, themeName).catch(() => {});
  }, [themeName]);

  const effectiveScheme = themeName === 'system' ? (systemScheme || 'light') : themeName;
  const activeTheme = effectiveScheme === 'dark' ? DarkTheme : LightTheme;

  const navTheme = effectiveScheme === 'dark' ? { ...NavDark, colors: { ...NavDark.colors, background: activeTheme.colors.background } } : { ...NavDefault, colors: { ...NavDefault.colors, background: activeTheme.colors.background } };

  const contextValue = useMemo(() => ({ themeName, setThemeName }), [themeName]);

  return (
    <ThemeContext.Provider value={contextValue}>
      <NavigationContainer theme={navTheme}>
        <MainNavigator activeTheme={activeTheme} themeName={themeName} setThemeName={setThemeName} />
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}
