import {View, Text, StyleSheet} from 'react-native'
import { tipoDisciplinas } from './discipinas';

interface propDisciplinas {

    disciplinas: tipoDisciplinas

}

export default function Disciplinas(){

    return(
        <View style={estiloDisciplinas.container}>

            <Text style={estiloDisciplinas.titulo}></Text>
            <Text style={estiloDisciplinas.subtitulo}>Professor: </Text>

            <View style= {estiloDisciplinas.cardInfo}>
                <Text style={estiloDisciplinas.infoText}>Horarios: </Text>
                <Text style={estiloDisciplinas.infoText}>Dias: </Text>
                <Text style={estiloDisciplinas.infoText}>Id: </Text>
            </View>

        </View>
    )

}

const estiloDisciplinas = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F4F6F8'
    },

    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2C3E50'
    },

    subtitulo: {
        fontSize: 16,
        color: '#666',
        margin: 20
    },

    cardInfo: {
        backgroundColor: '#FFF',
        padding: 16,
        borderRadius: 8,

        // Efeito de sombra e de elevação
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 3
    },

    infoText : {
        fontSize: 14,
        marginBottom: 8,
        color: '#333'
    }
})