const heroSlides = document.querySelectorAll('.hero-img .hero-slide');
let heroIndex = 0;

function showHeroSlide(index) {
  heroSlides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextHeroSlide() {
  heroIndex = (heroIndex + 1) % heroSlides.length;
  showHeroSlide(heroIndex);
}

showHeroSlide(heroIndex);
setInterval(nextHeroSlide, 4500);

// Array berisi seluruh data landmark yang akan langsung ditampilkan bersamaan
const allLandmarks = [
    { 
        title: "Roman Colosseum", 
        img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5", 
        desc: "A monumental silent witness to the glory of the ancient Roman Empire in the heart of Rome." 
    },
    { 
        title: "Grand Canal of Venice", 
        img: "https://cdn.britannica.com/63/153463-050-06B6270D/Grand-Canal-Venice.jpg", 
        desc: "A unique water transportation network that winds through the romantic city of Venice." 
    },
    { 
        title: "Milan Duomo", 
        img: "https://cdn.britannica.com/41/250241-050-75947720/Milan-Duomo-in-Milan-Italy.jpg", 
        desc: "A magnificent Gothic cathedral coated in white marble, located in the fashion capital of Milan." 
    },
    { 
        title: "Leaning Tower of Pisa", 
        img: "https://leaningtowerpisa.org/wp-content/uploads/2025/10/The-Leaning-Tower-of-Pisa.jpg", 
        desc: "A cathedral bell tower in Tuscany, globally renowned for its unique tilt." 
    },
    { 
        title: "Lake Como", 
        img: "https://images.unsplash.com/photo-1534447677768-be436bb09401", 
        desc: "An elite lakeside retreat set against the breathtaking panorama of the Alps." 
    },
    { 
        title: "Trevi Fountain", 
        img: "https://images.unsplash.com/photo-1525874684015-58379d421a52", 
        desc: "A stunning Baroque fountain famous for the tradition of tossing in a coin for good luck." 
    },
    { 
        title: "Ancient City of Pompeii", 
        img: "https://cdn-imgix.headout.com/media/images/c77c4404fddb7b682df47383fa268bf8-1223-naples-003-naples-%7C-pompeii-01.jpg", 
        desc: "An ancient Roman city perfectly preserved beneath the volcanic ash of Campania." 
    }
];

// Fungsi merender semua kartu secara instan ketika load awal
function renderAllCards() {
    const container = document.getElementById('landmark-cards-container');
    
    container.innerHTML = allLandmarks.map(item => `
        <div class="landmark-card">
            <div class="card-img-wrapper">
                <img src="${item.img}?auto=format&fit=crop&w=500&q=80" alt="${item.title}">
            </div>
            <div class="card-body">
                <h4>${item.title}</h4>
                <p>${item.desc}</p>
            </div>
        </div>
    `).join('');
}

// Logika tombol panah kanan (geser ke kanan semulus lebar card + gap)
function slideRight() {
    const slider = document.querySelector('.gallery-side');
    // Geser sejauh 350px (lebar card 320px + gap 30px)
    slider.scrollLeft += 350; 
}

// Logika tombol panah kiri (geser ke kiri)
function slideLeft() {
    const slider = document.querySelector('.gallery-side');
    slider.scrollLeft -= 350;
}

// Jalankan fungsi render begitu halaman web selesai dibuka
document.addEventListener("DOMContentLoaded", () => {
    renderAllCards();
});

// --- CAROUSEL CULTURES SECTION ---
const socialSlides = document.querySelectorAll('.social-carousel .social-slide');
let socialIndex = 0;

function showSocialSlide(index) {
    socialSlides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSocialSlide() {
    socialIndex = (socialIndex + 1) % socialSlides.length;
    showSocialSlide(socialIndex);
}

// Menjalankan fungsi carousel hanya jika elemennya ada
if (socialSlides.length > 0) {
    showSocialSlide(socialIndex);
    // Ganti gambar setiap 4.5 detik (4500 milidetik)
    setInterval(nextSocialSlide, 4500); 
}