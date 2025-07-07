const playlist = [
  { file: "music/dopeshope/Yeh Baby.mp3", title: "Yeh Baby", cover: "images/dopeshope/Yeh Baby.jpg" },
  { file: "music/dopeshope/Baller.mp3", title: "Baller", cover: "images/dopeshope/Baller.jpg" },
  { file: "music/dopeshope/Born to Shine.mp3", title: "Born to Shine", cover: "images/dopeshope/Born to Shine.jpg" },
  { file: "music/dopeshope/Do You Know.mp3", title: "Do You Know", cover: "images/dopeshope/Do You Know.jpg" },
  { file: "music/dopeshope/Wakhra Swag.mp3", title: "Wakhra Swag", cover: "images/dopeshope/Wakhra Swag.jpg" },
  { file: "music/dopeshope/8 Parche.mp3", title: "8 Parche", cover: "images/dopeshope/8 Parche.jpg" },
  { file: "music/dopeshope/Getup Jawani.mp3", title: "Getup Jawani", cover: "images/dopeshope/Getup Jawani.jpg" },
  { file: "music/dopeshope/Ik Tera.mp3", title: "Ik Tera", cover: "images/dopeshope/Ik Tera.jpg" },
  { file: "music/dopeshope/Sahiba.mp3", title: "Sahiba", cover: "images/dopeshope/Sahiba.jpg" },
  { file: "music/dopeshope/Daru Badnaam.mp3", title: "Daru Badnaam", cover: "images/dopeshope/Daru Badnaam.jpg" },
  { file: "music/dopeshope/Pagol.mp3", title: "Pagol", cover: "images/dopeshope/Pagol.jpg" },
  { file: "music/dopeshope/Backbone.mp3", title: "Backbone", cover: "images/dopeshope/Backbone.jpg" },
  { file: "music/dopeshope/Same Beef.mp3", title: "Same Beef", cover: "images/dopeshope/Same Beef.jpg" },
  { file: "music/dopeshope/Hornn Blow.mp3", title: "Hornn Blow", cover: "images/dopeshope/Hornn Blow.jpg" },
  { file: "music/dopeshope/Laal Bindi.mp3", title: "Laal Bindi", cover: "images/dopeshope/Laal Bindi.jpg" },
  { file: "music/dopeshope/No Competition.mp3", title: "No Competition", cover: "images/dopeshope/No Competition.jpg" },
  { file: "music/dopeshope/Ishare Tere (From _Ishare Tere_).mp3", title: "Ishare Tere (From  Ishare Tere )", cover: "images/dopeshope/Ishare Tere (From.jpg" },
  { file: "music/dopeshope/We Rollin.mp3", title: "We Rollin", cover: "images/dopeshope/We Rollin.jpg" },
  { file: "music/dopeshope/Excuses.mp3", title: "Excuses", cover: "images/dopeshope/Excuses.jpg" },
  { file: "music/dopeshope/Na Ja.mp3", title: "Na Ja", cover: "images/dopeshope/Na Ja.jpg" },
  { file: "music/dopeshope/Kya Baat Ay.mp3", title: "Kya Baat Ay", cover: "images/dopeshope/Kya Baat Ay.jpg" },
  { file: "music/dopeshope/Jatt Da Muqabala.mp3", title: "Jatt Da Muqabala", cover: "images/dopeshope/Jatt Da Muqabala.jpg" },
  { file: "music/dopeshope/Call Aundi.mp3", title: "Call Aundi", cover: "images/dopeshope/Call Aundi.jpg" },
  { file: "music/dopeshope/One Bottle Down.mp3", title: "One Bottle Down", cover: "images/dopeshope/One Bottle Down.jpg" },
  { file: "music/dopeshope/High Heels.mp3", title: "High Heels", cover: "images/dopeshope/High Heels.jpg" },
  { file: "music/dopeshope/She Don't Know (From _Blessed_).mp3", title: "She Don't Know (From  Blessed )", cover: "images/dopeshope/She Don't Know (From.jpg" },
  { file: "music/dopeshope/Lahore (From _Lahore_).mp3", title: "Lahore (From  Lahore )", cover: "images/dopeshope/Lahore (From.jpg" },
  { file: "music/dopeshope/Dance Like.mp3", title: "Dance Like", cover: "images/dopeshope/Dance Like.jpg" },
  { file: "music/dopeshope/Nazar Lag Jayegi (From _Nazar Lag Jayegi_).mp3", title: "Nazar Lag Jayegi (From  Nazar Lag Jayegi )", cover: "images/dopeshope/Nazar Lag Jayegi (From.jpg" },
  { file: "music/dopeshope/High Rated Gabru (From _High Rated Gabru_).mp3", title: "High Rated Gabru (From  High Rated Gabru )", cover: "images/dopeshope/High Rated Gabru (From.jpg" },
  { file: "music/dopeshope/Downtown (From _Downtown_).mp3", title: "Downtown (From  Downtown )", cover: "images/dopeshope/Downtown (From.jpg" },
  { file: "music/dopeshope/Naah.mp3", title: "Naah", cover: "images/dopeshope/Naah.jpg" },
  { file: "music/dopeshope/Tere Te (From _Tere Te_).mp3", title: "Tere Te (From  Tere Te )", cover: "images/dopeshope/Nazar Lag Jayegi (From.jpg" },
  { file: "music/dopeshope/Hulara.mp3", title: "Hulara", cover: "images/dopeshope/Hulara.jpg" },
  { file: "music/dopeshope/Made In India (From _Made In India_).mp3", title: "Made In India (From  Made In India )", cover: "images/dopeshope/Made In India (From.jpg" },
  { file: "music/dopeshope/Patola (From _Patola_) (feat. Bohemia).mp3", title: "Patola (From  Patola ) (feat. Bohemia)", cover: "images/dopeshope/Patola (From.jpg" },
  { file: "music/dopeshope/Buzz (feat. Badshah).mp3", title: "Buzz (feat. Badshah)", cover: "images/dopeshope/Buzz (feat. Badshah).jpg" },
  { file: "music/dopeshope/Dheere Dheere.mp3", title: "Dheere Dheere", cover: "images/dopeshope/Dheere Dheere.jpg" },
  { file: "music/dopeshope/Chaar Botal Vodka (From _Ragini Mms 2_).mp3", title: "Chaar Botal Vodka (From  Ragini Mms 2 )", cover: "images/dopeshope/Chaar Botal Vodka (From.jpg" },
  { file: "music/dopeshope/Lagdi Hai Thaai (From _Simran_).mp3", title: "Lagdi Hai Thaai (From  Simran )", cover: "images/dopeshope/Lagdi Hai Thaai (From.jpg" },
  { file: "music/dopeshope/Proper Patola (From _Proper Patola_) (feat. Badshah).mp3", title: "Proper Patola (From  Proper Patola ) (feat. Badshah)", cover: "images/dopeshope/Proper Patola (From.jpg" },
  { file: "music/dopeshope/Kinni Kinni.mp3", title: "Kinni Kinni", cover: "images/dopeshope/Kinni Kinni.jpg" },
  { file: "music/dopeshope/Hass Hass.mp3", title: "Hass Hass", cover: "images/dopeshope/Hass Hass.jpg" },
  { file: "music/dopeshope/Lemonade.mp3", title: "Lemonade", cover: "images/dopeshope/Lemonade.jpg" },
  { file: "music/dopeshope/Suit Suit.mp3", title: "Suit Suit", cover: "images/dopeshope/Suit Suit.jpg" },
  { file: "music/dopeshope/Mi Amor.mp3", title: "Mi Amor", cover: "images/dopeshope/Mi Amor.jpg" },
  { file: "music/dopeshope/Admirin' You (feat. Preston Pablo).mp3", title: "Admirin' You (feat. Preston Pablo)", cover: "images/dopeshope/Admirin' You (feat. Preston Pablo).jpg" },
  { file: "music/dopeshope/Softly.mp3", title: "Softly", cover: "images/dopeshope/Softly.jpg" },
  { file: "music/dopeshope/Winning Speech.mp3", title: "Winning Speech", cover: "images/dopeshope/Winning Speech.jpg" },
  { file: "music/dopeshope/Tareefan.mp3", title: "Tareefan", cover: "images/dopeshope/Tareefan.jpg" },
  { file: "music/dopeshope/SPAIN.mp3", title: "SPAIN", cover: "images/dopeshope/SPAIN.jpg" },
  { file: "music/dopeshope/Kamlee.mp3", title: "Kamlee", cover: "images/dopeshope/Kamlee.jpg" },
  { file: "music/dopeshope/Noormahal.mp3", title: "Noormahal", cover: "images/dopeshope/Noormahal.jpg" },
  { file: "music/dopeshope/410.mp3", title: "410", cover: "images/dopeshope/410.jpg" },
  { file: "music/dopeshope/Love Ya.mp3", title: "Love Ya", cover: "images/dopeshope/Love Ya.jpg" },
  { file: "music/dopeshope/Safar.mp3", title: "Safar", cover: "images/dopeshope/Safar.jpg" },
  { file: "music/dopeshope/Moon Rise.mp3", title: "Moon Rise", cover: "images/dopeshope/Moon Rise.jpg" },
  { file: "music/dopeshope/Afsanay.mp3", title: "Afsanay", cover: "images/dopeshope/Afsanay.jpg" },
  { file: "music/dopeshope/Hola Amigo.mp3", title: "Hola Amigo", cover: "images/dopeshope/Hola Amigo.jpg" },
  { file: "music/dopeshope/So High.mp3", title: "So High", cover: "images/dopeshope/So High.jpg" },
  { file: "music/dopeshope/100 Million.mp3", title: "100 Million", cover: "images/dopeshope/100 Million.jpg" },
  { file: "music/dopeshope/Top Class _ Overseas.mp3", title: "Top Class / Overseas", cover: "images/dopeshope/Overseas.jpg" },
  { file: "music/dopeshope/Russian Bandana.mp3", title: "Russian Bandana", cover: "images/dopeshope/Russian Bandana.jpg" }
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
