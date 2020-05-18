import React from 'react';
import {StyleSheet, Text, View, Platform, Image} from 'react-native';
import {useSelector} from 'react-redux';
import icon from '../../assets/imgs/icon.png';

export default () => {
  const user = useSelector((state) => state.user);

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Image source={icon} style={styles.image}></Image>
        <Text style={styles.title}>Clone Instagram</Text>
      </View>
      <View style={styles.userContainer}>
        <Text style={styles.user}>{user.name}</Text>
        <Image
          source={{
            uri: user.photoUrl,
          }}
          style={styles.avata}></Image>
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
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  user: {
    fontSize: 15,
    color: '#888',
    marginRight: 5,
  },
  avata: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
});
