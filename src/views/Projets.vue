<template>
  <main>
    <section>
      <article>
        <div class="title">
        <h2>UniFolio</h2>
        <em>Conception, développement et maintenance d'une application web
        </em>
        </div>
        <p>
          UniFolio est une application web qui permet aux étudiants de créer leurs portfolios universitaires et aux enseignants de suivre leur progression et les évaluer.
        </p>
      </article>
      <article>
        <div class="title">
          <h2>Intranet</h2>
          <em>Refonte partielle, optimisation et audit d'une application web
          </em>
        </div>
        <p>
          L'intranet de l'IUT de Troyes est une application web qui permet aux étudiants de consulter les emplois du temps, les notes, les absences, les documents partagés et aux enseignants de gérer les formations, les notes, les absences, etc.
        </p>
      </article>
      <article>
        <div class="title">
          <h2>WorldWideCompany V2</h2>
          <em>Refonte complète d'une application web</em>
        </div>
        <p>
          WorldWideCompany est une application web qui se présente sous forme de jeu de gestion d'entreprise. Chaque équipe de joueurs doit répondre à des appels d'offres, gérer des ressources, des employés, des clients, etc.
        </p>
      </article>
      <article>
        <div class="title">
          <h2>Roy Lunetier</h2>
          <em>
            Conception et développement d'une preuve de concept d'application web
          </em>
        </div>
        <p>
          Développement d'une application web pour présenter à un opticien une solution potentielle pour mettre en avant les produits, les services et les valeurs de l'entreprise par le biais d'un viewer 3D et d'un configurateur de lunettes.
        </p>
      </article>
    </section>
  </main>
</template>

<style scoped>
  section {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    overflow: auto;
    height: 63vh;
    width: 50%;
    padding: 25px;

    article {
      padding: 1.5rem;
      background-color: var(--color-card);
      border-radius: 5px;
      width: 100%;
      transition: transform 0.3s;

      &:hover {
        transform: scale(1.02);
        transition: transform 0.3s;
      }

      .title {
        margin-bottom: 1rem;

        h2 {
          margin: 0;
        }

        em {
          color: var(--primary);
        }
      }
    }
  }
</style>
<script setup>
</script>