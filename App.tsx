import React from 'react';
import { ScrollView, View } from 'react-native';
import PizzaTranslator from './components/PizzaTranslator';
import AprendendoListas from './components/AprendendoListas';
import ListaDinamica from './components/ListaDinamica';
import ListaDinamicaComSecoes from './components/ListaDinamicaComSecoes';
import UsandoImagens from './components/UsandoImagens';
import UsandoImagensComEstilo from './components/UsandoImagensComEstilo';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <PizzaTranslator />

      <ScrollView >
        <AprendendoListas />
      </ScrollView>

      <ScrollView>
        <ListaDinamica></ListaDinamica>
      </ScrollView>

      <ScrollView>
        <ListaDinamicaComSecoes></ListaDinamicaComSecoes>
      </ScrollView>

      <UsandoImagens></UsandoImagens>

      <UsandoImagensComEstilo></UsandoImagensComEstilo>

    </View>
  );
};

export default App;
