import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';

export const SelectCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState();

  return (

    <View style={styles.containerSelect}>
      <Text style={styles.labelSelect}>Selecione a sua categoria ⬇️</Text>
      <View style={styles.select}>
        <Picker
          selectedValue={selectedCategory}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedCategory(itemValue)
          }>
          <Picker.Item label="MX1" value="MX1" />
          <Picker.Item label="MX2" value="MX2" />
          <Picker.Item label="MX3" value="MX3" />
          <Picker.Item label="MX2JR" value="MX2JR" />
          <Picker.Item label="MX5" value="MX5" />
        </Picker>
      </View>
    </View>
  );
};

export const SelectModel = () => {
  const [selectedModel, setSelectedModel] = useState();

  return (
    <View style={styles.containerSelect}>
      <Text style={styles.labelSelect}>Selecione o modelo da moto ⬇️</Text>
      <View style={styles.select}>
        <Picker
          selectedValue={selectedModel}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedModel(itemValue)
          }>
          <Picker.Item label="Honda CRF 250F" value="Honda CRF 250F" />
          <Picker.Item label="Honda CRF 250F" value="Honda CRF 250F" />
          <Picker.Item label="KTM EXC 250" value="KTM EXC 250" />
          <Picker.Item label="Kawasaki KLX 450" value="Kawasaki KLX 450" />
          <Picker.Item label="MXF 250" value="MXF 250" />
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  select: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#0D0D0D',
    marginBottom: 20,
  },
  containerSelect: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  labelSelect: {
    fontSize: 14,
    marginBottom: 8,
  }
});
