<template>
  <div class="users-edit">
    <br><br>
    <h1>{{user.name}}</h1><br><br>
    <div>
      <form v-on:submit.prevent="submit()">
        GNC Average: <input type="number" step="any" v-model="user.gnc_average"><br>
        Two Year Average: <input type="number" step="any" v-model="user.two_year_average"><br>
        Wins: <input type="number" step="any" v-model="user.ryder_cup_record.ryder_cup_wins">
        Losses: <input type="number" step="any" v-model="user.ryder_cup_record.ryder_cup_losses">
        Ties: <input type="number" step="any" v-model="user.ryder_cup_record.ryder_cup_ties"><br>
        2017 Record: <input type="text" step="any" v-model="user.record_2017"><br>
        Skins Handicap: <input type="number" step="any" v-model="user.skins_handicap"><br>
        Low Net Handicap: <input type="number" step="any" v-model="user.low_net_handicap"><br>
        
        
        <button type="submit">Update Player</button><br><br>
        <button v-on:click="destroy()">Resign</button>
      </form>
    </div>
    <br><br>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      user: {},
      errors: []
    };
  },
  created: function() {
    axios.get("/api/users/1" ).then(response => {
      console.log("user", response.data);
      this.user = response.data;
    });
  },
  methods: {
    submit: function(){
      var params = {
        avg_gnc: this.user.gnc_average,
        avg_two_year: this.user.two_year_average,
        ryder_cup_wins: this.user.ryder_cup_record.ryder_cup_wins,
        ryder_cup_losses: this.user.ryder_cup_record.ryder_cup_losses,
        ryder_cup_ties: this.user.ryder_cup_record.ryder_cup_ties,
        record_2017: this.user.record_2017,
        handicap_skins: this.user.skins_handicap,
        handicap_low_net: this.user.low_net_handicap
      }

      axios.patch("/api/users/" + this.$route.params.id, params).then(response => {
        console.log(response.data);
        this.$router.push('/')
      }).catch(error => {
        console.log(error.response.data);
        this.errors = error.response.data;
      })
    },
    destroy: function(){
      axios.delete("/api/users/" + this.$route.params.id).then(response => {
        console.log(response.data);
        this.$router.push("/");
      })
    }
  }
};
</script>