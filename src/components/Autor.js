import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default (props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.avata}
        source={{
          uri: props.avata,
        }}
      />
      <Text style={styles.nickname}>{props.nickname}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nickname: {
    color: '#444',
    marginVertical: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },
  avata: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 15,
  },
});
