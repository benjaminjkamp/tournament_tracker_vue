<template>
  <div class="matches-new">
    <div class="ms-site-container">
      <datalist id="redPlayers">
        <div v-for="user in users">
        <option v-if="availableRed.includes(user.id)">{{ user.id }} {{ user.name }}</option>
      </div>
      </datalist>
      <datalist id="bluePlayers">
        <div v-for="user in users">
        <option v-if="availableBlue.includes(user.id)">{{ user.id }} {{ user.name }}</option>
      </div>
      </datalist>
      
      <div class="container col-xl-10">
        <div class="row">

          <!-- Player Selection for non-Scramble games -->
          <div v-if="round.format !== 'Scramble'" class="col-xl-3">
            <div class="card card-primary animated fadeInUp animation-delay-3">
              <div class="card-body">
                
                <form v-on:submit.prevent="submit()" class="form-horizontal">
                  <!-- <strong class="text-danger" v-if="errors.length > 0">{{errors}}</strong> -->
                  <strong v-if="errors.length >0" class="bolder btn btn-raised btn-danger">{{errors[errors.length - 1]}}</strong>

                  <fieldset>
                    <div v-if="teamSelected === 'Red'">
                      <h1 class="color-danger text-center"><strong>Team Red</strong></h1>
                      <div class="form-group row is-empty">
                        <!-- <label for="playerName1" class="col-md-3 control-label">Player 1</label> -->
                        <div class="col-md-9">
                          <input @change="removePlayerFromOptions(player1, 'Red')" type="text" class="bolder form-control col-md-12" list="redPlayers" id="playerName1" placeholder="Player 1" v-model="player1">

                          <!-- <span v-on:click="placePlayer(redPlayerSelected, 1, 'Red')" class="btn btn-sm btn-raised btn-success"><i class="glyphicon glyphicon-arrow-left"></i></span>

                          <span v-on:click="unplacePlayer(player1, 1, 'Red')" class="btn btn-sm btn-raised btn-danger"><i class="glyphicon glyphicon-arrow-right"></i></span> -->
                        </div>
                      </div>
                      <br>
                      <div v-if="round.format !== 'Stableford' && round.format !== 'Match Play'" class="form-group row is-empty">
                        <!-- <label for="playerName2" class="col-md-3 control-label">Player 2</label> -->
                        <div class="col-md-9">
                          <input @change="removePlayerFromOptions(player2, 'Red')" type="text" class="bolder form-control" list="redPlayers" id="playerName2" placeholder="Player 2" v-model="player2">

                          <!-- <span v-on:click="placePlayer(redPlayerSelected, 2, 'Red')" class="btn btn-sm btn-raised btn-success"><i class="glyphicon glyphicon-arrow-left"></i></span>

                          <span v-on:click="unplacePlayer(player2, 2, 'Red')" class="btn btn-sm btn-raised btn-danger"><i class="glyphicon glyphicon-arrow-right"></i></span> -->
                        </div>
                      </div>
                      <br><br>
                    </div>

                    <div v-if="teamSelected === 'Blue'">
                      <h1 class="color-info text-center"><strong>Team Blue</strong></h1>
                      <div v-if="round.format !== 'Stableford' && round.format !== 'Match Play'" class="form-group row is-empty">
                        <!-- <label for="playerName3" class="col-md-3 control-label">Player 1</label> -->
                        <div class="col-md-9">
                          <input @change="removePlayerFromOptions(player3, 'Blue')" type="text" class="bolder form-control" list="bluePlayers" id="playerName3" placeholder="Player 1" v-model="player3">

                          <!-- <span v-on:click="placePlayer(bluePlayerSelected, 3, 'Blue')" class="btn btn-sm btn-raised btn-success"><i class="glyphicon glyphicon-arrow-left"></i></span>

                          <span v-on:click="unplacePlayer(player3, 3, 'Blue')" class="btn btn-sm btn-raised btn-danger"><i class="glyphicon glyphicon-arrow-right"></i></span> -->
                          

                        </div>
                      </div>
                      <br>
                      <div class="form-group row is-empty">
                        <!-- <label for="playerName4" class="col-md-3 control-label">Player 2</label> -->
                        <div class="col-md-9">
                          <input @change="removePlayerFromOptions(player4, 'Blue')" type="text" class="bolder form-control" list="bluePlayers" id="playerName4" placeholder="Player 2" v-model="player4">

                          <!-- <span v-on:click="placePlayer(bluePlayerSelected, 4, 'Blue')" class="btn btn-sm btn-raised btn-success"><i class="glyphicon glyphicon-arrow-left"></i></span>

                          <span v-on:click="unplacePlayer(player4, 4, 'Blue')" class="btn btn-sm btn-raised btn-danger"><i class="glyphicon glyphicon-arrow-right"></i></span> -->
                        </div>
                      </div>
                      <br><br>
                    </div>
                    <button v-if="allSelected()" type="submit" class="btn btn-raised btn-info btn-block"><strong>Add Match</strong> </button>
                    <span v-if="!allSelected()" class="btn btn-raised btn-warning btn-block">Complete Player Selections...</span>
                    
                    <button v-on:click="$router.go(-1)" class="btn btn-raised btn-royal btn-block"><strong>Cancel</strong></button>
                  </fieldset>
                </form>
                
              </div>
            </div>
          </div>


          <div v-if="round.format !== 'Scramble'" class="col-xl-2">
            <div class="card card-primary animated fadeInUp animation-delay-3">
              <div class="card-body">
                <div><br><br><br><br></div>
                <div v-if="teamSelected === 'Red'">
                  <span v-on:click="placePlayer(redPlayerSelected, 1, 'Red')" class="btn btn-sm btn-raised btn-success"><i class="glyphicon glyphicon-arrow-left"></i></span>

                  <span v-on:click="unplacePlayer(player1, 1, 'Red')" class="btn btn-sm btn-raised btn-danger"><i class="glyphicon glyphicon-arrow-right"></i></span>
                
                  <div><br><br></div>

                  <span v-on:click="placePlayer(redPlayerSelected, 2, 'Red')" class="btn btn-sm btn-raised btn-success"><i class="glyphicon glyphicon-arrow-left"></i></span>

                  <span v-on:click="unplacePlayer(player2, 2, 'Red')" class="btn btn-sm btn-raised btn-danger"><i class="glyphicon glyphicon-arrow-right"></i></span>
                </div>
                <div v-if="teamSelected === 'Blue'">
                  <span v-on:click="placePlayer(bluePlayerSelected, 3, 'Blue')" class="btn btn-sm btn-raised btn-success"><i class="glyphicon glyphicon-arrow-left"></i></span>

                  <span v-on:click="unplacePlayer(player3, 3, 'Blue')" class="btn btn-sm btn-raised btn-danger"><i class="glyphicon glyphicon-arrow-right"></i></span>

                  <div><br><br></div>

                  <span v-on:click="placePlayer(bluePlayerSelected, 4, 'Blue')" class="btn btn-sm btn-raised btn-success"><i class="glyphicon glyphicon-arrow-left"></i></span>

                  <span v-on:click="unplacePlayer(player4, 4, 'Blue')" class="btn btn-sm btn-raised btn-danger"><i class="glyphicon glyphicon-arrow-right"></i></span>
                </div>
              </div>
            </div>
          </div>

          <!-- Player Selection for Scramble games -->
          <div v-if="round.format === 'Scramble'" class="col-xl-4">
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


          <!-- Card for red or blue player selection -->
          <div class=" col-xl-7 color-success">
            
            <div class="card-tabs color-success">
              <ul class="nav nav-tabs shadow-2dp color-success" style="background-color: #2e7d32;" role="tablist">
                <li class="nav-item">
                  <a href="#red" v-on:click="populatePlayers('Red')" aria-controls="profile" role="tab" data-toggle="tab" class="active withoutripple btn btn-raised btn-danger">
                    <strong>Red Team</strong>
                  </a>
                </li>
                  
                <li class="nav-item">
                  <a href="#blue" v-on:click="populatePlayers('Blue')" aria-controls="home" role="tab" data-toggle="tab" class="withoutripple btn btn-raised btn-info">
                    <strong>Blue Team</strong>
                  </a>
                </li> 
                <li class="col-lg-2"></li>
                <li v-if="!playersPopulated" class="nav-item">
                  <strong class="bolder btn btn-raised btn-white">Select a Team to Begin</strong>
                </li>
                   

              </ul>
                                      
            </div>
            
            <div class="card-body">

              <div v-if="playersPopulated" id="player-info">
                <table class="table table-condensed">
                  <thead v-if="teamSelected === 'Red'" class="color-danger-inverse">
                    <tr>
                      <th class="text-dark bolder" scope="col">NAME</th>
                      <th class="text-dark bolder" scope="col">LOW NET HDCP</th>
                      <th class="text-dark bolder" scope="col">SKINS HDCP</th>
                      <th class="text-dark bolder" scope="col">GNC AVG</th>
                      <th class="text-dark bolder" scope="col">2yr AVG</th>
                      <th class="text-dark bolder" scope="col">RECORD</th>
                      <th class="text-dark bolder" scope="col">LAST YEAR RECORD</th>       
                      
                    </tr>
                  </thead>
                  <thead v-if="teamSelected === 'Blue'" class="color-info-inverse">
                    <tr>
                      <th class="text-dark bolder" scope="col">NAME</th>
                      <th class="text-dark bolder" scope="col">LOW NET HDCP</th>
                      <th class="text-dark bolder" scope="col">SKINS HDCP</th>
                      <th class="text-dark bolder" scope="col">GNC AVG</th>
                      <th class="text-dark bolder" scope="col">2yr AVG</th>
                      <th class="text-dark bolder" scope="col">RECORD</th>
                      <th class="text-dark bolder" scope="col">LAST YEAR RECORD</th>        
                      
                    </tr>
                  </thead>
                  <tbody class="table-hover table-condensed" v-if="teamSelected === 'Red'" v-for="user in this.redUsers">
                    <tr v-on:click="selectPlayer(user, 'Red')" v-if="availableRed.includes(user.id)" class="table-secondary">
                      <th scope="row">{{user.name}}</th>
                      <td>{{user.low_net_handicap}}</td>
                      <td>{{user.skins_handicap}}</td>
                      <td>{{user.gnc_average}}</td>
                      <td>{{user.two_year_average}}</td>
                      <td>{{user.ryder_cup_record.ryder_cup_wins}}-{{user.ryder_cup_record.ryder_cup_losses}}-{{user.ryder_cup_record.ryder_cup_ties}}</td>
                      <td>{{user.last_year_record.wins}}-{{user.last_year_record.losses}}-{{user.last_year_record.ties}}</td>
                      
                    </tr>
                    
                  </tbody>
                  <tbody class="table-hover table-condensed" v-if="teamSelected === 'Blue'" v-for="user in this.blueUsers">
                    <tr v-on:click="selectPlayer(user, 'Blue')" v-if="availableBlue.includes(user.id)" class="table-secondary">
                      <th scope="row">{{user.name}}</th>
                      <td>{{user.low_net_handicap}}</td>
                      <td>{{user.skins_handicap}}</td>
                      <td>{{user.gnc_average}}</td>
                      <td>{{user.two_year_average}}</td>
                      <td>{{user.ryder_cup_record.ryder_cup_wins}}-{{user.ryder_cup_record.ryder_cup_losses}}-{{user.ryder_cup_record.ryder_cup_ties}}</td>
                      <td>{{user.last_year_record.wins}}-{{user.last_year_record.losses}}-{{user.last_year_record.ties}}</td>
                      
                    </tr>
                    
                  </tbody>
                </table>
              </div>

            </div>
          </div>


          
          


        </div>
      </div> 
    </div>
  </div>
