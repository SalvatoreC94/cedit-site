<template>
  <main>
    <!-- Sezione Home -->
    <section id="home" class="vh-100 d-flex align-items-center bg-light position-relative">
      <div class="background-image"></div>
      <div class="container text-center position-relative">
        <h1 class="display-4 text-success">Benvenuti al CEDIT</h1>
        <p class="lead">Specialisti in Medicina Fisica e Riabilitazione.</p>
        <a href="#about" class="btn btn-success btn-lg">Scopri di più</a>
      </div>
    </section>

    <!-- Sezione Chi Siamo -->
    <section id="about" class="py-5 bg-white">
      <div class="container">
        <h2 class="text-success text-center mb-4">Chi Siamo</h2>
        <p class="text-center">
          Siamo un team di esperti dedicati al tuo benessere e recupero fisico.
        </p>
        <div class="row mt-5">
          <div class="col-md-6 col-lg-3 mb-4" v-for="(member, index) in staff" :key="index">
            <div class="card">
              <img :src="member.img" class="card-img-top" :alt="member.name" />
              <div class="card-body text-center">
                <h5 class="card-title">{{ member.name }}</h5>
                <p class="card-text">{{ member.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sezione Servizi -->
    <section id="services" class="py-5 bg-light">
      <div class="container">
        <h2 class="text-success text-center mb-4">I Nostri Servizi</h2>
        <div class="row">
          <div class="col-md-6">
            <ul class="list-group">
              <li v-for="(servizio, i) in servizi" :key="i" class="list-group-item">{{ servizio }}</li>
            </ul>
          </div>
          <div class="col-md-6">
            <div id="carouselServices" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item" :class="{ active: i === 0 }" v-for="(img, i) in immaginiServizi" :key="i">
                  <img :src="img" class="d-block w-100" :alt="`Servizio ${i + 1}`">
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

    <!-- Sezione Contatti -->
    <section id="contact" class="bg-light">
      <div class="container">
        <h2 class="text-success text-center mb-4">Contattaci</h2>
        <div class="row">
          <div class="col-md-6 mb-4">
            <h3 class="text-success">Dove ci troviamo</h3>
            <p>Via Vittorio Veneto 44, 84010 San Marzano sul Sarno (SA)</p>
            <div class="map-container mt-3">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.4157244611492!2d14.587402000000003!3d40.774873799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133bb96ca307521f%3A0x9ef2333b6cd487a6!2sCalenda%20Dr.%20Guido%20Cedit!5e0!3m2!1sit!2sit!4v1734566054263!5m2!1sit!2sit" width="100%" height="300" style="border:0;" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
          <div class="col-md-6">
            <h3 class="text-success">Prenota</h3>
            <p>Per informazioni o prenotazioni, contattaci al seguente recapito:</p>
            <p class="fs-4">
              <i class="bi bi-telephone-fill text-success me-2"></i>
              <strong>+39 081 5187313</strong>
            </p>
            <p>Siamo disponibili dal lunedì al venerdì dalle 9:00 alle 18:00.</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import illustrazioneDottore from '../assets/illustrazione-dottore.jpg';
import illustrazioneDottoressa from '../assets/illustrazione-dottoressa.jpg';
import servizio1 from '../assets/tecarterapia.jpg';
import servizio2 from '../assets/crioterapia.jpg';
import servizio3 from '../assets/massoterapia.jpg';

export default {
  data() {
    return {
      staff: [
        { name: 'Dott. Mario Rossi', desc: 'Fisioterapista con 30 anni di esperienza nella riabilitazione post-traumatica.', img: illustrazioneDottore },
        { name: 'Dott.ssa Anna Bianchi', desc: 'Esperta in riabilitazione e tecniche manuali avanzate.', img: illustrazioneDottoressa },
        { name: 'Dott. Luigi Verdi', desc: 'Massoterapista specializzato in trattamento dei dolori muscolari cronici.', img: illustrazioneDottore },
        { name: 'Dott.ssa Carla Neri', desc: 'Specialista in diagnostica e recupero funzionale personalizzato.', img: illustrazioneDottoressa },
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
      immaginiServizi: [servizio1, servizio2, servizio3]
    };
  }
};
</script>

<style scoped>
#home {
  position: relative;
  height: 100vh;
}
.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../assets/pexels-karolina-grabowska-4506206.jpg');
  background-size: cover;
  background-position: center;
  opacity: 0.3;
  z-index: 0;
}
#home .container {
  position: relative;
  z-index: 1;
}
.card-img-top {
  height: 240px;
  object-fit: cover;
}
</style>
