import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context'

import {Text, View, StyleSheet, TextInput, Button, Alert} from 'react-native'

import {useState} from 'react'

export default function TelaAcesso(){

    const [email, setEmail] = useState('')

    const [senha, setSenha] = useState('')

    function onPressable(){
        Alert.alert('Dados enviados')
    }

    return(

        <SafeAreaProvider>
            <SafeAreaView style={estiloAcesso.container}>
                <View style={estiloAcesso.formContainer}>

                    <Text style={estiloAcesso.titulo}>Acessar agenda:</Text>

                    <Text style={estiloAcesso.label}>email:</Text>
                    <TextInput style={estiloAcesso.inputs} value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize='none' placeholder='Digite seu email'></TextInput>

                    <Text style={estiloAcesso.label}>senha:</Text>
                    <TextInput style={estiloAcesso.inputs} value={senha} onChangeText={setSenha} secureTextEntry={true} placeholder="Digite sua senha"></TextInput>

                </View>

                <View style={estiloAcesso.buttonContainer}>
                    <Button title='enviar' onPress={onPressable} color={'#0000FF'}/>
                </View>

            </SafeAreaView>
        </SafeAreaProvider>

    );
}

const estiloAcesso = StyleSheet.create({
    
    label: {
        fontSize: 14,
        fontWeight: '600',
        color:'#333333',
        marginTop: 6,
        marginBottom: 12
        
    },

    container: {
        flex: 1,
        backgroundColor: '#ddf1db'
    },

    formContainer : {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 24
    },

    inputs: {
        paddingHorizontal: 12,
        backgroundColor: '#FFFFFF',
        color: '#000000', 
        borderRadius: 8,
        height: 50,
        borderWidth: 1,
        fontSize: 16,
        borderColor: '#DDDDDD'

    },

    titulo: {
        color: '#333333',
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 24,
        textAlign: 'center'
    },

    buttonContainer:{
        marginTop: 24
    }
    
})