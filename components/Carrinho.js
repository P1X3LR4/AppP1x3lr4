import React from 'react';
import {Text, View} from 'react-native';
import Produto from './Produto';

const produto = [
  {nome: 'Mouse', preco: 12.3},
  {nome: 'Teclado', preco: 20},
  {nome: 'Telefone', preco: 250},
];

class Carrinho extends React.Component {
  
      state = {
        valorTotal: 0
      };

      atualizarTotal(valor){
        this.setState({
          valorTotal: this.state.valorTotal + valor
        })
      }
      
  render() {
    return (
      <View>
        <Produto p={produto[0]} valorFinal={this.atualizarTotal.bind(this)}/>
        <Produto p={produto[1]} valorFinal={this.atualizarTotal.bind(this)}/>
        <Produto p={produto[2]} valorFinal={this.atualizarTotal.bind(this)}/>
        <Text>
          {this.state.valorTotal}
        </Text>
      </View>
    );
  }
}

export default Carrinho;
