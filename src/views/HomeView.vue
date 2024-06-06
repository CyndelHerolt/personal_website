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
    <h2>Développeuse web</h2>
    <h3 class="coloredTitle">Fullstack</h3>
    <h1 class="animatedTxt" ref="animatedTxt">Cyndel Herolt</h1>
    <small>
      <i class="fas fa-at"></i>
      cyndelherolt@gmail.com
    </small>
    |
    <small>
      <i class="fas fa-building"></i>
      URCA - IUT de Troyes
    </small>

    <section>
      <article>
        <p>
          Je m'appelle Cyndel, je suis en passe d'obtenir mon Bachelor Universitaire de Technologie des Métiers du
          Multimédia et de l'Internet parcours Développement Web et Dispositifs Interactifs.
          <br>
          Tu trouves ça abstrait ?
          <br>
          Retiens juste que je fais du <strong>dev</strong>, mais que j'ai aussi des compétences solides en <strong>graphisme</strong> et en
          <strong>communication</strong>.
          <br>
          Pratiquante et passionnée de disciplines urbaines, j'ai un profil plutôt artistique et manuel qui s'épanouit
          parfaitement dans la pratique du développement web. Vous me trouverez la plupart du temps sur PhpStorm,
          écouteurs sur les oreilles, à découvrir, tester et déboguer jusqu'à ce que la ville s'endorme.
        </p>
      </article>
      <aside>
        <h3>Tech stack</h3>
        <div class="stack" tabindex="0">
          <div>
            <h4 style="color: var(--primary)">
              Symfony✨
            </h4>
            <ul>
              <li>UX Live Components</li>
              <li>API Platform</li>
              <li>EasyAdmin</li>
              <li>UX Turbo</li>
              <li>Mercure</li>
            </ul>
          </div>
          <div>
            <h4>FrontEnd</h4>
            <ul>
              <li>VueJs</li>
              <li>ReactJs</li>
              <li>ThreeJs</li>
              <li>SaSS</li>
            </ul>
          </div>
          <div>
            <h4>DevOps</h4>
            <ul>
              <li>Git</li>
              <li>Linux</li>
              <li>Apache</li>
              <li>Multipass</li>
              <li>Docker</li>
            </ul>
          </div>
          <div>
            <h4>Déploiement</h4>
            <ul>
              <li>CI/CD</li>
              <li>Snyk</li>
              <li>Cypress</li>
              <li>Netlify</li>
              <li>Vercel</li>
            </ul>
          </div>
          <div>
            <h4>Outils</h4>
            <ul>
              <li>PhpStorm</li>
              <li>DataGrip</li>
              <li>YouTrack</li>
              <li>Postman</li>
              <li>Figma</li>
            </ul>
          </div>
          <div>
            <h4 style="color: var(--primary)">Références</h4>
            <ul>
              <li>Opquast</li>
              <li>YoanDev</li>
              <li>Grafikart</li>
              <li>Codrops</li>
              <li>Smashing Magazine</li>
            </ul>
          </div>
        </div>
      </aside>
    </section>
  </main>
</template>

<style>
section {
  display: flex;
  justify-content: space-between;
  margin: 25px 0;

  article {
    width: 45%;

    p {
      line-height: 2;

      strong {
        color: var(--primary);
        font-weight: bolder;
      }
    }
  }

  aside {
    display: flex;
    flex-direction: column;
    width: 45%;

    .stack {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      height: 200px;
      overflow: auto;
      padding: 1rem;
    }

    div {
      display: flex;
      flex-direction: column;

      ul {
        list-style: none;
        padding: 0;
        display: flex;
        gap: 1rem;

        li {
          display: flex;
          text-align: center;
          align-items: center;
          background-color: var(--color-card);
          opacity: .7;
          padding: 0.5rem;
          border-radius: 0.5rem;
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
