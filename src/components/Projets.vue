<script setup>
import {RouterLink, RouterView} from 'vue-router'
import Projet from '../views/UnifolioView.vue'
</script>

<template>
  <section id="projets">
    <h2>Projets web</h2>
    <article>
      <div class="projet-card">
        <router-link class="underline-link" to="/unifolio">
          Découvrir le projet
        </router-link>
        <div class="title">
          <h1 class="unifolio"><span>[</span>UniFolio<span>]</span></h1>
          <h2>2022-2024</h2>
        </div>
      </div>
      <div class="preview">
        <h2>
          Outil de création, suivi et évaluation de portfolios universitaires
        </h2>
      </div>
    </article>
    <article>
      <div class="projet-card">
        <router-link class="underline-link" to="/intranet">
          Découvrir le projet
        </router-link>
        <div class="title">
          <h1 class="intranet"><span>[</span>Intranet<span>]</span></h1>
          <h2>2022-2024</h2>
        </div>
      </div>
      <div class="preview">
        <h2>
          Outil gestion de formations universitaires
        </h2>
      </div>
    </article>
    <article>
      <div class="projet-card">
        <router-link class="underline-link" to="/roylunetier">
          Découvrir le projet
        </router-link>
        <div class="title">
          <h1 class="roylunetier"><span>[</span>RoyLunetier<span>]</span></h1>
          <h2>2023-2024</h2>
        </div>
      </div>
      <div class="preview">
        <h2>
          P.O.C d'un viewer 3D
        </h2>
      </div>
    </article>

    <h2>
      Projets graphiques
    </h2>
    <article>
      <h3>Illustrations</h3>
      <p>Les images que j'utilise pour construire mes projets graphiques sont libres de droit et proviennent du site de
        la
        <a href="https://www.bnf.fr/fr/images-en-ligne" target="_blank">BNF <i class="fas fa-arrow-alt-circle-up"
                                                                               style="transform: rotate(45deg)"></i></a>
        ou de <a href="http://www2.culture.gouv.fr/documentation/archim/accueil.html" target="_blank">Archim <i
            class="fas fa-arrow-alt-circle-up" style="transform: rotate(45deg)"></i></a>. Il peut également s'agir de
        photos personnelles.
      </p>
      <div class="illu">
        <figure>
          <img src="/illu/affiche1.png" alt="illustration 2">
          <figcaption>
            Réinterprétation de l'affiche de <a href="https://www.nosrevesfontdubruit.fr/retrospective-edition-3/"
                                                target="_blank">
            ce concert <i class="fas fa-arrow-alt-circle-up" style="transform: rotate(45deg)"></i></a>
          </figcaption>
        </figure>
        <figure>
          <img src="/illu/affiche2.png" alt="illustration 3">
          <figcaption>
            Réinterprétation de l'affiche de <a href="https://www.nosrevesfontdubruit.fr/retrospective-edition-3/"
                                                target="_blank">
            ce concert <i class="fas fa-arrow-alt-circle-up" style="transform: rotate(45deg)"></i></a>
          </figcaption>
        </figure>
        <figure>
          <img src="/illu/illu1.png" alt="illustration 1">
          <figcaption>
            Illustration d'archive retravaillée
          </figcaption>
        </figure>
      </div>
    </article>
    <article>
      <h3>Photos</h3>
      <div class="photos">
        <figure><img src="/photos/malta.jpg" alt="">
          <figcaption>Malta</figcaption>
        </figure>
        <figure><img src="/photos/valee.jpg" alt="">
          <figcaption>Valée de la Clarée</figcaption>
        </figure>
        <figure><img src="/photos/nevache.jpg" alt="">
          <figcaption>Valée de la Clarée</figcaption>
        </figure>
        <figure><img src="/photos/clown2.jpg" alt="">
          <figcaption>La Rochelle</figcaption>
        </figure>
        <figure><img src="/photos/meduses2.jpg" alt="">
          <figcaption>La Rochelle</figcaption>
        </figure>
        <figure><img src="/photos/mouette1.jpg" alt="">
          <figcaption>Biarritz</figcaption>
        </figure>
        <figure><img src="/photos/bridge.jpg" alt="">
          <figcaption>Paris</figcaption>
        </figure>
        <figure><img src="/photos/rer.jpg" alt="">
          <figcaption>Paris</figcaption>
        </figure>
        <figure><img src="/photos/lezard.jpg" alt="">
          <figcaption>Malta</figcaption>
        </figure>
        <figure><img src="/photos/castle.jpg" alt="">
          <figcaption>Malta</figcaption>
        </figure>
        <figure><img src="/photos/archi.jpg" alt="">
          <figcaption>Malta</figcaption>
        </figure>
        <figure><img src="/photos/portrait.jpg" alt="">
          <figcaption>Les Bordes-Aumont</figcaption>
        </figure>
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
    margin-top: 5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

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

      .unifolio:before {
        content: 'UniFolio';
        position: absolute;
        top: -2rem;
        right: -5rem;
        font-size: 15rem;
        font-weight: 900;
        color: var(--secondary);
        opacity: .1;
      }

      .intranet:before {
        content: 'Intranet';
        position: absolute;
        top: -2rem;
        right: -5rem;
        font-size: 15rem;
        font-weight: 900;
        color: var(--secondary);
        opacity: .1;
      }

      .roylunetier:before {
        content: 'RoyLunetier';
        position: absolute;
        top: -2rem;
        right: -5rem;
        font-size: 15rem;
        font-weight: 900;
        color: var(--secondary);
        opacity: .1;
      }


      h2 {
        font-size: 2rem;
        font-weight: 600;
        text-align: end;
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

.illu {
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-top: 5rem;

  figure {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    img {
      width: 100%;
      height: auto;
      border: solid 1px var(--color-card);
    }

    figcaption {
      opacity: .8;
      font-family: Montserrat, sans-serif;
    }
  }
}

.photos {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 1rem;
  margin-top: 5rem;

  figure {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    img {
      width: 100%;
      height: auto;
      border: solid 1px var(--color-card);
    }

    figcaption {
      opacity: .8;
      font-family: Montserrat, sans-serif;
    }
  }
}
</style>