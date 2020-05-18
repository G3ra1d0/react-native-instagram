import React from 'react';
import {useSelector} from 'react-redux';
import {StyleSheet, FlatList, View} from 'react-native';

import Header from '../components/Header';
import Post from '../components/Post';

export default () => {
  const post = useSelector(({posts}) => posts);
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={post}
        keyExtractor={(el) => `${el.id}`}
        renderItem={({item}) => <Post key={item.id} {...item} />}></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#f5fcff',
  },
});
