<script setup>
import {onMounted, ref} from 'vue';

// Méthode pour encapsuler chaque lettre dans un span
const formatText = (text) => {
  let formattedText = '';
  for (let i = 0; i < text.length; i++) {
    formattedText += `<span>${text[i]}</span>`;
  }
  return formattedText;
};
</script>

<template>
  <main>
    <section class="landing">
      <article>
        <img src="/img/minimoi.png" alt="">
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

    <section id="objectifs">
      <article>
        <div class="content">
          <img class="elips" src="/img/elips.png" alt="">
          <div>
            <h2 v-html="formatText('Qualité')"></h2>
            <p>
              Optimiser la qualité du code en usant de bonnes pratiques de développement tels que les Design Patterns.
            </p>
          </div>
          <div>
            <h2 v-html="formatText('Accessibilité')"></h2>
            <p>
              Respecter les normes techniques établies par la Web Accessibility Initiative (WAI) du World Wide Web
              Consortium (W3C)
            </p>
          </div>
          <div>
            <h2 v-html="formatText('Eco-conception')"></h2>
            <p>
              Concevoir des applications web éco-responsables en limitant les contenus energivores et en optimisant les
              performances.
            </p>
          </div>
        </div>
        <p class="help">Ces objectifs sont des axes de travail et constituent une démarche d'amélioration continue.</p>
      </article>
    </section>

    <section>
      <article id="competences">
        <ul>
          <li>
            <div class="icon">
              <img src="/icons/sf.png" alt="logo du framework symfony">
            </div>
            <div class="descript">
              <h4 style="color: #A3DF42">Symfony ✨</h4>
              <p>UX Live Components, EasyAdmin, UX Turbo, Mercure</p>
            </div>
          </li>
          <li>
            <div class="icon">
              <img src="/icons/vuejs.png" alt="logo du framework Vue.js">
            </div>
            <div class="descript">
              <h4>VueJS</h4>
              <p>ThreeJs Integration, Vue Routeur, Vuex, Vue CLI</p>
            </div>
          </li>
          <li>
            <div class="icon">
              <img src="/icons/Ubuntu.png" alt="logo de Ubuntu">
            </div>
            <div class="descript">
              <h4>Ubuntu</h4>
              <p>Apache, Ansible, Docker, Multipass</p>
            </div>
          </li>
          <li>
            <div class="icon">
              <img src="/icons/Git.png" alt="logo de Git">
            </div>
            <div class="descript">
              <h4>Git</h4>
              <p>GitHub, GitFlow, CI/CD, GitHub Actions</p>
            </div>
          </li>
          <li>
            <div class="icon">
              <img src="/icons/Figma.png" alt="logo de Figma">
            </div>
            <div class="descript">
              <h4>Figma</h4>
              <p>Wireframes, Prototypes, Design Systems</p>
            </div>
          </li>
          <li>
            <div class="icon">
              <img src="/icons/JetBrains.png" alt="logo de JetBrains">
            </div>
            <div class="descript">
              <h4>JetBrains</h4>
              <p>PhpStorm, DataGrip, YouTrack, Writerside</p>
            </div>
          </li>
          <li>
            <div class="icon">
              <img src="/icons/opquast1.png" alt="logo de Opquast">
            </div>
            <div class="descript">
              <h4>Opquast</h4>
              <p>Certification : “Avancé” 2024</p>
            </div>
          </li>
        </ul>
      </article>
    </section>
  </main>
</template>

<style>
.landing {

  article {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 9rem;

    img {
      width: 400px;
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

#objectifs {
  margin-top: 30rem;

  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    .elips {
      position: absolute;
      width: 100%;
      z-index: -1;
    }

    div {
      text-align: center;

      h2 {
        padding: 1rem;
        font-size: 4rem;
        //text-transform: uppercase;
      }
    }
  }

  .help {
    margin-top: 4rem;
    text-align: center;
    font-size: 1rem;
    color: var(--primary);
  }
}

#competences {
  margin-top: 30rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;

  ul {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding: 0;

    li {
      list-style: none;
      display: flex;
      flex-direction: row;
      gap: 1rem;
      align-items: center;


      .icon {
        width: 50px;
        height: 50px;
        padding: 10px;
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;

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
        }
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
