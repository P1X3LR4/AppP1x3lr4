import React from 'react';
import {View, Header} from 'react-native';
import Carrinho from './components/Carrinho';
import ListaProdutos from './components/ListaProdutos';

function App() {
  const produtos = {nome: 'Anzo Gabriel', idade: 19};
  return (
    <View>
      <Carrinho />
      {/* <ListaProdutos produtos={produtos} /> */}
    </View>
  );
}

export default App;
