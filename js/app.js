
// ==============================================
// =============== Nav Menu ================ 

let menuOpen = false;
function toggleMenu() { 
  if(!menuOpen) { 
    $('nav').addClass('open');
  } else {
    $('nav').removeClass('open');
  }
  menuOpen = !menuOpen; 
} // toggleMenu()


// ==============================================
// =============== Design Projects ================ 

let currentIndex = null;

const projects = [
  {name: "Blue Spruce Musings",
    description: `Homepage and brand refresh created for my former handcrafted jewelry business now honoured as a client project for my past self.

    After closing the business to pursue my education in web and app development, I re-imagined the brand through a modern design lens.

    The layout highlights artisan storytelling, calm natural aesthetics, and intuitive user flow, reflecting the style and sensibilities I’ve developed in my new career path.`,
    img: "assets/images/design/img1.png",
    link: "https://mintbanshee.github.io/BlueSpruceMusings/"},

  {name: "LunarLens",
    description: `A product grid and gallery mockup for an accessory boutique. 
    
    UI layout demonstrating flexible product organization, soft visual branding, and a clean shopping experience. Focuses on hierarchy, consistency, and easy browsing for an online retail environment.`,
    img: "assets/images/design/img2.png",
    link: "https://mintbanshee.github.io/HTML_Assignment_3/"},

  {name: "Star Wars",
    description: `A themed homepage concept blending entertainment branding with clean UX.
    
    Fan-style landing page designed to highlight featured content, media elements, and clear calls-to-action. Combines cinematic visuals with structured layout patterns common in entertainment platforms.`,
    img: "assets/images/design/img3.png",
    link: "starWars.html"},

  {name: "CozyPixel",
    description: `A web design mockup built around a cozy, creative studio brand.
    
    Asymmetrical layout showcasing service offerings, portfolio sections, and a custom visual identity. Emphasizes approachable branding, modular UI components, and a user-friendly scroll experience.`,
    img: "assets/images/design/img4.png",
    link: "cozyPixel.html"},

  {name: "Driftwood Atlas",
    description: `A branding concept exploring natural textures and handcrafted aesthetics.
    
    Includes mood boards, logo refinement, and a cohesive visual identity built around a custom compass-rose emblem.`,
    img: "assets/images/design/img5.png",
    link: "https://mintbanshee.github.io/DriftwoodAtlas/"},
    
   {name: "Style Salon",
    description: `A minimal logo and brand concept for a boutique hair studio.
    
    Logo-focused design demonstrating vector precision, brand personality, and clean pairing of typography and iconography. Created to represent a sleek, modern service business.`,
    img: "assets/images/design/img6.png",
    link: "styleSalon.html"},
    
  {name: "Sailor Moon Fansite",
    description: `A playful fan homepage using colorful imagery and character highlight sections.
    
    A thematic mockup showcasing character galleries, news features, and nostalgic UI styling. Uses bright visuals and structured sections to create an engaging, fan-centered browsing experience.`,
    img: "assets/images/design/img7.png",
    link: "https://xd.adobe.com/view/36638359-46c4-43cd-a90b-3e4cf4d40410-6330/"},
    
  {name: "StellarNest",
    description: `A clean, simple logo mark built around astronomy-inspired branding.
    
    Vector logo design emphasizing clarity, minimalism, and symbolic imagery. Demonstrates ability to translate thematic concepts — space, orbit, motion — into a polished brand asset.`,
    img: "assets/images/design/img8.png",
    link: "stellarNest.html"},
  
    {name: "MintBanshee",
    description: `A custom brand logo blending a crescent moon with mint-green accents. 
    
    Designed to reflect a whimsical, calm creative identity while staying versatile for web, print, and UI use.`,
    img: "assets/images/design/img9.png",
    link: "mintBanshee.html"},

    {name: "Midnight at the Mintforge",
    description: `A fully custom VS Code theme designed to transform the developer workspace into a cozy, lunar-coded atmosphere. 
    
    Features a handcrafted color palette inspired by mint leaves, twilight skies, and soft enchanted lighting — blending calm contrasts with clear syntax visibility for long, focused coding sessions.`,
    img: "assets/images/design/img10.png",
    link: "midnight.html"},
]

