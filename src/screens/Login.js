import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import {useDispatch} from 'react-redux';
import {login as loginAction} from '../store/actions/user';

export default Login = (props) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  login = async () => {
    dispatch(
      loginAction({
        name: 'geraldo',
        email: email,
        photoUrl:
          'https://scontent.frec7-1.fna.fbcdn.net/v/t1.0-9/53794407_2599815560035657_6322269912152670208_n.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_oc=AQnU_kOuExtf3wDiJdf5qSI_6r4usdTTZgUV6IBfYi-aZjYP78fVJfp_5lVGOz7Yymz4h1RTqpyvTfWP1NN77WCv&_nc_ht=scontent.frec7-1.fna&oh=6c33d7a309f9fdc0d1a0cf6792154603&oe=5EE4316C',
      }),
    );
    await props.route.params.setRota('Perfil');
    props.navigation.navigate('Perfil');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        style={styles.input}
        autoFocus={true}
        keyboardType="email-address"
        value={email}
        onChangeText={(email) => setEmail(email)}></TextInput>
      <TextInput
        placeholder="Senha"
        style={styles.input}
        secureTextEntry={true}
        value={senha}
        onChangeText={(senha) => setSenha(senha)}></TextInput>

      <TouchableOpacity onPress={login} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}} style={styles.button}>
        <Text style={styles.buttonText}>Criar nova Conta</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#4286F4',
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  input: {
    marginTop: 20,
    width: '90%',
    backgroundColor: '#EEE',
    height: 40,
    borderWidth: 1,
    borderColor: '#333',
  },
});
