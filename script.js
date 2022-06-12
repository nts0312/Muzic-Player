const music = document.querySelector("audio");
const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const image = document.querySelector("img");
const title = document.getElementById("title");
const artist = document.getElementById("artist");

let songIndex = 0;

const songsList = [
  {
    name: "anger",
    songTitle: "Anger Machine",
    artistName: "Jr.",
  },
  {
    name: "future",
    songTitle: "Future Talks",
    artistName: "Jr.",
  },
  {
    name: "nature",
    songTitle: "Nature Time",
    artistName: "Jr.",
  },
  {
    name: "soul",
    songTitle: "Soul",
    artistName: "Jr.",
  },
  {
    name: "serenity",
    songTitle: "Serenity",
    artistName: "Jr.",
  },
];

let isPlay = false;

function playSong() {
  isPlay = true;
  playBtn.classList.replace("fa-play", "fa-pause");
  playBtn.setAttribute("title", "Pause");
  music.play();
}

function pauseSong() {
  isPlay = false;
  playBtn.classList.replace("fa-pause", "fa-play");
  playBtn.setAttribute("title", "Play");
  music.pause();
}

playBtn.addEventListener("click", () => {
  isPlay ? pauseSong() : playSong();
});

function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songsList.length - 1;
  }

  loadSong(songsList[songIndex]);
  playSong();
}

function nextSong() {
  songIndex++;
  if (songIndex > songsList.length - 1) {
    songIndex = 0;
  }

  loadSong(songsList[songIndex]);
  playSong();
}

function loadSong(song) {
  title.textContent = song.songTitle;
  artist.textContent = song.artistName;
  music.src = `music/${song.name}.mp3`;
  image.src = `img/${song.name}.jpeg`;
  console.log(music.src);
}

loadSong(songsList[2]);

prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
