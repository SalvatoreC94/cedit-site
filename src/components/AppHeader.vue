<template>
  <header class="bg-white shadow-sm fixed-top">
    <div class="container d-flex align-items-center justify-content-between py-3">
      <div class="d-flex align-items-center">
        <img :src="logo" alt="Logo CEDIT" class="me-2 rounded" style="width: 48px;" />
        <h1 class="h5 mb-0 text-success fw-bold">CEDIT</h1>
      </div>
      <nav>
        <ul class="nav">
          <li class="nav-item"><a class="nav-link text-success" href="#home">Home</a></li>
          <li class="nav-item"><a class="nav-link text-success" href="#about">Chi Siamo</a></li>
          <li class="nav-item"><a class="nav-link text-success" href="#services">Servizi</a></li>
          <li class="nav-item"><a class="nav-link text-success" href="#contact">Contatti</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import logo from '../assets/cedit-logo.png';
export default {
  data() {
    return { logo };
  }
};
</script>

<style scoped>
.nav-link {
  transition: color 0.3s;
  font-weight: 500;
}
.nav-link:hover {
  color: #0d6efd;
}
</style>