function showBox(num) {
  const item = projects[num - 1];
  currentIndex = num - 1;

  $('#lightbox').addClass('active');
  $('#lightboxImage').attr('src', item.img);
  $('#projectName').text(item.name);
  $('#projectDescription').html(item.description.replace(/\n/g, "<br>"));
}

function hideBox() {
  $('#lightbox').removeClass('active');
}

function viewProject() {
  const item = projects[currentIndex];
  if (item.link) {
    if (item.link.endsWith('.html')) {
      window.location.href = item.link;
    } else {
    window.open(item.link, "_blank");
    }
  }
}





// ====================================================
// =============== API Assignment CALM ================ 

const calmPlaylist = [
  {name: "What Does It Mean To You",
    artist: "Carpetman",
    length: "4:00", 
    videoId: "5FSHSfSnjXk",
    index: 1},

  {name: "Serotonin",
    artist: "Nic D",
    length: "2:31", 
    videoId: "i-5icwAPtuQ",
    index: 2},

  {name: "Tails - Second Thoughts",
    artist: "MrSuicideSheep",
    length: "4:12", 
    videoId: "m-MVW8RngLA",
    index: 3},

  {name: "Howling",
    artist: "Noah Kahan",
    length: "4:45", 
    videoId: "sp7uSknDFE8",
    index: 4},

  {name: "False Confidence",
    artist: "Noah Kahan",
    length: "3:43", 
    videoId: "dWRWuY3pV2c",
    index: 5},

  {name: "Love Language",
    artist: "Crooked Colours",
    length: "3:18", 
    videoId: "DkErGeZlfAI",
    index: 6},

  {name: "Make It Lower",
    artist: "Carpetman",
    length: "4:07", 
    videoId: "o5NDhQgVzoo",
    index: 7},

  {name: "Watch Me While I Bloom",
    artist: "Hayley Williams",
    length: "3:44", 
    videoId: "Z6q2AiFJKUU",
    index: 8},

  {name: "Elliot Lee - My Favourite Things",
    artist: "MrSuicideSheep",
    length: "2:33", 
    videoId: "04rC2zYVIIA",
    index: 9},

  {name: "Hollow Coves - Heatwave (filous remix)",
    artist: "MrSuicideSheep",
    length: "5:02", 
    videoId: "Pe7ZzNx-FTE",
    index: 10},

  {name: "Stones",
    artist: "Rooftime",
    length: "3:07", 
    videoId: "1A0vpHiPO3k",
    index: 11},

  {name: "Seven Lions - Between (feat. Eli Teplin)",
    artist: "MrSuicideSheep",
    length: "3:57", 
    videoId: "vBcgLvjzNR4",
    index: 12},

  {name: "Figment Of My Mind",
    artist: "Bruno Major",
    length: "3:35", 
    videoId: "kh_20OLEHCM",
    index: 13},

  {name: "Burn Away",
    artist: "Patrick James",
    length: "4:38", 
    videoId: "1XIM96ruN0k",
    index: 14},

  {name: "Yas - Empty Crown",
    artist: "MrSuicideSheep",
    length: "3:38", 
    videoId: "m_qlgFQs7E4",
    index: 15},

  {name: "Two Lanes - Wide Awake",
    artist: "Arctic Empire",
    length: "2:52", 
    videoId: "o32Z_0LyivE",
    index: 16},

  {name: "The Garden",
    artist: "Stonefox",
    length: "3:39", 
    videoId: "b8HnvGgje0Q",
    index: 17},

  {name: "Lights (feat. Trove",
    artist: "Dabin",
    length: "3:25", 
    videoId: "At3yj4CFP1Y",
    index: 18},

  {name: "Fragments",
    artist: "Nomyn",
    length: "3:46", 
    videoId: "jaCIKpsKpaQ",
    index: 19},

  {name: "Iris",
    artist: "Tommee Profitt",
    length: "4:07", 
    videoId: "BysZfSSRN_M",
    index: 20},

  {name: "Lane 8 - The Rope feat. Poliça",
    artist: "This Never Happened",
    length: "4:55", 
    videoId: "yjiKufgOHNw",
    index: 21},
];






