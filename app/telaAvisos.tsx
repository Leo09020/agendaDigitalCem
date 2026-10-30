import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const info = [
  {
    id: "1",
    titulo: "Provas",
    data: "28/09 - 02/09",
    conteudo: "Atenção a semana de provas! Bons estudos",
  },
  {
    id: "2",
    titulo: "Feridao escolar",
    data: "25/11",
    conteudo: "Não haverá aular por conta do feriado",
  },
];

interface ItensProps {
  titulo: string;
  data: string;
  conteudo: string;
}

function Itens({ titulo, data, conteudo }: ItensProps) {
  return (
    <View style={estiloInfo.cardContainer}>
      <View style={estiloInfo.headerCard}>
        <Text style={estiloInfo.tituloAviso}>{titulo}</Text>
        <Text style={estiloInfo.dataAviso}>{data}</Text>
      </View>

      <Text style={estiloInfo.conteudoAviso}>{conteudo}</Text>
    </View>
  );
}

export default function Avisos() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={estiloInfo.mainConteiner}>
        <View style={estiloInfo.contentWrapp}>
          <Text style={estiloInfo.tituloMural}>Mural de avisos</Text>
        </View>
        <FlatList
          data={info}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Itens
              titulo={item.titulo}
              data={item.data}
              conteudo={item.conteudo}
            />
          )}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const estiloInfo = StyleSheet.create({
  mainConteiner: {
    flex: 1,
    backgroundColor: "#F4F6F8",
    alignItems: "center",
  },

  tituloMural: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
    color: "#2C3E50",
    marginVertical: 16,
  },

  contentWrapp: {
    flex: 1,
    width: "100%",
    maxWidth: 600,
    paddingHorizontal: 16,
  },

  listConteiner: {
    paddingBottom: 20,
  },

  infoConteiner: {
    backgroundColor: "#FFFFFF",
    borderColor: "gray",
    borderRadius: 10,
    marginBottom: 10,
    gap: 5,
    padding: 20,
  },

  cardContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderColor: "#E2E8F0",
    borderWidth: 1,
    // Efeito de sombra leve
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
  },
  headerCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  tituloAviso: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1E293B",
  },
  dataAviso: {
    fontSize: 12,
    color: "#64748B",
    fontWeight: "600",
  },
  conteudoAviso: {
    fontSize: 14,
    color: "#334155",
    lineHeight: 20,
  },
});
