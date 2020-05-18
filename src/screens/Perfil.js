import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {login as loginAction} from '../store/actions/user';

export default (props) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  sair = async () => {
    dispatch(loginAction({name: null, email: null}));
    await props.route.params.setRota('Login');
    props.navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: user.photoUrl,
        }}
        style={styles.image}></Image>
      <Text style={styles.nickname}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>
      <TouchableOpacity onPress={sair} style={styles.button}>
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginHorizontal: 15,
    marginTop: 100,
  },
  nickname: {
    marginTop: 30,
    fontSize: 30,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 25,
  },
  button: {
    marginTop: 30,
    padding: 10,
    paddingHorizontal: 30,
    backgroundColor: '#4286f4',
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
});