// ====================================================
// =============== API Assignment CHAOTIC ================ 

const chaoticPlaylist = [
{name: "Roller Coaster",
    artist: "blink-182",
    length: "2:47", 
    videoId: "xBb2lHxTRf8",
    index: 1},

  {name: "The Kill",
    artist: "Thirty Seconds To Mars",
    length: "3:51", 
    videoId: "nIxxdRaWoBs",
    index: 2},

  {name: "Maleficent",
    artist: "Halocene",
    length: "4:11", 
    videoId: "9idIkloO8-8",
    index: 3},

  {name: "sTraNgeRs",
    artist: "Bring Me The Horizon",
    length: "3:24", 
    videoId: "FsNGxsrcZas",
    index: 4},

  {name: "Gimme Chocolate!!",
    artist: "BabyMetal",
    length: "4:03", 
    videoId: "WIKqgE4BwAY",
    index: 5},

  {name: "Given Up",
    artist: "Linkin Park",
    length: "3:11", 
    videoId: "0xyxtzD54rM",
    index: 6},

  {name: "Cannonball",
    artist: "Avril Lavigne",
    length: "2:18", 
    videoId: "iBdgpdGTIwI",
    index: 7},

  {name: "Dance, Dance",
    artist: "Fall Out Boy",
    length: "3:00", 
    videoId: "P43XYXqJJlU",
    index: 8},

  {name: "Discotech",
    artist: "Young Love",
    length: "3:54", 
    videoId: "0zI1ZatpWqI",
    index: 9},

  {name: "Sleeping With Sirens - If I'm James Dean, You're Audrey Hapburn (Lauren Babic & @tysondang cover)",
    artist: "Lauren Babic",
    length: "3:38", 
    videoId: "uNXMRFiuFGM",
    index: 10},

  {name: "Megitsune",
    artist: "BabyMetal",
    length: "4:09", 
    videoId: "cK3NMZAUKGw",
    index: 11},

  {name: "Coming Home",
    artist: "Falling In Reverse",
    length: "5:02", 
    videoId: "L3QB4VnUOUA",
    index: 12},

  {name: "Can You Feel My Heart",
    artist: "Bring Me The Horizon",
    length: "3:48", 
    videoId: "QJJYpsA5tv8",
    index: 13},

  {name: "The Kids Aren't Alright",
    artist: "The Offspring",
    length: "2:59", 
    videoId: "7iNbnineUCI",
    index: 14},

  {name: "Reckless Abandon",
    artist: "blink-182",
    length: "3:06", 
    videoId: "csO9ZNuqiMY",
    index: 15},

  {name: "That's What You Get",
    artist: "Paramore",
    length: "3:39", 
    videoId: "1kz6hNDlEEg",
    index: 16},

  {name: "Swing, Swing",
    artist: "The All-American Rejects",
    length: "3:27", 
    videoId: "KtypSRcwIhA",
    index: 17},

  {name: "Smooth Criminal",
    artist: "Alien Ant Farm",
    length: "3:32", 
    videoId: "CDl9ZMfj6aE",
    index: 18},

  {name: "Brick By Boring Brick",
    artist: "Paramore",
    length: "4:22", 
    videoId: "A63VwWz1ij0",
    index: 19},

  {name: "Accidents",
    artist: "Alexis on Fire",
    length: "4:09", 
    videoId: "pEKEYbszVyg",
    index: 20},

  {name: "The Jester",
    artist: "Badflower",
    length: "4:17", 
    videoId: "b3tW2Kx3lCs",
    index: 21},
];


// ====================================================
// =============== API Assignment ================ 

const youtubeAPIKey = 'AIzaSyBdDFEvo1GjjyFjogZ8HksX7s_HdOxb-T0';
const calmPlaylistId = 'PLO1iWpsX1PjRLFMng8WjkKNSujIjk6TJV';
const chaoticPlaylistId = 'PLO1iWpsX1PjQji3_hWIpazvyWS7eWN2iy';
let calmAPIPlaylist = null;
let chaoticAPIPlaylist = null;
let isCalmLoading = false;
let isChaoticLoading = false;


