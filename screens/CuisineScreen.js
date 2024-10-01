import { View, Text, StyleSheet } from 'react-native';

const CuisineScreen = ({ route }) => {
  const { cuisine } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{cuisine}</Text>
      <Text style={styles.description}>
        Aqui você poderá encontrar mais informações sobre a culinária {cuisine}.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    padding: 10,
  },
});

export default CuisineScreen;
