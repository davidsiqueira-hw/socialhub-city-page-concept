/* ===== Hostelworld Social Hub — interactions & data ===== */
const A = 'assets/';

/* ---- Data ---- */
const EVENTS = [
  { name: "Barcelona Pride Festival", date: "26 Jun - 18 Jul, 2026" },
  { name: "Festa de la Merce", date: "15 September 2026" },
  { name: "Dia Nacional de Catalunya", date: "11 Sep, 2026" },
  { name: "Gran Gala Flamenco", date: "11 Sep, 2026" },
  { name: "Primavera Sound", date: "5 Jun, 2026" },
  { name: "Sonar Festival", date: "19 Jun, 2026" },
];

const C = {
  c0:'319662627779001ea689865bc824f1be493d0c59.webp', c1:'7e69794f615342f0cb8ef5467acc7a4edf23a3f6.webp',
  c2:'472a2037da2d34025905dfcfe314d1115c08b1a3.webp', c3:'584673a80cbbe775a74a987ca23bbe30c7731122.webp',
  c4:'f5893a702252258f5aee1011add05000fd219e7d.webp', c5:'7579296bbe99af51bb22504958fb5599ea67fc64.webp',
  c6:'f6c6eb9e1ed069dcc86625e5f0edd63c4512bcd3.webp', c7:'2cfa64df9dedc6e5fa04c91da7ae2f5f48e60443.webp',
  c8:'33615583385ba1776b8ff0af64b1479676096513.webp', c9:'acd4495b56ce8539ffe2231dd84e2279e007962f.webp',
};
const BUSIEST_HOSTELS = [
  { rank:1, name:"Kabul Party Hostel Barcelona", rating:9.5, reviews:11209, price:"€14", travellers:244, image:C.c0 },
  { rank:2, name:"Onefam Les Corts", rating:9.6, reviews:5090, price:"€16", travellers:130, image:C.c2 },
  { rank:3, name:"Yeah Hostel Barcelona", rating:9.4, reviews:8430, price:"€13", travellers:118, image:C.c3 },
  { rank:4, name:"Generator Barcelona", rating:8.9, reviews:15230, price:"€19", travellers:102, image:C.c4 },
  { rank:5, name:"Sant Jordi Rock Palace", rating:9.3, reviews:6780, price:"€15", travellers:97, image:C.c5 },
  { rank:6, name:"Black Swan Hostel Barcelona", rating:9.1, reviews:3210, price:"€18", travellers:85, image:C.c6 },
  { rank:7, name:"Barna House Hostel", rating:8.8, reviews:2940, price:"€12", travellers:74, image:C.c7 },
  { rank:8, name:"Hostal Grau", rating:8.7, reviews:4560, price:"€21", travellers:66, image:C.c8 },
  { rank:9, name:"Amistat Beach Hostel", rating:9.2, reviews:7890, price:"€17", travellers:61, image:C.c9 },
  { rank:10, name:"Dream Hostel Barcelona", rating:9.0, reviews:5320, price:"€14", travellers:55, image:C.c1 },
];

const IMG = ['0aad86a39df47d54338036a8d8d2b580683f02a9.webp','0cb34d9f74db336260080ab764c89a855a1163a1.webp',
  'e3596d01a16f0f2435fa4ec7ed224967747f8e57.webp','c300c1f4bd5f314a6b7b4cc814fa0f073fa54973.webp',
  '9ec60bde0d516cc48ac8de68809ce0a73c811360.webp','728204e48f883a18ab3e4299545afe2383e7d785.webp',
  '9ec7d40cfe574394c664b1507880fae036d2ba76.webp','c5cc86162075bb1ecdfc68eab34e502ed3b152ac.webp',
  '870fe2c86a4ec57865f5dbfa5f9643078b689861.webp','ed13e33a4ebb1f2c8f75b1d3f19411f47f63fb38.webp'];
const BEST_HOSTELS = [
  { name:"Kabul Party Hostel", rating:9.5, reviews:11209, price:"€14", image:IMG[0] },
  { name:"Onefam Les Corts", rating:9.6, reviews:5090, price:"€16", image:IMG[1] },
  { name:"Yeah Hostel Barcelona", rating:9.4, reviews:8430, price:"€13", image:IMG[2] },
  { name:"Generator Barcelona", rating:8.9, reviews:15230, price:"€19", image:IMG[3] },
  { name:"Sant Jordi Rock Palace", rating:9.3, reviews:6780, price:"€15", image:IMG[4] },
  { name:"Black Swan Hostel Barcelona", rating:9.1, reviews:3210, price:"€18", image:IMG[5] },
  { name:"Barna House Hostel", rating:8.8, reviews:2940, price:"€12", image:IMG[6] },
  { name:"Hostal Grau", rating:8.7, reviews:4560, price:"€21", image:IMG[7] },
  { name:"Amistat Beach Hostel", rating:9.2, reviews:7890, price:"€17", image:IMG[8] },
  { name:"Dream Hostel Barcelona", rating:9.0, reviews:5320, price:"€14", image:IMG[9] },
];

