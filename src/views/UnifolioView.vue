<script setup>

</script>

<template>
  <main>
    <nav>
      <router-link to="/">Retour à l'accueil</router-link>
    </nav>
    <section id="projet">
      <article class="title">
        <h1><span>[</span>UniFolio<span>]</span></h1>
        <h2>2023-2024</h2>
      </article>
      <article class="intro">
        <h2>
          Outil de création, suivi et évaluation de portfolios universitaires
        </h2>
        <p>
          UniFolio est un outil que j'ai conçu et développé dans le cadre de mon alternance au service informatique de
          l'IUT de Troyes. Il permet aux étudiants de créer leur portfolio universitaire et aux enseignants d'en assurer
          le suivi et l'évaluation. L'objectif est de faciliter la mise en place de portfolios numériques pour les
          étudiants et les enseignants dans une démarche pédagogique centralisée pour tous les département de
          l'Université.
        </p>
      </article>

      <article id="competences">
        <div>
          <h3>Outils et technologies utilisés</h3>
          <ul>
            <li>
              <div class="icon">
                <img src="/icons/sf.png" alt="logo du framework symfony">
              </div>
              <div class="descript">
                <h4 style="color: #A3DF42">Symfony ✨</h4>
                <p>UX Live Components, UX Turbo, EasyAdmin</p>
              </div>
            </li>
            <li>
              <div class="icon">
                <img src="/icons/Figma.png" alt="logo du logiciel Figma">
              </div>
              <div class="descript">
                <h4>Figma</h4>
                <p>
                  Prototypes, Design Systems
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
      </article>

      <article class="v1">
        <div class="chapo">
          <h3>V1</h3>
          <p>
            La première version d'UniFolio a été déployée en octobre 2023 après 10 mois de développement. Testée par
            deux promotions pilotes, sa réception a été très positive. Elle a permis de recueillir des retours
            utilisateurs et de définir les axes d'amélioration pour la V2.

            <!--            elle a permis de recueillir des retours utilisateurs et de définir les axes d'amélioration pour la V2.-->
          </p>
        </div>
        <figure>
          <img src="/img/test1.png" alt="aperçu du dashboard de la v1">
          <figcaption>
            Aperçu du dashboard de la V1
          </figcaption>
        </figure>
      </article>
    </section>
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
      margin-right: 15%;
      position: relative;

      span {
        font-weight: 300;
        font-size: 7rem;
      }

      &:before {
        content: 'UniFolio';
        position: absolute;
        top: -2rem;
        right: -20rem;
        font-size: 15rem;
        font-weight: 900;
        color: var(--secondary);
        opacity: .1;
      }

      &:after {
        content: '';
        position: absolute;
        top: 0;
        right: 32%;
        width: 15%;
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

  .intro {
    margin-top: 5rem;
    width: 45%;

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

    aside {
      width: 40%;
    }
  }

  .v1 {
    display: flex;
    flex-direction: column;
    margin-top: 20rem;
    margin-left: 15%;

    .chapo {
      width: 40%;

      h3 {
        font-size: 5rem;
        font-weight: 800;
        text-transform: uppercase;
        opacity: 1;

        &:before {
          content: '[';
          font-size: 7rem;
          font-weight: 200;
        }

        &:after {
          content: ']';
          font-size: 7rem;
          font-weight: 200;
        }
      }

      p {
        padding-left: 3rem;

        &:before {
          content: '';
          position: absolute;
          margin-left: -13rem;
          margin-top: 1rem;
          width: 12rem;
          height: 1px;
          background-color: var(--primary);
        }
      }
    }

    figure {

      img {
        width: 100%;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        opacity: .9;
      }

      figcaption {
        margin-top: 1rem;
        font-weight: 300;
        opacity: .7;
        text-align: right;
      }
    }
  }
}
</style>