import React, { useEffect, useContext, useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";
import { decode } from "html-entities";

//action
import { ADD_QUESTIONS, REMOVE_ANSWER } from "../../../store/actions";

//context
import { questionContext } from "../../../store/contexts/question/questionContext";

//service
import { QuestionRepository } from "../../../services/repositories";
import { ADD_ANSWER } from "../../../store/actions/question/question";

export const Home = ({ navigation }: any) => {

  const [ util, setUtil] = useState({ loading: false, position: 0 });

  const { state, dispatch } = useContext(questionContext);

  useFonts({
    RobotoLight: require("../../../../../assets/fonts/RobotoLight.ttf"),
  });

  useEffect(() => {

    const unsubscribe = navigation.addListener('focus', async() => {
        setUtil({ position:0, loading: false });
        const { data } = await QuestionRepository.getQuestions();
        dispatch({ type: ADD_QUESTIONS, payload: data.results });
    });

    return unsubscribe;

  }, []);

  const changePosition = () => {
    setUtil({ ...util, loading: true });
  };

  

  const handlerAnswer = (answer: string) => {
    if (util.position <= 9) {
      changePosition();
     
      dispatch({
        type: ADD_ANSWER,
        payload: {
          id: util.position,
          question: state.results[util.position].question,
          correct: answer,
        },
      });

      setTimeout(() => {
        if (util.position <= 9) {
          setUtil({ position: util.position + 1, loading: false });
        }
      }, 600);

      if (util.position === 9) {
        setUtil({ ...util, loading: false });
        navigation.navigate("Score");
      }
    }
  };


  return util.loading ? (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color="#00ff00" />
    </View>
  ) : (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={styles.title}>
        {state.results[util.position] && (state.results[util.position].category)}
      </Text>

      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.textQuestion}>
            {state.results[util.position] &&
              decode(state.results[util.position].question)}
          </Text>

          <View style={styles.buttons}>
            <TouchableOpacity
              style={styles.buttonFalse}
              onPress={() => handlerAnswer("False")}
            >
              <Text style={styles.textFalse}>False</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonTrue}
              onPress={() => handlerAnswer("True")}
            >
              <Text style={styles.textTrue}>True</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.paginator}>
          <View>
        
              <Text style={styles.text}>
                {(util.position + 1) + " of " + state.results.length}
              </Text>
  
          </View>
        </View>
      </View>

      <StatusBar backgroundColor="white" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  card: {
    width: "70%",
    height: "25%",
    borderWidth: 1,
    padding: 10,

    alignItems: "center",
    borderColor: "black",
  },
  title: {
    color: "black",
    fontWeight: "700",
    fontFamily: "RobotoLight",
    textAlign: "center",
    fontSize: 21,
    paddingTop: 33,
    marginHorizontal: 5,
  },
  text: {
    color: "black",
    padding: 10,
  },
  textQuestion: {
    textAlign: "center",
    fontFamily: "RobotoLight",
  },
  paginator: {
    paddingTop: 5,
    justifyContent: "center",
    flexDirection: "row",
  },
  button: {
    padding: 10,
  },
  buttons: {
    top: "73%",
    position: "absolute",
    marginTop: "10%",
    flexDirection: "row",
  },
  buttonFalse: {
    borderColor: "black",
    borderWidth: 1,
    height: 25,
    width: 50,
    borderRadius: 5,
    marginRight: 33,
  },
  buttonTrue: {
    borderColor: "black",
    borderWidth: 1,
    height: 25,
    width: 50,
    borderRadius: 5,
  },
  textFalse: {
    textAlign: "center",
  },
  textTrue: {
    textAlign: "center",
  },
});