const calmBtn = document.querySelector('.musicButton.calm');
const chaoticBtn = document.querySelector('.musicButton.chaotic');

function fetchCalmPlaylist() {
  isCalmLoading = true;
  fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?` +
    `part=snippet&maxResults=25&playlistId=${calmPlaylistId}&key=${youtubeAPIKey}`
  )
    .then(res => res.json())
    .then(data => {
      console.log('YouTube playlist data:', data);

      calmAPIPlaylist = data.items.map((item, index) => {
        return {
          name: item.snippet.title,
          artist: item.snippet.videoOwnerChannelTitle,
          videoId: item.snippet.resourceId.videoId,
          index: index + 1
        };
      });

      isCalmLoading = false;
    
      if (localStorage.getItem('coderType') === 'calm') {
        showCalmUI();
      }

      console.log('Saved calm API playlist:', calmAPIPlaylist);
      console.log("Formatted API playlist:", calmAPIPlaylist);
    })
    .catch(err => {
      console.error('API error:', err);
    });
}
function fetchChaoticPlaylist() {
  isChaoticLoading = true;
  fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?` +
    `part=snippet&maxResults=25&playlistId=${chaoticPlaylistId}&key=${youtubeAPIKey}`
  )
    .then(res => res.json())
    .then(data => {
      console.log('YouTube playlist data:', data);

      chaoticAPIPlaylist = data.items.map((item, index) => {
        return {
          name: item.snippet.title,
          artist: item.snippet.videoOwnerChannelTitle,
          videoId: item.snippet.resourceId.videoId,
          index: index + 1
        };
      });

      isChaoticLoading = false;

      if (localStorage.getItem('coderType') === 'chaotic') {
        showChaoticUI();
      }

      console.log('Saved chaotic API playlist:', chaoticAPIPlaylist);
      console.log("Formatted API playlist:", chaoticAPIPlaylist);
    })
    .catch(err => {
      console.error('API error:', err);
    });
  }

console.log(calmBtn, chaoticBtn);

if (calmBtn && chaoticBtn) {
  function saveCalm() {
    localStorage.setItem('coderType', 'calm');
    showCalmUI();

    document.querySelectorAll('.musicButton').forEach(button => {
      button.classList.remove('pulse');
    });
  }
}

function saveRecentlyPlayed(song, playlistType) {
  const stored = JSON.parse(localStorage.getItem('recentlyPlayed')) || [];
  const filtered = stored.filter(item => item.videoId !== song.videoId);

  filtered.unshift({...song, playlist: playlistType});

  const trimmed = filtered.slice(0, 3);

  localStorage.setItem('recentlyPlayed', JSON.stringify(trimmed));
}




function showCalmUI() {
  document.querySelector('#mixtapeIntro').style.display = 'none';
  document.querySelector('#playlistResults').innerHTML = '';
  document.querySelector('#playlistResults').innerHTML = '<h2>Mintforge Calm Coder Mix</h2>';
  document.querySelector('#dualityIMG').src = 'assets/images/mixtape/CalmVibes.png';

  calmBtn.classList.add('selected');
  chaoticBtn.classList.remove('selected');

  const playlistToRender = calmAPIPlaylist ?? calmPlaylist;

  playlistToRender.forEach(song => {
    const videoUrl = `https://www.youtube.com/watch?v=${song.videoId}` + `&list=${calmPlaylistId}` + `&index=${song.index}`;
    const videoThmb = `https://img.youtube.com/vi/${song.videoId}/default.jpg`;

    document.querySelector('#playlistResults').innerHTML += `
      <a href="${videoUrl}" target="_blank" class="songRow" onclick='saveRecentlyPlayed(${JSON.stringify(song)}, "calm")'>
      <img class="songThumb" src="${videoThmb}" alt="${song.name} thumbnail">
        <div class="songInfo">
          <h4>${song.name}</h4>
          <p>${song.artist}
            ${song.length ? ` • ${song.length}` : ''}
          </p>
        </div>
      </a>
    `;
  });
}


