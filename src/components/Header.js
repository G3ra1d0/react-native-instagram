import React from 'react';
import {StyleSheet, Text, View, Platform, Image} from 'react-native';
import icon from '../../assets/imgs/icon.png';

export default () => {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Image source={icon} style={styles.image}></Image>
        <Text style={styles.title}>Clone Instagram</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#BBB',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
  title: {
    color: '#000',
    fontFamily: 'Shelter',
    height: 30,
    fontSize: 28,
  },
});
