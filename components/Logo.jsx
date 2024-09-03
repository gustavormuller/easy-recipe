import { View, Image, Text, StyleSheet } from 'react-native';

const Logo = () => {
 return (
   <View style={styles.logoContainer}>
        <Image
          source={require('../assets/recipe-icon.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>Easy Recipe</Text>
    </View>
 )
}

const styles = StyleSheet.create({
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  logo: {
    width: 36,
    height: 36,
  },
   title: {
    fontSize: 23,
    margin: 0,
    color: '#B83253',
    fontWeight: '600',
  },
});

export default Logo;