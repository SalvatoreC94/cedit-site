<template>
  <footer class="footer">
    <div class="container text-center">
      <p class="mb-2 fw-semibold">CEDIT - Centro di Diagnostica e Terapia</p>
      <div class="mb-3">
        
        <a href="https://www.instagram.com/centro.cedit?igsh=MTVxZHc5ZzF5Ym1qMA==" target="_blank" class="text-white"><i class="bi bi-instagram"></i></a>
      </div>
      <p class="small mb-0">
        <a href="/privacy" class="text-white text-decoration-underline small">Privacy Policy</a> |
        <a href="/cookies" class="text-white text-decoration-underline small">Cookie Policy</a>
      </p>
      <p class="mt-2 mb-0 small">&copy; 2025 CEDIT. Tutti i diritti riservati.</p>
    </div>
  </footer>
</template>

<script>
export default { name: "AppFooter" };
</script>

<style scoped>
.footer {
  background-color: #156845;
  color: white;
  border-top: 5px solid #ffc857;
  padding: 2rem 0;
}
.footer i {
  font-size: 1.5rem;
  margin: 0 0.5rem;
  transition: opacity 0.2s ease;
}
.footer i:hover {
  opacity: 0.8;
}
</style>
