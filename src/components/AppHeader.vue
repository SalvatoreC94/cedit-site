<template>
  <header :class="{ 'header-shrink': isShrunk }">
    <nav class="navbar navbar-expand-lg bg-white shadow-sm fixed-top">
      <div class="container">
        <a class="navbar-brand d-flex align-items-center" href="#home">
          <img :src="logo" alt="Logo CEDIT" class="me-2 rounded-circle" style="width: 40px" />
          <span class="brand-title">CEDIT</span>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navMenu">
          <ul class="navbar-nav">
            <li class="nav-item" v-for="link in links" :key="link.href">
              <a class="nav-link" :href="link.href">{{ link.label }}</a>
            </li>
            <li class="nav-item ms-lg-3">
              <a href="#contact" class="btn btn-gold rounded-pill shadow-sm">Contatti</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import logo from '../assets/cedit-logo.webp';

export default {
  name: 'AppHeader',
  data() {
    return {
      logo,
      isShrunk: false,
      links: [
        { label: 'Home', href: '#home' },
        { label: 'Chi Siamo', href: '#about' },
        { label: 'Servizi', href: '#services' },
        
      ]
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isShrunk = window.scrollY > 50;
    }
  }
};
</script>

<style scoped>
.brand-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.4rem;
  color: #156845;
}
.nav-link {
  font-weight: 500;
  transition: color 0.2s;
}
.nav-link:hover {
  color: #156845;
}
.btn-gold {
  background-color: #ffc857;
  border: none;
  transition: transform 0.2s ease, background-color 0.2s ease;
}
.btn-gold:hover {
  background-color: #e6b84d;
  transform: scale(1.05);
}
.header-shrink .navbar {
  padding-top: 0.3rem !important;
  padding-bottom: 0.3rem !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}
</style>
