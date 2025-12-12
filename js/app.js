
let menuOpen = false;
function toggleMenu() { 
  if(!menuOpen) { // open menu
    $('nav').animate({
      right: 0
    }, 420, 'swing');
  }
  else { // close menu
    $('nav').animate({
      right: -350
    }, 420, 'swing');
  }
  // toggles the state
  menuOpen = !menuOpen; 
} // toggleMenu()

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
    link: "https://mintbanshee.github.io/HTML_Assignment_4/"},
    
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
