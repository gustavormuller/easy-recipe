import { Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ListItem = () => {
  const navigation = useNavigation();

  const cuisines = [
    { id: '1', title: 'Italiana', color: '#911d0c', flag: 'https://flagcdn.com/w320/it.png' },
    { id: '2', title: 'Japonesa', color: '#1c5e5a', flag: 'https://flagcdn.com/w320/jp.png' },
    { id: '3', title: 'Brasileira', color: '#a3b539', flag: 'https://flagcdn.com/w320/br.png' },
    { id: '4', title: 'Mexicana', color: '#f46f22', flag: 'https://flagcdn.com/w320/mx.png' },
    { id: '5', title: 'Francesa', color: '#006b3f', flag: 'https://flagcdn.com/w320/fr.png' },
    { id: '6', title: 'Indiana', color: '#ffb740', flag: 'https://flagcdn.com/w320/in.png' },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.itemContainer, { backgroundColor: item.color }]}
      onPress={() => navigation.navigate('CuisineScreen', { cuisine: item.title })}
    >
      <Image source={{ uri: item.flag }} style={styles.flagImage} />
      <Text style={styles.itemText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={cuisines}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  flagImage: {
    width: 40,
    height: 25,
    marginRight: 10,
  },
  itemText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ListItem;
