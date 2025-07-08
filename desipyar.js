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