const W = ['4e63b146c8655baa9d4051a51c4cfc439c384483.webp','487729dc534ad52289409102e6caca3b18ba53e3.webp',
  '23ada14143eed3b861954521a568c75d61b9e026.webp','12f196527c312fb50761c038429dedbe47442a6b.webp',
  'f3e8e1b3a4b591933fb090d60a11789a174ea518.webp','5c5f724ed932da2ae70a56026859b5a8e2e1b179.webp',
  'f79a1c9248fcd4eceab7593efbea4af5ce7033ff.webp','63314823e34a8843474d0352e419616299c630ff.webp',
  '839be46d5d38386b4dda63d04b8ac9973892ba4a.webp','e45a2d4b3b1a8314f1e5ae74e5d78fd08d51cd23.webp'];
const UPCOMING_EVENTS = [
  { rank:1, title:"Barcelona Food Tour", date:"15 February 2026", hostel:"Kabul Party Hostel Barcelona", image:W[0] },
  { rank:2, title:"Old Town tapas crawl", date:"17 February 2026", hostel:"Black Swan Hostel", image:W[1] },
  { rank:3, title:"Beach volleyball meet-up", date:"19 February 2026", hostel:"Sant Jordi Rock Palace", image:W[2] },
  { rank:4, title:"Flamenco night in the Gothic Quarter", date:"22 February 2026", hostel:"Yeah Hostel Barcelona", image:W[3] },
  { rank:5, title:"Sunset at Bunkers del Carmel", date:"25 February 2026", hostel:"Generator Barcelona", image:W[4] },
  { rank:6, title:"Sagrada Família guided tour", date:"27 February 2026", hostel:"Onefam Les Corts", image:W[5] },
  { rank:7, title:"Barceloneta beach social", date:"1 March 2026", hostel:"Amistat Beach Hostel", image:W[6] },
  { rank:8, title:"Pub crawl Las Ramblas", date:"4 March 2026", hostel:"Barna House Hostel", image:W[7] },
  { rank:9, title:"Park Güell sunrise hike", date:"6 March 2026", hostel:"Dream Hostel Barcelona", image:W[8] },
  { rank:10, title:"Barcelona FC match night", date:"10 March 2026", hostel:"Hostal Grau", image:W[9] },
];

const WHATS_ON = [
  { title:"Festa Major de Gràcia", category:"Arts & Culture", date:"15-21 Aug, 2026", location:"Carrer de Verdi, Gràcia", image:W[7] },
  { title:"Sonar Festival", category:"Music", date:"19-21 Jun, 2026", location:"Fira de Barcelona", image:W[5] },
  { title:"Carnaval de Barcelona", category:"Festival", date:"28 Feb - 4 Mar, 2026", location:"Citywide", image:W[9] },
  { title:"Gran Gala Flamenco", category:"Music", date:"11 Sep, 2026", location:"Palau de la Música Catalana", image:W[3] },
  { title:"Arco Barcelona", category:"Arts & Culture", date:"12-16 Feb, 2026", location:"Fira de Barcelona", image:W[8] },
  { title:"Barcelona Pride Festival", category:"Festival", date:"26 Jun - 18 Jul, 2026", location:"Passeig de Gràcia, Eixample", image:W[0] },
  { title:"Primavera Sound", category:"Music", date:"5-7 Jun, 2026", location:"Parc del Fòrum", image:W[4] },
  { title:"Dia Nacional de Catalunya", category:"Arts & Culture", date:"11 Sep, 2026", location:"Citywide", image:W[2] },
  { title:"Circuit Festival", category:"Festival", date:"3-12 Aug, 2026", location:"Citywide", image:W[6] },
  { title:"Festa de la Merce", category:"Arts & Culture", date:"15-24 Sep, 2026", location:"Ciutat Vella", image:W[1] },
];

const FAQS = [
  { q:"What are the best hostels in Barcelona for solo travellers?", a:"Barcelona has a vibrant hostel scene tailored for solo travellers. Kabul Party Hostel, Yeah Hostel Barcelona, and Generator Barcelona consistently rank highest for social atmosphere and organised activities." },
  { q:"Is Barcelona good for solo travel?", a:"Absolutely. Barcelona is one of Europe's most solo-traveller-friendly cities, with walkable neighbourhoods, a thriving hostel community, and constant events making it easy to meet people." },
  { q:"What is the best time to visit Barcelona as a backpacker?", a:"May–June and September–October offer the best weather without peak summer crowds. Prices are lower and the social scene in hostels is still buzzing." },
  { q:"How safe is Barcelona for solo travellers?", a:"Barcelona is generally safe, though like any large city you should watch out for pickpockets in crowded areas. Stay aware in La Rambla and on the Metro." },
  { q:"Are there free things to do in Barcelona?", a:"Yes — Barceloneta beach, Park Güell (partial access), Bunkers del Carmel sunset views, and many neighbourhood festivals are free or low-cost." },
];

