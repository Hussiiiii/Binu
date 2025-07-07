const playlist = [
  {
    file: "music/hightime/ Candy Shop.mp3",
    title: "Candy Shop",
    cover: "images/hightime/Candy Shop.jpg"
  },
  {
    file: "music/hightime/ Come My Way.mp3",
    title: "Come My Way",
    cover: "images/hightime/Come My Way.jpg"
  },
  {
    file: "music/hightime/ No Guidance (feat. Drake).mp3",
    title: "No Guidance (feat. Drake)",
    cover: "images/hightime/No Guidance (feat. Drake).jpg"
  },
  {
    file: "music/hightime/ Impatient (feat. Coi Leray).mp3",
    title: "Impatient (feat. Coi Leray)",
    cover: "images/hightime/Impatient (feat. Coi Leray).jpg"
  },
  {
    file: "music/hightime/ Like That (feat. Gucci Mane).mp3",
    title: "Like That (feat. Gucci Mane)",
    cover: "images/hightime/Like That (feat. Gucci Mane).jpg"
  },
  {
    file: "music/hightime/ Lights Down Low (feat. Waka Flocka Flame).mp3",
    title: "Lights Down Low (feat. Waka Flocka Flame)",
    cover: "images/hightime/Lights Down Low (feat. Waka Flocka Flame).jpg"
  },
  {
    file: "music/hightime/ Juicy.mp3",
    title: "Juicy",
    cover: "images/hightime/Juicy.jpg"
  },
  {
    file: "music/hightime/ The Take (feat. Chris Brown).mp3",
    title: "The Take (feat. Chris Brown)",
    cover: "images/hightime/The Take (feat. Chris Brown).jpg"
  },
  {
    file: "music/hightime/ Drunk And Nasty (feat. Sharc).mp3",
    title: "Drunk And Nasty (feat. Sharc)",
    cover: "images/hightime/Drunk And Nasty (feat. Sharc).jpg"
  },
  {
    file: "music/hightime/ TKN (feat. Travis Scott).mp3",
    title: "TKN (feat. Travis Scott)",
    cover: "images/hightime/TKN (feat. Travis Scott).jpg"
  },
  {
    file: "music/hightime/ Yo x Ti, Tu x Mi.mp3",
    title: "Yo x Ti, Tu x Mi",
    cover: "images/hightime/Yo x Ti, Tu x Mi.jpg"
  },
  {
    file: "music/hightime/ No Idea.mp3",
    title: "No Idea",
    cover: "images/hightime/No Idea.jpg"
  },
  {
    file: "music/hightime/ OUT WEST (feat. Young Thug).mp3",
    title: "OUT WEST (feat. Young Thug)",
    cover: "images/hightime/OUT WEST (feat. Young Thug).jpg"
  },
  {
    file: "music/hightime/ My Way.mp3",
    title: "My Way",
    cover: "images/hightime/My Way.jpg"
  },
  {
    file: "music/hightime/ City Girls.mp3",
    title: "City Girls",
    cover: "images/hightime/City Girls.jpg"
  },
  {
    file: "music/hightime/ Bitch Better Have My Money.mp3",
    title: "Bitch Better Have My Money",
    cover: "images/hightime/Bitch Better Have My Money.jpg"
  },
  {
    file: "music/hightime/ Beautiful Liar.mp3",
    title: "Beautiful Liar",
    cover: "images/hightime/Beautiful Liar.jpg"
  },
  {
    file: "music/hightime/ White Tee (with NO1-NOAH).mp3",
    title: "White Tee (with NO1-NOAH)",
    cover: "images/hightime/White Tee (with NO1-NOAH).jpg"
  },
  {
    file: "music/hightime/ All I Need.mp3",
    title: "All I Need",
    cover: "images/hightime/All I Need.jpg"
  },
  {
    file: "music/hightime/ For The Night (feat. Lil Baby & DaBaby).mp3",
    title: "For The Night (feat. Lil Baby & DaBaby)",
    cover: "images/hightime/For The Night (feat. Lil Baby.jpg"
  },
  {
    file: "music/hightime/ Partition.mp3",
    title: "Partition",
    cover: "images/hightime/Partition.jpg"
  },
  {
    file: "music/hightime/ One Dance.mp3",
    title: "One Dance",
    cover: "images/hightime/One Dance.jpg"
  },
  {
    file: "music/hightime/ So High.mp3",
    title: "So High",
    cover: "images/hightime/So High.jpg"
  },
  {
    file: "music/hightime/ All Mine.mp3",
    title: "All Mine",
    cover: "images/hightime/All Mine.jpg"
  },
  {
    file: "music/hightime/ Wheelie (feat. 21 Savage).mp3",
    title: "Wheelie (feat. 21 Savage)",
    cover: "images/hightime/Wheelie (feat. 21 Savage).jpg"
  },
  {
    file: "music/hightime/ Raat Kamaal Hai.mp3",
    title: "Raat Kamaal Hai",
    cover: "images/hightime/Raat Kamaal Hai.jpg"
  },
  {
    file: "music/hightime/ Trust Issues.mp3",
    title: "Trust Issues",
    cover: "images/hightime/Trust Issues.jpg"
  },
  {
    file: "music/hightime/ Excitement.mp3",
    title: "Excitement",
    cover: "images/hightime/Excitement.jpg"
  },
  {
    file: "music/hightime/ 2 On (feat. ScHoolboy Q).mp3",
    title: "2 On (feat. ScHoolboy Q)",
    cover: "images/hightime/2 On (feat. ScHoolboy Q).jpg"
  },
  {
    file: "music/hightime/ Gata Only.mp3",
    title: "Gata Only",
    cover: "images/hightime/Gata Only.jpg"
  },
  {
    file: "music/hightime/ Love Talk - English Version.mp3",
    title: "Love Talk - English Version",
    cover: "images/hightime/Love Talk - English Version.jpg"
  },
  {
    file: "music/hightime/ PELIGROSA.mp3",
    title: "PELIGROSA",
    cover: "images/hightime/PELIGROSA.jpg"
  }
];


