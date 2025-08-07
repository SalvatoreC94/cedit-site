<template>
  <header class="bg-white border-bottom py-3">
    <div class="container d-flex align-items-center justify-content-between">
      <div class="d-flex align-items-center">
        <img :src="logo" alt="Logo CEDIT" class="me-2 rounded" style="width: 50px; height: auto;" />
        <h1 class="h4 mb-0 text-success">CEDIT</h1>
      </div>
      <nav>
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link text-success" href="#home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-success" href="#about">Chi Siamo</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-success" href="#services">Servizi</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-success" href="#contact">Contatti</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import logo from '../assets/cedit-logo.png';

export default {
  data() {
    return {
      logo
    };
  }
};
</script>

<style scoped>
nav .nav-link {
  font-weight: 400;
  transition: color 0.3s;
}

nav .nav-link:hover {
  color: #0d6efd; /* blu bootstrap */
}

header {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

img.rounded {
  border-radius: 8px;
}
</style>
