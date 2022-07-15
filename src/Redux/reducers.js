const initialState = {
  likedata: [],
  watchlaterdata: [],
  playlistdata: [],
};

const videoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LIKEDVIDEO": {
      return { ...state, likedata: action.payload };
    }
    case "WATCHLATERVIDEO": {
      return { ...state, watchlaterdata: action.payload };
    }
    case "PLAYLISTVIDEO": {
      return { ...state, playlistdata: action.payload };
    }
    default:
      return state;
  }
};

export default videoReducer;
