/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import Page2 from './screens/Page2';


const AppContent = () => {
  const [counter, setCounter] = useState(0)
  const [fname, setFName] = useState('')
  const [lname, setLName] = useState('')
  const navigation = useNavigation();

  const onPressBtn = () => setCounter(counter+1);


  return (
        <View>
              <View style={styles.homeContainer}> 
                <Text style={[styles.text, styles.bold]} testID={'test-hello-world'}> Hello World</Text>

                <TouchableOpacity style={styles.button} onPress={onPressBtn} testID={'test-btn'}> 
                        <Text style={styles.bold}>Tap me</Text>
                </TouchableOpacity>

                <Text style={styles.highlight}>Counter: {counter}</Text>

               <View style={styles.spacer} /> 

               <TextInput
                    style={styles.input}
                    placeholder="First Name"
                    testID={'test-first-name'}
                    onChangeText={(text) => setFName(text)}
                    value={fname}
                />
                <TextInput
                    style={styles.input}
                    placeholder="name"
                    testID={'test-last-name'}
                    onChangeText={(text) => setLName(text)}
                    value={lname}
                />

                <View style={styles.spacer} /> 
            
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Page2', {
                   name: `${fname} ${lname}`
                })} testID={'test-btn-2'}> 
                        <Text style={styles.bold}>Go to Page 2</Text>
                </TouchableOpacity>

            </View>
        </View>
  );
};

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
         {/* <AppContent /> */}
          <Stack.Navigator>
            <Stack.Screen name="Home" component={AppContent} />
            <Stack.Screen name="Page2" component={Page2} />
          </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  homeContainer: {
    marginTop: 50,
  },  
  bold: {
    fontWeight: 'bold'
  },  
  button: {
     padding: 10,
     backgroundColor: '#ff0',
     width: 130,
     height: 50,
     borderRadius: 5,
     justifyContent: 'center',
     alignItems: 'center',
     marginVertical: 10,
     borderWidth: 1,
  },
  highlight: {
    fontSize: 40,
    fontWeight: 'bold'
  },
  text: {
    fontSize: 18,
  },
  spacer: {
      marginVertical: 20,
  },
  input: {
    borderWidth: 1,
    width: 200,
    marginVertical:  5
  }
});

export default App;
