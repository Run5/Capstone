const LOAD_ALL_CHARACTERS = 'character/LOAD_ALL_CHARACTERS';
const LOAD_SINGLE_CHARACTER = 'character/LOAD_SINGLE_CHARACTER';
const DELETE_CHARACTER = 'character/DELETE_CHARACTER';
export const PURGE = 'character/PURGE';

const loadAllCharacters = characters => ({
  type: LOAD_ALL_CHARACTERS,
  characters,
});

const loadOneCharacter = character => ({
  type: LOAD_SINGLE_CHARACTER,
  character,
});

const deleteOne = character => ({
  type: DELETE_CHARACTER,
  character,
});

export const getSingleCharacter = (characterId) => async dispatch => {
  const response = await fetch(`/api/characters/${characterId}`);

  if (response.ok) {
    const character = await response.json();
    dispatch(loadOneCharacter(character));
  };
};

export const getAllCharacters = () => async dispatch => {
  const response = await fetch(`/api/characters`);

  if (response.ok) {
    const characters = await response.json();
    dispatch(loadAllCharacters(characters));
  };
};

export const deleteCharacter = (id) => async (dispatch) => {
  const response = await fetch(`/api/characters/${id}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    const character = await response.json();
    dispatch(deleteOne(character));
  }
};

export const editCharacter = (payload) => async (dispatch) => {
  const {
    id,
    name,
    charClass,
    ap,
    dp,
  } = payload;
  const char_class = charClass;
  const response = await fetch(`/api/characters/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      char_class,
      ap,
      dp,
    }),
  });

  if (response.ok) {
    const character = await response.json();
    dispatch(loadOneCharacter(character));
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    };
  } else {
    return ['An error occurred. Please try again.'];
  };
};

export const postCharacter = (payload) => async dispatch => {
  const {
    name,
    charClass,
    ap,
    dp,
  } = payload;
  const char_class = charClass;
  const response = await fetch(`/api/characters`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      char_class,
      ap,
      dp,
    }),
  });

  if (response.ok) {
    const character = await response.json();
    dispatch(loadOneCharacter(character));
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    };
  } else {
    return ['An error occurred. Please try again.'];
  };
};

const initialState = {};

export default function characterReducer(state = initialState, action) {
  let newState = {}
  switch (action.type) {
    case LOAD_ALL_CHARACTERS:
      if (!Object.values(action.characters).length) return newState;
      else {
        Object.values(action.characters['all_characters']).forEach(character => {
          newState[character.id] = character;
        });
        return newState
      }
    case LOAD_SINGLE_CHARACTER:
      newState = Object.assign({}, state);
      newState[action.character.id] = action.character;
      return newState;
    case DELETE_CHARACTER:
      newState = {...state}
      delete newState[action.character.id]
      return newState;
    case PURGE:
      return newState;
    default:
      return state;
  }
};
