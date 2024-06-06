<script setup>
import {onMounted, ref} from 'vue'
import {RouterLink, RouterView} from 'vue-router'

let currentX = ref(0);
let currentY = ref(0);
let targetX = ref(0);
let targetY = ref(0);
let speed = 0.03;

onMounted(() => {
  const trace = document.getElementById('trace');

  document.addEventListener('mousemove', (e) => {
    targetX.value = e.pageX;
    targetY.value = e.pageY;

    // distance du curseur aux bords de la page
    let distanceToEdge = Math.min(e.pageX, e.pageY, document.documentElement.scrollWidth - e.pageX, document.documentElement.scrollHeight - e.pageY);

    // distance pour déterminer la taille de l'élément #trace
    let size = Math.max(1, distanceToEdge /3);

    trace.style.width = size + 'px';
    trace.style.height = size + 'px';
  });

  function animate() {
    currentX.value += (targetX.value - currentX.value) * speed;
    currentY.value += (targetY.value - currentY.value) * speed;

    trace.style.left = (currentX.value - trace.offsetWidth / 2) + 'px';
    trace.style.top = (currentY.value - trace.offsetHeight / 2) + 'px';

    requestAnimationFrame(animate);
  }

  animate();
});
</script>

<template>
  <div id="trace"></div>
  <header>
    <nav>
      <RouterLink to="/">Accueil</RouterLink>
      <RouterLink to="/objectifs">Objectifs</RouterLink>
      <RouterLink to="/projets">Projets</RouterLink>
    </nav>
    <nav class="reseaux">
      <a href="https://github.com/CyndelHerolt" target="_blank">GitHub</a>
      <a href="https://www.linkedin.com/in/cyndel-herolt/" target="_blank">LinkedIn</a>
    </nav>
  </header>

  <RouterView/>
</template>

<style scoped>
header {
  position: relative;
  z-index: 1;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
}

nav {
  display: flex;
  justify-content: start;
  gap: 1rem;

  a.router-link-active {
    text-decoration: none;
    &:hover {
      opacity: 1 !important;
      cursor: default;
    }
  }
}

.reseaux {
  gap: 1rem;

  a {
    color: var(--color-text) !important;
  }
}
</style>
