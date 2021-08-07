const LOAD_ALL_GRINDS = 'stocks/LOAD_ALL_GRINDS';
const LOAD_SINGLE_GRIND = 'stocks/LOAD_SINGLE_GRIND';
const DELETE_GRIND = 'stocks/DELETE_GRIND';

const loadAllGrinds = grinds => ({
  type: LOAD_ALL_GRINDS,
  grinds,
});

const loadOneGrind = grind => ({
  type: LOAD_SINGLE_GRIND,
  grind,
});

const deleteOne = (grind) => ({
  type: DELETE_GRIND,
  grind,
});

export const getSingleGrind = (grindId) => async dispatch => {
  const response = await fetch(`/api/grinds/${grindId}`);

  if (response.ok) {
    const grind = await response.json();
    dispatch(loadOneGrind(grind));
  };
};

export const getAllGrinds = (location) => async dispatch => {
  const response = await fetch(`/api/grinds/${location}`);

  if (response.ok) {
    const grinds = await response.json();
    dispatch(loadAllGrinds(grinds));
  };
};

// export const getMyGrinds = () => async dispatch => {
//   const response = await fetch(`/api/grinds/my-grinds`);

//   if (response.ok) {
//     const grinds = await response.json();
//     dispatch(loadAllGrinds(grinds));
//   };
// };

export const deleteGrind = (id) => async (dispatch) => {
  const response = await fetch(`/api/grinds/${id}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    const grind = await response.json();
    dispatch(deleteOne(grind));
  }
};

export const editGrind = (payload) => async (dispatch) => {
  const {
    id,
    location,
    charClass,
    ap,
    dp,
    time,
    silver,
    trash
  } = payload;
  const char_class = charClass;
  const response = await fetch(`/api/grinds/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      location,
      char_class,
      ap,
      dp,
      time,
      silver,
      trash
    }),
  });

  if (response.ok) {
    const grind = await response.json();
    dispatch(loadOneGrind(grind));
  }
};

export const postGrindSession = (payload) => async dispatch => {
  const {
    location,
    charClass,
    ap,
    dp,
    time,
    silver,
    trash
  } = payload;
  const char_class = charClass;
  const response = await fetch(`/api/grinds`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      location,
      char_class,
      ap,
      dp,
      time,
      silver,
      trash
    }),
  });

  if (response.ok) {
    const grind = await response.json();
    dispatch(loadOneGrind(grind));
  };
};

const initialState = {};

export default function grindReducer(state = initialState, action) {
  let newState = {}
  switch (action.type) {
    case LOAD_ALL_GRINDS:
      if (!Object.values(action.grinds).length) return newState;
      else {
        Object.values(action.grinds['all_grind_sessions']).forEach(grind => {
          newState[grind.id] = grind;
        });
        return newState
      }
    case LOAD_SINGLE_GRIND:
      newState = Object.assign({}, state);
      newState[action.grind.id] = action.grind;
      return newState;
    case DELETE_GRIND:
      newState = {...state}
      delete newState[action.grind.id]
      return newState;
    default:
      return state;
  }
};
