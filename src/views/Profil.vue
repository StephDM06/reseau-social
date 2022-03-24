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
