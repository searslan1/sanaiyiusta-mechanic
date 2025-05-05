import { Stack } from 'expo-router';
import React from 'react';
import { Platform, SafeAreaView, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';

export default function WebViewScreen() {
  return (
    <>
      {/* Navigation bar'ı tamamen gizliyoruz */}
      <Stack.Screen options={{ headerShown: false }} />

      <SafeAreaView style={{ flex: 1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
        <WebView
          source={{ uri: 'https://v0-mobil-uygulama-tasarim.vercel.app/' }}
          style={{ flex: 1 }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={true}
        />
      </SafeAreaView>
    </>
  );
}
