<script setup>

</script>

<template>
  <main>
    <section id="projet">
      <router-link class="link" to="/">Retour à l'accueil</router-link>
      <div class="title">
        <h1><span>[</span>Roy Lunetier<span>]</span></h1>
        <h2>2024</h2>
      </div>
      <div class="intro">
        <div>
          <h2>
            Preuve de concept d'un viewer 3D
          </h2>
          <p>
            RoyLunetier est un projet de preuve de concept d'un viewer 3D réalisé dans le cadre d'un projet d'étude.
            L'objectif était de proposer à notre client une solution de visualisation de ses produits en 3D intégrée à son site web existant pour promouvoir les valeurs fortes de ses produits.
          </p>
        </div>
        <a class="underline-link" href="https://roy-lunettier.vercel.app" target="_blank">Voir le site de présentation
          <i
              class="fas fa-arrow-alt-circle-up" style="transform: rotate(45deg)"></i></a>
      </div>

      <article class="demarche">
        <h3>Démarche</h3>
        <p>
          L'objectif pédaogique de ce projet était de nous encourager à découvrir de nouvelles technologies et à les mettre en oeuvre en autonomie et dans un temps très court mais également d'évaluer notre capacité à évaluer les besoins d'un client et à lui proposer une solution adaptée.
        </p>
      </article>

      <article id="competences">
        <div>
          <h3>Outils et technologies</h3>
          <ul>
            <li>
              <div class="icon">
                <img src="/icons/react.png" alt="logo du framework reactJs">
              </div>
              <div class="descript">
                <h4>ReactJs</h4>
                <p>Front-End</p>
              </div>
            </li>
            <li>
              <div class="icon">
                <img src="/icons/node.png" alt="logo de NodeJs">
              </div>
              <div class="descript">
                <h4>NodeJs + Express</h4>
                <p>
                  Back-end
                </p>
              </div>
            </li>
            <li>
              <div class="icon">
                <img src="/icons/threejs.png" alt="logo de ThreeJs">
              </div>
              <div class="descript">
                <h4>ThreeJs</h4>
                <p>
                  Rendu 3D
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
                <img src="/icons/conception.png" alt="icone représentant la conception">
              </div>
              <div class="descript">
                <h4>Recherche</h4>
                <p>Découverte et prise en main des technologies</p>
              </div>
            </li>
            <li>
              <div class="icon">
                <img src="/icons/gestion-de-projet.png" alt="icone représentant la gestion de projet">
              </div>
              <div class="descript">
                <h4>Gestion de projet</h4>
                <p>
                  Analyse des besoins de l'entreprise, respect des délais,
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
                  Frontend, Rendu 3D, Travail en équipe
                </p>
              </div>
            </li>
          </ul>
        </div>
      </article>
    </section>

    <nav class="projects-nav">
      <router-link class="link" to="/intranet">Projet précédent - Intranet</router-link>
      <router-link class="link" to="/unifolio">Projet suivant - UniFolio</router-link>
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
        z-index: -1;
        content: 'RoyLunetier';
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
    margin: 0 5rem 5rem 5rem;

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

  .demarche {
    margin: 15rem 0 0 0;
    padding: 5rem;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    border: solid 1px rgba(206, 206, 206, 0.1);
    background-color: var(--secondary-dark);
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