import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Camera } from 'react-native-vision-camera';
import { useCameraDevices } from 'react-native-vision-camera';

const LoadingView = () => {
  return (
    <View style={styles.container}>
      <Text>Camera</Text>
    </View>
  );
}

export default function App() {
  const requestPermissions = async () => {
    const newCameraPermission = await Camera.requestCameraPermission()
    const newMicrophonePermission = await Camera.requestMicrophonePermission()
  }

  requestPermissions()
  const devices = useCameraDevices()
  const device = devices.back;
  if (device == null) return <LoadingView />
  return (
    <Camera
      style={StyleSheet.absoluteFill}
      device={device}
      isActive={true}
    />
    // <>
    
    // <View style={styles.container}>
    //   <Image source={require('./assets/cameraButton.png')} style={styles.cameraButton} />
    //   <StatusBar style="auto" />
    //   <Text style={styles.prompt}>Tap to Scan a Recyclable</Text>
    // </View>
    // <View style={styles.bottomBar}>
    //   <Image source={require('./assets/ubc.png')} style={styles.ubcLogo} />
    //   <Image source={require('./assets/i.png')} style={styles.info} />
    // </View>
    // </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomBar: {
    backgroundColor: '#002145',
    height: 150,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 20,
  },
  ubcLogo: {
    width: 75,
    height: 75,
    resizeMode: 'contain',
    columnGap: 20,
  },
  info: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  cameraButton: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
  prompt: {
    fontSize: 20,
    padding: 20,
    width: 170,
    textAlign: 'center',
    flexWrap: 'wrap',
    lineHeight: 30,
    fontWeight: 'bold',
  }
});
