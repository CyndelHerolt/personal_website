<script setup>

</script>

<template>
  <div class="radial1">
    <div class="radial"></div>
  </div>
  <div class="radial2">
    <div class="radial"></div>
  </div>
  <section>
    <article id="competences">
      <ul>
        <li>
          <div class="icon">
            <img src="/icons/sf.png" alt="logo du framework symfony">
          </div>
          <div class="descript">
            <h4 style="color: #A3DF42">Symfony ✨</h4>
            <p>UX Live Components, UX Turbo, Mercure, EasyAdmin</p>
          </div>
        </li>
        <li>
          <div class="icon">
            <img src="/icons/vuejs.png" alt="logo du framework Vue.js">
          </div>
          <div class="descript">
            <h4>VueJS</h4>
            <p>ThreeJs Integration, Vue Routeur, Vuex, Vue CLI</p>
          </div>
        </li>
        <li>
          <div class="icon">
            <img src="/icons/Ubuntu.png" alt="logo de Ubuntu">
          </div>
          <div class="descript">
            <h4>Ubuntu</h4>
            <p>Apache, Ansible, Docker, Multipass</p>
          </div>
        </li>
        <li>
          <div class="icon">
            <img src="/icons/Git.png" alt="logo de Git">
          </div>
          <div class="descript">
            <h4>Git</h4>
            <p>GitHub, GitFlow, CI/CD, GitHub Actions</p>
          </div>
        </li>
        <li>
          <div class="icon">
            <img src="/icons/Figma.png" alt="logo de Figma">
          </div>
          <div class="descript">
            <h4>Figma</h4>
            <p>Wireframes, Prototypes, Design Systems</p>
          </div>
        </li>
        <li>
          <div class="icon">
            <img src="/icons/JetBrains.png" alt="logo de JetBrains">
          </div>
          <div class="descript">
            <h4>JetBrains</h4>
            <p>PhpStorm, DataGrip, YouTrack, Writerside</p>
          </div>
        </li>
        <li>
          <div class="icon">
            <img src="/icons/opquast1.png" alt="logo de Opquast">
          </div>
          <div class="descript">
            <h4>Opquast</h4>
            <p>Certification : “Avancé” 2024</p>
          </div>
        </li>
      </ul>
      <ul class="additionalTechs">
        <li>
          <div class="icon">
            <img src="/icons/React.png" alt="logo du framework ReactJs">
          </div>
          <h4>ReactJs</h4>
        </li>
        <li>
          <div class="icon">
            <img src="/icons/threejs.png" alt="logo du framework ThreeJs">
          </div>
          <h4>ThreeJs</h4>
        </li>
        <li>
          <div class="icon">
            <img src="/icons/Unity.png" alt="logo du logiciel Unity">
          </div>
          <h4>Unity</h4>
        </li>
        <li>
          <div class="icon">
            <img src="/icons/Postman.png" alt="logo du logiciel Postman">
          </div>
          <h4>Postman</h4>
        </li>
        <li>
          <div class="icon">
            <img src="/icons/multipass.png" alt="logo du logiciel Multipass">
          </div>
          <h4>Multipass</h4>
        </li>
      </ul>
    </article>
  </section>
</template>

<style scoped>
#competences {
  padding-top: 10rem;
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;

  ul {
    display: flex;
    flex-direction: column;
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

  .additionalTechs {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 4rem;
    justify-content: start;
    margin-top: 3rem;

    li {
      display: flex;
      flex-direction: column;
    }
  }
}

.radial1 {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 320vh;
  right: 0;
  overflow-x: hidden;
  z-index: -2;

  .radial {
    position: absolute;
    right: -55%;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, rgb(66, 223, 223, 0.3) 2%, rgba(21, 21, 21, 0) 40%);
    border-radius: 50%;
  }
}

.radial2 {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 260vh;
  left: 0;
  overflow-x: hidden;
  z-index: -2;

  .radial {
    position: absolute;
    left: -55%;
    width: 100%;
    height: 100%;
    z-index: 9;
    background: radial-gradient(circle at center, rgb(66, 223, 223, 0.5) 2%, rgba(21, 21, 21, 0) 45%);
    border-radius: 50%;
  }
}
</style>