<script setup>
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
  <section id="objectifs">
    <article>
      <div class="content">
        <!--        <img class="elips" src="/img/elips.png" alt="">-->
        <div id="galaxy">
          <div class="ellipse ellipse1">
            <div class="circle circle1"></div>
          </div>
          <div class="ellipse ellipse2">
            <div class="circle circle2"></div>
          </div>
          <div class="ellipse ellipse3">
            <div class="circle circle3"></div>
          </div>
          <div class="gradient"></div>
        </div>

        <div>
          <h2 v-html="formatText('Qualité')"></h2>
          <h3>Approche</h3>
          <p>
            Optimiser la qualité du code en usant de bonnes pratiques de développement tels que les Design Patterns.
          </p>
          <br>
          <h3>Objectifs</h3>
          <p>
            Intégrer systématiquement des revues de code et des tests automatisés pour garantir la robustesse et la qualité du code produit.
          </p>
        </div>
        <div>
          <h2 v-html="formatText('Accessibilité')"></h2>
          <h3>Approche</h3>
          <p>
            Respecter les normes techniques établies par la Web Accessibility Initiative (WAI) du World Wide Web
            Consortium (W3C)
          </p>
          <br>
          <h3>Objectifs</h3>
          <p>
            Mener des audits réguliers d'accessibilité et impliquer des utilisateurs réels dans les phases de tests pour valider et améliorer continuellement l'accessibilité des applications.
          </p>
        </div>
        <div>
          <h2 v-html="formatText('Eco-conception')"></h2>
          <h3>Approche</h3>
          <p>
            Adopter une démarche de conception durable en réduisant l'empreinte carbone des sites web via l'optimisation des ressources, la minimisation des requêtes et l'utilisation de technologies efficientes.
          </p>
          <br>
          <h3>Objectifs</h3>
          <p>
            Réaliser des audits de performance réguliers et mettre en place des actions correctives pour réduire l'impact environnemental des applications.
          </p>
        </div>
      </div>
      <p class="help">Ces objectifs sont des axes de travail et constituent une démarche d'amélioration continue.</p>
    </article>
  </section>
</template>

<style scoped>
#objectifs {
  padding-top: 15rem;
  margin-top: 10rem;
  margin-bottom: 15rem;

  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    p {
      width: 50%;
      margin: 0 auto;
    }

    #galaxy {
      transform: rotate(-11.45deg);
      position: absolute;
      top: 160vh;
      left: 60%;
      width: 70%;
      height: 100px;
      opacity: .8;
      z-index: -1;
    }

    .ellipse {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 2px dotted rgba(255, 255, 255, 0.44);
    }

    .ellipse1 {
      width: 80%;
      height: 80%;
      top: 10%;
      left: 10%;
    }

    .ellipse2 {
      width: 60%;
      height: 60%;
      top: 20%;
      left: 20%;
    }

    .ellipse3 {
      width: 40%;
      height: 40%;
      top: 30%;
      left: 30%;
    }

    .gradient {
      position: absolute;
      width: 100%;
      height: 400%;
      //left: -50%;
      top: -150%;
      background: radial-gradient(circle at center, rgba(66, 223, 223, 0.5) 2%, rgba(21, 21, 21, 0) 40%);
      border-radius: 50%;
      overflow: visible;
      animation: rotate 10s linear infinite;
    }

    .circle {
      width: 5px;
      height: 5px;
      background-color: rgba(66, 223, 223, 0.8); /* or any color you prefer */
      border-radius: 50%;
      position: relative;
    }

    .circle1 {
      top: -23px;
      right: 40%;
    }

    .circle2 {
      top: -13px;
      left: 45%;
    }

    .circle3 {
      bottom: -19px;
      left: 10%;
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
</style>