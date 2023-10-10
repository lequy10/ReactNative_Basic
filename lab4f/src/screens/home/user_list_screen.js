import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  View,
  StyleSheet,
  Modal,
  TouchableOpacity,
} from "react-native";

const API_URL = "https://6519d235340309952f0cbe06.mockapi.io/data";

const UserListScreen = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const closeModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const userData = await response.json();
      setData(userData);
    } catch (error) {
      console.error("Error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        setSelectedItem(item);
        setModalVisible(true);
      }}
    >
      <Image style={styles.avatar} source={{ uri: item.avatar }} />
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.createdAt}>{item.createdAt}</Text>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>{selectedItem?.name}</Text>
          <Text style={styles.modalText}>
            Created At: {selectedItem?.createdAt}
          </Text>
          <Text style={styles.modalText}>Email: {selectedItem?.email}</Text>
          <Text style={styles.modalText}>Phone: {selectedItem?.phone}</Text>
          <TouchableOpacity onPress={closeModal}>
            <Text style={styles.closeButton}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  createdAt: {
    fontSize: 14,
    color: "gray",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 5,
  },
  closeButton: {
    fontSize: 18,
    color: "blue",
    marginTop: 10,
  },
});

export default UserListScreen;
