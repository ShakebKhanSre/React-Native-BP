import {createStackNavigator} from '@react-navigation/stack';
import About from '../Screens/About';
import Home from '../Screens/Home';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
