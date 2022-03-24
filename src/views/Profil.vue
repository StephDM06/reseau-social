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
            Authorization: "bearer " + this.toktok,
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
  font-display: block;
  justify-content: center;
  width: 50%;
  margin-left: 25%;
  margin-top: 5%;
  background-color: aquamarine;
  border-radius: 10px;
}
</style>
