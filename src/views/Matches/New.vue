<template>
  <div class="matches-new">
    <div class="ms-site-container">
      <datalist id="players">
        <option v-for="user in users">{{ user.id }} {{ user.name }}</option>
      </datalist>
      
      <div class="container">
        <div class="row">

          <div class="col-xl-6 order-xl-1">
            <div class="card card-primary animated fadeInUp animation-delay-7">
              <div class="card-body">
                <h1 class="color-primary text-center">Team 1</h1>
                <form v-on:submit.prevent="submit()" class="form-horizontal">
                  <fieldset>
                    <div class="form-group row is-empty">
                      <label for="teamName1" class="col-md-3 control-label">Team Name</label>
                      <div class="col-md-9">
                        <input type="text" class="form-control" id="teamName1" placeholder="Team 1" v-model="newTeamName1">
                      </div>
                    </div>
                    <div class="form-group row is-empty">
                      <label for="playerName1" class="col-md-3 control-label">Player 1</label>
                      <div class="col-md-9">
                        <input type="text" class="form-control" id="playerName1" placeholder="Player 1" v-model="player1">
                      </div>
                    </div>
                    <div class="form-group row is-empty">
                      <label for="playerName2" class="col-md-3 control-label">Player 2</label>
                      <div class="col-md-9">
                        <input type="text" class="form-control" id="playerName2" placeholder="Player 2" v-model="player2">
                      </div>
                    </div>
                   <h1 class="color-primary text-center">Team 2</h1>
               
                    <div class="form-group row is-empty">
                      <label for="teamName2" class="col-md-3 control-label">Team Name</label>
                      <div class="col-md-9">
                        <input type="text" class="form-control" id="teamName2" placeholder="Team 2" v-model="newTeamName2">
                      </div>
                    </div>
                    <div class="form-group row is-empty">
                      <label for="playerName3" class="col-md-3 control-label">Player 1</label>
                      <div class="col-md-9">
                        <input type="text" class="form-control" id="playerName3" placeholder="Player 1" v-model="player3">
                      </div>
                    </div>
                    <div class="form-group row is-empty">
                      <label for="playerName4" class="col-md-3 control-label">Player 2</label>
                      <div class="col-md-9">
                        <input type="text" class="form-control" id="playerName4" placeholder="Player 2" v-model="player4">
                      </div>
                    </div>
                    <button type="submit" class="btn btn-raised btn-primary btn-block">Add Match <i class="zmdi zmdi-long-arrow-right no-mr ml-1"></i></button>
                    <button v-on:click="$router.go(-1)">Cancel</button>
                  </fieldset>
                </form>
                
              </div>
            </div>
          </div>
          <<!-- div class="col-xl-6 order-xl-1">
            <div class="card card-primary animated fadeInUp animation-delay-7">
              <div class="card-body">
                <h1 class="color-primary text-center">Team 2</h1>
               
                    <div class="form-group row is-empty">
                      <label for="teamName2" class="col-md-3 control-label">Team Name</label>
                      <div class="col-md-9">
                        <input type="text" class="form-control" id="teamName2" placeholder="Team 2" v-model="newTeamName2">
                      </div>
                    </div>
                    <div class="form-group row is-empty">
                      <label for="playerName3" class="col-md-3 control-label">Player 1</label>
                      <div class="col-md-9">
                        <input type="text" class="form-control" id="playerName3" placeholder="Player 1" v-model="player3">
                      </div>
                    </div>
                    <div class="form-group row is-empty">
                      <label for="playerName4" class="col-md-3 control-label">Player 2</label>
                      <div class="col-md-9">
                        <input type="text" class="form-control" id="playerName4" placeholder="Player 2" v-model="player4">
                      </div>
                    </div>
                    
                  </fieldset>
                  
                </form>              
              </div>
            </div>
          </div> -->

        </div>
        
      </div>


      



      <!-- <div>
        <br><br>
        Team 1 Name: <input type="text" v-model="newTeamName1"><br>
        Team 1 Player 1: <input list="players" type="text" v-model="player1"><br>
        Team 1 Player 2: <input list="players" type="text" v-model="player2"><br>
        <br>
        Team 2 Name: <input type="text" v-model="newTeamName2"><br>
        Team 2 Player 1: <input list="players" type="text" v-model="player3"><br>
        Team 2 Player 2: <input list="players" type="text" v-model="player4"><br>
        <br>
        <button type="submit" v-on:click="submit()">Add Match</button>  
        <button v-on:click="$router.go(-1)">Cancel</button>
        <br><br>
      </div> -->
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