import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, Image, TextInput, TouchableOpacity, Text } from 'react-native';

// import registerIcon from './registerIcon.png';

export default function App() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Handle registration logic here
    console.log('Register button pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.block}>

      </View>
      {/* <Image source={registerIcon} style={styles.icon} /> */}
      <Text style={styles.textUp}>Реєстрація</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Зареєструватись</Text>
        </TouchableOpacity>
        <Text style={styles.text}>Вже є акаунт?<Text onPress={() => console.log('klick')}>Увійти</Text></Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'flex-end',
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 40,
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#E8E8E8',
    // borra
  },
  button: {
    backgroundColor: '#FF6C00',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    marginTop: 27,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  text: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 78,
    marginTop: 16,
  },
  textUp: {
    marginBottom: 32,
    marginTop: 92,
  },
  block: {
    width: 110,
    height: 50,
    backgroundColor: 'green',
  },
});
