const playlist = [
  { file: "music/typeshi/Rowdy Baby.mp3", title: "Rowdy Baby", cover: "images/typeshi/Rowdy Baby.jpg" },
  { file: "music/typeshi/Entammede Jimikki Kammal.mp3", title: "Entammede Jimikki Kammal", cover: "images/typeshi/Entammede Jimikki Kammal.jpg" },
  { file: "music/typeshi/Tum Tum (From _Enemy_).mp3", title: "Tum Tum (From  Enemy )", cover: "images/typeshi/Tum Tum (From.jpg" },
  { file: "music/typeshi/Mayya Mayya.mp3", title: "Mayya Mayya", cover: "images/typeshi/Mayya Mayya.jpg" },
  { file: "music/typeshi/Chikni Chameli.mp3", title: "Chikni Chameli", cover: "images/typeshi/Chikni Chameli.jpg" },
  { file: "music/typeshi/Kar Gayi Chull.mp3", title: "Kar Gayi Chull", cover: "images/typeshi/Kar Gayi Chull.jpg" },
  { file: "music/typeshi/Gunturu Gunturu.mp3", title: "Gunturu Gunturu", cover: "images/typeshi/Gunturu Gunturu.jpg" },
  { file: "music/typeshi/Vachinde.mp3", title: "Vachinde", cover: "images/typeshi/Vachinde.jpg" },
  { file: "music/typeshi/Chali Chaliga.mp3", title: "Chali Chaliga", cover: "images/typeshi/Chali Chaliga.jpg" },
  { file: "music/typeshi/Chimmi Chimmi - From _Urumi_.mp3", title: "Chimmi Chimmi - From  Urumi", cover: "images/typeshi/Chimmi Chimmi - From.jpg" },
  { file: "music/typeshi/Jiya Jale.mp3", title: "Jiya Jale", cover: "images/typeshi/Jiya Jale.jpg" },
  { file: "music/typeshi/Pakka Local (From _Janatha Garage_).mp3", title: "Pakka Local (From  Janatha Garage )", cover: "images/typeshi/Pakka Local (From.jpg" },
  { file: "music/typeshi/Psycho Saiyaan (From _Saaho_).mp3", title: "Psycho Saiyaan (From  Saaho )", cover: "images/typeshi/Psycho Saiyaan (From.jpg" },
  { file: "music/typeshi/3 PEG.mp3", title: "3 PEG", cover: "images/typeshi/3 PEG.jpg" },
  { file: "music/typeshi/Sonta Sonta.mp3", title: "Sonta Sonta", cover: "images/typeshi/Sonta Sonta.jpg" },
  { file: "music/typeshi/Seereli Hudugeena.mp3", title: "Seereli Hudugeena", cover: "images/typeshi/Seereli Hudugeena.jpg" },
  { file: "music/typeshi/Elanthapalam Elanthapalam.mp3", title: "Elanthapalam Elanthapalam", cover: "images/typeshi/Elanthapalam Elanthapalam.jpg" },
  { file: "music/typeshi/Unakkul Naane.mp3", title: "Unakkul Naane", cover: "images/typeshi/Unakkul Naane.jpg" },
  { file: "music/typeshi/Adiye - From _Bachelor_.mp3", title: "Adiye - From  Bachelor", cover: "images/typeshi/Adiye - From.jpg" },
  { file: "music/typeshi/Manohari.mp3", title: "Manohari", cover: "images/typeshi/Manohari.jpg" },
  { file: "music/typeshi/Dreamum Wakeupum.mp3", title: "Dreamum Wakeupum", cover: "images/typeshi/Dreamum Wakeupum.jpg" },
  { file: "music/typeshi/Malaayooru.mp3", title: "Malaayooru", cover: "images/typeshi/Malaayooru.jpg" },
  { file: "music/typeshi/Va Va Va Vannila.mp3", title: "Va Va Va Vannila", cover: "images/typeshi/Va Va Va Vannila.jpg" },
  { file: "music/typeshi/Ra Ra Rakkamma (From _Vikrant Rona_).mp3", title: "Ra Ra Rakkamma (From  Vikrant Rona )", cover: "images/typeshi/Ra Ra Rakkamma (From.jpg" },
  { file: "music/typeshi/Daddy Mummy.mp3", title: "Daddy Mummy", cover: "images/typeshi/Daddy Mummy.jpg" },
  { file: "music/typeshi/Urumila Urumila.mp3", title: "Urumila Urumila", cover: "images/typeshi/Urumila Urumila.jpg" }
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

// Set initial volume
audio.volume = volumeSlider.value;

// Show player bar
function showPlayerBar() {
  playerBar.style.display = "flex";
}

// Update player with track data
function updatePlayer(track) {
  audio.src = track.file;
  titleDisplay.textContent = track.title;
  coverDisplay.src = track.cover;
  playIcon.src = "images/icons/pause.svg";
  showPlayerBar();
  audio.play();
  updateQueueDisplay();
}

// Queue and play a song from index
function queueAndPlay(index) {
  currentTrackIndex = index;
  updatePlayer(playlist[index]);
}

// Play manually passed track
function playSong(file, title, cover) {
  const index = playlist.findIndex(song => song.file === file);
  if (index !== -1) {
    currentTrackIndex = index;
    updatePlayer(playlist[index]);
  } else {
    currentTrackIndex = null;
    updatePlayer({ file, title, cover });
  }
}

// Play/pause toggle
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

// Loop toggle
function toggleLoop() {
  isLooping = !isLooping;
  document.getElementById("loop").classList.toggle("active-glow", isLooping);
}

// Shuffle toggle
function toggleShuffle() {
  isShuffling = !isShuffling;
  document.getElementById("shuffle").classList.toggle("active-glow", isShuffling);
}

// Previous song logic
function prevSong() {
  buttonGlow("prev");
  if (currentTrackIndex === null) return;
  if (isShuffling) {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * playlist.length);
    } while (playlist.length > 1 && newIndex === currentTrackIndex);
    currentTrackIndex = newIndex;
  } else {
    currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
  }
  updatePlayer(playlist[currentTrackIndex]);
}

