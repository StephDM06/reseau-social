<template>
  <div class="about"></div>
  <section id="apropos">
    <h1>Création du site</h1>
    <p>L'équipe des bras cassés</p>
  </section>
  <section id="picture">
    <div>
      <img src="../img/firstMonkey.jpg" alt="person1" />
      <p>Abderrezak</p>
    </div>
    <div>
      <img src="../img/secondMonkey.jpg" alt="person2" />
      <p>Kenny</p>
    </div>
    <div>
      <img src="../img/thirdMonkey.jpg" alt="person3" />
      <p>Eliot</p>
    </div>
    <div>
      <img src="../img/fourthMonkey.jpg" alt="person4" />
      <p>Stéphane</p>
    </div>
    <div>
      <img src="../img/fifthMonkey.jpg" alt="person5" />
      <p>Juan Manuel</p>
    </div>
  </section>
</template>

<style scoped>
.about {
  text-align: center;
  background-color: aquamarine;
}
#apropos {
  text-align: center;
  font-family: lato;
}
#picture {
  display: flex;
  justify-content: space-around;
}
#picture img {
  height: 100%;
  width: 250px;
}
#picture p {
  text-align: center;
}
</style>
