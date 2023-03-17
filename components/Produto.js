import {Button, Text, View, Image, StyleSheet} from 'react-native';
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
      qtdTotal: this.state.qtdTotal + this.state.qtd
    });
    this.props.valorFinal(this.props.p.preco, this.state.qtd);
  }
  render() {
    return (
      <View style={styles.cardProduct}>
        <Text style={styles.titleProduct}>{this.props.p.nome}</Text>
        <Image source={this.props.p.image} style={styles.imageProduct} />
        <Text style={styles.descProduct}>{this.props.p.descricao}</Text>
        <Text style={styles.precoProduct}>Preço: {this.props.p.preco}</Text>

        <Button
          title="Adicionar ao Carrinho"
          onPress={this.addProduto.bind(this)}
        />

        <View style={styles.infoProduct}>
          <Text style={styles.infoProductText}>
            Quantidade: {this.state.qtd}
          </Text>
          <Text style={styles.infoProductText}>
            Total: R$ {this.state.total.toFixed(2)}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardProduct: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    borderWidth: 2.5,
    borderRadius: 5,
    borderColor: '#ff830f',
    borderStyle: 'solid',
    padding: 12,
  },
  imageProduct: {
    borderWidth: 2,
    width: 150,
    height: 100,
    marginBottom: 25,
  },
  titleProduct: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 20,
    color: '#8a4f17',
  },
  precoProduct: {
    fontSize: 20,
    fontWeight: '900',
    margin: 20,
    backgroundColor: '#ff830f',
    padding: 12,
    borderRadius: 5,
  },
  descProduct: {
    color: '#000',
  },
  infoProduct: {
    flex: 1,
    flexDirection: 'row',
    columnGap: 10,
    marginTop: 10,
    padding: 3,
    borderColor: '#8a4f17',
    borderWidth: 2,
    borderRadius: 3,
  },
  infoProductText: {
    fontWeight: '500',
    color: '#8a4f17',
  },
});

export default Produto;
