import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Webview_Screen from "./webview_screen";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Modal } from "react-native";
import { Pressable } from "react-native";
import { Linking } from "react-native";
import { ActivityIndicator } from "react-native";

const App = () => {
  const [ modalVisible, setModalVisible ] = useState(false);
  const [ animating, setAnimating] = useState(false);
  
  const openBrowser = () => {
    setAnimating(true); // Hiển thị modal trước khi mở trình duyệt

    setTimeout(() => {
      Linking.openURL(
        "https://bard.google.com/u/1/chat/b576357ce7ecda2d?hl=vi"
      );
      setAnimating(false); // Bắt đầu animation sau khi đã mở trình duyệt
    }, 3000);
  };
 

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <ActivityIndicator animating={animating} size="large" />

          <View style={styles.modalView}>
            <Text style={styles.modalText}>Are you sure open this page?</Text>
            <View style={styles.chosenView}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>cancel</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => openBrowser()}
              >
                <Text style={styles.textStyle}>yes</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginHorizontal: 5,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize:15
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize:20
  },
  chosenView: {
    flexDirection:'row'
  }
});

export default App;