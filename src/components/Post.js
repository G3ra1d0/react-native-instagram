import React from 'react';
import {StyleSheet, View, Image, Dimensions} from 'react-native';

export default (props) => {
  return (
    <View style={styles.container}>
      <Image source={props.image} style={styles.image}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: Dimensions.get('window').width,
    height: (Dimensions.get('window').width * 3) / 4,
    resizeMode: 'contain',
  },
});