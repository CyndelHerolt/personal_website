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
    let size = Math.max(1, distanceToEdge / 5);

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

  // -------------------------------------

  const menu = document.querySelector('.menu_container');
  const sticky = menu.offsetTop; // Ajoutez un décalage si nécessaire

  window.onscroll = function () {
    if (window.scrollY >= sticky) {
      menu.classList.add('sticky');
    } else {
      menu.classList.remove('sticky');
    }
  };
});
</script>

<template>
  <div id="trace"></div>
  <div class="cols">
    <div class="col"></div>
    <div class="col"></div>
    <div class="col"></div>
    <div class="col uniq"></div>
    <div class="col"></div>
    <div class="col"></div>
  </div>
  <div class="radial"></div>
  <header class="menu_container">
    <nav class="menu">
      <a ref="homeLink" v-scroll-to="'#app'">Accueil</a>
      <a ref="objectifsLink" v-scroll-to="'#objectifs'">Objectifs</a>
      <a ref="competencesLink" v-scroll-to="'#competences'">Compétences</a>
      <a ref="projetsLink" v-scroll-to="'#projets'">Projets</a>
      <a ref="contactLink" v-scroll-to="'#contact'">Contact</a>
    </nav>
  </header>
  <nav class="reseaux">
    <a href="https://github.com/CyndelHerolt" target="_blank">GitHub <i class="fas fa-arrow-alt-circle-up" style="transform: rotate(45deg)"></i></a>
    <a href="https://www.linkedin.com/in/cyndel-herolt/" target="_blank">LinkedIn <i class="fas fa-arrow-alt-circle-up" style="transform: rotate(45deg)"></i></a>
  </nav>
  <RouterView/>
</template>

<style scoped>
.sticky {
  position: fixed !important;
  top: 0;
  background: transparent;
}

.menu_container {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: fit-content;
  z-index: 1;
  display: flex;
  justify-content: center;

  .menu {
    display: flex;
    gap: 2rem;
    padding: 2rem 4rem;
    background-color: var(--secondary-dark);
    height: fit-content;
    border-radius: 10px;
    margin: 2rem 0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    border: solid 1px rgba(206, 206, 206, 0.1);
  }

  a {
    color: var(--color-text) !important;
    text-decoration: none;
    font-weight: bold;
    text-transform: uppercase;

    &.router-link-active {
      color: var(--primary) !important;
    }

    &:hover {
      color: var(--primary) !important;
      cursor: pointer;
    }
  }
}

.reseaux {
  display: flex;
  justify-content: start;
  gap: 2rem;

  a {
    color: var(--color-text) !important;
    text-decoration: none;
    text-transform: uppercase;

    &:after {
      content: '';
      display: flex;
      width: 25px;
      height: 2px;
      background-color: var(--primary);
      margin-right: 5px;
      border-radius: 1px;
      margin-top: 1rem;
      transition: width 0.3s;
    }

    &:hover {

      &:after {
        width: 100%;
        transition: width 0.3s;
      }
    }
  }
}

.cols {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: var(--color-background);
  display: flex;

  .col {
    flex: 1;
    height: 100%;
    background: var(--color-background);
    z-index: 1;
    border-left: solid 1px rgb(206, 206, 206, 0.1);
  }

  .uniq {
    background-color: rgba(13, 13, 13, 0.9);
  }
}

.radial {
  position: absolute;
  top: -60%;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: radial-gradient(circle at center, rgb(66, 223, 223, 0.3) 2%, rgba(21, 21, 21, 0) 40%);
  border-radius: 50%;
}
</style>
