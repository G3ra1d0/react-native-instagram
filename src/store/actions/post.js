import {ADD_POST, ADD_COMMENT} from './actionsType';

export const addPost = (post) => {
  return {
    type: ADD_POST,
    payload: post,
  };
};

export const addComment = (comentario) => {
  return {
    type: ADD_COMMENT,
    payload: comentario,
  };
};
