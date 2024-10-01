import { SafeAreaView, StyleSheet, View } from 'react-native';
import Logo from '../components/Logo.jsx';
import ListItem from '../components/ListItem.jsx';

const Home = () => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <Logo />
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
    paddingTop: 30,
  },
});

export default Home;
