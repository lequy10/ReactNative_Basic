import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FlatList } from "react-native";
import { Modal } from "react-native";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native";
import { StyleSheet } from "react-native";
import { Image } from "react-native";

const Tab = createBottomTabNavigator();

function PostsScreen() {
  const [postText, setPostText] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [userId, setUserId] = useState(""); // Lưu userId hiện tại
  const [posts, setPosts] = useState([]); // Lưu danh sách bài viết
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    // Lấy dữ liệu từ API và kiểm tra vai trò "admin"
    fetch("https://6519d235340309952f0cbe06.mockapi.io/users")
      .then((response) => response.json())
      .then((data) => {
        const adminUser = data.find((user) => user.role === "admin");
        if (adminUser) {
          setIsAdmin(true);
        }
        
        // Lưu userId của người dùng hiện tại
        const currentUser = data.find((user) => user.role !== "admin");
        if (currentUser) {
          setUserId(currentUser.id);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    // Lấy danh sách bài viết từ API
    fetch("https://6519d235340309952f0cbe06.mockapi.io/article")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  const handlePost = () => {
    if (postText.trim() === "") {
      return;
    }

    const newPost = {
      userId: userId,
      content: postText,
    };

    // Gửi POST request để tạo bài viết mới
    fetch("https://6519d235340309952f0cbe06.mockapi.io/article", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Posted:", data);
        setPostText("");

        // Cập nhật dữ liệu ngay lập tức
        setPosts((prevPosts) => [data, ...prevPosts]);
      })
      .catch((error) => {
        console.error("Error posting data:", error);
      });

    setModalVisible(false);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={toggleModal}>
        <Text style={{ color: "#fff" }}>New Post</Text>
      </TouchableOpacity>

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "gray",
              padding: 10,
              margin: 10,
              backgroundColor: "#fff",
              borderRadius: 10,
            }}
          >
            <View style={{}}>
              <Image
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  borderWidth: 1,
                  borderColor: "grey",
                }}
                source={{
                  uri: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1113.jpg",
                }}
              ></Image>
            </View>
            <Text>Content: {item.content}</Text>
            <Text>Created At: {item.createdAt}</Text>
          </View>
        )}
      />

      <Modal style={styles.modal} visible={isModalVisible}>
        <View>
          <TouchableOpacity>
            <Text style={styles.touch} onPress={() => setModalVisible(false)}>
              Cancel
            </Text>
          </TouchableOpacity>
          <TextInput
            placeholder="Write your post..."
            value={postText}
            onChangeText={(text) => setPostText(text)}
            multiline
            style={styles.input}
          />
          <Button title="Post" onPress={handlePost} />
        </View>
      </Modal>
    </SafeAreaView>
  );
}

function FollowsScreen() {
  return <View></View>;
}

function HomeScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Posts"
        component={PostsScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Follows"
        component={FollowsScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
  },
  postView: {
    padding: 15,
  },
  modal: {
    flex: 1,
    padding: 5,
  },
  touch: {
    alignItems: "center",
    backgroundColor: "blue",
    padding: 10,
    alignContent: "flex-end",
    alignSelf: "flex-end",
    margin: 10,
    backgroundColor: "white",
  },
  button: {
    alignItems: "center",
    padding: 10,
    alignContent: "flex-end",
    alignSelf: "flex-end",
    margin: 10,
    backgroundColor: "blue",
    borderRadius: 10,
  },
});

export default HomeScreen;
