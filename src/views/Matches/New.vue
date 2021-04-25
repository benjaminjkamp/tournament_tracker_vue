<template>
  <div class="matches-new">
    <div class="ms-site-container">
      <datalist id="players">
        <div v-for="user in users">
        <option v-if="availablePlayers.includes(user.id)">{{ user.id }} {{ user.name }}</option>
      </div>
      </datalist>
      
      <div class="container col-xl-9">
        <div class="row">

          <!-- Player Selection for non-Scramble games -->
          <div v-if="round.format !== 'Scramble'" class="col-xl-4 order-xl-1">
            <div class="card card-primary animated fadeInUp animation-delay-3">
              <div class="card-body">
                
                <form v-on:submit.prevent="submit()" class="form-horizontal">
                  <strong class="text-danger" v-if="errors.length > 0">{{errors}}</strong>
                  <fieldset>
                    <h1 class="color-danger text-center">Team Red</h1>
                    <div class="form-group row is-empty">
                      <!-- <label for="playerName1" class="col-md-3 control-label">Player 1</label> -->
                      <div class="col-md-9">
                        <input @blur="removePlayerFromOptions(player1)" type="text" class="form-control" list="players" id="playerName1" placeholder="Player 1" v-model="player1">
                      </div>
                    </div>
                    <br>
                    <div v-if="round.format !== 'Stableford' && round.format !== 'Match Play'" class="form-group row is-empty">
                      <!-- <label for="playerName2" class="col-md-3 control-label">Player 2</label> -->
                      <div class="col-md-9">
                        <input @blur="removePlayerFromOptions(player2)" type="text" class="form-control" list="players" id="playerName2" placeholder="Player 2" v-model="player2">
                      </div>
                    </div>
                    <br><br>
                    <h1 class="color-primary text-center">Team Blue</h1>
                    <div v-if="round.format !== 'Stableford' && round.format !== 'Match Play'" class="form-group row is-empty">
                      <!-- <label for="playerName3" class="col-md-3 control-label">Player 1</label> -->
                      <div class="col-md-9">
                        <input @blur="removePlayerFromOptions(player3)" type="text" class="form-control" list="players" id="playerName3" placeholder="Player 1" v-model="player3">
                      </div>
                    </div>
                    <br>
                    <div class="form-group row is-empty">
                      <!-- <label for="playerName4" class="col-md-3 control-label">Player 2</label> -->
                      <div class="col-md-9">
                        <input @blur="removePlayerFromOptions(player4)" type="text" class="form-control" list="players" id="playerName4" placeholder="Player 2" v-model="player4">
                      </div>
                    </div>
                    <br><br>
                    <button type="submit" class="btn btn-raised btn-primary btn-block">Add Match <i class="zmdi zmdi-long-arrow-right no-mr ml-1"></i></button>
                    <button v-on:click="$router.go(-1)" class="btn btn-raised btn-warning btn-block">Cancel</button>
                  </fieldset>
                </form>
                
              </div>
            </div>
          </div>

          <!-- Player Selection for Scramble games -->
          <div v-if="round.format === 'Scramble'" class="col-xl-4 order-xl-1">
            <div class="card card-primary animated fadeInUp animation-delay-3">
              <div class="card-body">
                
                <form v-on:submit.prevent="submit()" class="form-horizontal">
                  <strong v-if="errors.length > 0" class="text-danger">{{errors}}</strong>
                  <fieldset>
                    <h1 class="color-success text-center">Scramble</h1>
                    <div class="form-group row is-empty">
                      <!-- <label for="playerName1" class="col-md-3 control-label">Player 1</label> -->
                      <div class="col-md-9">
                        <input @blur="removePlayerFromOptions(player1)" type="text" class="form-control" list="players" id="playerName1" placeholder="Player 1" v-model="player1">
                      </div>
                    </div>
                    <br>
                    <div v-if="round.format !== 'Stableford' && round.format !== 'Match Play'" class="form-group row is-empty">
                      <!-- <label for="playerName2" class="col-md-3 control-label">Player 2</label> -->
                      <div class="col-md-9">
                        <input @blur="removePlayerFromOptions(player2)"type="text" class="form-control" list="players" id="playerName2" placeholder="Player 2" v-model="player2">
                      </div>
                    </div>
                    <br>
                    <div v-if="round.format !== 'Stableford' && round.format !== 'Match Play'" class="form-group row is-empty">
                      <!-- <label for="playerName3" class="col-md-3 control-label">Player 1</label> -->
                      <div class="col-md-9">
                        <input @blur="removePlayerFromOptions(player3)" type="text" class="form-control" list="players" id="playerName3" placeholder="Player 3" v-model="player3">
                      </div>
                    </div>
                    <br>
                    <div class="form-group row is-empty">
                      <!-- <label for="playerName4" class="col-md-3 control-label">Player 2</label> -->
                      <div class="col-md-9">
                        <input @blur="removePlayerFromOptions(player4)" type="text" class="form-control" list="players" id="playerName4" placeholder="Player 4" v-model="player4">
                      </div>
                    </div>
                    <br><br>
                    <button type="submit" class="btn btn-raised btn-primary btn-block">Add Match <i class="zmdi zmdi-long-arrow-right no-mr ml-1"></i></button>
                    <button v-on:click="$router.go(-1)" class="btn btn-raised btn-warning btn-block">Cancel</button>
                  </fieldset>
                </form>
                
              </div>
            </div>
          </div>

          <button v-if="!playersPopulated" v-on:click="populatePlayers()">Display Players</button>
          <div v-if="playersPopulated" id="userInfo" class="col-xl-8 order-xl-2">
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th class="col-sm-1" scope="col">Name</th>
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
                <tr v-if="availablePlayers.includes(user.id)" class="table-secondary">
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
      </div> 
    </div>
  </div>
