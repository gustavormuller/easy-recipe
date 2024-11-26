import { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const imageMap = {
  'brigadeiro.jpg': require('../assets/imagens-pratos/brigadeiro.jpg'),
  'carbonara.jpg': require('../assets/imagens-pratos/carbonara.jpg'),
  'chana.jpg': require('../assets/imagens-pratos/chana.jpg'),
  'chickentikka.jpg': require('../assets/imagens-pratos/chickentikka.jpg'),
  'chili.jpg': require('../assets/imagens-pratos/chili.jpg'),
  'coqauvin.jpg': require('../assets/imagens-pratos/coqauvin.jpg'),
  'coxinha.jpg': require('../assets/imagens-pratos/coxinha.jpg'),
  'creme.jpg': require('../assets/imagens-pratos/creme.jpg'),
  'enchilladas.jpg': require('../assets/imagens-pratos/enchilladas.jpg'),
  'feijoada.jpg': require('../assets/imagens-pratos/feijoada.jpg'),
  'guacamole.jpg': require('../assets/imagens-pratos/guacamole.jpg'),
  'gyudon.jpg': require('../assets/imagens-pratos/gyudon.jpg'),
  'lasagna.jpg': require('../assets/imagens-pratos/lasagna.jpg'),
  'lassi.jpg': require('../assets/imagens-pratos/lassi.jpg'),
  'margherita.jpg': require('../assets/imagens-pratos/margherita.jpg'),
  'moqueca.jpg': require('../assets/imagens-pratos/moqueca.jpg'),
  'naan.jpg': require('../assets/imagens-pratos/naan.jpg'),
  'okonomiyaki.jpg': require('../assets/imagens-pratos/okonomiyaki.jpg'),
  'ossobuco.jpg': require('../assets/imagens-pratos/ossobuco.jpg'),
  'paodequeijo.jpg': require('../assets/imagens-pratos/paodequeijo.jpg'),
  'quesadilla.jpg': require('../assets/imagens-pratos/quesadilla.jpg'),
  'quiche.jpg': require('../assets/imagens-pratos/quiche.jpg'),
  'ratatouille.jpg': require('../assets/imagens-pratos/ratatouille.jpg'),
  'ramen.jpg': require('../assets/imagens-pratos/ramen.jpg'),
  'risotto.jpg': require('../assets/imagens-pratos/risotto.jpg'),
  'samosa.jpg': require('../assets/imagens-pratos/samosa.jpg'),
  'souffle.jpg': require('../assets/imagens-pratos/souffle.jpg'),
  'sushi.jpg': require('../assets/imagens-pratos/sushi.jpg'),
  'tacos.jpg': require('../assets/imagens-pratos/tacos.jpg'),
  'tempura.jpg': require('../assets/imagens-pratos/tempura.jpg'),
};

const CuisineScreen = ({ route, navigation }) => {
  const { cuisine } = route.params;
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch('https://api.jsonbin.io/v3/b/672aa3fdad19ca34f8c4df75', {
          headers: {
            'X-Master-Key': '$2a$10$.et99mbsJdvzqd.t1EuxMuYo4wR2s7nGK/A2uOOW9q371E4LetGD2',
          },
        });
        const data = await response.json();

        const selectedCuisine = data.record.culinarias[cuisine.toLowerCase()];
        if (selectedCuisine && selectedCuisine.receitas.length > 0) {
          const randomIndex = Math.floor(Math.random() * selectedCuisine.receitas.length);
          setRecipe(selectedCuisine.receitas[randomIndex]); // Seleciona prato aleatório
        } else {
          setRecipe(null);
        }
      } catch (error) {
        console.error('Error fetching recipe:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [cuisine]);

  const getImagePath = (imageName) => {
    return imageMap[imageName] || require('../assets/imagens-pratos/carbonara.jpg');
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (!recipe) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Culinária não encontrada</Text>
        <Text style={styles.description}>
          Nenhuma receita disponível para {cuisine}.
        </Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>← Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.title}>{cuisine}</Text>
      <Text style={styles.description}>
        Aqui está uma receita especial da culinária {cuisine}!
      </Text>

      <View style={styles.recipeContainer}>
        <Image source={getImagePath(recipe.imagem)} style={styles.recipeImage} />
        <Text style={styles.recipeTitle}>{recipe.nome}</Text>
        <Text style={styles.recipeDetails}>Tempo de Preparo: {recipe.tempoPreparo}</Text>
        <Text style={styles.recipeDetails}>Porções: {recipe.porcoes}</Text>
        <Text style={styles.recipeDetails}>Dificuldade: {recipe.dificuldade}</Text>
      </View>

      <View style={styles.ingredientsContainer}>
        <Text style={styles.sectionTitle}>Ingredientes:</Text>
        {recipe.ingredientes.map((ingrediente, index) => (
          <Text key={index} style={styles.listItem}>
            • {ingrediente}
          </Text>
        ))}
      </View>

      <View style={styles.instructionsContainer}>
        <Text style={styles.sectionTitle}>Modo de Preparo:</Text>
        {recipe.modoPreparo.map((step, index) => (
          <Text key={index} style={styles.listItem}>
            {index + 1}. {step}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff1f1',
    paddingTop: 50,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  backButtonText: {
    color: '#B83253',
    fontWeight: 'bold',
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#B83253',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  recipeContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  recipeImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  recipeTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#B83253',
  },
  recipeDetails: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
  },
  ingredientsContainer: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#B83253',
  },
  listItem: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  instructionsContainer: {
    marginTop: 20,
  },
});

export default CuisineScreen;
