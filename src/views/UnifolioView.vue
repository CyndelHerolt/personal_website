<script setup>

</script>

<template>
  <main>
    <nav>
      <router-link to="/">Retour à l'accueil</router-link>
    </nav>
    <section id="projet">
      <h1><span>[</span>UniFolio<span>]</span></h1>
      <h2>2023-2024</h2>
      <!--      <em>-->
      <!--        Outil de création, suivi et évaluation de portfolios universitaires-->
      <!--      </em>-->

      <article>
      </article>
    </section>
  </main>
</template>

<style scoped>

#projet {
  display: flex;
  flex-direction: column;
  margin-top: 5rem;

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

  article {


  }
}
</style>