<script setup>
import {onMounted, ref} from 'vue';
// import des components
import Objectifs from './Objectifs.vue';
import Competences from './Competences.vue';
import Projets from './Projets.vue';
</script>

<template>
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