// Next song logic
function nextSong() {
  buttonGlow("next");
  if (queue.length > 0) {
    const track = queue.shift();
    currentTrackIndex = playlist.findIndex(s => s.file === track.file);
    updatePlayer(track);
  } else if (isShuffling) {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * playlist.length);
    } while (playlist.length > 1 && newIndex === currentTrackIndex);
    currentTrackIndex = newIndex;
    updatePlayer(playlist[currentTrackIndex]);
  } else {
    currentTrackIndex = currentTrackIndex === null ? 0 : (currentTrackIndex + 1) % playlist.length;
    updatePlayer(playlist[currentTrackIndex]);
  }
}

// Add to queue
function addToQueue(index) {
  if (index >= 0 && index < playlist.length) {
    queue.push(playlist[index]);
    updateQueueDisplay();
  }
}

// Update queue display
function updateQueueDisplay() {
  queueContent.innerHTML = queue.map(track => `
    <li class="queue-item${track.file === playlist[currentTrackIndex]?.file ? ' now-playing' : ''}">
      <img src="${track.cover}" class="queue-thumb" alt="">
      <span>${track.title}</span>
    </li>
  `).join("");
}

// Show/hide queue modal
function showQueue() {
  queueModal.classList.remove("hidden");
}
function hideQueue() {
  queueModal.classList.add("hidden");
}

// Close queue on Escape
document.addEventListener("keydown", e => {
  if (e.key === "Escape") hideQueue();
});

// Volume change listener
volumeSlider.addEventListener("input", () => {
  audio.volume = volumeSlider.value;
});

// Seekbar update on audio time change
audio.addEventListener("timeupdate", () => {
  if (!audio.duration) return;
  seekbar.value = (audio.currentTime / audio.duration) * 100;
  currentTime.textContent = formatTime(audio.currentTime);
  totalDuration.textContent = formatTime(audio.duration);
});

// Seekbar manual input
seekbar.addEventListener("input", () => {
  if (audio.duration) {
    audio.currentTime = (seekbar.value / 100) * audio.duration;
  }
});

// Auto next or loop on song end
audio.addEventListener("ended", () => {
  if (isLooping) {
    updatePlayer(playlist[currentTrackIndex]);
  } else {
    nextSong();
  }
});

// Format seconds to MM:SS
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

// Button glow effect
function buttonGlow(id) {
  const btn = document.getElementById(id);
  if (!btn) return;
  btn.classList.add("click-glow");
  setTimeout(() => btn.classList.remove("click-glow"), 300);
}

// Prevent link clicks inside song rows from interfering
document.querySelectorAll(".song-row").forEach((row, index) => {
  row.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", e => e.stopPropagation());
  });
});
