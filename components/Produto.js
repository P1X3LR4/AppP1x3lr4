import {Button, Text, View} from 'react-native';
import React from 'react';

class Produto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qtd: 0,
      total: 0,
      adicionado: false,
    };
  }

  addProduto() {
    this.setState({
      qtd: this.state.qtd + 1,
      total: this.state.total + this.props.p.preco,
    });
  }
  render() {
    return (
      <View>
        <Text>{this.props.p.nome}</Text>
        <Text>Preço: R${this.props.p.preco}</Text>
        <Text>Quantidade: {this.state.qtd}</Text>
        <Text>Total: R$ {this.state.total}</Text>

        <Button
          title={this.state.adicionado ? 'Adicionado' : 'Adicionar'}
          onPress={this.addProduto.bind(this)}
        />
      </View>
    );
  }
}

export default Produto;
