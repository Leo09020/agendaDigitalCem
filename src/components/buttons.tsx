import {Pressable, StyleSheet, Text, useWindowDimensions} from 'react-native'


interface menuButtonsProp {

    title: string;
    onPress: () => void
}

export default function Funcionalidades ({title, onPress}: menuButtonsProp){

    const {width} = useWindowDimensions()

    const isDesktop = width >= 768

    return(

        <Pressable onPress={onPress} style={[estiloComponents.button, isDesktop && estiloComponents.gridDesktop]}>
            <Text style={estiloComponents.text}>
                {title}
            </Text>
        </Pressable>
    );
}

const estiloComponents = StyleSheet.create({
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

    gridDesktop: {
        maxWidth: 800,
        flexDirection: "row"
    }
})