<script setup>
import {onMounted, ref} from 'vue';
// import des components
import Objectifs from './Objectifs.vue';
import Competences from './Competences.vue';
import Projets from './Projets.vue';

onMounted(() => {
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
  <header class="menu_container">
    <nav class="menu">
      <a ref="homeLink" v-scroll-to="'#app'">Accueil</a>
      <a ref="objectifsLink" v-scroll-to="'#objectifs'">Objectifs</a>
      <a ref="competencesLink" v-scroll-to="'#competences'">Compétences</a>
      <a ref="projetsLink" v-scroll-to="'#projets'">Projets</a>
      <a ref="contactLink" v-scroll-to="'#contact'">Contact</a>
    </nav>
  </header>
  <main>
    <section class="landing">
      <article>
        <img src="/img/minimoi.png" alt="auto-portrait">
        <div class="intro">
          <div>
            <h1>Cyndel Herolt</h1>
            <h2>Développeuse Web</h2>
            <h3>Fullstack</h3>
          </div>
          <ul>
            <li>
              <i class="fas fa-at"></i> cyndelherolt@gmail.com
            </li>
            <li>
              <i class="fas fa-building"></i> URCA - IUT de Troyes
            </li>
          </ul>
          <p>
            Produire des applications web de qualité en respectant les normes d'accessibilité et en adoptant une
            démarche d'éco-conception.
          </p>
        </div>
      </article>
    </section>

    <Objectifs />

    <Competences />

    <Projets />

  </main>
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


.landing {
  margin-bottom: 15rem;

  article {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 9rem;
    margin-left: 6rem;

    img {
      width: 400px;
      opacity: .7;
      background-color: transparent;
      border-radius: 50%;
      z-index: 1;
    }

    .intro {
      display: flex;
      flex-direction: column;
      width: 40%;

      h2 {
        color: var(--primary);
      }

      ul {
        padding: 0;
        display: flex;
        gap: 2rem;

        li {
          list-style: none;
          font-weight: 300;
        }
      }

      p {
        font-family: "Montserrat Alternates", sans-serif;
        margin-top: 1rem;
        font-size: 1.5rem;
        //line-height: 2;
        font-weight: 500;
        opacity: 1;
        color: var(--color-text);
      }
    }
  }
}

@media (max-width: 1024px) {
  section {
    flex-direction: column;
    gap: 2rem;

    article {
      width: 100%;
    }

    aside {
      width: 100%;

      .stack {
        height: auto;
      }
    }
  }

}
</style>