const CITIES = [
  ["Barcelona","Spain"],["Amsterdam","Netherlands"],["London","England"],["Berlin","Germany"],
  ["Paris","France"],["Prague","Czech Republic"],["Lisbon","Portugal"],["Budapest","Hungary"],
  ["Hanoi","Vietnam"],["Bangkok","Thailand"],
];

/* ---- Icons ---- */
const starSvg = '<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.55669 0.611098C8.0863 -0.203702 6.91385 -0.203697 6.44346 0.611099L4.57945 3.83988L0.961778 4.63024C0.0418853 4.83122 -0.306412 5.94677 0.308803 6.64143L2.77826 9.42975L2.40478 13.1512C2.31219 14.0739 3.24659 14.7801 4.1144 14.3943L7.50008 12.889L10.8858 14.3943C11.7536 14.7801 12.688 14.0739 12.5954 13.1512L12.2219 9.42975L14.6913 6.64143C15.3066 5.94677 14.9583 4.83122 14.0384 4.63024L10.4207 3.83988L8.55669 0.611098Z" fill="#F6A90E"/></svg>';
const calSvg = c => `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="3" width="12" height="11" rx="2" stroke="${c}" stroke-width="1.3"/><path d="M2 6h12M5 1.5v3M11 1.5v3" stroke="${c}" stroke-width="1.3"/></svg>`;
const locSvg = c => `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 14s5-4.2 5-8A5 5 0 003 6c0 3.8 5 8 5 8z" stroke="${c}" stroke-width="1.3"/><circle cx="8" cy="6" r="1.8" stroke="${c}" stroke-width="1.3"/></svg>`;
const userSvg = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5" r="2.6" stroke="#121417" stroke-width="1.3"/><path d="M3 13c0-2.5 2.2-4 5-4s5 1.5 5 4" stroke="#121417" stroke-width="1.3"/></svg>';
const dots = '<div class="dots"><span></span><span></span><span></span><span></span><span></span></div>';

/* ---- Card builders ---- */
function hostelCard(h){
  return `<article class="card card-hostel">
    <div class="card-img">
      <img src="${A}${h.image}" alt="${h.name}">
      ${dots}
      <div class="card-tags">
        <span class="tag tag-rank"><span class="tag-label">${h.rank}</span><svg class="tag-notch" width="4" height="28" viewBox="0 0 4 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 0H0V28L4 0Z" fill="#F25621"/></svg></span>
        <span class="tag tag-travellers"><span class="tag-label">${userSvg}${h.travellers} travellers</span><svg class="tag-notch" width="4" height="28" viewBox="0 0 4 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 0H0V28L4 0Z" fill="#FFFFFF"/></svg></span>
      </div>
    </div>
    <div class="card-body">
      <h3 class="card-name">${h.name}</h3>
      <div class="card-rating">${starSvg}<span class="num">${h.rating.toFixed(1)}</span><span class="reviews">(${h.reviews.toLocaleString()})</span></div>
      <div class="card-price">From <b>${h.price}</b></div>
    </div>
  </article>`;
}
function bestCard(h){
  return `<article class="card card-best">
    <div class="card-img"><img src="${A}${h.image}" alt="${h.name}">${dots}</div>
    <div class="card-body">
      <h3 class="card-name">${h.name}</h3>
      <div class="card-rating">${starSvg}<span class="num">${h.rating.toFixed(1)}</span><span class="reviews">(${h.reviews.toLocaleString()})</span></div>
      <div class="card-price">From <b>${h.price}</b></div>
    </div>
  </article>`;
}
function eventCard(e){
  return `<article class="card card-event">
    <span class="tag tag-rank event-rank"><span class="tag-label">${e.rank}</span><svg class="tag-notch" width="4" height="28" viewBox="0 0 4 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 0H0V28L4 0Z" fill="#F25621"/></svg></span>
    <div class="card-img"><img src="${A}${e.image}" alt="${e.title}"></div>
    <div class="card-body">
      <h3 class="event-title">${e.title}</h3>
      <div class="meta-row">${calSvg('#636C7D')}<span>${e.date}</span></div>
      <div class="meta-row">${locSvg('#636C7D')}<span>${e.hostel}</span></div>
    </div>
  </article>`;
}
function whatsonCard(w){
  return `<article class="card card-whatson">
    <div class="card-img">
      <span class="tag tag-category"><span class="tag-label">${w.category}</span><svg class="tag-notch" width="4" height="28" viewBox="0 0 4 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 0H0V28L4 0Z" fill="#FFFFFF"/></svg></span>
      <img src="${A}${w.image}" alt="${w.title}">
    </div>
    <div class="card-body">
      <h3 class="whatson-title">${w.title}</h3>
      <div class="meta-row">${calSvg('#636C7D')}<span>${w.date}</span></div>
      <div class="meta-row">${locSvg('#636C7D')}<span>${w.location}</span></div>
    </div>
  </article>`;
}

