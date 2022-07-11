const initialState = {
  data: [],
};

const likevideoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LIKEDVIDEO": {
      return { ...state, data: action.payload };
    }

    default:
      return state;
  }
};

export default likevideoReducer;
