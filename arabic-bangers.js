// arabicbangers.js
const playlist = [
  {
    file: "music/arabicbangers/Ya Tabtab Wa Dallaa.mp3",
    title: "Ya Tabtab Wa Dallaa",
    cover: "images/arabicbangers/Ya Tabtab Wa Dallaa.jpg"
  },
  {
    file: "music/arabicbangers/Shik Shak Shok.mp3",
    title: "Shik Shak Shok",
    cover: "images/arabicbangers/Shik Shak Shok.jpg"
  },
  {
    file: "music/arabicbangers/Boushret Kheir.mp3",
    title: "Boushret Kheir",
    cover: "images/arabicbangers/Boushret Kheir.jpg"
  },
  {
    file: "music/arabicbangers/Katar Khayre.mp3",
    title: "Katar Khayre",
    cover: "images/arabicbangers/Katar Khayre.jpg"
  },
  {
    file: "music/arabicbangers/Sabry Aalil.mp3",
    title: "Sabry Aalil",
    cover: "images/arabicbangers/Sabry Aalil.jpg"
  },
  {
    file: "music/arabicbangers/Ah W Noss.mp3",
    title: "Ah W Noss",
    cover: "images/arabicbangers/Ah W Noss.jpg"
  },
  {
    file: "music/arabicbangers/Inta Eyh.mp3",
    title: "Inta Eyh",
    cover: "images/arabicbangers/Inta Eyh.jpg"
  },
  {
    file: "music/arabicbangers/Elghazala Ray2a (feat. Mohamed Osama).mp3",
    title: "Elghazala Ray2a (feat. Mohamed Osama)",
    cover: "images/arabicbangers/Elghazala Ray2a (feat. Mohamed Osama).jpg"
  },
  {
    file: "music/arabicbangers/Oul Tani Eyh.mp3",
    title: "Oul Tani Eyh",
    cover: "images/arabicbangers/Oul Tani Eyh.jpg"
  },
  {
    file: "music/arabicbangers/رايحين نسهر - بام بام.mp3",
    title: "رايحين نسهر - بام بام",
    cover: "images/arabicbangers/رايحين نسهر - بام بام.jpg"
  },
  {
    file: "music/arabicbangers/Ensay.mp3",
    title: "Ensay",
    cover: "images/arabicbangers/Ensay.jpg"
  },
  {
    file: "music/arabicbangers/الوتر الحساس.mp3",
    title: "الوتر الحساس",
    cover: "images/arabicbangers/الوتر الحساس.jpg"
  },
  {
    file: "music/arabicbangers/Hasta Luego (feat. Zouhair Bahaoui & Chk).mp3",
    title: "Hasta Luego (feat. Zouhair Bahaoui & Chk)",
    cover: "images/arabicbangers/Hasta Luego (feat. Zouhair Bahaoui.jpg"
  },
  {
    file: "music/arabicbangers/ماس ولولي.mp3",
    title: "ماس ولولي",
    cover: "images/arabicbangers/ماس ولولي.jpg"
  },
  {
    file: "music/arabicbangers/مهرجان اسكت يا قلبي.mp3",
    title: "مهرجان اسكت يا قلبي",
    cover: "images/arabicbangers/مهرجان اسكت يا قلبي.jpg"
  },
  {
    file: "music/arabicbangers/Ah Ya Alby.mp3",
    title: "Ah Ya Alby",
    cover: "images/arabicbangers/Ah Ya Alby.jpg"
  },
  {
    file: "music/arabicbangers/الواوا.mp3",
    title: "الواوا",
    cover: "images/arabicbangers/الواوا.jpg"
  },
  {
    file: "music/arabicbangers/Qalb Qalb.mp3",
    title: "Qalb Qalb",
    cover: "images/arabicbangers/Qalb Qalb.jpg"
  },
  {
    file: "music/arabicbangers/Mesytara.mp3",
    title: "Mesytara",
    cover: "images/arabicbangers/Mesytara.jpg"
  },
  {
    file: "music/arabicbangers/حبه جنة.mp3",
    title: "حبه جنة",
    cover: "images/arabicbangers/حبه جنة.jpg"
  },
  {
    file: "music/arabicbangers/El Bint El Awiye.mp3",
    title: "El Bint El Awiye",
    cover: "images/arabicbangers/El Bint El Awiye.jpg"
  },
  {
    file: "music/arabicbangers/Shou Helou.mp3",
    title: "Shou Helou",
    cover: "images/arabicbangers/Shou Helou.jpg"
  },
  {
    file: "music/arabicbangers/El Donia Helwa.mp3",
    title: "El Donia Helwa",
    cover: "images/arabicbangers/El Donia Helwa.jpg"
  },
  {
    file: "music/arabicbangers/ملعون ابو العشق.mp3",
    title: "ملعون ابو العشق",
    cover: "images/arabicbangers/ملعون ابو العشق.jpg"
  },
  {
    file: "music/arabicbangers/Awel Ma Sahabat Hazami.mp3",
    title: "Awel Ma Sahabat Hazami",
    cover: "images/arabicbangers/Awel Ma Sahabat Hazami.jpg"
  },
  {
    file: "music/arabicbangers/Habibty.mp3",
    title: "Habibty",
    cover: "images/arabicbangers/Habibty.jpg"
  },
  {
    file: "music/arabicbangers/Mal Hbibi.mp3",
    title: "Mal Hbibi",
    cover: "images/arabicbangers/Mal Hbibi.jpg"
  },
  {
    file: "music/arabicbangers/Lamaallem.mp3",
    title: "Lamaallem",
    cover: "images/arabicbangers/Lamaallem.jpg"
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
