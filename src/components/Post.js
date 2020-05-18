import React from 'react';
import {StyleSheet, View, Image, Dimensions, Text} from 'react-native';

import Autor from './Autor';
import Comentarios from './Comentarios';
import AddComentario from './addComentario';

export default (props) => {
  return (
    <View style={styles.container}>
      <Image source={props.image} style={styles.image}></Image>
      <Autor nickname={props.nickname} avata={props.avata}></Autor>
      <Comentarios comentarios={props.comentarios}></Comentarios>
      <AddComentario postID={props.id}></AddComentario>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -20,
  },
  image: {
    width: Dimensions.get('window').width,
    height: (Dimensions.get('window').width * 3) / 4,
    resizeMode: 'contain',
  },
});
