import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import Text from './src/components/text/text';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from './src/screens/details';
import Home from './src/screens/Home';

const Stack = createNativeStackNavigator();


export default function App() {
  const [loaded] = useFonts({
    'Spartan-Bold' : require('./assets/fonts/Spartan-Bold.ttf'),
    'Spartan-Regular' : require('./assets/fonts/Spartan-Regular.ttf'),
    'Antonio-Medium' : require('./assets/fonts/Antonio-Medium.ttf')
  })

  if(!loaded){
    return (
      <Text>font is loaidng...</Text> 
    )
  }

  return (
    <>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
    <StatusBar style='light'/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
