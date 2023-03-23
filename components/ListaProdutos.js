import Produto from './Produto';

const {View, FlatList, Text} = require('react-native');

const ListaProdutos = (props) => {
  return (
    <View>
      <FlatList
        data={props.produtos} 
        renderItem={({item}) => (
          <Text>{item.idade}</Text>
        )}
      /> 
      <Text>{props.produtos.nome}</Text>
    </View>
  );
};

export default ListaProdutos;
