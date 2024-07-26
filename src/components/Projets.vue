<script setup>
import {RouterLink, RouterView} from 'vue-router'
import Projet from '../views/UnifolioView.vue'
</script>

<template>
  <section id="projets">
    <article>
      <div class="projet-card">
        <router-link to="/unifolio">
          Découvrir le projet
        </router-link>
        <div class="title">
          <h1><span>[</span>UniFolio<span>]</span></h1>
          <h2>2022-2024</h2>
        </div>
      </div>
      <div class="preview">
        <h2>
          Outil de création, suivi et évaluation de portfolios universitaires
        </h2>

      </div>
    </article>
  </section>
</template>

<style scoped>
#projets {
  padding-top: 15rem;
  margin-top: 10rem;
  margin-bottom: 15rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;

  .projet-card {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    a {
      color: var(--color-text) !important;
      text-decoration: none;
      text-transform: uppercase;
      padding: 1rem 0;
      z-index: 2;

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

    .title {

      h1 {
        font-size: 5rem;
        text-transform: uppercase;
        font-weight: 900;
        text-align: end;
        position: relative;
        color: var(--white);

        span {
          font-weight: 300;
          font-size: 7rem;
        }

        &:before {
          content: 'UniFolio';
          position: absolute;
          top: -2rem;
          right: -5rem;
          font-size: 15rem;
          font-weight: 900;
          color: var(--secondary);
          opacity: .1;
        }

        &:after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 25%;
          height: 3px;
          background-color: var(--primary);
        }
      }

      h2 {
        font-size: 2rem;
        font-weight: 600;
        text-align: end;
        margin-right: 15%;
        position: relative;
        opacity: .8;
      }

      em {
        font-size: 2rem;
        font-family: Montserrat, sans-serif;
        opacity: .8;
      }
    }
  }

  .preview {
    h2 {
      text-align: end;
    }
  }
}
</style>