/* ---- Render ---- */
function fillTrack(type, data, fn){
  const el = document.querySelector(`.track[data-type="${type}"]`);
  if(el) el.innerHTML = data.map(fn).join('');
}
fillTrack('hostel', BUSIEST_HOSTELS, hostelCard);
fillTrack('best', BEST_HOSTELS, bestCard);
fillTrack('event', UPCOMING_EVENTS, eventCard);
fillTrack('whatson', WHATS_ON, whatsonCard);

/* Marquee */
(function(){
  const m = document.getElementById('marquee');
  const items = [...EVENTS, ...EVENTS];
  m.innerHTML = items.map((e,i)=>{
    const label = i===0 ? '<span class="marquee-label">Next events in Barcelona</span>' : '';
    return `${label}<span class="event-chip"><span class="name">${e.name}</span>${calSvg('#fff')}<span class="date">${e.date}</span></span><span class="event-dot"></span>`;
  }).join('');

  // Auto-scroll with manual override
  const scroller = m.parentElement;          // .marquee (the overflow container)
  const SPEED = 40;                           // px per second
  const RESUME_DELAY = 2000;                  // ms idle before auto-scroll resumes
  let paused = false;
  let resumeTimer = null;
  let last = null;

  function half(){ return scroller.scrollWidth / 2; } // content is doubled

  function tick(now){
    if(last == null) last = now;
    const dt = (now - last) / 1000;
    last = now;
    if(!paused){
      scroller.scrollLeft += SPEED * dt;
      if(scroller.scrollLeft >= half()) scroller.scrollLeft -= half();
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);

  function pause(){
    paused = true;
    if(resumeTimer) clearTimeout(resumeTimer);
    resumeTimer = setTimeout(()=>{ paused = false; last = null; }, RESUME_DELAY);
  }
  // Keep scrollLeft within the first copy's range so the wrap stays seamless
  scroller.addEventListener('scroll', ()=>{
    if(paused){
      if(scroller.scrollLeft >= half()) scroller.scrollLeft -= half();
      else if(scroller.scrollLeft < 0) scroller.scrollLeft += half();
    }
  }, {passive:true});
  ['wheel','touchstart','touchmove','pointerdown'].forEach(ev =>
    scroller.addEventListener(ev, pause, {passive:true})
  );
  scroller.addEventListener('mouseenter', ()=>{ paused = true; if(resumeTimer) clearTimeout(resumeTimer); });
  scroller.addEventListener('mouseleave', pause);
})();

/* FAQ accordion */
(function(){
  const list = document.getElementById('faqList');
  list.innerHTML = FAQS.map(f=>`
    <div class="faq-item">
      <button class="faq-q"><span class="q-text">${f.q}</span>
        <span class="faq-chevron"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 6l5 5 5-5" stroke="#121417" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
      </button>
      <p class="faq-a">${f.a}</p>
    </div>`).join('');
  list.querySelectorAll('.faq-q').forEach(btn=>{
    btn.addEventListener('click', ()=> btn.parentElement.classList.toggle('open'));
  });
})();

/* Popular cities */
(function(){
  const el = document.getElementById('cityPills');
  el.innerHTML = CITIES.map(([n,c])=>`<div class="city-pill"><span class="city-name">${n}</span><span class="city-country">${c}</span></div>`).join('');
})();

/* Carousels: prev/next + fade toggles */
document.querySelectorAll('.carousel').forEach(car=>{
  const track = car.querySelector('.track');
  const prev = car.querySelector('.nav-prev');
  const next = car.querySelector('.nav-next');
  const fadeL = car.querySelector('.fade-left');
  const fadeR = car.querySelector('.fade-right');
  function update(){
    const max = track.scrollWidth - track.clientWidth - 8;
    const showL = track.scrollLeft > 8;
    const showR = track.scrollLeft < max;
    fadeL.style.opacity = showL ? 1 : 0;
    fadeR.style.opacity = showR ? 1 : 0;
    prev.classList.toggle('disabled', !showL);
    next.classList.toggle('disabled', !showR);
  }
  prev.addEventListener('click', ()=> track.scrollBy({left:-340, behavior:'smooth'}));
  next.addEventListener('click', ()=> track.scrollBy({left:340, behavior:'smooth'}));
  track.addEventListener('scroll', update, {passive:true});
  new ResizeObserver(update).observe(track);
  update();
});