</template>

<style>
#userInfo {
  overflow: scroll;
  max-height: 780px;
  max-width: 1000px;
}
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      users: [],
      availablePlayers: [],
      usedPlayers: [],
      newTeamName1: "",
      newTeamName2: "",
      player1: "",
      player2: "",
      player3: "",
      player4: "",
      playersPopulated: false,
      errors: [],
      match: {},
      round: {}
    };
  },
  created: function() {
    axios.get("/api/rounds/" + this.$route.params.id).then(response => {
      console.log("round", response.data);
      this.round = response.data;
    }).catch(error => {
        if (error.response){
          console.log("status", error.response.request.status);
          if (error.response.data.errors || error.response.data.messages){
            console.log("Errors", error.response.data.errors);
            console.log("Messages", error.response.data.messages);
          }
        }
    })

    axios.get("/api/users").then(response => {
      console.log("users", response.data);
      this.users = response.data; 
    }).catch(error => {
      console.log(error.response.data.errors);
    })
    
  },
  methods: {
    populatePlayers: function(){
      for (let match of this.round.matches){
        console.log("List Match from Matches", match);
        for (let team of match.teams){
          console.log("List Team from match's teams", team);
          for (let player of team.players){
            this.usedPlayers.push(player.id);
            console.log("player from team", player);
            console.log(this.usedPlayers);
          }
        }
      }
      console.log("looping through users");
      for (let user of this.users){
        console.log("what's this user's id", user, user.id);
        console.log("What's the usedPlayers array", this.usedPlayers);
        if (!this.usedPlayers.includes(user.id)){
          this.availablePlayers.push(user.id);
          console.log("user iteration", user);
        }
      }

      console.log("Used Players", this.usedPlayers);
      console.log("Available Players", this.availablePlayers);
      this.playersPopulated = true;
    },
    removePlayerFromOptions: function(player){
      console.log("player", player);
      const isPlayer = (element) => player.includes(element);
      var index = this.availablePlayers.findIndex(isPlayer)
      console.log("index", index);
      console.log("what should be removed: ", index);
      console.log("available players before removal", this.availablePlayers);
      if (index > -1){
        this.availablePlayers.splice(index, 1);
        console.log("New value of availablePlayers", this.availablePlayers);
      }
    },
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
        console.log("Match Created", response.data);
        this.match = response.data;
        // axios.patch("/api/matches/" + this.match.id).then(response => {
        //   console.log(response.data)
        // })
          this.$router.push("/rounds/" + this.$route.params.id);
        
      }).catch(error => {
        console.log(error.response.data);
        this.errors = error.response.data.errors;
        
      })
    }
  }
};
</script>