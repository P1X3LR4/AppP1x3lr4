import {
  Alert,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import React from 'react';
import { SelectCategory, SelectModel } from './selects/Selects';



const Formulario = () => {

  return (
    <ScrollView>
      <Text style={styles.titleForm}>
        Reserve sua{' '}
        <Text
          style={{
            color: '#F20505',
            fontWeight: '900',
            fontSize: 35,
          }}>
          vaga!
        </Text>
      </Text>

      <Text style={styles.subTitleForm}>13º Campeonato de Moto Cross do Tocantins</Text>


      <View>
        <TextInput style={styles.inputTextApp} placeholder="Digite seu nome" />

        <TextInput
          style={styles.inputTextApp}
          placeholder="Digite a placa de sua moto"
          maxLength={7}
        />

        <SelectCategory />
        <SelectModel />


      </View>

      <TouchableOpacity style={styles.buttonSend}>
        <Button
          title="Reservar"
          color="#F2B705"
          onPress={() => Alert.alert('Enviando', 'Seu cadastro foi realizado com sucesso!')}
        />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  inputTextApp: {
    borderWidth: 1,
    borderColor: '#7a7a7a',
    marginBottom: 20,
  },
  titleForm: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
    textTransform: 'uppercase',
    fontWeight: '700',
    color: '#F2B705',
  },
  subTitleForm: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    fontWeight: '900',
    textTransform: 'uppercase',
    backgroundColor: '#F46C00',
    color: '#0D0D0D',
    padding: 10,
    width: '80%',
  },
  buttonSend: {
    width: '30%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default Formulario;
