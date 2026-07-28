import './style.css'

const centers = [
  { title: 'Gurukulam For Jadavpur University', color: 'gold', icon: '⌂', text: 'For students of', schools: 'JU', href: 'https://gurukulamhostels.in/jadavpur-gurukulam.html' },
  { title: 'Kolkata Gurukulam', color: 'gold', icon: '⌂', text: 'For students of', schools: 'CU, Heritage, IEM, GCELT, GCECT, TMSL, RCCIIT', href: 'https://gurukulamhostels.in/kolkata-gurukulam.html' },
  { title: 'Durgapur Gurukulam 1', color: 'cyan', icon: '✦', text: 'For students of', schools: 'Sanaka Group of Institutions & NSHM College', href: 'https://gurukulamhostels.in/durgapur-gurukulam1.html' },
  { title: 'Durgapur Gurukulam 2', color: 'pink', icon: '♜', text: 'For students of', schools: 'BCET, Bengal College of Pharmacy, Dr. BC Roy Polytechnic & Pharmacy, Dr. BC Roy College of Professional Studies', href: 'https://gurukulamhostels.in/durgapur-gurukulam2.html' },
]

document.querySelector('#app').innerHTML = `
  <nav class="navbar">
    <a class="brand" href="#top"><img src="https://gurukulamhostels.in/assets/applogo2.png" alt="Gurukulam logo"><span>Gurukulam <b>Hostels</b></span></a>
    <div class="languages"><button class="selected">EN</button><button>हिंदी</button><button>বাংলা</button></div>
  </nav>
  <main id="top">
    <div class="glow"></div>
    <section class="hero">
      <img class="hero-logo" src="https://gurukulamhostels.in/assets/applogo2.png" alt="Gurukulam Hostels logo">
      <h1>Gurukulam <span>Hostels</span> <em>[Boys]</em></h1>
      <p>A serene place for peaceful stay and healthy food at the most affordable rate — fostering diligent study,<br class="desktop"> spiritual upliftment, ideal character, and strong career growth.</p>
    </section>
    <section class="gateways">
      <h2>Select Your Center Gateway</h2>
      <div class="cards">${centers.map((center) => `
        <article class="card ${center.color}">
          <div class="card-icon">${center.icon}</div>
          <h3>${center.title}</h3>
          <p>${center.text}<br><strong>${center.schools}</strong></p>
          <a class="portal" href="${center.href}">Enter Portal <span>→</span></a>
        </article>`).join('')}</div>
    </section>
  </main>
  <footer><div class="footer-links"><a href="#top">Home</a><a href="#about">About</a><a href="#contact">Contact</a></div><p>© 2024 Gurukulam Hostels All Rights Reserved.</p><div class="social"><a href="#">f</a><a href="#">𝕏</a><a href="#">◎</a><a href="#">p</a></div></footer>
`

document.querySelectorAll('.languages button').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.languages button').forEach((item) => item.classList.remove('selected'))
    button.classList.add('selected')
  })
})
