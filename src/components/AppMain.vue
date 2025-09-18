<template>
  <main>
    <!-- Hero Section -->
    <section id="home" class="hero-section position-relative">
      <!-- Onda superiore -->
      <svg class="shape-divider top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 140" preserveAspectRatio="none">
        <path fill="#fdf8f1"
          d="M0,64L48,74.7C96,85,192,107,288,112C384,117,480,107,576,96C672,85,768,75,864,85.3C960,96,1056,128,1152,128C1248,128,1344,96,1392,80L1440,64V0H0Z"/>
      </svg>

      <div class="background-overlay"></div>

      <div class="container text-center glass p-4 p-md-5 rounded-4 shadow-lg position-relative" data-aos="fade-up">
        <h1 class="hero-title mb-3">Riscopri il tuo benessere</h1>
        <p class="lead mb-4">
          Percorsi personalizzati di riabilitazione e fisioterapia, seguiti dai migliori specialisti.
        </p>
        <a href="#about" class="btn btn-gold btn-lg rounded-pill shadow">Scopri di più</a>
      </div>

      <!-- Onda inferiore -->
      <svg class="shape-divider bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 140" preserveAspectRatio="none">
        <path fill="#fdf8f1"
          d="M0,64L48,74.7C96,85,192,107,288,112C384,117,480,107,576,96C672,85,768,75,864,85.3C960,96,1056,128,1152,128C1248,128,1344,96,1392,80L1440,64V140H0Z"/>
      </svg>
    </section>

    <!-- Chi Siamo -->
    <section id="about" class="py-5 bg-ivory">
      <div class="container" data-aos="fade-up">
        <h2 class="text-green text-center mb-4">Chi Siamo</h2>
        <p class="text-center mb-4">
  CEDIT è il centro di riferimento per la <strong>riabilitazione e fisioterapia </strong>.  
  Da oltre 25 anni offriamo percorsi su misura per il recupero funzionale post-infortunio,
  la riabilitazione post-operatoria e il trattamento del dolore muscolare e articolare.  
  Il nostro team unisce competenza medica, tecniche moderne come <strong>tecarterapia</strong> e <strong>crioterapia</strong>,
  e un approccio attento alla persona per accompagnarti passo dopo passo verso il pieno benessere.
