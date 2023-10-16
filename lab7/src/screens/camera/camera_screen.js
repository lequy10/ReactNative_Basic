import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
// import { Camera, useCameraDevice, useCameraDevices } from 'react-native-vision-camera';

export default function CameraScreen() {
  // const device = useCameraDevice("back");

  useEffect(() => {
    checkPermission();
  }, []);

  const checkPermission = async () => {
    const newCameraPermission = await Camera.requestCameraPermission();
    const newMicrophonePermission = await Camera.requestMicrophonePermission();
    console.log(newCameraPermission);
  };

  // if (device == null) return <ActivityIndicator />;
  return (
    <View>
      <Text></Text>
    </View>
  )

}
