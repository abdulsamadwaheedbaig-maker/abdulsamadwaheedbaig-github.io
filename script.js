// -----------------------------
// Simple JS to power the portfolio
// -----------------------------
document.getElementById('yr').textContent = new Date().getFullYear();

// =====================================
// UPDATED PROJECTS WITH FULL DESCRIPTIONS + PROFESSIONAL IMAGES
// =====================================
const projects = [
  {
    id: 1,
    title: 'Project Alpha',
    img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop',
    tags: ['React','API','UI'],
    desc: 'A real-time dashboard platform built with React, API integration, and responsive UI.',
    live: '#',
    repo: '#',
    full: `
Project Alpha is a fully responsive **real-time dashboard application** designed for analytics, monitoring, and quick decision-making.<br><br>

### ⭐ Key Features  
• Live data streaming from REST APIs  
• Dynamic charts using Chart.js  
• Dark/Light theme toggle  
• User authentication system (JWT)  
• Modular React component architecture  
• Mobile-first responsive design  
<br>
### 💡 Challenges & Learnings  
• Implemented real-time API polling with optimized intervals  
• Built reusable UI components to speed up feature development  
• Improved mobile performance by 30% using memoization  
    `
  },

  {
    id: 2,
    title: 'Designer Portfolio',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    tags: ['HTML','CSS','Animation'],
    desc: 'A premium designer portfolio template with animations and clean layout.',
    live: '#',
    repo: '#',
    full: `
Designer Portfolio is a **pixel-perfect creative portfolio** built for designers, photographers, and visual artists.<br><br>

### ⭐ Key Features  
• Smooth animations with GSAP  
• Auto-layout responsive grid  
• Lightbox gallery with modal previews  
• SEO-optimized semantic HTML  
• Custom CSS variables for themes  
<br>
### 💡 Challenges & Learnings  
• Achieved a 98/100 Lighthouse performance score  
• Built a custom animation timeline for section entrances  
• Designed a scalable layout usable by multiple artists  
    `
  },

  {
    id: 3,
    title: 'E-commerce Demo',
    img: 'https://plus.unsplash.com/premium_photo-1684785618727-378a3a5e91c5?q=80&w=784&auto=format&fit=crop',
    tags: ['JavaScript','Payments'],
    desc: 'An interactive online store demo with cart, product filters, and animations.',
    live: '#',
    repo: '#',
    full: `
E-commerce Demo is a **modern online shop prototype** featuring a complete user flow from browsing to checkout.<br><br>

### ⭐ Key Features  
• Add-to-cart, remove, update quantity  
• Product filtering (price, category)  
• LocalStorage cart persistence  
• Responsive grid product layout  
• Simple checkout simulation  
• Smooth micro-animations for user interactions  
<br>
### 💡 Challenges & Learnings  
• Built a scalable cart system using a single source of truth  
• Improved UX with subtle hover/motion effects  
• Learned local caching techniques for offline cart behavior  
    `
  }
];

// =====================================
// Skills
// =====================================
const skills = [
  { name:'JavaScript', level:90 },
  { name:'React', level:85 },
  { name:'HTML & CSS', level:95 },
  { name:'Node.js', level:70 }
];

// Inject projects
const grid = document.getElementById('projectsGrid');
projects.forEach(p => {
  const el = document.createElement('article');
  el.className = 'card';
  el.innerHTML = `
    <img src="${p.img}" alt="${p.title}" loading="lazy"/>
    <h4>${p.title}</h4>
    <div class="tags">
      ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
    </div>
    <p style="color:var(--muted);margin-top:8px;font-size:14px">${p.desc}</p>
    <div style="display:flex;gap:8px;margin-top:10px">
      <button class="ghost" data-id="${p.id}">Details</button>
      <a class="ghost" href="${p.live}" target="_blank" rel="noopener">Live</a>
    </div>
  `;
  grid.appendChild(el);
});

// Inject skills
const skl = document.getElementById('skillList');
skills.forEach(s =>{
  const item = document.createElement('div');
  item.className='skill';
  item.innerHTML = `
    <div>${s.name}</div>
    <div class='progress' aria-hidden>
      <span style='width:${s.level}%'></span>
    </div>`;
  skl.appendChild(item);
});

// =============================
// 🔥 Modal Logic
// =============================
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const modalLinks = document.getElementById('modalLinks');

document.addEventListener('click', (e)=>{
  const btn = e.target.closest('button[data-id]');
  if(btn){
    const id = Number(btn.dataset.id);
    const p = projects.find(x => x.id === id);

    if(p){
      modalTitle.textContent = p.title;
      modalBody.innerHTML = p.full.replace(/\n/g, "<br>");
      modalLinks.innerHTML = `
        <a class='ghost' href='${p.repo}' target='_blank'>Repo</a>
        <a class='ghost' href='${p.live}' target='_blank'>Live Demo</a>
      `;
      modal.style.display='flex';
    }
  }
});

// Close modal
document.getElementById('modalClose').addEventListener('click', ()=> modal.style.display='none');
modal.addEventListener('click',(e)=>{ if(e.target===modal) modal.style.display='none' });

// Nav toggle for mobile
const navToggle = document.getElementById('navToggle');
const menu = document.getElementById('menu');
navToggle.addEventListener('click', ()=>{
  const open = menu.style.display !== 'flex';
  menu.style.display = open ? 'flex' : 'none';
  menu.style.flexDirection = 'column';
  navToggle.setAttribute('aria-expanded', open);
});

// Form
document.getElementById('contactForm').addEventListener('submit',(e)=>{
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const msg = document.getElementById('formMsg');

  if(!name || !email || !message){
    msg.textContent='Please fill all fields.';
    return;
  }

  msg.textContent='Thanks! Your message was sent (demo).';
  e.target.reset();
});

// Theme
const themeToggle = document.getElementById('themeToggle');
function applyTheme(t){
  if(t==='light'){
    document.documentElement.style.setProperty('--bg','#f7fbff');
    document.documentElement.style.setProperty('--card','#ffffff');
    document.documentElement.style.setProperty('--muted','#425269');
    document.documentElement.style.setProperty('--accent','#2b7cff');
    document.body.style.color='#04203a';
  } else {
    document.documentElement.style.removeProperty('--bg');
    document.documentElement.style.removeProperty('--card');
    document.documentElement.style.removeProperty('--muted');
    document.documentElement.style.removeProperty('--accent');
    document.body.style.color='';
  }
}

themeToggle.addEventListener('click', ()=>{
  const cur = localStorage.getItem('theme')==='light' ? 'dark' : 'light';
  localStorage.setItem('theme', cur);
  applyTheme(cur);
});

if(localStorage.getItem('theme')==='light') applyTheme('light');

// Typed name
(function(){
  const el = document.getElementById('typedName');
  const full = 'Abdulsamad';
  let i=0;
  function type(){
    el.textContent = full.slice(0,i++);
    if(i <= full.length) setTimeout(type, 80);
  }
  type();
})();

// Scroll reveal
const reveals = document.querySelectorAll('.card, .profile, .intro');
const obs = new IntersectionObserver((entries)=>{
  entries.forEach(en=>{
    if(en.isIntersecting){
      en.target.style.transform='translateY(0)';
      en.target.style.opacity='1';
    }
  });
},{threshold:0.12});

reveals.forEach(r=>{
  r.style.opacity=0;
  r.style.transform='translateY(8px)';
  r.style.transition='all 600ms cubic-bezier(.2,.9,.1,1)';
  obs.observe(r);
});
