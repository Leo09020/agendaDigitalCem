// Página principal contendo as principais funcionalidades acessíveis (disciplina, recados, avisos...)

import { Platform, View } from "react-native";

import { StyleSheet} from "react-native";

import Funcionalidade from '@/src/components/buttons'

import itens from '@/src/components/constants'

export default function App() {

  return (
    //View que contém a página principal do aplicativo

    <View style={estilo.boxConteiner}>
      <MainScreen />
    </View>
  );
}

function MainScreen() {

  const estiloConteiner = Platform.OS === "web" ? estilo.gridConteinerWeb : estilo.gridConteiner

    return (
    <View style={estiloConteiner}>  
      {itens.map((item)=>(
      <Funcionalidade
        key={item.id}
        title={item.title}
        onPress={item.action}
      />
      ))}
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

  gridConteinerWeb: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 35,
    paddingHorizontal: 30,
  },

});
