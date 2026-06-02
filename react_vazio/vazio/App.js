import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScroollVielw, TextInput } from 'react-native';

export default function App() {
  return (
    <ScroollVielw>
    <View style={styles.container}>
      <Text>Teste de tela</Text>
    </View>
    <ScroollVielw style={styles.cont_texto}>
      <text>
        A educação é um dos pilares mais importantes para o desenvolvimento de uma sociedade. 
    Por meio dela, as pessoas adquirem conhecimentos, desenvolvem habilidades e aprendem valores fundamentais
    para a convivência em comunidade. Além disso, a educação contribui para a formação de cidadãos mais conscientes e 
    preparados para enfrentar os desafios do mundo moderno.

       Em primeiro lugar, a educação desempenha um papel essencial na redução das desigualdades sociais. Quando todos 
    têm acesso a um ensino de qualidade, aumentam as oportunidades de emprego e de crescimento pessoal. Dessa forma, 
    é possível construir uma sociedade mais justa e equilibrada, na qual as pessoas podem alcançar seus objetivos 
    por meio do esforço e do conhecimento.

      Além disso, a educação estimula o pensamento crítico e a capacidade de tomar decisões responsáveis. Indivíduos 
    bem instruídos conseguem analisar informações com mais cuidado, participar ativamente da vida política e contribuir 
    para o progresso de suas comunidades. Isso fortalece a democracia e promove o desenvolvimento social e econômico.

      Portanto, investir em educação é investir no futuro. Somente por meio de um ensino acessível e de qualidade será 
    possível formar cidadãos preparados para transformar a realidade e construir um país mais próspero. Assim, a educação 
    deve ser valorizada e incentivada por toda a sociedade.

   
    </text>
    </ScroollVielw>
    <View>
    <TextInput style {{height:40,bordercolor "blue", borderwidth 2, width}}>
    </TextInput>
    </View>
    </ScroollVielw>
  );
}
const styles = StyleSheet.create({
  titulo: {
    flex: 1,
    margintop:50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAling: 'center',
  },
  cont_texto: {
    margintop: 50, 
    height: 500,
    backgroundColor: "red",
    alingSelf: 'center',
  },
});