</template>

<style>
#player-info {
  overflow-y: scroll;
  max-height: 650px;
}

</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      users: [],
      redUsers: [],
      blueUsers: [],
      teamSelected: "Red",
      redPlayerSelected: {},
      bluePlayerSelected: {},
      availablePlayers: [],
      availableBlue: [],
      availableRed: [],
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
      for (let user of this.users){
        if (user.team === "Red"){
          this.redUsers.push(user);
        } else if (user.team === "Blue") {
          this.blueUsers.push(user);
        }
      }
      console.log("red team", this.redUsers);
      console.log("blue team", this.blueUsers);
    }).catch(error => {
      console.log(error.response.data.errors);
    })

    
  },
  mounted: function(){

  },
  methods: {
    populatePlayers: function(team){
      if (!this.playersPopulated){
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
            if (user.team === "Red" && !this.availableRed.includes(user.id)){
              this.availableRed.push(user.id);
            } else if (user.team === "Blue" && !this.availableBlue.includes(user.id)){
              this.availableBlue.push(user.id);
            } else if ((user.team !== "Blue" && user.team !== "Red")){
              this.availablePlayers.push(user.id);
            }
            
            console.log("user iteration", user);
          }
        }

        console.log("Used Players", this.usedPlayers);
        console.log("Available Players", this.availablePlayers);
        console.log("Available Blue", this.availableBlue);
        console.log("Available Red", this.availableRed);


        this.playersPopulated = true;
      }
      this.teamSelected = team;
    },
    selectPlayer: function(user, team){
      if (team === 'Red'){
        this.redPlayerSelected = user;
        console.log(this.redPlayerSelected);
      } else if (team === 'Blue'){
        this.bluePlayerSelected = user;
        console.log(this.bluePlayerSelected);
      }
      
    },
    allSelected: function(){
      if (this.player1 !== '' && this.player2 !== '' && this.player3 !== '' && this.player4 !== ''){
        return true;
      } else {
        return false;
      }
    },
    isPlayer: function(player){
      var playerID = player.split(" ");
      return (x => x == playerID[0]); 
    },
    removeRed: function(player){
      var index = -1;
      index = this.availableRed.findIndex(this.isPlayer(player))
        console.log("index", index);
        console.log("what should be removed: ", index);
        if (index > -1){
          this.availableRed.splice(index, 1);
          console.log("New value of availableRed", this.availableRed);
        } else {
          console.log("Nothing to be removed from Red.");
        }
    },
    removeBlue: function(player){
      var index = -1;

      index = this.availableBlue.findIndex(this.isPlayer(player))
      console.log("index", index);
      console.log("what should be removed: ", index);
      if (index > -1){
        this.availableBlue.splice(index, 1);
        console.log("New value of availableBlue", this.availableBlue);
      } else {
        console.log("Nothing to be removed from Blue.");
      }
    },
    removePlayerFromOptions: function(player, team){
      console.log("player", player);
           
      console.log("available players before removal", this.availablePlayers);
      
      if (team === 'Red'){
        this.removeRed(player);        
      } else if (team === 'Blue'){
        this.removeBlue(player);
      } 
        
        //console.log("New value of availablePlayers", this.availablePlayers);
      
    },
    placePlayer: function(user, playerNumber, team){
      var playerFormatted = user.id + " " + user.name;
      console.log("user in placePlayer", user);
      console.log("user formatted in placePlayer", playerFormatted);
      if (user.id){
        if (playerNumber === 1){
          this.player1 = playerFormatted;
        } else if (playerNumber === 2){
          this.player2 = playerFormatted;
        } else if (playerNumber === 3){
          this.player3 = playerFormatted;
        } else if (playerNumber === 4){
          this.player4 = playerFormatted;
        }
        this.removePlayerFromOptions(playerFormatted, team);
        this.redPlayerSelected = "";
        this.bluePlayerSelected = "";
        if (this.errors.length > 0){
          this.errors = [];
        }
      } else {
        console.log("Invalid Player Placement.");
        this.errors.push("Invalid Selection");
      }
    },
    clearPlayer(playerNumber){
      if (playerNumber === 1){
        this.player1 = "";
      } else if (playerNumber === 2){
        this.player2 = "";
      } else if (playerNumber === 3){
        this.player3 = "";
      } else if (playerNumber === 4){
        this.player4 = "";
      } 
    },
    unplacePlayer: function(player, playerNumber, team){
      var playerUnformatted = parseInt(player.split(" ")[0]);
      console.log("Player to be unplaced:", player);
      console.log("playerUnformatted:", playerUnformatted);
      console.log("Team to be unplaced from:", team);
      if (team === 'Red'){
        this.availableRed.push(playerUnformatted);
        this.clearPlayer(playerNumber);
        console.log("new availableRed after unplace:", this.availableRed);
      } else if (team === 'Blue'){
        this.availableBlue.push(playerUnformatted);
        this.clearPlayer(playerNumber);
        console.log("new availableBlue after unplace:", this.availableBlue);
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
        console.log(error.response.data.errors);
        this.errors = error.response.data.errors;
        this.errors.push(error.response.data.other_errors);
        
      })
    }
  }
};
</script>