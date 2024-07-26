<script setup>

</script>

<template>
  <main>
    <section id="projet">
      <nav>
        <router-link to="/">Retour à l'accueil</router-link>
      </nav>
      <div class="title">
        <h1><span>[</span>UniFolio<span>]</span></h1>
        <h2>2022-2024</h2>
      </div>
            <div class="intro">
              <h2>
                Outil de création, suivi et évaluation de portfolios universitaires
              </h2>
              <p>
                UniFolio est un outil que j'ai conçu et développé dans le cadre de mon alternance au service informatique de
                l'IUT de Troyes. Il permet aux étudiants de créer leurs portfolios universitaires et aux enseignants d'en assurer
                le suivi et l'évaluation. L'objectif est de faciliter la mise en place de portfolios numériques pour les
                étudiants et les enseignants dans une démarche pédagogique centralisée pour tous les département de
                l'Université.
              </p>
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
                      <p>UX Live Components, UX Turbo, EasyAdmin</p>
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

      <article class="v1">
        <div class="infos_projet">
          <div class="chapo">
            <h3>V1</h3>
            <p>
              La première version d'UniFolio a été déployée en octobre 2023 après 10 mois de développement. Testée par
              deux promotions pilotes, sa réception a été très positive. Elle a permis de recueillir des retours
              utilisateurs et de définir les axes d'amélioration pour la V2.
            </p>
          </div>
          <div class="da">
            <div>
              <h4>Design</h4>
              <em>
                Sobriété et simplicité pour une meilleure expérience utilisateur.
              </em>
            </div>
            <p>
              J'ai designé le logo en m'inspirant très largement de celui de l'intranet de l'IUT de Troyes pour créer une continuité visuelle entre les deux outils.
            </p>
            <div class="logos">
              <figure>
                <div class="logo">
                  <img src="/img/unifolio_logo.png" alt="logo de l'outil Unifolio">
                </div>
                <figcaption>Logo d'UniFolio</figcaption>
              </figure>
              <figure>
                <div class="logo" style="padding: 0">
                  <img src="/img/logo_intranet_iut_troyes.svg" alt="logo de l'outil Unifolio">
                </div>
                <figcaption>Logo de l'intranet</figcaption>
              </figure>
            </div>
          </div>
        </div>

        <figure>
          <img src="/img/unifolio_mockup_dashboard.png" alt="aperçu de la v1">
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

  a {
    color: var(--color-text) !important;
    text-decoration: none;
    text-transform: uppercase;
    padding: 1rem 0;

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
    flex-direction: row;
    margin-top: 20rem;

    figure {
      width: 60%;

      img {
        width: 100%;
        border-radius: 10px;
        opacity: .8;
      }

      figcaption {
        margin-top: 1rem;
        font-weight: 300;
        opacity: .7;
        text-align: right;
      }
    }

    .infos_projet {
      width: 40%;
      margin-left: 10rem;
      display: flex;
      flex-direction: column;
      gap: 7rem;

      .chapo {

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
            margin-left: -6rem;
            margin-top: 1rem;
            width: 5rem;
            height: 2px;
            background-color: var(--primary);
          }
        }
      }

      .da {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        .logos {
          display: flex;
          flex-direction: row;
          gap: 3rem;

          figure {
            width: 150px;

            .logo {
              width: 150px;
              height: 150px;
              padding: 25px;
              background-color: rgba(255, 255, 255, 0.1);
              border-radius: 10px;
              display: flex;
              justify-content: center;
              align-items: center;

              img {
                width: 100%;
              }

              &:before {
                content: '';
                position: absolute;
                margin-right: 1rem;
                margin-bottom: 1rem;
                width: 150px;
                height: 150px;
                border: solid 1px rgba(255, 255, 255, 0.1);
                border-radius: 10px;
                z-index: -1;
              }
            }

            figcaption {
              text-align: start;
              font-weight: 300;
              opacity: .7;
            }
          }
        }
      }
    }
  }
}
</style>