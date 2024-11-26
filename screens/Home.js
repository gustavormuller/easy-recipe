import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import Logo from '../components/Logo.jsx';
import ListItem from '../components/ListItem.jsx';

const Home = () => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <Logo />
        <Text style={styles.title}>Escolha uma culinária que iremos preparar uma receita especial pra você!</Text>
        <ListItem />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff1f1',
  },
  container: {
    paddingTop: 50,
  },
  title: {
    fontSize: 20,
    margin: 15,
    color: '#B83253',
    fontWeight: 600,
    textAlign: 'center',
  },
});

export default Home;
