import {Pressable, StyleSheet, Text, Platform} from 'react-native'


interface menuButtonsProp {

    title: string;
    onPress: () => void
}

const pressionar = () => alert("opção pressionada")

export default function Funcionalidades ({title, onPress}: menuButtonsProp){

    const estiloBotao = Platform.OS === "web"? estiloComponents.buttonWeb : estiloComponents.button

    return(

        <Pressable onPress={pressionar} style={estiloBotao}>
            <Text style={estiloComponents.text}>
                {title}
                </Text>
        </Pressable>
    );
        
}

const estiloComponents = StyleSheet.create({

    buttonWeb: {
        width: "50%",
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: 'gray',

        // Shadow effect
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },

    button: {
    width: "42%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
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

})