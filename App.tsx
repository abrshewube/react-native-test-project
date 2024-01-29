import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GridScreen from './components/GridNumbers';
import UserListScreen from './components/FetchUsers'; // Import the UserListScreen component
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import store from './redux/store'; 
import { Provider } from 'react-redux';

type RootStackParamList = {
  Home: undefined;
  UserList: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const [number, setNumber] = useState(0);
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleDecrement = () => {
    setNumber(number - 1);
  };

  const handleIncrement = () => {
    setNumber(number + 1);
  };

  const handleNavigateToUserList = () => {
    navigation.navigate('UserList' as keyof RootStackParamList);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={handleDecrement}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.number}>{number}</Text>
        <TouchableOpacity style={styles.button} onPress={handleIncrement}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <GridScreen />

<br /><br />
      {/* Button to navigate to UserListScreen */}
      <TouchableOpacity style={styles.button} onPress={handleNavigateToUserList}>
        <Text style={styles.buttonText}>Go to User List</Text>
      </TouchableOpacity>
    </View>
  );
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="UserList" component={UserListScreen} />
        {/* Add other screens if needed */}
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    width: 100,
    height: 40,
    borderRadius:10,
   
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
  number: {
    fontSize: 10,
  },
});
