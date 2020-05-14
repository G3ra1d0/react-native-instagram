import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default (props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.avata}
        source={{
          uri:
            'https://scontent.frec8-1.fna.fbcdn.net/v/t1.0-9/53794407_2599815560035657_6322269912152670208_n.jpg?_nc_cat=103&_nc_sid=85a577&_nc_oc=AQmZ5ffPv6l25WxpFSqId52PhtPSVo2k1J8PmP6T1BjRBQl4hZ2Uv6PRjRWxTx3P1o8uQLdiLiHlkOYDtS8fS5ZW&_nc_ht=scontent.frec8-1.fna&oh=81b0a9b066af39263604ab9535dcf373&oe=5EE4316C',
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
