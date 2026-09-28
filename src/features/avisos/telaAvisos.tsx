import {Text, View, StyleSheet, Button, FlatList} from 'react-native'
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context'
 
const info = [
        {
            id: "1",
            titulo: "Provas",
            data: "28/09 - 02/09",
            conteudo: "Atenção a semana de provas! Bons estudos"
        },
        {
            id: "2", 
            titulo: "Feridao escolar",
            data: "25/11",
            conteudo: "Não haverá aular por conta do feriado"
        }
    ]

interface ItensProps {
    titulo: string
    data: string
    conteudo: string
}

function Itens ({titulo, data, conteudo} : ItensProps) { 
    return (

        <View>
            <View>
                <Text>{titulo}</Text>
                <Text>{data}</Text>
            </View>
            
            <Text>{conteudo}</Text>

        </View>

    )
}

export default function Avisos(){

    return(

        <SafeAreaProvider>

            <SafeAreaView style={estiloInfo.mainConteiner}>

                <View style={estiloInfo.contentWrapp}>
                    <Text style={estiloInfo.tituloMural}>Mural de avisos</Text>
                </View>

            </SafeAreaView>

        </SafeAreaProvider>
        
    )

}

const estiloInfo = StyleSheet.create({

    mainConteiner: {
        flex: 1,
        backgroundColor: '#F4F6F8',
        alignItems: 'center'
    },

    tituloMural: {
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#2C3E50',
        marginVertical: 16

    },

    contentWrapp: {
        flex: 1,
        width: '100%',
        maxWidth: 600,
        alignItems: 'center'
    },

    listConteiner: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },

    infoConteiner: {
        backgroundColor: '#FFFFFF',
        borderColor: 'gray',
        borderRadius: 10,
        marginBottom: 10,
        gap: 5,
        padding: 20,
        
        
    },

    info: {
        fontSize: 20,
        textAlign: 'center'
    }

})