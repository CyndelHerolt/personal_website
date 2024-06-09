<script setup>
import {RouterLink, RouterView} from 'vue-router'
</script>

<template>
  <section id="projets">
    <h1>Projets Web</h1>
    <article>
      <div class="banniere" style="background-image: url(/img/unifolio.png)"></div>
      <div class="infos">
        <h2>Unifolio</h2>
        <p>Outil de création, suivi et évaluation de portfolios universitaires</p>
        <div>
          <div class="icon">
            <img src="/icons/sf.png" alt="logo du framework symfony">
          </div>
          <div class="descript">
            <h4 style="color: #A3DF42">Symfony ✨</h4>
            <p>UX Live Components, EasyAdmin, UX Turbo</p>
          </div>
        </div>
      </div>
    </article>
    <article>
      <div class="banniere" style="background-image: url(/img/intranet.png)"></div>
      <div class="infos">
        <h2>Intranet</h2>
        <p>Outil de gestion de formation</p>
        <div>
          <div class="icon">
            <img src="/icons/sf.png" alt="logo du framework symfony">
          </div>
          <div class="descript">
            <h4 style="color: #A3DF42">Symfony ✨</h4>
            <p>UX Live Components, EasyAdmin, UX Turbo, Mercure</p>
          </div>
        </div>
      </div>
    </article>
    <article>
      <div class="banniere" style="background-image: url(/img/wwcv2.png)"></div>
      <div class="infos">
        <h2>WWC V2</h2>
        <p>Outil de gestion de formation</p>
        <div>
          <div class="icon">
            <img src="/icons/sf.png" alt="logo du framework symfony">
          </div>
          <div class="descript">
            <h4 style="color: #A3DF42">Symfony ✨</h4>
            <p>EasyAdmin, UX Turbo, Mercure</p>
          </div>
        </div>
      </div>
    </article>

    <h1>Photographie</h1>
    <h1>Illustrations</h1>
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

  h1 {
    font-size: 3rem;
    font-weight: 700;
    color: var(--primary);
  }

  article {
    width: 100%;
    height: 400px;

    .banniere {
      width: 100%;
      height: 400px;
      background-size: cover;
      background-position: center;
      display: flex;
      filter: grayscale(1);
      opacity: 0.1;
      position: absolute;
      left: 0;
      z-index: -1;
    }

    .infos {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 2rem;
      height: 100%;
      padding: 0 2rem;

      h2 {
        color: var(--color-text);
        opacity: 1;
        font-size: 7rem;
        text-transform: uppercase;
        font-weight: 700;
      }

      p {
        font-size: 1.5rem;
        font-weight: 500;
        opacity: 1;
      }

      div {
        display: flex;
        gap: 2rem;

        .icon {
          width: 50px;
          height: 50px;
          padding: 10px;
          background-color: #1D1D1D;
          border-radius: 5px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: solid 1px rgba(206, 206, 206, 0.1);

          img {
            width: 100%;
          }
        }

        .descript {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 0.5rem;

          h4 {
            margin: 0;
            opacity: 1;
            font-weight: 600;
          }

          p {
            font-size: 1.25rem;
            font-weight: 300;
            opacity: 1;
          }
        }
      }
    }
  }
}
</style>