let currentTrackIndex = null;
let isLooping = false;
let isShuffling = false;
let queue = [];

const audio = document.getElementById("audio-player");
const seekbar = document.getElementById("seekbar");
const volumeSlider = document.getElementById("volume");
const currentTime = document.getElementById("current-time");
const totalDuration = document.getElementById("total-duration");
const titleDisplay = document.getElementById("player-title");
const coverDisplay = document.getElementById("player-cover");
const playIcon = document.getElementById("play-icon");
const playerBar = document.getElementById("custom-player");
const queueModal = document.getElementById("queue-modal");
const queueContent = document.getElementById("queue-list");

function showPlayerBar() {
  playerBar.style.display = "flex";
}

function updatePlayer(track) {
  audio.src = track.file;
  titleDisplay.textContent = track.title;
  coverDisplay.src = track.cover;
  playIcon.src = "images/icons/pause.svg";
  showPlayerBar();
  audio.play();
}

function queueAndPlay(index) {
  currentTrackIndex = index;
  updatePlayer(playlist[index]);
}

function playSong(file, title, cover) {
  const index = playlist.findIndex(song => song.file === file);
  if (index !== -1) currentTrackIndex = index;
  updatePlayer({ file, title, cover });
}

function togglePlay() {
  buttonGlow("play-pause");
  if (audio.paused) {
    audio.play();
    playIcon.src = "images/icons/pause.svg";
  } else {
    audio.pause();
    playIcon.src = "images/icons/play.svg";
  }
}

function toggleLoop() {
  isLooping = !isLooping;
  document.getElementById("loop").classList.toggle("active-glow", isLooping);
}

function toggleShuffle() {
  isShuffling = !isShuffling;
  document.getElementById("shuffle").classList.toggle("active-glow", isShuffling);
}

function prevSong() {
  buttonGlow("prev");
  if (currentTrackIndex === null) return;
  if (isShuffling) {
    currentTrackIndex = Math.floor(Math.random() * playlist.length);
  } else {
    currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
  }
  updatePlayer(playlist[currentTrackIndex]);
}

function nextSong() {
  buttonGlow("next");
  if (queue.length > 0) {
    const track = queue.shift();
    currentTrackIndex = playlist.findIndex(s => s.file === track.file);
    updatePlayer(track);
    updateQueueDisplay();
  } else if (isShuffling) {
    currentTrackIndex = Math.floor(Math.random() * playlist.length);
    updatePlayer(playlist[currentTrackIndex]);
  } else {
    currentTrackIndex = currentTrackIndex === null ? 0 : (currentTrackIndex + 1) % playlist.length;
    updatePlayer(playlist[currentTrackIndex]);
  }
}

function addToQueue(index) {
  if (index >= 0 && index < playlist.length) {
    queue.push(playlist[index]);
    updateQueueDisplay();
  }
}

function updateQueueDisplay() {
  queueContent.innerHTML = queue.map(track => `
    <li class="queue-item">
      <img src="${track.cover}" class="queue-thumb" alt="">
      <span>${track.title}</span>
    </li>
  `).join("");
}

function showQueue() {
  queueModal.classList.remove("hidden");
}

function hideQueue() {
  queueModal.classList.add("hidden");
}

volumeSlider.addEventListener("input", () => {
  audio.volume = volumeSlider.value;
});

audio.addEventListener("timeupdate", () => {
  if (!audio.duration) return;
  seekbar.value = (audio.currentTime / audio.duration) * 100;
  currentTime.textContent = formatTime(audio.currentTime);
  totalDuration.textContent = formatTime(audio.duration);
});

seekbar.addEventListener("input", () => {
  if (audio.duration) {
    audio.currentTime = (seekbar.value / 100) * audio.duration;
  }
});

audio.addEventListener("ended", () => {
  if (isLooping) {
    updatePlayer(playlist[currentTrackIndex]);
  } else {
    nextSong();
  }
});

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

function buttonGlow(id) {
  const btn = document.getElementById(id);
  if (!btn) return;
  btn.classList.add("click-glow");
  setTimeout(() => btn.classList.remove("click-glow"), 300);
}

// Prevent Spotify/YT buttons from triggering song play
const songRows = document.querySelectorAll(".song-row");
songRows.forEach((row, index) => {
  const links = row.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("click", e => e.stopPropagation());
  });
});
