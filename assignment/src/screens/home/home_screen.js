import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

function PostsScreen() {
  const [postText, setPostText] = React.useState("");

  const handlePost = () => {
    // Xử lý logic khi người dùng ấn nút Post
    console.log("Posted:", postText);
    // Đặt postText về rỗng sau khi đăng
    setPostText("");
  };

  return (
    <View>
      <TextInput
        placeholder="Write your post..."
        value={postText}
        onChangeText={(text) => setPostText(text)}
        multiline
        style={{
          height: 100,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          padding: 10,
        }}
      />
      <Button title="Post" onPress={handlePost} />
    </View>
  );
}

function FollowsScreen() {
  return (
    <View>
      <Text>List of Follows</Text>
      {/* Hiển thị danh sách follows ở đây */}
    </View>
  );
}

function HomeScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Posts" component={PostsScreen} />
      <Tab.Screen name="Follows" component={FollowsScreen} />
    </Tab.Navigator>
  );
}

export default HomeScreen;
