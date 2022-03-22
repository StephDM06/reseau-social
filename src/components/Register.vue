 <template>
  <h1>Inscrivez-vous facilement</h1>
  <form @submit.prevent>
    <!--Prenom-->
    <input
      :class="verifPrenom"
      v-model="prenom"
      type="text"
      placeholder="Prénom"
    />
    <!--Nom-->
    <input
      :class="verifNom"
      v-model="nom"
      type="text"
      placeholder="Nom"
    /><br />
    <!--Mail-->
    <input
      :class="verifMail"
      v-model="mail"
      type="text"
      placeholder="E-mail"
    /><br />
    <!--Mot de passe/Confirmer MDP-->
    <input
      v-model="mdp"
      type="password"
      placeholder="Nouveau mot de passe"
    /><br />

    <!--Date de Naissance-->
    <p>Date de Naissance:</p>
    <select v-model="jour">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
      <option value="11">11</option>
      <option value="12">12</option>
      <option value="13">13</option>
      <option value="14">14</option>
      <option value="15">15</option>
      <option value="16">16</option>
      <option value="17">17</option>
      <option value="18">18</option>
      <option value="19">19</option>
      <option value="20">20</option>
      <option value="21">21</option>
      <option value="22">22</option>
      <option value="23">23</option>
      <option value="24">24</option>
      <option value="25">25</option>
      <option value="26">26</option>
      <option value="27">27</option>
      <option value="28">28</option>
      <option value="29">29</option>
      <option value="30">30</option>
      <option value="31">31</option>
    </select>
    <select name="mois">
      <option value="janvier">Janvier</option>
      <option value="fevrier">Février</option>
      <option value="mars">Mars</option>
      <option value="avril">Avril</option>
      <option value="mai">Mai</option>
      <option value="juin">Juin</option>
      <option value="juillet">Juillet</option>
      <option value="aout">Août</option>
      <option value="septembre">Septembre</option>
      <option value="octobre">Octobre</option>
      <option value="novembre">Novembre</option>
      <option value="decembre">Décembre</option>
    </select>
    <select name="annee">
      <option value="1">2022</option>
      <option value="2">2021</option>
      <option value="3">2020</option>
      <option value="4">2019</option>
      <option value="5">2018</option>
      <option value="6">2017</option>
      <option value="7">2016</option>
      <option value="8">2015</option>
      <option value="9">2014</option>
      <option value="10">2013</option>
      <option value="11">2012</option>
      <option value="12">2011</option>
      <option value="13">2010</option>
      <option value="14">2009</option>
      <option value="15">2008</option>
      <option value="16">2007</option>
      <option value="17">2006</option>
      <option value="18">2005</option>
      <option value="19">2004</option>
      <option value="20">2003</option>
      <option value="21">2002</option>
      <option value="22">2001</option>
      <option value="23">2000</option>
      <option value="24">1999</option>
      <option value="25">1998</option>
      <option value="26">1997</option>
      <option value="27">1996</option>
      <option value="28">1995</option>
      <option value="29">1994</option>
      <option value="30">1993</option>
      <option value="31">1992</option>
      <option value="3">1991</option>
      <option value="4">1990</option>
      <option value="5">1989</option>
      <option value="6">1988</option>
      <option value="7">1987</option>
      <option value="8">1986</option>
      <option value="9">1985</option>
      <option value="10">1984</option>
      <option value="11">1983</option>
      <option value="12">1982</option>
      <option value="13">1981</option>
      <option value="14">1980</option>
      <option value="15">1979</option>
      <option value="16">1978</option>
      <option value="17">1977</option>
      <option value="18">1976</option>
      <option value="19">1975</option>
      <option value="20">1974</option>
      <option value="21">1973</option>
      <option value="22">1972</option>
      <option value="23">1971</option>
      <option value="23">1970</option>
      <option value="23">1969</option>
      <option value="23">1968</option>
      <option value="23">1967</option>
      <option value="23">1966</option>
      <option value="23">1965</option>
      <option value="23">1964</option>
      <option value="23">1963</option>
      <option value="23">1962</option>
      <option value="23">1961</option>
      <option value="23">1960</option>
      <option value="23">1959</option>
      <option value="23">1958</option>
      <option value="23">1957</option>
      <option value="23">1956</option>
      <option value="23">1955</option>
      <option value="23">1954</option>
      <option value="23">1953</option>
      <option value="23">1952</option>
      <option value="23">1951</option>
      <option value="23">1950</option></select
    ><br />
    <!--Genre-->
    <p>Genre:</p>
    <input type="radio" name="homme" v-bind:value="homme" />
    <label for="homme">Homme</label>
    <input type="radio" name="femme" v-bind:value="femme" />
    <label for="femme">Femme</label>
    <br />
    <br />

    <input type="submit" placeholder="S'inscrire" />Inscription

    <h6>
      En cliquant sur S’inscrire, vous acceptez nos Conditions générales.
      Découvrez comment nous recueillons, utilisons et partageons vos données en
      lisant notre Politique d’utilisation des données et comment nous utilisons
      les cookies et autres technologies similaires en consultant notre
      Politique d’utilisation des cookies. Vous recevrez peut-être des
      notifications par texto de notre part et vous pouvez à tout moment vous
      désabonner.
    </h6>
  </form>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      profil: [],
      prenom: "",
      nom: "",
      mail: "",
      mdp: "",
      date: "",
    };
  },

  methods: {
    setNewInfo(e) {
      this.prenom = e.target.value;
      this.nom = e.target.value;
      this.mdp = e.target.value;
      this.mail = e.target.value;
      this.mdp = e.target.value;
    },
  },

  computed: {
    verifPrenom() {
      if (this.prenom.length > 1) {
        return "green";
      } else return "red";
    },
    verifNom() {
      if (this.prenom.length > 1) {
        return "green";
      } else return "red";
    },
  },
};
</script>

<style scoped>
.green {
  border: solid 2px green;
}

.red {
  border: solid 2px red;
}
</style>
