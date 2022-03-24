<template>
  <ProfilData
    :nom="profilTab.lastname"
    :prenom="profilTab.firstname"
    :mail="profilTab.email"
  ></ProfilData>
</template>

<script>
import ProfilData from "@/components/RecupProfil.vue";

const ProfilDonnees = {
  data() {
    return {
      profilTab: {},
      toktok: "token",
    };
  },

  methods: {
    async dataProfil() {
      const donneesprofil = await fetch(
        "https://snapi-coyote.osc-fr1.scalingo.io/user",
        {
          method: "GET",
          headers: {
            "content-Type": "application/json",
            Authorization: "bearer " + localStorage.getItem("token"),
          },
        }
      );
      console.log(this.profilTab);
      const donnees = await donneesprofil.json();
      this.profilTab = donnees;
    },
  },
  mounted() {
    this.dataProfil();
  },
  components: {
    ProfilData,
  },
};

export default ProfilDonnees;
</script>

<style scoped>
#profil {
  font-family: lato;
  text-align: center;
  padding-top: 5%;
}
#donnees {
  font-family: lato;
  width: 350px;
  text-align: left;
  margin-left: 40%;
  padding-top: 20px;
}
#main-profil {
  font-display: flex;
  text-align: center;
  width: 50%;
  height: 400px;
  margin-left: 25%;
  margin-top: 10%;
  background-color: #9efff9;
  border: solid 4px #00857d;
  border-radius: 3px;
}

#profil h1 {
  color: red;
}
</style>
