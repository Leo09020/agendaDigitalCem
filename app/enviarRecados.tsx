import {View, Text, StyleSheet, TextInput, Button, Alert, FlatList, Pressable, Platform, TextInputComponent} from 'react-native'
import React, {useState} from 'react'
import conteudo from '@/src/components/conteudo'

export default function EnviarRecado(){

    const [conteudoSelecionado, setConteudoSelecionado] = useState<String | null>(null)
    const [mensagem, setMensagem] = useState('')

    const handleEnviar = () => {

        if(!mensagem.trim() && Platform.OS === 'web'){

            alert('Erro! Escreva a mensagem antes de enviar')

            return

        } else if (!mensagem.trim() && Platform.OS === 'android'){

            Alert.alert('Erro', 'Escreva a mensagem antes de enviar')

            return

        } else if(Platform.OS === 'web'){
        
            alert('Mensagem enviada com sucesso')

            setMensagem('')

            setConteudoSelecionado(null)
                    
        } else {
            Alert.alert('Mensagem enviada com sucesso')

            setMensagem('')

            setConteudoSelecionado(null)
        }
    }

    return(
        
        <View style={enviarRecadoStyle.mainConteiner}>
            <View style={enviarRecadoStyle.contentConteinter}>

                {/* Caixa de texto para enviar a mensagem */}
                {conteudoSelecionado ? (

                    <View style={enviarRecadoStyle.formMensagem}>
                        <Text style={enviarRecadoStyle.subtitulo}>
                            Para: {conteudo.find((d) => d.id === conteudoSelecionado)?.tipo}
                        </Text>

                        <TextInput
                         style={enviarRecadoStyle.inputMensagem}
                         multiline
                         numberOfLines={6}
                         placeholder= "Digite algo..."
                         value={mensagem}
                         onChangeText={setMensagem}
                        ></TextInput>

                        <View style={enviarRecadoStyle.botoesContainer}>

                            <Button 
                             title= "Voltar"
                             color="#7F8C8D"   
                             onPress={() => setConteudoSelecionado(null)}
                            />

                            <Button title="Enviar Recado" color="#27AE60" onPress={handleEnviar} />
                        </View>
                    </View>

                ) : (
                    // Caixa de seleção de cada disciplina
                    <View style={{width: 100}}>
                        <Text style={enviarRecadoStyle.titulo}>Selecione o contato: </Text>

                        <FlatList
                         data={conteudo}
                         keyExtractor={(item) => item.id}
                         renderItem={({item}) => (

                            <Pressable style={enviarRecadoStyle.cardItem} onPress={()=> setConteudoSelecionado(item.id)}>

                                <Text style={enviarRecadoStyle.itemNome}>{item.tipo}</Text>

                            </Pressable>
                         )}
            
                        />
                    </View>

                )}
            </View>
        </View>
    )
}

const enviarRecadoStyle = StyleSheet.create({

    mainConteiner: {
        flex: 1,
        backgroundColor: '#d8e0e2',
        justifyContent: 'center',
        alignContent: 'center',
        padding: 16

    },

    contentConteinter: {
        backgroundColor: '#FFFFFF',
        padding: 20,
        borderRadius: 12,
        height: '90%',
        width: '100%',
        maxWidth: 600,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3
    },
    titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#2C3E50',
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
    color: '#34495E',
  },
  cardItem: {
    backgroundColor: '#F8F9F9',
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E5E7E9',
  },
  
  formMensagem: {
    flex: 1,
    justifyContent: 'space-between',
  },
  inputMensagem: {
    backgroundColor: '#F8F9F9',
    borderRadius: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: '#BDC3C7',
    textAlignVertical: 'top',
    fontSize: 16,
    height: 200,
  },
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  itemNome: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2C3E50',
  },

})