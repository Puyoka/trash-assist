import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/core";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = (props) => {
  const navigation = useNavigation();
  const [scores, setScores] = useState([])

  useEffect(() => {
    const getScores = async () => {
        const scores = await AsyncStorage.getItem("@scores");
        if (scores){
            setScores(JSON.parse(scores));
        } else {
            storeData([0,0,0,0,0])
        }
        console.log(scores);
    };
    getScores();
    }, []);

    const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value);
          await AsyncStorage.setItem("@scores", jsonValue);
        } catch (e) {
          console.log(e);
        }
      };

    console.log(scores)
  return (
    <View style={styles.container}>
      <TouchableOpacity
        key={scores[0]}//asdasd
        style={styles.card}
        onPress={() => navigation.navigate("QuizScreen", { param1: 0 })}
      >
        <Image
          style={{ width: "100%", height: "50%" }}
          source={{
            uri: "https://theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png",
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
        <Image
          style={{ width: "100%", height: "50%" }}
          source={{
            uri: "https://theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png",
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
        <Image
          style={{ width: "100%", height: "50%" }}
          source={{
            uri: "https://theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png",
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
        <Image
          style={{ width: "100%", height: "50%" }}
          source={{
            uri: "https://theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png",
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
        <Image
          style={{ width: "100%", height: "50%" }}
          source={{
            uri: "https://theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png",
          }}
        />
      </TouchableOpacity>
      <View style={styles.navBar}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity>
            <Text>
              <Icon name="home" size={60} color="#fff" />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("ArticlesScreen")}
          >
            <Text>
              <Icon name="article" size={60} color="#fff" />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 4,
    marginHorizontal: "auto",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  card: {
    backgroundColor: "#72ea71",
    borderRadius: 30,
    padding: 10,
    margin: 10,
    width: 175,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  navBar: {
    bottom: 130,
    width: "100%",
    height: 110,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#72ea71",
    paddingBottom: 10,
  },
  buttonContainer: {
    alignItems: "center",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    flexDirection: "row",
  },
});

export default HomeScreen;
