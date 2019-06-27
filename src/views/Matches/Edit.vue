<template>
  <div class="matches-edit">
    <br><br><br>
    <div class="table-responsive">
      <form v-on:submit.prevent="submit()">
        <div class="panel panel-black">
          <div class="panel-heading">
            {{match.name}}            
          </div>
          <div class="panel-body">
            <table class="table active table-condensed">
              <thead class="thead-dark">
                <tr>
                  <th scope="col"></th>
                  <th scope="col">1</th>
                  <th scope="col">2</th>
                  <th scope="col">3</th>
                  <th scope="col">4</th>
                  <th scope="col">5</th>
                  <th scope="col">6</th>
                  <th scope="col">7</th>
                  <th scope="col">8</th>
                  <th scope="col">9</th>
                  <th scope="col">10</th>
                  <th scope="col">11</th>
                  <th scope="col">12</th>
                  <th scope="col">13</th>
                  <th scope="col">14</th>
                  <th scope="col">15</th>
                  <th scope="col">16</th>
                  <th scope="col">17</th>
                  <th scope="col">18</th>
                </tr>
              </thead>
              <tbody>
                <tr  class="table-secondary">
                  <th scope="row">{{match.teams[0].name}}</th>
                  <td><input size="2" step="0.5" type="text" min="0" max="1" v-model="match.teams[0].scores.score_1"></td>
                  <td><input size="2" step="any" type="text" v-model="match.teams[0].scores.score_2"></td>
                  <td><input size="2" step="any" type="text" v-model="match.teams[0].scores.score_3"></td>
                  <td><input size="2" step="any" type="text" v-model="match.teams[0].scores.score_4"></td>
                  <td><input size="2" step="any" type="text" v-model="match.teams[0].scores.score_5"></td>
                  <td><input size="2" step="any" type="text" v-model="match.teams[0].scores.score_6"></td>
                  <td><input size="2" step="any" type="text" v-model="match.teams[0].scores.score_7"></td>
                  <td><input size="2" step="any" type="text" v-model="match.teams[0].scores.score_8"></td>
                  <td><input size="2" step="any" type="text" v-model="match.teams[0].scores.score_9"></td>
                  <td><input size="2" step="any" type="text" v-model="match.teams[0].scores.score_10"></td>
                  <td><input size="2" step="any" type="text" v-model="match.teams[0].scores.score_11"></td>
                  <td><input size="2" step="any" type="text" v-model="match.teams[0].scores.score_12"></td>
                  <td><input size="2" step="any" type="text" v-model="match.teams[0].scores.score_13"></td>
                  <td><input size="2" step="any" type="text" v-model="match.teams[0].scores.score_14"></td>
                  <td><input size="2" step="any" type="text" v-model="match.teams[0].scores.score_15"></td>
                  <td><input size="2" step="any" type="text" v-model="match.teams[0].scores.score_16"></td>
                  <td><input size="2" step="any" type="text" v-model="match.teams[0].scores.score_17"></td>
                  <td><input size="2" step="any" type="text" v-model="match.teams[0].scores.score_18"></td>
                  
                  
                </tr>
                <tr class="table-secondary">
                  <th scope="row">{{match.teams[1].name}}</th>
                  <td><input size="2" step="any" type="text" v-model="match.teams[1].scores.score_1"></td>
                  <td><input size="2" step="any" type="text" v-model="match.teams[1].scores.score_2"></td>
                  <td><input size="2" step="any" type="text" v-model="match.teams[1].scores.score_3"></td>
                  <td><input size="2" step="any" type="text" v-model="match.teams[1].scores.score_4"></td>
                  <td><input size="2" step="any" type="text" v-model="match.teams[1].scores.score_5"></td>
                  <td><input size="2" step="any" type="text" v-model="match.teams[1].scores.score_6"></td>
                  <td><input size="2" step="any" type="text" v-model="match.teams[1].scores.score_7"></td>
                  <td><input size="2" step="any" type="text" v-model="match.teams[1].scores.score_8"></td>
                  <td><input size="2" step="any" type="text" v-model="match.teams[1].scores.score_9"></td>
                  <td><input size="2" step="any" type="text" v-model="match.teams[1].scores.score_10"></td>
                  <td><input size="2" step="any" type="text" v-model="match.teams[1].scores.score_11"></td>
                  <td><input size="2" step="any" type="text" v-model="match.teams[1].scores.score_12"></td>
                  <td><input size="2" step="any" type="text" v-model="match.teams[1].scores.score_13"></td>
                  <td><input size="2" step="any" type="text" v-model="match.teams[1].scores.score_14"></td>
                  <td><input size="2" step="any" type="text" v-model="match.teams[1].scores.score_15"></td>
                  <td><input size="2" step="any" type="text" v-model="match.teams[1].scores.score_16"></td>
                  <td><input size="2" step="any" type="text" v-model="match.teams[1].scores.score_17"></td>
                  <td><input size="2" step="any" type="text" v-model="match.teams[1].scores.score_18"></td>
                  
                </tr>
              
              </tbody>
            </table>
          </div>
          <div class="panel-footer">
            <button type="submit">Update</button>
            <button v-on:click="$router.go(-1)">Cancel</button>
            <button v-on:click="destroy()">Delete Match</button>
          </div>
        </div>
        
      </form>
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
      match: {},
      newTeamName1: "",
      newTeamName2: "",
      player1: "",
      player2: "",
      player3: "",
      player4: "",
      errors: []
    };
  },
  created: function() {
    axios.get("/api/matches/" + this.$route.params.id).then(response => {
      console.log("match", response.data);
      this.match = response.data;
    });
  },
  methods: {
    submit: function(){
      var params = {
        team1_score1: this.match.teams[0].scores.score_1,
        team1_score2: this.match.teams[0].scores.score_2,
        team1_score3: this.match.teams[0].scores.score_3,
        team1_score4: this.match.teams[0].scores.score_4,
        team1_score5: this.match.teams[0].scores.score_5,
        team1_score6: this.match.teams[0].scores.score_6,
        team1_score7: this.match.teams[0].scores.score_7,
        team1_score8: this.match.teams[0].scores.score_8,
        team1_score9: this.match.teams[0].scores.score_9,
        team1_score10: this.match.teams[0].scores.score_10,
        team1_score11: this.match.teams[0].scores.score_11,
        team1_score12: this.match.teams[0].scores.score_12,
        team1_score13: this.match.teams[0].scores.score_13,
        team1_score14: this.match.teams[0].scores.score_14,
        team1_score15: this.match.teams[0].scores.score_15,
        team1_score16: this.match.teams[0].scores.score_16,
        team1_score17: this.match.teams[0].scores.score_17,
        team1_score18: this.match.teams[0].scores.score_18,
        
        team2_score1: this.match.teams[1].scores.score_1,
        team2_score2: this.match.teams[1].scores.score_2,
        team2_score3: this.match.teams[1].scores.score_3,
        team2_score4: this.match.teams[1].scores.score_4,
        team2_score5: this.match.teams[1].scores.score_5,
        team2_score6: this.match.teams[1].scores.score_6,
        team2_score7: this.match.teams[1].scores.score_7,
        team2_score8: this.match.teams[1].scores.score_8,
        team2_score9: this.match.teams[1].scores.score_9,
        team2_score10: this.match.teams[1].scores.score_10,
        team2_score11: this.match.teams[1].scores.score_11,
        team2_score12: this.match.teams[1].scores.score_12,
        team2_score13: this.match.teams[1].scores.score_13,
        team2_score14: this.match.teams[1].scores.score_14,
        team2_score15: this.match.teams[1].scores.score_15,
        team2_score16: this.match.teams[1].scores.score_16,
        team2_score17: this.match.teams[1].scores.score_17,
        team2_score18: this.match.teams[1].scores.score_18,
      }

      axios.patch("/api/matches/" + this.$route.params.id, params).then(response => {
        console.log(response.data);
        this.$router.push("/rounds/" + this.match.round.id);
      }).catch(error => {
        console.log(error.response.data);
        this.errors = error.response.data;
        
      })
    },
    destroy: function(){
      axios.delete("/api/matches/" + this.$route.params.id).then(response => {
        console.log("Match Deleted.", response.data);
        this.$router.push("/rounds/" + this.match.round.id);
      })
    }
  }
};
</script>