import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addComment} from '../store/actions/post';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

export default (props) => {
  const user = useSelector(({user}) => user);
  const dispatch = useDispatch();
  const [comentario, setComentario] = useState();
  const [statusComentario, setStatusComentario] = useState(false);

  newComentario = () => {
    if (user.name) {
      dispatch(
        addComment({
          postID: props.postID,
          nickname: user.name,
          comentario: comentario,
        }),
      );
      Alert.alert('Comentario inserido com sucesso!', comentario);
      setComentario(null);
    } else {
      Alert.alert('Por favor faça login para poder comenta!');
    }
  };

  ViewComentario = () => {
    let areaComentario = null;
    if (statusComentario) {
      areaComentario = (
        <View style={styles.container}>
          <TextInput
            placeholder="Pode comentar..."
            style={styles.input}
            autoFocus={true}
            value={comentario}
            onChangeText={(coment) => setComentario(coment)}
            onSubmitEditing={newComentario}></TextInput>
          <TouchableWithoutFeedback onPress={() => setStatusComentario(false)}>
            <Icon name="times" size={25} color="#555"></Icon>
          </TouchableWithoutFeedback>
        </View>
      );
    } else {
      areaComentario = (
        <TouchableWithoutFeedback onPress={() => setStatusComentario(true)}>
          <View style={styles.container}>
            <Icon
              style={{marginLeft: 10}}
              name="comment-o"
              size={25}
              color="#555"></Icon>
            <Text style={styles.caption}>Adicione um comentario...</Text>
          </View>
        </TouchableWithoutFeedback>
      );
    }
    return areaComentario;
  };

  return <View style={{flex: 1}}>{ViewComentario()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 25,
  },
  caption: {
    marginLeft: 10,
    fontSize: 12,
    color: '#ccc',
  },
  input: {
    width: '85%',
  },
});
