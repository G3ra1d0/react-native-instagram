import React from 'react';
import {View, Text, StyleSheet, } from 'react-native';

export default (props) => {
  let view = null;
  if (props.comentarios) {
    view = props.comentarios.map((el, index) => {
      return (
        <View style={styles.comentarioContainer} key={index}>
          <Text style={styles.nickname}>{el.nickname}:</Text>
          <Text style={styles.comentario}>{el.comentario}</Text>
        </View>
      );
    });
  }
  return <View style={styles.container}>{view}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  comentarioContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  nickname: {
    marginRight: 5,
    fontWeight: 'bold',
    color: '#444',
  },
  comentario: {
    color: '#555',
  },
});
