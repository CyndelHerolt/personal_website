<script setup>

</script>

<template>
  <main>
    <section id="projet">
      <router-link class="link" to="/">Retour à l'accueil</router-link>
      <div class="title">
        <h1><span>[</span>UniFolio<span>]</span></h1>
        <h2>2022-2024</h2>
      </div>
      <div class="intro">
        <div>
          <h2>
            Outil de création, suivi et évaluation de portfolios universitaires
          </h2>
          <p>
            UniFolio est un outil que j'ai conçu et développé dans le cadre de mon alternance au service informatique de
            l'IUT de Troyes. Il permet aux étudiants de créer leurs portfolios universitaires et aux enseignants d'en
            assurer
            le suivi et l'évaluation. L'objectif est de faciliter la mise en place de portfolios numériques pour les
            étudiants et les enseignants dans une démarche pédagogique centralisée pour tous les département de
            l'Université.
          </p>
        </div>
        <a class="underline-link" href="https://github.com/CyndelHerolt/UniFolioV2" target="_blank">Voir le code source
          <i
              class="fas fa-arrow-alt-circle-up" style="transform: rotate(45deg)"></i></a>
      </div>

      <div id="competences">
        <div>
          <h3>Outils et technologies utilisés</h3>
          <ul>
            <li>
              <div class="icon">
                <img src="/icons/sf.png" alt="logo du framework symfony">
              </div>
              <div class="descript">
                <h4 style="color: #A3DF42">Symfony ✨</h4>
                <p>UX Live Components, UX Turbo, Stimulus, EasyAdmin</p>
              </div>
            </li>
            <li>
              <div class="icon">
                <img src="/icons/Bootstrap.png" alt="logo du framework bootstrap">
              </div>
              <div class="descript">
                <h4>Bootstrap</h4>
                <p>
                  Grid, Components, Responsive Design
                </p>
              </div>
            </li>
            <li>
              <div class="icon">
                <img src="/icons/Git.png" alt="logo de Git">
              </div>
              <div class="descript">
                <h4>Git</h4>
                <p>
                  GitHub, Versionning, GitFlow
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <h3>Compétences mises en oeuvre</h3>
          <ul>
            <li>
              <div class="icon">
                <img src="/icons/conception.png" alt="icone représesntant la conception">
              </div>
              <div class="descript">
                <h4>Conception</h4>
                <p>Définition des besoins, des fonctionnalités et des interfaces</p>
              </div>
            </li>
            <li>
              <div class="icon">
                <img src="/icons/gestion-de-projet.png" alt="icone représentant la gestion de projet">
              </div>
              <div class="descript">
                <h4>Gestion de projet</h4>
                <p>
                  Planification, Suivi, Choix des technologies
                </p>
              </div>
            </li>
            <li>
              <div class="icon">
                <img src="/icons/developpement.png" alt="icone représentation le développement">
              </div>
              <div class="descript">
                <h4>Développement</h4>
                <p>
                  Frontend, Backend, Base de données
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!--   todo: remplacer par une démo de la V2   -->
      <article class="demo">
        <div class="video">
          <h3>Démonstration</h3>
          <p>
            Démo des fonctionnalités principales de l'espace étudiant de la V1 d'UniFolio
          </p>
          <iframe width="60%" height="450" src="https://www.youtube.com/embed/XRcDnHOVglY?si=VZ5yc9Oeyb_50ux5"
                  title="YouTube video player" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div>
          <h3>Fonctionnalités</h3>
          <ul>
            <li>
              <h4>Création de traces (éléments de portfolio)</h4>
              <small>
                Ajout de médias, éditeur de texte
              </small>
            </li>
            <li>
              <h4>Création de portfolios de compétences universitaires</h4>
              <small>
                lien automatique avec les compétences universitaires
              </small>
            </li>
            <li>
              <h4>Suivi des évaluations</h4>
              <small>
                Consultation des évaluations, des commentaires et des notes
              </small>
            </li>
            <li>
              <h4><span>À venir - </span>Création de portfolios de présentation</h4>
              <small>
                Editeur de pages, personnalisation des contenus, export multi-formats
              </small>
            </li>
            <li>
              <h4><span>À venir - </span>Création de CV</h4>
              <small>
                Ajout de compétences, de formations, d'expériences
              </small>
            </li>
          </ul>
        </div>
      </article>
    </section>

    <nav class="projects-nav">
      <router-link class="link" to="/wwc">Projet précédent - WWCV2</router-link>
      <router-link class="link" to="/intranet">Projet suivant - INTRANET</router-link>
    </nav>
  </main>
</template>

<style scoped>
#projet {
  display: flex;
  flex-direction: column;
  margin-top: 5rem;

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

  .intro {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin-top: 5rem;
    width: 45%;

    div {

      h2 {
        font-size: 1.25rem;
        opacity: .8;
        font-weight: 800;
        text-align: start;
        text-transform: uppercase;
        font-family: Montserrat, sans-serif;
        margin: 2rem 0;
      }

      p {
        padding-left: 3rem;

        &:before {
          content: '';
          position: absolute;
          left: 0;
          margin-top: 1rem;
          width: 12rem;
          height: 1px;
          background-color: var(--primary);
        }
      }
    }

    .link {
      height: fit-content;
    }
  }

  #competences {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 10rem;
    margin: 10rem 5rem 0 5rem;

    ul {
      display: flex;
      flex-direction: column;
      align-items: start;
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

  .demo {
    margin-top: 15rem;
    padding: 5rem;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    border: solid 1px rgba(206, 206, 206, 0.1);
    background-color: var(--secondary-dark);
    display: flex;
    flex-direction: row;
    gap: 5rem;

    .video {
      width: 60%;

      iframe {
        width: 100%;
        opacity: .9;
      }
    }

    ul {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      padding: 5rem 0;

      li {
        list-style: none;
        display: flex;
        flex-direction: column;

        h4 {
          opacity: 1;

          span {
            color: var(--primary);
          }
        }
      }
    }
  }
}

.projects-nav {
  display: flex;
  justify-content: space-between;
  margin-top: 10rem;
  margin-bottom: 5rem;
  gap: 5rem;
}
</style>