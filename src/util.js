// export const playAudio = (isPlaying, audioRef) => {
//   if (isPlaying) {
//     const playPromise = audioRef.current.play();
//     if (playPromise !== undefined) {
//       playPromise
//         .then((audio) => {
//           audioRef.current.play();
//         })
//         .catch((error) => console.log(error));
//     }
//   }
// };

import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Cruisin",
      artist: "Loop Schrauber, TRIBEZ",
      cover: "https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-1024x1024.jpg",
      id: uuidv4(),
      active: true,
      color: ["#E1C9C9", "#9F80B2"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10321",
    },
    {
      name: "Falling Short",
      artist: "Hanz",
      cover: "https://chillhop.com/wp-content/uploads/2021/08/b0bb2309d0c8fe0a32907ecddab689501b7de5cf-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#727494", "#E29193"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=24643",
    },
    {
      name: "Lake",
      artist: "dryhope",
      cover: "https://chillhop.com/wp-content/uploads/2020/07/c85a5f6166a48001820ba3dc7e1da639281e00b3-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#C1BEAB", "#FCAD76"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=41687",
    },
    {
      name: "Iridescence",
      artist: "G Mills",
      cover: "https://chillhop.com/wp-content/uploads/2020/07/c85a5f6166a48001820ba3dc7e1da639281e00b3-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#FEDAA3", "#759499"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8873",
    }
  ]
}

export default chillHop();