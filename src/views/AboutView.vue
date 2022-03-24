<template>
  <div class="about"></div>
  <section id="apropos">
    <br />
    <u><h1>A PROPOS</h1></u><br />
    <h1>
      <strong>
        ACTU-DEV-WEB n’aurait jamais pu exister sans une équipe soudée ayant mit
        tout leurs corps et toute leurs âme dans ce projet incroyable de type
        création d’un réseau social permettant de faire mieux que des sites
        commençant par Face ou Twi. Beaucoup de café et de cigarettes furent
        consommés pour la composition de ce site incroyable et révolutionaire
        que voici.<br /><br />
        Ce site fut construit par une très grande équipe composé de 5 (le nombre
        de doigts dans une main).<br /><br />
        Voici cet équipe de bras cassés :
        <br /><br /><br />
      </strong>
    </h1>
  </section>
  <section id="picture">
    <div id="image1">
      <img src="../img/firstMonkey.jpg" alt="person1" />
      <p><strong>Abderrezak</strong></p>
    </div>
    <div id="image2">
      <img src="../img/secondMonkey.jpg" alt="person2" />
      <p><strong>Kenny</strong></p>
    </div>
    <div id="image3">
      <img src="../img/thirdMonkey.jpg" alt="person3" />
      <p><strong>Eliot</strong></p>
    </div>
    <div id="image4">
      <img src="../img/fourthMonkey.jpg" alt="person4" />
      <p><strong>Stéphane</strong></p>
    </div>
    <div id="image5">
      <img src="../img/fifthMonkey.jpg" alt="person5" />
      <p>
        <strong> EL "JUAN MANUAL"<br /></strong>
        DE LA NOCHE DE HOY
      </p>
    </div>
  </section>
</template>

<style scoped>
h1 {
  color: #26847f;
  font-size: 30px;
}

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
  width: 200px;
}
#picture p {
  text-align: center;
  color: #26847f;
}

#image1,
#image2,
#image3,
#image4,
#image5 {
  font-size: 20px;
}

img {
  border: solid 6px #26847f;
  border-radius: 8px;
}
</style>
