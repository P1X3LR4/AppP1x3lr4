import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import Produto from './Produto';
import PlacaVideoImage from '../image/placa-video.png';
import ProcessadorImage from '../image/processador.png';
import WaterCooler from '../image/water-cooler.png';

const produto = [
  {
    image: PlacaVideoImage,
    nome: 'Placa de Vídeo RTX 3060 Asus Dual O12G V2 NVIDIA GeForce',
    descricao:
      'Tenha um desempenho para seu trabalho e gameplay com a Placa de Vídeo Asus NVIDIA GeForce DUAL RTX 3060 O12G V2 é equipada com uma memória de 12GB GDDR6, Velocidade de Memória de 15 Gbps, e Boost Clock de 1867 MHz em OC e de 1867 MHz no modo Jogo.',
    preco: 2.449,
  },
  {
    image: ProcessadorImage,
    nome: 'Processador AMD Ryzen 5 5600G, 3.9GHz (4.4GHz Max Turbo)',
    descricao:
      'Esteja você jogando os jogos mais recentes, projetando o próximo arranha-céu ou analisando dados científicos, a velocidade sem precedentes dos processadores AMD Ryzen série 5000 G para desktop é imparável. Com os processadores AMD Ryzen para desktop, você está sempre na frente.',
    preco: 819.99,
  },
  {
    image: WaterCooler,
    nome: 'Processador AMD Ryzen 5 5600G, 3.9GHz (4.4GHz Max Turbo)',
    descricao:
      'Esteja você jogando os jogos mais recentes, projetando o próximo arranha-céu ou analisando dados científicos, a velocidade sem precedentes dos processadores AMD Ryzen série 5000 G para desktop é imparável. Com os processadores AMD Ryzen para desktop, você está sempre na frente.',
    preco: 819.99,
  },
];

class Carrinho extends React.Component {
  state = {
    valorTotal: 0,
  };

  atualizarTotal(valor) {
    this.setState({
      valorTotal: this.state.valorTotal + valor,
    });
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.sectionContainer}>
          <Produto p={produto[0]} valorFinal={this.atualizarTotal.bind(this)} />
          <Produto p={produto[1]} valorFinal={this.atualizarTotal.bind(this)} />
          <Produto p={produto[2]} valorFinal={this.atualizarTotal.bind(this)} />
          {/* <Text>Valor Final: {this.state.valorTotal}</Text> */}
        </View>

        <View style={styles.previwerBuy}>
          <Text>Produto: {this.state.quantidade}</Text>
          <Text>Quantidade: {this.state.quantidade}</Text>
          <Text>Valor Total: {this.state.quantidade}</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    flexDirection: 'column',
    rowGap: 10,
    padding: 10,
  },
});

export default Carrinho;
