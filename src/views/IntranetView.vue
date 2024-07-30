<script setup>

</script>

<template>
  <main>
    <section id="projet">
      <router-link class="link" to="/">Retour à l'accueil</router-link>
      <div class="title">
        <h1><span>[</span>Intranet<span>]</span></h1>
        <h2>2022-2024</h2>
      </div>
      <div class="intro">
        <div>
          <h2>
            Outil de gestion de formations universitaires
          </h2>
          <p>
            L'intranet de l'IUT de Troyes est un outil conçu et développé par <a href="https://github.com/Dannebicque"
                                                                                 target="_blank">David Annebicque <i
              class="fas fa-arrow-alt-circle-up" style="transform: rotate(45deg)"></i></a>
            . Dans le cadre de mon alternance, j'ai eu l'opportunité de travailler sur ce projet pour le moderniser et
            le rendre plus ergonomique en proposant des refontes de l'UI mais également en portant une réflexion sur de
            nouvelles fonctionnalités pour faciliter la gestion des formations universitaires. <br>
            J'ai également mis en place le lien entre cet outil et <a href="https://edusign.com/fr/" target="_blank">EduSign
            <i
                class="fas fa-arrow-alt-circle-up" style="transform: rotate(45deg)"></i></a>, un outil de signature
            électronique pour le suivi des émargements géré par un prestataire externe.
          </p>
        </div>
        <a class="underline-link" href="https://github.com/CyndelHerolt/intranetV3" target="_blank">Voir le code source
          <i
              class="fas fa-arrow-alt-circle-up" style="transform: rotate(45deg)"></i></a>
      </div>

      <article id="competences">
        <div>
          <h3>Outils et technologies</h3>
          <ul>
            <li>
              <div class="icon">
                <img src="/icons/sf.png" alt="logo du framework symfony">
              </div>
              <div class="descript">
                <h4 style="color: #A3DF42">Symfony ✨</h4>
                <p>UX Live Components, Stimulus</p>
              </div>
            </li>
            <li>
              <div class="icon">
                <img src="/icons/Figma.png" alt="logo du logiciel Figma">
              </div>
              <div class="descript">
                <h4>Figma</h4>
                <p>
                  Maquettage, Prototypage, Design System
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
                  GitHub, Versionning, Travail en équipe
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
                  Définition des tâches et des priorités
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
                  Frontend, Backend, Base de données, Correction de bugs
                </p>
              </div>
            </li>
          </ul>
        </div>
      </article>

      <article class="refonte-graphique">
        <h3>Refonte générale</h3>
        <p>
          Simplification de l'interface, mise en place d'une charte graphique plus moderne et ajout de nouvelles
          fonctionnalités pour faciliter la gestion des formations universitaires.
        </p>
        <div class="compare-img">
          <figure>
            <a href="/img/intranet_dashboard_1.png" target="_blank">
              <div>
                <img src="/img/intranet_dashboard_1.png" alt="aperçu du dashboard original">
              </div>
            </a>
            <figcaption>Aperçu du dashboard étudiant original</figcaption>
          </figure>
          <figure>
            <a href="/img/intranet_dashboard_2.png" target="_blank">
              <div>
                <img src="/img/intranet_dashboard_2.png" alt="aperçu de la refonte">
              </div>
            </a>
            <figcaption>Aperçu de la proposition de refonte</figcaption>
          </figure>
        </div>

        <figure>
          <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450"
                  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2Fir0N88DBXFe9uf9tnTV4pj%2Fintranet%3Fnode-id%3D811-580%26t%3D64VPNKBxORXZxO2o-1"
                  allowfullscreen></iframe>
          <figcaption>Maquette de la refonte de l'interface de gestion du prévisionnel</figcaption>
        </figure>
      </article>


      <article class="edusign">
        <div>
          <h2>
            EduSign
          </h2>
          <p>
            EduSign est un outil de signature électronique géré par un prestataire externe.
            J'ai mis en place le lien entre cet outil et l'intranet afin de faciliter la gestion des
            émargements. <br>
            Via des requêtes API, j'ai développé un système de récupération automatique des cours qui vient créer au sein de l'outil EduSign toutes les données nécessaires à son bon fonctionnement. J'ai également développé une interface dans l'Intranet afin de déclencher manuellement certaines actions comme l'ajout de cours ou d'enseignants.
          </p>
        </div>
        <a class="underline-link" href="https://github.com/CyndelHerolt/intranetV3/tree/main/src/Classes/EduSign" target="_blank">
          Voir le code source <i class="fas fa-arrow-alt-circle-up" style="transform: rotate(45deg)"></i>
        </a>

        <div class="fonctionnalites">
          <h3>Fonctionnalités</h3>
          <ul>
            <li>
              <h4>Import des étudiants, enseignants et groupes</h4>
              <small>
                Récupération des données depuis l'Intranet pour les envoyer à EduSign <span> - opération manuelle </span>
              </small>
            </li>
            <li>
              <h4>Création des sessions de cours</h4>
              <small>
                Depuis les emplois du temps, les cours sont automatiquement créés chaque semaine dans EduSign avec les bonnes informations <span> - opération automatique</span>
              </small>
            </li>
            <li>
              <h4>Mise à jour des sessions de cours</h4>
              <small>
                Les cours modifiés dans l'Intranet peuvent être mis à jour dans EduSign <span>- opération automatique et manuelle</span>
              </small>
            </li>
            <li>
              <h4>Création automatique des absences</h4>
              <small>
                Récupération des feuilles de présence depuis EduSign pour créer les absences dans l'Intranet <span>- opération automatique et manuelle</span>
              </small>
            </li>
            <li>
              <h4>Archivage de données</h4>
              <small>
                Action de suppression au cas par cas sur l'ensemble des données <span>- opération manuelle</span>
              </small>
            </li>
          </ul>
        </div>
      </article>

    </section>

    <nav class="projects-nav">
      <router-link class="link" to="/unifolio">Projet précédent - UniFolio</router-link>
      <router-link class="link" to="/intranet">Projet suivant - Roy Lunetier</router-link>
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
        content: 'Intranet';
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

  .refonte-graphique {
    margin: 15rem 0;
    padding: 5rem;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    border: solid 1px rgba(206, 206, 206, 0.1);
    background-color: var(--secondary-dark);

    .compare-img {
      margin-top: 2rem;
      display: flex;
      justify-content: space-between;
      gap: 2rem;

      figure {
        width: 50%;
        position: relative;

        a {
          opacity: 1;

          &:hover {
            div {
              transform: scale(1.01);
              transition: transform .5s;
            }
          }

          div {
            transition: transform .5s;
            height: 500px;
            overflow-y: scroll;

            img {
              width: 100%;
            }
          }
        }
      }
    }

    iframe {
      width: 100%;
      height: 500px;
      margin-top: 2rem;
    }
  }

  .edusign {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin-top: 5rem;

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

    .fonctionnalites {

      ul {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 2rem;

        li {
          list-style: none;
          display: flex;
          flex-direction: column;

          h4 {
            opacity: 1;
          }

          small {
            span {
              opacity: .7;
              font-weight: normal;
            }
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