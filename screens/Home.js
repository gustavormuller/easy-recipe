import { SafeAreaView, StyleSheet } from 'react-native';
import Logo from '../components/Logo.jsx';

const Home = () => {
  return (
    <SafeAreaView style={styles.main}>
      <Logo />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff1f1',
  },
});

export default Home;
