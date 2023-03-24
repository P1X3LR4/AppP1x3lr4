import React from 'react';
import {View, ScrollView} from 'react-native';
import HeaderTop from './components/Prova/HeaderTop';
import Product from './components/Prova/Product';

function App() {
  const produto = [
    {
      nome: 'CB 300F Twister',
      preco: 87.73,
      cc: 293.5,
      transmicao: 6,
      combustivel: 'Gasolina',
      images: {
        img01: require('./image/cb300_01.png'),
        img02: require('./image/cb300_02.png'),
        img03: require('./image/cb300_03.png'),
      },
    },
  ];
  return (
    <View>
      <HeaderTop />
      <Product p={produto} />
    </View>
  );
}

export default App;
