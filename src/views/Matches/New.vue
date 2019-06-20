<template>
  <div class="matches-new">
    <div>
      <br><br>
      Team 1 Name: <input type="text" v-model="newTeamName1"><br>
      Team 1 Player 1: <input type="text" v-model="player1"><br>
      Team 1 Player 2: <input type="text" v-model="player2"><br>
      <br>
      Team 2 Name: <input type="text" v-model="newTeamName2"><br>
      Team 2 Player 1: <input type="text" v-model="player3"><br>
      Team 2 Player 2: <input type="text" v-model="player4"><br>
      <br>
      <button type="submit" v-on:click="submit()">Add Match</button>  
      <br><br>
    </div>
    <div>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Low Net HDCP</th>
            <th scope="col">Skins HDCP</th>
            <th scope="col">GNC AVG</th>
            <th scope="col">2yr AVG</th>
            <th scope="col">Wins</th>
            <th scope="col">Losses</th>
            <th scope="col">Ties</th>
            <th scope="col">2017 Record</th>        
            
          </tr>
        </thead>
        <tbody v-for="user in this.users">
          <tr class="table-secondary">
            <th scope="row">{{user.id}} {{user.name}}</th>
            <td>{{user.low_net_handicap}}</td>
            <td>{{user.skins_handicap}}</td>
            <td>{{user.gnc_average}}</td>
            <td>{{user.two_year_average}}</td>
            <td>{{user.ryder_cup_record.ryder_cup_wins}}</td>
            <td>{{user.ryder_cup_record.ryder_cup_losses}}</td>
            <td>{{user.ryder_cup_record.ryder_cup_ties}}</td>
            <td>{{user.record_2017}}</td>
            
          </tr>
          
        </tbody>
      </table>
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      users: [],
      newTeamName1: "",
      newTeamName2: "",
      player1: "",
      player2: "",
      player3: "",
      player4: "",
      errors: [],
      match: {}
    };
  },
  created: function() {
    axios.get("/api/users").then(response => {
      console.log("users", response.data);
      this.users = response.data;
    });
  },
  methods: {
    submit: function(){
      var params = {
        round_id: this.$route.params.id,
        name_team1: this.newTeamName1,
        name_team2: this.newTeamName2,
        user_id_1: this.player1,
        user_id_2: this.player2,
        user_id_3: this.player3,
        user_id_4: this.player4,
      }

      axios.post("/api/matches", params).then(response => {
        console.log(response.data);
        this.match = response.data;
        axios.patch("/api/matches/" + this.match.id).then(response => {
          console.log(response.data)
        })
          this.$router.push("/rounds/" + this.$route.params.id);
        
      }).catch(error => {
        console.log(error.response.data);
        this.errors = error.response.data;
        
      })
    }
  }
};
</script>