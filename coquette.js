
const playlist = [
  { file: "music/coquette/Eyes Off You.mp3", title: "Eyes Off You", cover: "images/coquette/Eyes Off You.jpg" },
  { file: "music/coquette/Just for Me.mp3", title: "Just for Me", cover: "images/coquette/Just for Me.jpg" },
  { file: "music/coquette/moment.mp3", title: "moment", cover: "images/coquette/moment.jpg" },
  { file: "music/coquette/Fell In Luv (feat. Bryson Tiller).mp3", title: "Fell In Luv (feat. Bryson Tiller)", cover: "images/coquette/Fell In Luv feat Bryson Tiller.jpg" },
  { file: "music/coquette/So High.mp3", title: "So High", cover: "images/coquette/So High.jpg" },
  { file: "music/coquette/beside you.mp3", title: "beside you", cover: "images/coquette/beside you.jpg" },
  { file: "music/coquette/Something About You.mp3", title: "Something About You", cover: "images/coquette/Something About You.jpg" },
  { file: "music/coquette/Change Ya Life.mp3", title: "Change Ya Life", cover: "images/coquette/Change Ya Life.jpg" },
  { file: "music/coquette/Love Songs - Bonus.mp3", title: "Love Songs - Bonus", cover: "images/coquette/Love Songs - Bonus.jpg" },
  { file: "music/coquette/Aaya Na Tu.mp3", title: "Aaya Na Tu", cover: "images/coquette/Aaya Na Tu.jpg" },
  { file: "music/coquette/Not Around.mp3", title: "Not Around", cover: "images/coquette/Not Around.jpg" },
  { file: "music/coquette/Heaven Sent.mp3", title: "Heaven Sent", cover: "images/coquette/Heaven Sent.jpg" },
  { file: "music/coquette/Hard 2 Face Reality.mp3", title: "Hard 2 Face Reality", cover: "images/coquette/Hard 2 Face Reality.jpg" },
  { file: "music/coquette/Into It.mp3", title: "Into It", cover: "images/coquette/Into It.jpg" },
  { file: "music/coquette/たぶん.mp3", title: "たぶん", cover: "images/coquette/たぶん.jpg" },
  { file: "music/coquette/Sawaar Loon.mp3", title: "Sawaar Loon", cover: "images/coquette/Sawaar Loon.jpg" },
  { file: "music/coquette/You'll Get Over It - Drew Kent.mp3", title: "You'll Get Over It", cover: "images/coquette/Youll Get Over It.jpg" },
  { file: "music/coquette/i got you.mp3", title: "i got you", cover: "images/coquette/i got you.jpg" },
  { file: "music/coquette/Heart Mind.mp3", title: "Heart Mind", cover: "images/coquette/Heart Mind.jpg" },
  { file: "music/coquette/Tera Mera Rishta.mp3", title: "Tera Mera Rishta", cover: "images/coquette/Tera Mera Rishta.jpg" },
  { file: "music/coquette/Love Me.mp3", title: "Love Me", cover: "images/coquette/Love Me.jpg" },
  { file: "music/coquette/Ek Main Aur Ekk Tu.mp3", title: "Ek Main Aur Ekk Tu", cover: "images/coquette/Ek Main Aur Ekk Tu.jpg" },
  { file: "music/coquette/White Tee (with NO1-NOAH).mp3", title: "White Tee (with NO1-NOAH)", cover: "images/coquette/White Tee with NO1-NOAH.jpg" },
  { file: "music/coquette/Tujhe Kaise Pata Na Chala.mp3", title: "Tujhe Kaise Pata Na Chala", cover: "images/coquette/Tujhe Kaise Pata Na Chala.jpg" },
  { file: "music/coquette/Kiss Me Thru The Phone.mp3", title: "Kiss Me Thru The Phone", cover: "images/coquette/Kiss Me Thru The Phone.jpg" },
  { file: "music/coquette/Shayad (From _Love Aaj Kal_).mp3", title: "Shayad (From \"Love Aaj Kal\")", cover: "images/coquette/Shayad From Love Aaj Kal.jpg" },
  { file: "music/coquette/comethru.mp3", title: "comethru", cover: "images/coquette/comethru.jpg" },
  { file: "music/coquette/STREETSX VACATION BIBLE SCHOOL.mp3", title: "STREETSX VACATION BIBLE SCHOOL", cover: "images/coquette/STREETSX VACATION BIBLE SCHOOL.jpg" },
  { file: "music/coquette/Mind Games.mp3", title: "Mind Games", cover: "images/coquette/Mind Games.jpg" },
  { file: "music/coquette/double take.mp3", title: "double take", cover: "images/coquette/double take.jpg" },
  { file: "music/coquette/Intro (Real Love).mp3", title: "Intro (Real Love)", cover: "images/coquette/Intro Real Love.jpg" },
  { file: "music/coquette/Love You Like A Love Song.mp3", title: "Love You Like A Love Song", cover: "images/coquette/Love You Like A Love Song.jpg" },
  { file: "music/coquette/Falling - Slowed Reverb - wintrs.mp3", title: "Falling - Slowed Reverb", cover: "images/coquette/Falling - Slowed Reverb.jpg" },
  { file: "music/coquette/YOUTH.mp3", title: "YOUTH", cover: "images/coquette/YOUTH.jpg" },
  { file: "music/coquette/Meri Jaan.mp3", title: "Meri Jaan", cover: "images/coquette/Meri Jaan.jpg" },
  { file: "music/coquette/WFM.mp3", title: "WFM", cover: "images/coquette/WFM.jpg" },
  { file: "music/coquette/Needed Me.mp3", title: "Needed Me", cover: "images/coquette/Needed Me.jpg" },
  { file: "music/coquette/Die For You.mp3", title: "Die For You", cover: "images/coquette/Die For You.jpg" },
  { file: "music/coquette/Gumaan.mp3", title: "Gumaan", cover: "images/coquette/Gumaan.jpg" },
  { file: "music/coquette/Let's Get Married.mp3", title: "Let's Get Married", cover: "images/coquette/Lets Get Married.jpg" },
  { file: "music/coquette/Tell Em.mp3", title: "Tell Em", cover: "images/coquette/Tell Em.jpg" },
  { file: "music/coquette/Drunk And Nasty (feat. Sharc).mp3", title: "Drunk And Nasty (feat. Sharc)", cover: "images/coquette/Drunk And Nasty feat Sharc.jpg" },
  { file: "music/coquette/Trust Issues.mp3", title: "Trust Issues", cover: "images/coquette/Trust Issues.jpg" },
  { file: "music/coquette/G.O.A.T..mp3", title: "G.O.A.T.", cover: "images/coquette/GOAT.jpg" },
  { file: "music/coquette/POCKET ROCKET.mp3", title: "POCKET ROCKET", cover: "images/coquette/POCKET ROCKET.jpg" },
  { file: "music/coquette/All I Need.mp3", title: "All I Need", cover: "images/coquette/All I Need.jpg" },
  { file: "music/coquette/Lil Secret.mp3", title: "Lil Secret", cover: "images/coquette/Lil Secret.jpg" },
  { file: "music/coquette/Substance.mp3", title: "Substance", cover: "images/coquette/Substance.jpg" },
  { file: "music/coquette/Proper Patola (From _Proper Patola_) (feat. Badshah).mp3", title: "Proper Patola (From \"Proper Patola\") (feat. Badshah)", cover: "images/coquette/Proper Patola From Proper Patola feat Badshah.jpg" },
  { file: "music/coquette/Bikhra.mp3", title: "Bikhra", cover: "images/coquette/Bikhra.jpg" },
  { file: "music/coquette/You Da One.mp3", title: "You Da One", cover: "images/coquette/You Da One.jpg" },
  { file: "music/coquette/2 soon.mp3", title: "2 soon", cover: "images/coquette/2 soon.jpg" },
  { file: "music/coquette/like i need u.mp3", title: "like i need u", cover: "images/coquette/like i need u.jpg" },
  { file: "music/coquette/Tu Aake Dekhle.mp3", title: "Tu Aake Dekhle", cover: "images/coquette/Tu Aake Dekhle.jpg" },
  { file: "music/coquette/Aaja We Mahiya.mp3", title: "Aaja We Mahiya", cover: "images/coquette/Aaja We Mahiya.jpg" },
  { file: "music/coquette/7.mp3", title: "24-Jul", cover: "images/coquette/247.jpg" },
  { file: "music/coquette/Pain.mp3", title: "Pain", cover: "images/coquette/Pain.jpg" },
  { file: "music/coquette/Sorrows.mp3", title: "Sorrows", cover: "images/coquette/Sorrows.jpg" },
  { file: "music/coquette/LUV_.mp3", title: "LUV?", cover: "images/coquette/LUV.jpg" },
  { file: "music/coquette/Be Alright.mp3", title: "Be Alright", cover: "images/coquette/Be Alright.jpg" },
  { file: "music/coquette/Tera Nasha.mp3", title: "Tera Nasha", cover: "images/coquette/Tera Nasha.jpg" },
  { file: "music/coquette/Sooraj Ki Baahon Mein.mp3", title: "Sooraj Ki Baahon Mein", cover: "images/coquette/Sooraj Ki Baahon Mein.jpg" },
  { file: "music/coquette/Hai Junoon.mp3", title: "Hai Junoon", cover: "images/coquette/Hai Junoon.jpg" },
  { file: "music/coquette/Apna Har Din.mp3", title: "Apna Har Din", cover: "images/coquette/Apna Har Din.jpg" },
  { file: "music/coquette/Rishte Naate.mp3", title: "Rishte Naate", cover: "images/coquette/Rishte Naate.jpg" },
  { file: "music/coquette/Sweetest Pie.mp3", title: "Sweetest Pie", cover: "images/coquette/Sweetest Pie.jpg" },
  { file: "music/coquette/Ice On My Baby (feat. Kevin Gates) - Remix.mp3", title: "Ice On My Baby (feat. Kevin Gates) - Remix", cover: "images/coquette/Ice On My Baby feat Kevin Gates - Remix.jpg" },
  { file: "music/coquette/Over.mp3", title: "Over", cover: "images/coquette/Over.jpg" },
  { file: "music/coquette/Drama (feat. Drake).mp3", title: "Drama (feat. Drake)", cover: "images/coquette/Drama feat Drake.jpg" },
  { file: "music/coquette/lost souls (with Brent Faiyaz).mp3", title: "lost souls (with Brent Faiyaz)", cover: "images/coquette/lost souls with Brent Faiyaz.jpg" },
  { file: "music/coquette/Collide (feat. Tyga).mp3", title: "Collide (feat. Tyga)", cover: "images/coquette/Collide feat Tyga.jpg" },
  { file: "music/coquette/Neon Guts (feat. Pharrell Williams).mp3", title: "Neon Guts (feat. Pharrell Williams)", cover: "images/coquette/Neon Guts feat Pharrell Williams.jpg" },
  { file: "music/coquette/Iraaday.mp3", title: "Iraaday", cover: "images/coquette/Iraaday.jpg" },
  { file: "music/coquette/Die For You.mp3", title: "Die For You", cover: "images/coquette/Die For You.jpg" },
  { file: "music/coquette/Call Out My Name.mp3", title: "Call Out My Name", cover: "images/coquette/Call Out My Name.jpg" },
  { file: "music/coquette/Elastic Heart - From _The Hunger Games_ Catching Fire_ Soundtrack.mp3", title: "Elastic Heart - From \"The Hunger Games: Catching Fire\" Soundtrack", cover: "images/coquette/Elastic Heart - From The Hunger Games Catching Fire Soundtrack.jpg" },
  { file: "music/coquette/I Wanna Be Yours.mp3", title: "I Wanna Be Yours", cover: "images/coquette/I Wanna Be Yours.jpg" },
  { file: "music/coquette/Aahatein.mp3", title: "Aahatein", cover: "images/coquette/Aahatein.jpg" },
  { file: "music/coquette/Mileya Mileya.mp3", title: "Mileya Mileya", cover: "images/coquette/Mileya Mileya.jpg" },
  { file: "music/coquette/Kahin To.mp3", title: "Kahin To", cover: "images/coquette/Kahin To.jpg" },
  { file: "music/coquette/My Way (feat. Monty).mp3", title: "My Way (feat. Monty)", cover: "images/coquette/My Way feat Monty.jpg" },
  { file: "music/coquette/Leave Em Alone (Layton Greene, Lil Baby feat. City Girls, PnB Rock).mp3", title: "Leave Em Alone (Layton Greene, Lil Baby feat. City Girls, PnB Rock)", cover: "images/coquette/Leave Em Alone Layton Greene Lil Baby feat City Girls PnB Rock.jpg" },
  { file: "music/coquette/ALL MINE.mp3", title: "ALL MINE", cover: "images/coquette/ALL MINE.jpg" },
  { file: "music/coquette/Sure Thing.mp3", title: "Sure Thing", cover: "images/coquette/Sure Thing.jpg" },
  { file: "music/coquette/Dil Tu Jaan Tu.mp3", title: "Dil Tu Jaan Tu", cover: "images/coquette/Dil Tu Jaan Tu.jpg" }
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
