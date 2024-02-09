import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from './screens/SearchScreen';
import DetailScreen from './screens/DetailScreen';


const Stack = createNativeStackNavigator();

export default function App() {

  
  return (
    
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Search">
        <Stack.Screen name="Search"  component={SearchScreen} options={{ title: 'Search series' }} />
        <Stack.Screen name="Details"  component={DetailScreen} />
      </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
} 

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});