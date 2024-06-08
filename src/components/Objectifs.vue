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
</template>

<style scoped>
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
</style>