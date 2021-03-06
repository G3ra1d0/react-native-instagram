import {ADD_POST, ADD_COMMENT} from '../actions/actionsType';

const initialState = [
  {
    id: 1,
    nickname: 'Igor Matheus',
    avata:
      'https://scontent.frec8-1.fna.fbcdn.net/v/t1.0-9/95832098_1671900092963429_189258781870260224_o.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_oc=AQnCRzXmQAkz47SCCTzB247Y_jRPlryuxtHOQhYMZ7isvduUGVQzO5VaxD2Lxgal0v-8w9MxaI-BhWT1KfxQ7YtS&_nc_ht=scontent.frec8-1.fna&oh=b66731e28c51eed77b2405c97987cd7d&oe=5EE519A1',
    image: require('../../../assets/imgs/fence.jpg'),
    comentarios: [
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
    ],
  },
  {
    id: Math.random(),
    nickname: 'Matheus Cirino',
    avata:
      'https://scontent.frec8-1.fna.fbcdn.net/v/t1.0-9/66866069_2379130238863375_8999351636526628864_o.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_oc=AQlYBjfHRMRY72CaxjL97eKHGnNA0Gti7sgPPuha90RnQk_k5nJZD2IgQBTWyEWTWZuUIOcBo2nfeqxLjmpBi8Wh&_nc_ht=scontent.frec8-1.fna&oh=6672fa5773062634e58d34c26d3f3886&oe=5EE3EFC7',
    image: require('../../../assets/imgs/bw.jpg'),
    comentarios: [
      {
        nickname: 'Igor Matheus',
        comentario: 'Esse Iphone seu tem cor não ?',
      },
      {
        nickname: 'Matheus cirino',
        comentario: 'Celular é meu tiro foto do jeito que quiser!',
      },
    ],
  },
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return [
        {
          ...action.payload,
        },
        ...state,
      ];
    case ADD_COMMENT:
      return [
        ...state,
        state.map((e) => {
          if (e.id === action.payload.postID) {
            e.comentarios.push({
              nickname: action.payload.nickname,
              comentario: action.payload.comentario,
            });

            return e;
          }
        }),
      ];
    default:
      return state;
  }
};

export default reducer;