function saveChaotic() {
  localStorage.setItem('coderType', 'chaotic');
  showChaoticUI();

  document.querySelectorAll('.musicButton').forEach(button => {
    button.classList.remove('pulse');
  });
}

function showChaoticUI() {
  document.querySelector('#mixtapeIntro').style.display = 'none';
  document.querySelector('#playlistResults').innerHTML = '';
  document.querySelector('#playlistResults').innerHTML = '<h2>Mintforge Chaotic Coder Mix</h2>';
  document.querySelector('#dualityIMG').src = 'assets/images/mixtape/ChaoticVibes.png';

  chaoticBtn.classList.add('selected');
  calmBtn.classList.remove('selected');

  const playlistToRender = chaoticAPIPlaylist ?? chaoticPlaylist;

  playlistToRender.forEach(song => {
    const videoUrl = `https://www.youtube.com/watch?v=${song.videoId}` + `&list=${chaoticPlaylistId}` + `&index=${song.index}`;
    const videoThmb = `https://img.youtube.com/vi/${song.videoId}/default.jpg`;

    document.querySelector('#playlistResults').innerHTML += `
      <a href="${videoUrl}" target="_blank" class="songRow" onclick='saveRecentlyPlayed(${JSON.stringify(song)}, "chaotic")'>
      <img class="songThumb" src="${videoThmb}" alt="${song.name} thumbnail">
        <div class="songInfo">
          <h4>${song.name}</h4>
          <p>${song.artist}
            ${song.length ? ` • ${song.length}` : ''}
          </p>
        </div>
      </a>
    `;
  });
}

calmBtn.addEventListener('click', saveCalm);
chaoticBtn.addEventListener('click', saveChaotic);


fetchCalmPlaylist();
fetchChaoticPlaylist();
renderRecentlyPlayed();

const savedCoder = localStorage.getItem('coderType');
const buttons = document.querySelectorAll('.musicButton');

if (!savedCoder) {
  buttons.forEach(button => {
    button.classList.add('pulse');
  });
} else if (savedCoder === 'calm') {
  calmBtn.classList.add('selected');
  showCalmUI();
} else if (savedCoder === 'chaotic') {
  chaoticBtn.classList.add('selected');
  showChaoticUI();
}

function renderRecentlyPlayed() {
  const list = document.querySelector('#recentList');
  const recent = JSON.parse(localStorage.getItem('recentlyPlayed')) || [];

  list.innerHTML = '';

  if (recent.length === 0) {
    list.innerHTML = '<li>No songs have been clicked yet</li>';
    return;
  }

  recent.forEach(item => {
    list.innerHTML += `<li><a href="https://www.youtube.com/watch?v=${item.videoId}" target="_blank">
    ${item.name} - ${item.artist}
      (Playlist: ${item.playlist})</li>`;
  });
}




const resetBTN = document.querySelector('#resetMixtape');

function resetMixtape() {
  localStorage.removeItem('coderType');

  document.querySelector('#mixtapeIntro').style.display = 'block';
  document.querySelector('#playlistResults').innerHTML = '';
  document.querySelector('#playlistResults').innerHTML = '<h2>No Playlist Selected</h2>';
  document.querySelector('#dualityIMG').src = 'assets/images/mixtape/CalmOrChaotic.png';

  calmBtn.classList.remove('selected');
  chaoticBtn.classList.remove('selected');

  document.querySelectorAll('.musicButton').forEach(button => {
    button.classList.add('pulse');
  });
}

resetBTN.addEventListener('click', resetMixtape); 


function saveRecentlyPlayed(song, playlistType) {
  let recent = JSON.parse(localStorage.getItem('recentlyPlayed')) || [];

  recent = recent.filter(item => item.videoId !== song.videoId);

  recent.push({
    name: song.name,
    artist: song.artist,
    videoId: song.videoId,
    playlist: playlistType
  }); 

  if (recent.length > 5) {
    recent = recent.slice(recent.length - 5);
  }

  localStorage.setItem('recentlyPlayed', JSON.stringify(recent));
  renderRecentlyPlayed();
}
