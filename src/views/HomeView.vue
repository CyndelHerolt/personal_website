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

let minimoi;

onMounted(() => {
  const minimoi = document.querySelector('.minimoi.sharp');
  const container = document.querySelector('.image-container');
  container.addEventListener('mousemove', (e) => {
    const x = e.pageX - e.target.offsetLeft;
    const y = e.pageY - e.target.offsetTop;
    minimoi.style.setProperty('--x', `${x}px`);
    minimoi.style.setProperty('--y', `${y}px`);
  });
  container.addEventListener('mouseleave', () => {
    minimoi.style.setProperty('--x', '-1000px');
    minimoi.style.setProperty('--y', '-1000px');
  });
});
</script>

<template>
  <main>
    <section class="landing">
      <div>
        <h1 class="animatedTxt" ref="animatedTxt">Cyndel Herolt</h1>
        <h2 class="coloredTitle">Développeuse web</h2>
        <h3>Fullstack</h3>
        <small>
          <i class="fas fa-at"></i>
          cyndelherolt@gmail.com
        </small>
        |
        <small>
          <i class="fas fa-building"></i>
          URCA - IUT de Troyes
        </small>

        <article class="intro">
          <p>
            Une volonté de produire des applications web de <strong>qualité</strong> en respectant les normes d'<strong>accessibilité</strong>
            et en adoptant une démarche d'<strong>éco-conception</strong>.
          </p>
        </article>
      </div>

      <article class="stack">
        <h3>Tech stack</h3>
        <ul>
          <li>
            <img src="/icons/sf.png" alt="">
            <div>
              <p class="name">Symfony ✨</p>
              <small>UX Live Components, EasyAdmin, UX Turbo, Mercure</small>
            </div>
          </li>
          <li>
            <img src="/icons/vuejs.png" alt="">
            <div>
              <p class="name">VueJs</p>
              <small>ThreeJs Integration, Vue Router, Vuex, Vue CLI</small>
            </div>
          </li>
          <li>
            <img src="/icons/Ubuntu.png" alt="">
            <div>
              <p class="name">Ubuntu</p>
              <small>
                Apache, Ansible, MySQL, Docker, Git, Multipass
              </small>
            </div>
          </li>
          <li>
            <img src="/icons/Git.png" alt="">
            <div>
              <p class="name">Git</p>
              <small>
                GitHub, GitFlow, CI/CD, GitHub Actions
              </small>
            </div>
          </li>
          <li>
            <img src="/icons/Figma.png" alt="">
            <div>
              <p class="name">Figma</p>
              <small>
                Wireframes, Prototypes, Design Systems
              </small>
            </div>
          </li>
          <li>
            <img src="/icons/JetBrains.png" alt="">
            <div>
              <p class="name">JetBrains</p>
              <small>
                PhpStorm, DataGrip, YouTrack, Writerside
              </small>
            </div>
          </li>
          <li>
            <img src="/icons/opquast1.png" alt="">
            <div>
              <p class="name">Opquast</p>
              <small>
                Certification : "Avancé" 2024
              </small>
            </div>
          </li>
        </ul>
      </article>

      <div class="image-container">
        <img class="minimoi blurred" src="/img/minimoi.jpg" alt="mystère :)">
        <img class="minimoi sharp" src="/img/minimoi.jpg" alt="mystère :)">
      </div>
    </section>

    <section class="objectifs" id="objectifs">
      <article>
        <div class="content">
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
  </main>
</template>

<style>
.landing {
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  margin: 25px 0;

  .intro {
    margin-top: 3rem;
    width: 80%;

    p {
      line-height: 2;

      strong {
        color: var(--primary);
        font-weight: bolder;
      }
    }
  }

  .stack {
    width: 60%;

    ul {
      padding: 0;

      li {
        display: flex;
        justify-content: start;
        gap: 1rem;
        margin-top: 1rem;

        .name {
          font-size: 1rem;
          color: var(--primary);
          font-weight: 700;
        }

        img {
          width: 40px;
          height: 40px;
          background-color: var(--color-card);
          padding: .5rem;
          border-radius: 5px;
        }

      }
    }
  }

  .minimoi {
    opacity: .5;
    transition: filter 0.3s ease;
    position: absolute;
    left: -1%;
    bottom: -20%;
    width: 400px;
    border-radius: 50%;
    --x: 0px;
    --y: 0px;

    &.blurred {
      filter: blur(15px);
    }

    &.sharp {
      mask-image: radial-gradient(circle 50px at var(--x, 0px) var(--y, 0px), black 0%, black 0%, transparent 100%);
    }

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100px;
      height: 100px;
      background-image: url('/img/minimoi.jpg');
      background-repeat: no-repeat;
      background-position: var(--x) var(--y);
      border-radius: 50%;
      pointer-events: none;
    }
  }
}

.objectifs {
  margin-top: 20rem;

  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

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
