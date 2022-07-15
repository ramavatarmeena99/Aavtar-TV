export const LikeAction = (payload) => ({
  type: "LIKEDVIDEO",
  payload: payload,
});

export const HistoryAction = (payload) => ({
  type: "HISTORYVIDEO",
  payload: payload,
});

export const WatchLaterAction = (payload) => ({
  type: "WATCHLATERVIDEO",
  payload: payload,
});
export const PlayListAction = (payload) => ({
  type: "PLAYLISTVIDEO",
  payload: payload,
});

export const PlayVideoAction = (payload) => ({
  type: "PLAYVIDEO",
  payload: payload,
});
