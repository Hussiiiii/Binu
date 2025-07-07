const playlist = [
  { file: "music/mood/Yes Indeed.mp3", title: "Yes Indeed", cover: "images/mood/Yes Indeed.jpg" },
  { file: "music/mood/I'm Upset.mp3", title: "I'm Upset", cover: "images/mood/I'm Upset.jpg" },
  { file: "music/mood/Wake Up in the Sky.mp3", title: "Wake Up in the Sky", cover: "images/mood/Wake Up in the Sky.jpg" },
  { file: "music/mood/HIGHEST IN THE ROOM.mp3", title: "HIGHEST IN THE ROOM", cover: "images/mood/HIGHEST IN THE ROOM.jpg" },
  { file: "music/mood/Drip Too Hard (Lil Baby & Gunna).mp3", title: "Drip Too Hard (Lil Baby & Gunna)", cover: "images/mood/Drip Too Hard (Lil Baby.jpg" },
  { file: "music/mood/Walk It Talk It.mp3", title: "Walk It Talk It", cover: "images/mood/Walk It Talk It.jpg" },
  { file: "music/mood/goosebumps.mp3", title: "goosebumps", cover: "images/mood/goosebumps.jpg" },
  { file: "music/mood/Taste (feat. Offset).mp3", title: "Taste (feat. Offset)", cover: "images/mood/Taste (feat. Offset).jpg" },
  { file: "music/mood/Bank Account.mp3", title: "Bank Account", cover: "images/mood/Bank Account.jpg" },
  { file: "music/mood/God's Plan.mp3", title: "God's Plan", cover: "images/mood/God's Plan.jpg" },
  { file: "music/mood/I Love It (& Lil Pump).mp3", title: "I Love It (& Lil Pump)", cover: "images/mood/I Love It (.jpg" },
  { file: "music/mood/pushin P (feat. Young Thug).mp3", title: "pushin P (feat. Young Thug)", cover: "images/mood/pushin P (feat. Young Thug).jpg" },
  { file: "music/mood/Way 2 Sexy (with Future & Young Thug).mp3", title: "Way 2 Sexy (with Future & Young Thug)", cover: "images/mood/Way 2 Sexy (with Future.jpg" },
  { file: "music/mood/Monëy so big.mp3", title: "Monëy so big", cover: "images/mood/Monëy so big.jpg" },
  { file: "music/mood/EA (feat. 21 Savage).mp3", title: "EA (feat. 21 Savage)", cover: "images/mood/EA (feat. 21 Savage).jpg" },
  { file: "music/mood/U Are My High (with Future).mp3", title: "U Are My High (with Future)", cover: "images/mood/U Are My High (with Future).jpg" },
  { file: "music/mood/Top Off.mp3", title: "Top Off", cover: "images/mood/Top Off.jpg" },
  { file: "music/mood/His & Hers (feat. Don Toliver, Lil Uzi Vert & Gunna) - Internet Money.mp3", title: "His & Hers (feat. Don Toliver, Lil Uzi Vert & Gunna)", cover: "images/mood/His.jpg" },
  { file: "music/mood/In My Feelings.mp3", title: "In My Feelings", cover: "images/mood/In My Feelings.jpg" },
  { file: "music/mood/Swang.mp3", title: "Swang", cover: "images/mood/Swang.jpg" },
  { file: "music/mood/Life Goes On.mp3", title: "Life Goes On", cover: "images/mood/Life Goes On.jpg" },
  { file: "music/mood/fukumean.mp3", title: "fukumean", cover: "images/mood/fukumean.jpg" },
  { file: "music/mood/P power (feat. Drake).mp3", title: "P power (feat. Drake)", cover: "images/mood/P power (feat. Drake).jpg" },
  { file: "music/mood/a lot.mp3", title: "a lot", cover: "images/mood/a lot.jpg" },
  { file: "music/mood/20 Min.mp3", title: "20 Min", cover: "images/mood/20 Min.jpg" },
  { file: "music/mood/REEL IT IN.mp3", title: "REEL IT IN", cover: "images/mood/REEL IT IN.jpg" },
  { file: "music/mood/Sky.mp3", title: "Sky", cover: "images/mood/Sky.jpg" },
  { file: "music/mood/OUT WEST (feat. Young Thug).mp3", title: "OUT WEST (feat. Young Thug)", cover: "images/mood/OUT WEST (feat. Young Thug).jpg" },
  { file: "music/mood/ORANGE SODA.mp3", title: "ORANGE SODA", cover: "images/mood/ORANGE SODA.jpg" },
  { file: "music/mood/Out thë way.mp3", title: "Out thÃ« way", cover: "images/mood/Out thë way.jpg" },
  { file: "music/mood/Space Cadet (feat. Gunna).mp3", title: "Space Cadet (feat. Gunna)", cover: "images/mood/Space Cadet (feat. Gunna).jpg" },
  { file: "music/mood/five.mp3", title: "5% TINT", cover: "images/mood/five.jpg" },
  { file: "music/mood/o you.mp3", title: "ball w/o you", cover: "images/mood/a lot.jpg" },
  { file: "music/mood/Hot (Remix) [feat. Gunna and Travis Scott].mp3", title: "Hot (Remix) [feat. Gunna and Travis Scott]", cover: "images/mood/Hot (Remix) [feat. Gunna and Travis Scott].jpg" },
  { file: "music/mood/Runnin.mp3", title: "Runnin", cover: "images/mood/Runnin.jpg" },
  { file: "music/mood/Magnolia.mp3", title: "Magnolia", cover: "images/mood/Magnolia.jpg" },
  { file: "music/mood/Roll in Peace (feat. XXXTENTACION).mp3", title: "Roll in Peace (feat. XXXTENTACION)", cover: "images/mood/Roll in Peace (feat. XXXTENTACION).jpg" },
  { file: "music/mood/Pure Cocaine.mp3", title: "Pure Cocaine", cover: "images/mood/Pure Cocaine.jpg" },
  { file: "music/mood/Never Recover (Lil Baby & Gunna, Drake).mp3", title: "Never Recover (Lil Baby & Gunna, Drake)", cover: "images/mood/Never Recover (Lil Baby.jpg" },
  { file: "music/mood/Pussy & Millions (feat. Travis Scott).mp3", title: "Pussy & Millions (feat. Travis Scott)", cover: "images/mood/Pussy.jpg" },
  { file: "music/mood/Not Like Us.mp3", title: "Not Like Us", cover: "images/mood/Not Like Us.jpg" },
  { file: "music/mood/euphoria.mp3", title: "euphoria", cover: "images/mood/euphoria.jpg" },
  { file: "music/mood/Type Shit.mp3", title: "Type Shit", cover: "images/mood/Type Shit.jpg" },
  { file: "music/mood/redrum.mp3", title: "redrum", cover: "images/mood/redrum.jpg" },
  { file: "music/mood/Like That.mp3", title: "Like That", cover: "images/mood/Like That.jpg" },
  { file: "music/mood/meet the grahams.mp3", title: "meet the grahams", cover: "images/mood/meet the grahams.jpg" }
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
