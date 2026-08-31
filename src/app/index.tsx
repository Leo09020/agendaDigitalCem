// Página principal contendo as principais funcionalidades acessíveis (disciplina, recados, avisos...)

import { Pressable, Text, View } from "react-native";

import { Alert, StyleSheet } from "react-native";

export default function App() {
  return (
    //View que contém a página principal do aplicativo
    <View style={estilo.boxConteiner}>
      <MainScreen />
    </View>
  );
}

function MainScreen() {
  return (
    // View que contém os Pressionáveis com cada funcionalidade relacionada a agenda
    <View style={estilo.gridConteiner}>
      <Pressable
        onPress={() => {
          Alert.alert("Acessar disciplinas");
        }}
        style={estilo.button}
      >
        <Text style={estilo.text}>Disciplina</Text>
      </Pressable>

      <Pressable
        onPress={() => {
          Alert.alert("Acessar enviar recados");
        }}
        style={estilo.button}
      >
        <Text style={estilo.text}>Enviar recados</Text>
      </Pressable>

      <Pressable
        onPress={() => {
          Alert.alert("Acessar informação do aluno");
        }}
        style={estilo.button}
      >
        <Text style={estilo.text}>Informação do aluno</Text>
      </Pressable>

      <Pressable
        onPress={() => {
          Alert.alert("Acessar avisos");
        }}
        style={estilo.button}
      >
        <Text style={estilo.text}>Avisos</Text>
      </Pressable>
    </View>
  );
}

// Estilo aplicado em cada componente e nas tags presentes na aplicação.
const estilo = StyleSheet.create({
  // Estilo utilizado na view principal.
  boxConteiner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#a6ff9e",
  },

  // Estilo utilizado nas views que armazenam os botões. Utiliza flex com linhas.
  gridConteiner: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 25,
    paddingHorizontal: 30,
  },

  button: {
    width: "42%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    backgroundColor: "gray",

    // Shadow effect
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  text: {
    fontSize: 14,
    fontWeight: 600,
    textAlign: "center",
    color: "#2C3E50",
  },
});
