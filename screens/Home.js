import { SafeAreaView, Text, StyleSheet } from 'react-native';

const Home = () => {
  return (
    <SafeAreaView style={styles.main}>
      <Text style={styles.title}>Easy Recipe</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff1f1',
  },
  title: {
    fontSize: 22,
    margin: 12,
    color: '#B83253',
    fontWeight: '600',
    marginTop: 40
  },
});

export default Home;
