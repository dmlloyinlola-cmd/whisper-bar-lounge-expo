# Whisper Bar & Lounge (Expo)

This project was generated for you. It includes:
- Bottom tab navigation + stack navigation
- System-aware dark/light theme with global header toggle
- Screens: Home, Customer, Price List, Reservation, Staff, More
- Sub-screens: EventDetails, QuickNotesDetails, CustomerOfWeekDetails, PriceListDetails, Settings
- `/assets/placeholder.png` — replace with your images and update `require()` paths in code if needed.

## Quick start (development)
1. Initialize with create-expo-app if you haven't already:
```bash
npx create-expo-app whisper-bar-lounge
cd whisper-bar-lounge
```

2. Replace files with these files (or copy this folder into your project).

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npx expo start
```

## Build (EAS)
1. Install EAS CLI:
```bash
npm install -g eas-cli
eas login
```

2. Configure and build:
```bash
eas build:configure
eas build --platform android --profile preview
```

APK will be available in the Expo dashboard when the build finishes.

Package identifier used: `com.whisperbar.lounge`
