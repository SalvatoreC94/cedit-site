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
   <div style="position:absolute; bottom:10px; right:15px; font-size:0.8rem; font-weight:500; color:#222;">
  <span style="opacity:0.9;">Designed with</span> 
  <span style="color:#E4405F;">♥</span> 
  <span style="opacity:0.9;">by</span> 
  <span style="color:#000;">Salvatore Cozzolino</span>
  <a href="https://www.instagram.com/salvatorecozzolino.dev" target="_blank"
     style="margin-left:0.4rem; color:#E4405F; text-decoration:none; display:inline-block; transition:transform 0.2s ease;">
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
         viewBox="0 0 448 512" style="vertical-align:middle;">
      <path d="M224,202.66A53.34,53.34,0,1,0,277.34,256,53.38,53.38,0,0,0,224,202.66ZM224,338a82,82,0,1,1,82-82A81.91,81.91,0,0,1,224,338Zm146.4-194.6a54,54,0,0,0-30.6-30.6C319.77,104,224,104,224,104s-95.77,0-115.8,8.8a54,54,0,0,0-30.6,30.6C69,163.77,69,256,69,256s0,92.23,8.6,112.4a54,54,0,0,0,30.6,30.6C128.23,408,224,408,224,408s95.77,0,115.8-8.6a54,54,0,0,0,30.6-30.6C379,348.23,379,256,379,256S379,163.77,370.4,143.4ZM398.8,388a90.54,90.54,0,0,1-50.8,50.8C322.77,448,224,448,224,448s-98.77,0-124-9.2a90.54,90.54,0,0,1-50.8-50.8C40,362.77,40,256,40,256S40,149.23,49.2,124a90.54,90.54,0,0,1,50.8-50.8C125.23,64,224,64,224,64s98.77,0,124,9.2a90.54,90.54,0,0,1,50.8,50.8C408,149.23,408,256,408,256S408,362.77,398.8,388ZM342.9,137.1a22.86,22.86,0,1,1-22.86-22.86A22.86,22.86,0,0,1,342.9,137.1Z"/>
    </svg>
  </a>
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
  position: relative;
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
