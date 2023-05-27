import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking,
} from "react-native";

const ArticlesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Cikkek</Text>
      <View>
        <TouchableOpacity
          style={styles.card}
          onPress={() => {
            Linking.openURL("https://google.com");
          }}
        >
          <Image
            style={{ width: "35%", height: "90%" }}
            source={{
              uri: "https://theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png",
            }}
          />
          <Text style={styles.cardText}>Cikk 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => {
            Linking.openURL("https://google.com");
          }}
        >
          <Image
            style={{ width: "35%", height: "90%" }}
            source={{
              uri: "https://theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png",
            }}
          />
          <Text style={styles.cardText}>Cikk 2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => {
            Linking.openURL("https://google.com");
          }}
        >
          <Image
            style={{ width: "35%", height: "90%" }}
            source={{
              uri: "https://theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png",
            }}
          />
          <Text style={styles.cardText}>Cikk 3</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  h1: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
  },
  card: {
    backgroundColor: "#72ea71",
    borderRadius: 30,
    width: 300,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    flexDirection: "row",
  },
  cardText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
});

export default ArticlesScreen;
