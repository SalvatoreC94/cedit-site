<template>
  <main>
    <!-- Hero Section -->
    <section id="home" class="vh-100 d-flex align-items-center position-relative overflow-hidden">
      <div class="background-image-glass"></div>
      <div class="container text-center position-relative glass p-5 rounded-4 shadow-lg text-success" data-aos="fade-up">
        <h1 class="display-3 fw-bold mb-3">Ritrova il tuo benessere</h1>
        <p class="lead mb-4">Con i migliori professionisti della riabilitazione</p>
        <a href="#about" class="btn btn-warning btn-lg text-dark fw-semibold">Scopri di più</a>
      </div>
    </section>

    <!-- Chi Siamo -->
    <section id="about" class="py-5 bg-white">
      <div class="container" data-aos="fade-up">
        <h2 class="text-success text-center mb-4">Chi Siamo</h2>
        <p class="text-center">Siamo un team di esperti dedicati al tuo benessere e recupero fisico.</p>
        <div class="row mt-5">
          <div class="col-md-6 col-lg-3 mb-4" v-for="(member, index) in staff" :key="index" data-aos="fade-up">
            <div class="card border-0 shadow-sm h-100">
              <img :src="member.img" class="card-img-top rounded-top" :alt="member.name" />
              <div class="card-body text-center">
                <h5 class="card-title text-success">{{ member.name }}</h5>
                <p class="card-text small">{{ member.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Servizi -->
    <section id="services" class="py-5 bg-light">
      <div class="container" data-aos="fade-up">
        <h2 class="text-success text-center mb-4">I Nostri Servizi</h2>
        <div class="row">
          <div class="col-md-6">
            <ul class="list-group list-group-flush">
              <li v-for="(servizio, i) in servizi" :key="i" class="list-group-item bg-light border-bottom">{{ servizio }}</li>
            </ul>
          </div>
          <div class="col-md-6">
            <div id="carouselServices" class="carousel slide shadow-sm rounded" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item" :class="{ active: i === 0 }" v-for="(img, i) in immaginiServizi" :key="i">
                  <img :src="img" class="d-block w-100 rounded" :alt="`Servizio ${i + 1}`">
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselServices" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselServices" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contatti -->
<!-- Contatti -->
<section id="contact" class="bg-light py-5">
  <div class="container" data-aos="fade-up">
    <h2 class="text-success text-center mb-4">Contattaci</h2>
    <div class="row">
      <!-- Mappa -->
      <div class="col-md-6 mb-4">
        <h3 class="text-success">Dove ci troviamo</h3>
        <p>Via Vittorio Veneto 44, 84010 San Marzano sul Sarno (SA)</p>
        <div class="map-container mt-3 rounded overflow-hidden shadow-sm" style="height: 200px;">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.4157244611492!2d14.587402000000003!3d40.774873799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133bb96ca307521f%3A0x9ef2333b6cd487a6!2sCalenda%20Dr.%20Guido%20Cedit!5e0!3m2!1sit!2sit!4v1756721221244!5m2!1sit!2sit"
    width="100%"
    height="100%"
    style="border:0;"
    allowfullscreen
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

      </div>

      <!-- Prenota -->
      <div class="col-md-6">
        <h3 class="text-success">Prenota</h3>
        <p>Per informazioni o prenotazioni:</p>
        <p class="fs-4">
          <i class="bi bi-telephone-fill text-success me-2"></i>
          <strong>+39 081 5187313</strong>
        </p>
        <p>Lun–Mer–Ven: 9:00–12:00 / 15:00–18:00</p>
        <p>Mart–Giov: 15:00–18:00</p>
      </div>
    </div>
  </div>
</section>


    <!-- Bottone Mobile -->
    <a href="#contact" class="btn btn-warning position-fixed bottom-0 start-50 translate-middle-x d-block d-md-none mb-3 zindex-tooltip fw-semibold">
      Prenota ora
    </a>
  </main>
</template>

<script>
import illustrazioneDottore from '../assets/illustrazione-dottore.jpg';
import illustrazioneDottoressa from '../assets/illustrazione-dottoressa.jpg';
import servizio1 from '../assets/fisioterapia.png';
import servizio2 from '../assets/crioterapia.png';
import servizio3 from '../assets/tecarterapia.png';
import servizio4 from '../assets/consulenza.png';

export default {
  data() {
    return {
      staff: [
        { name: 'Dott. Mario Rossi', desc: 'Fisioterapista con 30 anni di esperienza.', img: illustrazioneDottore },
        { name: 'Dott.ssa Anna Bianchi', desc: 'Esperta in tecniche manuali avanzate.', img: illustrazioneDottoressa },
        { name: 'Dott. Luigi Verdi', desc: 'Specialista in dolori muscolari cronici.', img: illustrazioneDottore },
        { name: 'Dott.ssa Carla Neri', desc: 'Diagnostica e recupero funzionale.', img: illustrazioneDottoressa },
      ],
      servizi: [
        'Fisioterapia',
        'Riabilitazione',
        'Medicina Estetica',
        'Massoterapia',
        'Tecarterapia',
        'Laserterapia ad alta intensità',
        "Onde d'urto",
        'Crioterapia',
        'Consulenze Specialistiche'
      ],
      immaginiServizi: [servizio1, servizio2, servizio3, servizio4]
    };
  }
};
</script>

<style scoped>
.background-image-glass {
  position: absolute;
  inset: 0;
  background: url('../assets/herosection.png') center/cover no-repeat;
  filter: brightness(0.4);
  z-index: 0;
}

.glass {
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.25);
  z-index: 1;
}

.card-img-top {
  height: 240px;
  object-fit: cover;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px;
}
</style>
