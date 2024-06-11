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
  <nav class="reseaux">
    <a href="https://github.com/CyndelHerolt" target="_blank">GitHub <i class="fas fa-arrow-alt-circle-up" style="transform: rotate(45deg)"></i></a>
    <a href="https://www.linkedin.com/in/cyndel-herolt/" target="_blank">LinkedIn <i class="fas fa-arrow-alt-circle-up" style="transform: rotate(45deg)"></i></a>
  </nav>
  <RouterView/>
</template>

<style scoped>


.reseaux {
  display: flex;
  justify-content: start;
  gap: 2rem;

  a {
    color: var(--color-text) !important;
    text-decoration: none;
    text-transform: uppercase;
    padding: 1rem 0;

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