</p>
        <div class="row g-4">
          <div v-for="(member, index) in staff" :key="index" class="col-12 col-sm-6 col-lg-3">
            <div class="card shadow-sm hover-card h-100">
              <img :src="member.img" class="card-img-top rounded-top" :alt="member.name" />
              <div class="card-body text-center">
                <h5 class="card-title text-green">{{ member.name }}</h5>
                <p class="small">{{ member.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Servizi -->
    <section id="services" class="py-5 bg-ivory">
      <div class="container" data-aos="fade-up">
        <h2 class="text-green text-center mb-5">
  I Nostri Servizi di Riabilitazione e Fisioterapia
</h2>
<p class="text-center mb-5">
  Offriamo un’ampia gamma di trattamenti per il recupero del benessere fisico:
  fisioterapia personalizzata, riabilitazione ortopedica ,
  <strong>massoterapia</strong>, <strong>laserterapia ad alta intensità</strong>,
  <strong>onde d'urto</strong> e <strong>crioterapia</strong>.
</p>
        <div class="row align-items-start gy-4">
          <div class="col-12 col-lg-6">
            <ul class="list-group list-group-flush">
              <li v-for="(servizio, i) in servizi" :key="i"
                class="list-group-item bg-ivory border-0 d-flex align-items-center service-item">
                <i :class="servizio.icon" class="text-green me-3 fs-5"></i>
                <span>{{ servizio.name }}</span>
              </li>
            </ul>
          </div>

          <div class="col-12 col-lg-6">
            <div id="carouselServices" class="carousel slide shadow-sm rounded overflow-hidden" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item" :class="{ active: i === 0 }" v-for="(img, i) in immaginiServizi" :key="i">
                  <img :src="img" class="d-block w-100 img-fluid" :alt="`Servizio ${i+1}`">
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselServices" data-bs-slide="prev">
                <span class="carousel-control-prev-icon"></span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselServices" data-bs-slide="next">
                <span class="carousel-control-next-icon"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contatti -->
    <section id="contact" class="bg-ivory py-5">
      <div class="container" data-aos="fade-up">
        <h2 class="text-green text-center mb-4">Contattaci</h2>
        <div class="row gy-4">
          <div class="col-12 col-md-6">
            <h3 class="text-green">Dove ci troviamo</h3>
            <p>Via Vittorio Veneto 44, 84010 San Marzano sul Sarno (SA)</p>
            <div class="map-container mt-3 rounded shadow-sm" style="height: 200px;">
              <iframe class="w-100 h-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.4157244611492!2d14.587402!3d40.7748738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133bb96ca307521f%3A0x9ef2333b6cd487a6!2sCalenda%20Dr.%20Guido%20Cedit!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit"
                style="border:0;" allowfullscreen loading="lazy"></iframe>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <h3 class="text-green">Chiama</h3>
            <p class="fs-5 fw-bold"><i class="bi bi-telephone-fill text-green me-2"></i> +39 081 5187313</p>
            <p>Lun–Mer–Ven: 9:00–12:00 / 15:00–18:00</p>
            <p>Mart–Giov: 15:00–18:00</p>
            <a href="tel:+390815187313" class="btn btn-outline-green w-100 rounded-pill mt-3">Chiama ora</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonianze -->
    <section id="testimonials" class="py-5 bg-ivory">
      <div class="container" data-aos="fade-up">
        <h2 class="text-green text-center mb-5">Cosa dicono di noi i nostri pazienti</h2>
        <div class="row g-4">
          <div v-for="(item, i) in testimonials" :key="i" class="col-12 col-md-4">
            <div class="card shadow-sm h-100 testimonial-card p-4 text-center">
              <p class="mb-3 fst-italic">"{{ item.text }}"</p>
              <h6 class="fw-bold text-green mb-0">{{ item.author }}</h6>
              <small class="text-muted">{{ item.info }}</small>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section id="faq" class="py-5">
      <div class="container" data-aos="fade-up">
        <h2 class="text-green text-center mb-5">Domande Frequenti</h2>
        <div class="accordion" id="faqAccordion">
          <div class="accordion-item" v-for="(faq, index) in faqs" :key="index">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed fw-semibold text-green"
                type="button" data-bs-toggle="collapse"
                :data-bs-target="'#faq-'+index">
                {{ faq.question }}
              </button>
            </h2>
            <div :id="'faq-'+index" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div class="accordion-body">{{ faq.answer }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Bottone Mobile -->
    <a href="#contact" class="btn btn-gold position-fixed bottom-0 start-50 translate-middle-x d-md-none mb-3 rounded-pill shadow">
      Prenota ora
    </a>
  </main>
</template>

<script>
import illustrazioneCalenda from '../assets/illustrazione-calenda.png';
import illustrazioneIrena from '../assets/illustrazione-irena.png';
import illustrazioneFederica from '../assets/illustrazione-federica.png';
import illustrazioneMarianna from '../assets/illustrazione-marianna.png';

import servizio1 from '../assets/fisioterapia.png';
import servizio2 from '../assets/crioterapia.png';
import servizio3 from '../assets/tecarterapia.png';
import servizio4 from '../assets/consulenza.png';

export default {
  name: 'AppMain',
  data() {
    return {
      staff: [
        { name: 'Dott. Guido Calenda', desc: 'Fisiatra e Posturologo con oltre 30 anni di esperienza. Guida i pazienti in percorsi mirati di riabilitazione motoria, favorendo un recupero rapido e duraturo.', img: illustrazioneCalenda },
        { name: 'Dott.ssa Irena Yaroshovych', desc: 'Medico specializzato in riabilitazione funzionale e rieducazione posturale. Progetta percorsi personalizzati e applica tecniche avanzate per accompagnare ogni paziente verso il recupero ottimale.', img: illustrazioneIrena },
        { name: 'Dott.ssa Federica Gaeta', desc: 'Fisioterapista specializzata in riabilitazione. Supporta i pazienti con programmi su misura per recuperare forza e movimento in sicurezza.', img: illustrazioneFederica },
        { name: 'Marianna Guarino', desc: 'Punto di riferimento all’ingresso del centro. Gestisce accoglienza e prenotazioni creando un’esperienza serena e ordinata per ogni paziente.', img: illustrazioneMarianna },
      ],
      servizi: [
        { name: 'Fisioterapia', icon: 'bi bi-heart-pulse' },
        { name: 'Riabilitazione', icon: 'bi bi-person-arms-up' },
        { name: 'Medicina Estetica', icon: 'bi bi-droplet' },
        { name: 'Massoterapia', icon: 'bi bi-hand-thumbs-up' },
        { name: 'Tecarterapia', icon: 'bi bi-lightning' },
        { name: 'Laserterapia ad alta intensità', icon: 'bi bi-sun' },
        { name: "Onde d'urto", icon: 'bi bi-broadcast-pin' },
        { name: 'Crioterapia', icon: 'bi bi-snow' },
        { name: 'Consulenze Specialistiche', icon: 'bi bi-chat-dots' }
      ],
      immaginiServizi: [servizio1, servizio2, servizio3, servizio4],
    };
  }
};
</script>


<style scoped>
.bg-ivory { background-color: #fdf8f1; }
.text-green { color: #156845; }

section {
  min-height: 60vh;
  padding-bottom: 5rem;
}

.hero-section {
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 3rem 1rem;
}

.background-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(rgba(21, 104, 69, 0.1), rgba(21, 104, 69, 0.1)),
    url('../assets/herosection.png') center/cover no-repeat;
  z-index: 0;
}

.shape-divider {
  position: absolute;
  width: 100%;
  left: 0;
}
.shape-divider.top { top: 0; transform: rotate(180deg); }
.shape-divider.bottom { bottom: -1px; }

.hero-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 5vw, 3.5rem);
  color: #156845;
  text-shadow: 0 2px 6px rgba(255, 255, 255, 0.7);
}

.glass {
  backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.65);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

p.lead { font-size: clamp(1rem, 2.5vw, 1.25rem); color: #156845; opacity: 0.85; }

.card-img-top {
  height: 200px; /* più bassa per evitare il taglio */
  object-fit: contain; /* mostra l'immagine intera senza tagliarla */
  background-color: #fff; /* mantiene uno sfondo neutro */
  border-bottom: 1px solid #eee; /* separa visivamente l'immagine dal testo */
}


.service-item {
  padding: 0.75rem 1rem;
  transition: background 0.2s ease, transform 0.2s ease;
}
.service-item:hover { background: rgba(21, 104, 69, 0.05); transform: translateX(5px); }

.testimonial-card {
  background: #fff;
  border-radius: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.testimonial-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.1);
}

.accordion-button { background-color: #fff8f1; }
.accordion-button:not(.collapsed) { color: #156845; background-color: #f1f9f4; }

.btn-gold { background: #d4a017; color: white; }
.btn-outline-green { border: 2px solid #156845; color: #156845; }
.btn-outline-green:hover { background: #156845; color: white; }

@media (max-width: 768px) {
  .carousel-inner img { object-fit: cover; height: 220px; }
}
</style>
