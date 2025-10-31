// theme.js
export const GOLD = '#D4AF37';

export const LightTheme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    cardBackground: '#F7F7F7',
    primary: GOLD,
    textPrimary: '#000000',
    textSecondary: '#555555',
    border: '#E3E3E3'
  },
  spacing: { small: 8, medium: 16, large: 24 },
  borderRadius: { small: 8, medium: 12, large: 20 }
};

export const DarkTheme = {
  dark: true,
  colors: {
    background: '#121212',
    cardBackground: '#1E1E1E',
    primary: GOLD,
    textPrimary: '#FFFFFF',
    textSecondary: '#B0B0B0',
    border: '#333333'
  },
  spacing: { small: 8, medium: 16, large: 24 },
  borderRadius: { small: 8, medium: 12, large: 20 }
};
