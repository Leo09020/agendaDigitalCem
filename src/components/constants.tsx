import {Alert} from 'react-native'

const itens = [

  { id: "1", title: "Disciplina", action: () => Alert.alert("Acessar disciplinas") },
  { id: "2", title: "Enviar Recados", action: () => Alert.alert("Acessar enviar recados") },
  { id: "3", title: "Info. do Aluno", action: () => Alert.alert("Acessar informação do aluno") },
  { id: "4", title: "Avisos", action: () => Alert.alert("Acessar avisos") },

]


export default itens