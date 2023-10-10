import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import LottieView from "lottie-react-native";
import { Button } from "react-native";

// Dữ liệu mẫu
const sampleData = [
  { id: 1, username: "user1", password: "pass1" },
  { id: 2, username: "user2", password: "pass2" },
  { id: 3, username: "user3", password: "pass3" },
];

const Home = () => {
  const [data, setData] = useState(sampleData);

  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ flex: 0.25 }}>
        <LottieView
          source={require("../animation_ln182afk.json")}
          autoPlay
          loop
        />
      </View>
      <View style={{ flex: 0.75 }}>
        {/* Hiển thị danh sách mẫu bằng FlatList */}
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 10,
            alignSelf: "center",
            marginRight: 40,
            marginVertical: 20,
          }}
        >
          <Text style={{ marginRight: 80, color: "green" }}>username</Text>
          <Text style={{ color: "green" }}>password</Text>
        </View>
        <FlatList
          data={data} // Dữ liệu mẫu
          keyExtractor={(item, index) => item.id.toString} // Hàm trích xuất key
          renderItem={({ item }) => (
            // Một mục trong danh sách
            <View style={{ padding: 10, flexDirection: "row" }}>
              <Text style={{ flex: 0.4, textAlign: "center" }}>
                {" "}
                {item.username}
              </Text>
              <Text style={{ flex: 0.4, textAlign: "center" }}>
                {" "}
                {item.password}
              </Text>
              <TouchableOpacity
                style={{ flex: 0.15, marginLeft: 20 }}
                onPress={() => handleDelete(item.id)}
              >
                <Text style={{ color: "#ff6347" }}>delete</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
