import React,{useState,useEffect} from "react";
import { View, Text, TextInput, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FlatList } from "react-native";

const Tab = createBottomTabNavigator();

function PostsScreen() {
  const [postText, setPostText] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [userId, setUserId] = useState(""); // Lưu userId hiện tại
  const [posts, setPosts] = useState([]); // Lưu danh sách bài viết

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
      {isAdmin && <Button title="Post" onPress={handlePost} />}

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "gray",
              padding: 10,
            }}
          >
            <Text>User ID: {item.userId}</Text>
            <Text>Content: {item.content}</Text>
            <Text>Created At: {item.createdAt}</Text>
          </View>
        )}
      />
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
