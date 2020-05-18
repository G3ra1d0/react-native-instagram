import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
  ScrollView,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addPost} from '../store/actions/post';
import ImagePicker from 'react-native-image-picker';

export default () => {
  const dispath = useDispatch();
  const user = useSelector(({user}) => user);
  const [image, setImage] = useState(null);
  const [comentario, setComentario] = useState();

  pickerImage = () => {
    ImagePicker.showImagePicker(
      {
        title: 'Escolha a imagem',
        maxHeight: 600,
        maxWidth: 800,
      },
      (res) => {
        if (!res.didCancel) {
          setImage({uri: res.uri, base64: res.data});
        }
      },
    );
  };

  save = async () => {
    if (user.name) {
      try {
        await dispath(
          addPost({
            id: Math.random(),
            nickname: user.name,
            avata: user.photoUrl,
            image: image,
            comentarios: comentario
              ? [{nickname: user.name, comentario: comentario}]
              : [],
          }),
        );
        setImage(null);
        setComentario(null);
        Alert.alert('Imagem Inserida com sucesso!');
      } catch (e) {
        Alert.alert(
          'Desculpe aconteceu erro ao enserir Post, tente novamente mais tarde!',
        );
      }
    } else {
      Alert.alert('Por favor faça login antes de posta uma foto!');
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Compartilhe sua Imagem</Text>
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.image}></Image>
        </View>
        <TouchableOpacity onPress={pickerImage} style={styles.button}>
          <Text style={styles.buttonText}>Escolha a Foto</Text>
        </TouchableOpacity>
        <TextInput
          placeholder="Algum comentario a foto ?"
          style={styles.input}
          value={comentario}
          onChangeText={(coment) => setComentario(coment)}></TextInput>
        <TouchableOpacity onPress={save} style={styles.button}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {fontSize: 20, marginTop: 10, fontWeight: 'bold'},
  imageContainer: {
    width: '90%',
    height: Dimensions.get('window').width / 2,
    backgroundColor: '#eee',
    marginTop: 10,
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width / 2,
    resizeMode: 'center',
  },
  button: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#4286f4',
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
});
