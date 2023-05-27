import React, { useState, useMemo, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/core";
import AsyncStorage from "@react-native-async-storage/async-storage";

const QuizScreen = ({ route }) => {
  const { param1 } = route.params;
  class Quiz {
    constructor(questions, answers, correctAnswers) {
      this.questions = questions;
      this.answers = answers;
      this.correctAnswers = correctAnswers;
    }

    calculateScore(userAnswers) {
      let score = 0;
      for (let i = 0; i < this.questions.length; i++) {
        if (userAnswers[i] === this.correctAnswers[i]) {
          score++;
        }
      }
      return score;
    }
  }

  const questions = [
    "Mi a fővárosa Magyarországnak?",
    "Melyik évben fedezték fel Amerikát?",
    "Ki festette a Mona Lisát?",
    "Milyen színű a sárgarépa?",
    "Hány nap van egy szökőévben?",
  ];

  const answers = [
    ["Budapest", "Bécs"],
    ["1492", "1776"],
    ["Leonardo da Vinci", "Pablo Picasso"],
    ["Narancssárga", "Kék"],
    ["366", "365"],
  ];

  const correctAnswers = [0, 0, 0, 0, 1];
  const quiz = new Quiz(questions, answers, correctAnswers);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([
    null,
    null,
    null,
    null,
    null,
  ]);
  const [score, setScore] = useState(0);
  const [scores, setScores] = useState([]);
  const showToasts = async () => {
    const updatedScores = [...scores];
    updatedScores[param1] = quiz.calculateScore(userAnswers);
    setScores(updatedScores);
    setScore(updatedScores[param1]);
  
    await new Promise(resolve => setTimeout(resolve, 0)); // Várakozás a frissítés befejezésére
    
    storeData(updatedScores);

    Toast.show({
      type: "success",
      position: "top",
      text1: "Sikeresen kitöltötte a kvízt!",
      text2: `Pontszáma: ${quiz.calculateScore(userAnswers)}`,
      visibilityTime: 3000,
      autoHide: true,
      onHide: () => {
        navigation.navigate("HomeScreen");
      },
    });
  };
  const navigation = useNavigation();

  const updateAnswers = (answerIndex, questionIndex) => {
    return () => {
      const newAnswers = [...userAnswers];
      newAnswers[questionIndex] = answerIndex;
      setUserAnswers(newAnswers);
    };
  };



  const updateScores = (index, newValue) => {
    return () => {
    console.log("updateScore " + newValue);
    const updatedScores = [...scores];
    updatedScores[index] = newValue;
    setScores(updatedScores);
    };
  };
  

  useEffect(() => {
    const getScores = async () => {
        const scores = await AsyncStorage.getItem("@scores");
        if (scores){
            setScores(JSON.parse(scores));
        } else {
            storeData([0,0,0,0,1])
        }
        console.log("getScores"+scores);
    };
    getScores();
    }, []);

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      console.log("storeData "+jsonValue);
      await AsyncStorage.setItem("@scores", jsonValue);
    } catch (e) {
      console.log(e);
    }

  };

  return (
    <View style={styles.container}>
      {quiz.questions.map((question, index) => {
        return (
          <View style={styles.container} key={index}>
            <Text style={styles.h1}>{question}</Text>
            {quiz.answers[index].map((answer, answerIndex) => {
              return (
                <View style={styles.answer} key={answerIndex}>
                  <TouchableOpacity
                    style={
                      userAnswers[index] !== null &&
                      userAnswers[index] === answerIndex
                        ? styles.selectedAnswerButton
                        : styles.answerButton
                    }
                    key={{answerIndex}}//asdadsa
                    onPress={updateAnswers(answerIndex, index)}
                  >
                    <Text>{answer}</Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        );
      })}
      <TouchableOpacity style={styles.button} onPress={() => {showToasts();}}>
        <Text>Kiértékelés</Text>
      </TouchableOpacity>
      <Toast refs={(ref) => Toast.setRef(ref)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#72ea71",
    alignItems: "center",
    justifyContent: "center",
    width: "70%",
    height: "10%",
    borderRadius: 30,
    marginBottom: 50,
  },
  h1: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  answer: {
    fontSize: 14,
    textAlign: "center",
    flexDirection: "row",
  },
  answerButton: {
    backgroundColor: "#72ea71",
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
    borderRadius: 30,
    marginBottom: 5,
  },
  selectedAnswerButton: {
    backgroundColor: "#72ea71",
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
    borderRadius: 30,
    marginBottom: 5,
    borderWidth: 4,
    borderColor: "#228B22",
  },
});

export default QuizScreen;
