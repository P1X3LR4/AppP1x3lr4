import {Button, Text, View, Image, StyleSheet, FlatList, ScrollView} from 'react-native';
import React from 'react';

class Product extends React.Component {
  render() {
    return (
      <View style={styles.sectionContainer}>
        <FlatList
          data={this.props.p}
          renderItem={({item}) => (
            <View>
              <ScrollView horizontal>
                <Image source={item.images.img01} style={styles.imageProduct} />
                <Image source={item.images.img02} style={styles.imageProduct} />
                <Image source={item.images.img03} style={styles.imageProduct} />
              </ScrollView>
                <Text>{item.nome}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}
export default Product;

const styles = StyleSheet.create({
  imageProduct: {
    width: 300,
    height: 400,
    resizeMode: 'contain'
  },
});
