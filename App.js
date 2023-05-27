import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import QuizScreen from "./screens/QuizScreen";
import ArticlesScreen from "./screens/ArticlesScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: "Trashassist",
          headerStyle: {
            backgroundColor: '#72ea71',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: '30px',
          },
           }}
        />
        <Stack.Screen
          name="QuizScreen"
          component={QuizScreen}
          options={{ title: "Trashassist",
          headerStyle: {
            backgroundColor: '#72ea71',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: '30px',
          },
           }}
        />
        <Stack.Screen
          name="ArticlesScreen"
          component={ArticlesScreen}
          options={{ title: "Trashassist",
          headerStyle: {
            backgroundColor: '#72ea71',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: '30px',
          },
           }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
