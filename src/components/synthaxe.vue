<template>
  <div>
    <nav id="navbar">
      <div id="contenuTitre">
        <h1>Les actus de Lulu</h1>
        <h2>La fraicheur des news, sous la blouse</h2>
      </div>
      <div id="bouton">
        <label for="research">Votre recherche :</label>
        <input
          type="text"
          name="research"
          id="research"
          v-model.lazy="rechercheContent"
        />
        <button @click="recherche">Envoyer</button>
      </div>
    </nav>
    <meteo
      id="prezmeteo"
      :tempMin="previ?.main?.temp_min"
      :city="previ?.name"
      :tempMax="previ?.main?.temp_max"
      :speedWind="previ?.wind?.speed"
      :tempsPrevu="previ?.weather?.[0]?.description"
      :icone="previ?.weather?.[0]?.icon"
    >
    </meteo>
    <Arti
      v-for="(element, index) in actu"
      :key="index"
      :auteur="element.author"
      :titre="element.title"
      :date="element.publishedAt"
      :description="element.description"
      :urlimage="element.urlToImage"
      :lien="element.url"
    >
    </Arti>
  </div>
</template>

<script>
import Arti from "./components/article.vue";
import Meteo from "./components/meteo.vue";

const Debut = {
  data() {
    return {
      actu: [],
      rechercheContent: "",
      theme: "",
      previ: {},
      long: "",
      lat: "",
    };
  },
  components: {
    Arti: Arti,
    meteo: Meteo,
  },

  methods: {
    async recherche() {
      const search = await fetch(
        "https://newsapi.org/v2/everything?q=" +
          this.rechercheContent +
          "&country?=fr&lang?=fr&sortBy=publishedAt&apiKey=562d7784a1214bb09c14d88880972cd9"
      );

      const dataBis = await search.json();
      this.actu = dataBis.articles;
    },
  },

  async mounted() {
    /* Requete Actu */
    const retour = await fetch(
      "https://newsapi.org/v2/top-headlines?country=fr&apiKey=562d7784a1214bb09c14d88880972cd9"
    );

    let data = await retour.json();
    this.actu = data.articles;

    /* Requête météo */
    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;

      const retour = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?lon=" +
          long +
          "&lat=" +
          lat +
          "&appid=7524b547972909bbc321d4e184e23f48&units=metric&lang=fr"
      );

      let data = await retour.json();
      console.log(data);
      this.previ = data;

      console.log(this.previ);
    });
  },
};
export default Debut;
</script>


