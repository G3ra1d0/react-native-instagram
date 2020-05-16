import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

export default () => {
  sair = () => {};

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri:
            'https://scontent.frec7-1.fna.fbcdn.net/v/t1.0-9/53794407_2599815560035657_6322269912152670208_n.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_oc=AQnU_kOuExtf3wDiJdf5qSI_6r4usdTTZgUV6IBfYi-aZjYP78fVJfp_5lVGOz7Yymz4h1RTqpyvTfWP1NN77WCv&_nc_ht=scontent.frec7-1.fna&oh=6c33d7a309f9fdc0d1a0cf6792154603&oe=5EE4316C',
        }}
        style={styles.image}></Image>
      <Text style={styles.nickname}>Geraldo Vitor</Text>
      <Text style={styles.email}>geraldovitor901@gmail.com</Text>
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
