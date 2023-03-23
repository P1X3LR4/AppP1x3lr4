import {SectionList, Text, View} from 'react-native';

const ListaSecoes = props => {
  return (
    <View>
      <SectionList
        sections={[
          {title: 'Honda', data: ['Civic', 'City'], footer: 'Modelos Honda'},
          {
            title: 'Toyota',
            data: ['Corolla', 'Hillux'],
            footer: 'Modelos Toyota',
          },
        ]}
        renderItem={({item}) => <Text>{item}</Text>}
        renderSectionHeader={({section}) => <Text>{section.title}</Text>}
        renderSectionFooter={({section}) => <Text>{section.footer}</Text>}
      />
    </View>
  );
};

export default ListaSecoes;
