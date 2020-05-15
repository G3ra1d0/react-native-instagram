import React from 'react';
import Header from './src/components/Header';
import Post from './src/components/Post';
import {View} from 'react-native';

export default () => {
  const comentarios = [
    {
      nickname: 'Igor Matheus',
      comentario: 'Viva o Java!',
    },
    {
      nickname: 'Anderson Silva',
      comentario: 'Dart é melhor!',
    },
    {
      nickname: 'Matheus Cirino',
      comentario: 'Paz e Amor!',
    },
  ];

  return (
    <View style={{flex: 1}}>
      <Header />
      <Post
        image={require('./assets/imgs/fence.jpg')}
        comentarios={comentarios}
      />
    </View>
  );
};
