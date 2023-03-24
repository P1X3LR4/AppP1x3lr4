import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

function HeaderTop() {
  return (
    <View style={styles.sectionContainer}>
      <Image
        source={require('../../image/logo.png')}
        style={styles.imageLogo}
      />
      <Text style={styles.titleTop}> Central Motos</Text>
    </View>
  );
}

export default HeaderTop;

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: '#20b558',
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 50
  },
  imageLogo: {
    width: 50,
    height: 50,
  },
  titleTop: {
    fontSize: 18,
    fontWeight: '900',
    textTransform: 'uppercase',
  }
});
