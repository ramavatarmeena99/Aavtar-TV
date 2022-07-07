import { AiFillHome } from "react-icons/ai";
import { MdPlaylistPlay } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { MdHistory } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";

export const Navigations = [
  {
    id: 1,
    icon: AiFillHome,
    title: "Home",
    route: "videoList",
  },
  {
    id: 2,
    icon: MdPlaylistPlay,
    title: "Playlists",
    route: "playList",
  },
  {
    id: 3,
    icon: AiFillHeart,
    title: "Liked",
    route: "liked",
  },
  {
    id: 4,
    icon: MdHistory,
    title: "History",
    route: "history",
  },
  {
    id: 5,
    icon: MdOutlineWatchLater,
    title: "Watch Later",
    route: "watchlater",
  },
];

export const TagsTitle = [
  { id: 1, tagTitle: "All" },
  { id: 2, tagTitle: "Astrophysics" },
  { id: 3, tagTitle: "Astrobiology" },
  { id: 4, tagTitle: "Cosmic Mysteries" },
  { id: 5, tagTitle: "Universe" },
];
