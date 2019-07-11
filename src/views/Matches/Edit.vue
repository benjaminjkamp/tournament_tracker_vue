<template>
  <div class="matches-edit">

    <div class="col-lg-14 ms-paper-content-container">
      <div class="ms-paper-content">
        <div class="row">
          <div class="col-lg-13">
            <div class="card">
              <div class="card-tabs">
                <ul class="nav nav-tabs shadow-2dp" role="tablist">
                  <li class="nav-item"><a href="#strokes" aria-controls="strokes" role="tab" data-toggle="tab" class="active withoutripple nav-link "><i class="zmdi zmdi-home"></i> <span class="d-none d-sm-inline">Strokes</span></a></li>
                  <li class="nav-item"><a href="#points" aria-controls="points" role="tab" data-toggle="tab" class="withoutripple nav-link "><i class="zmdi zmdi-male"></i> <span class="d-none d-sm-inline">Points</span></a></li>
                </ul>
              </div>
              <div class="card-body">
                <div class="tab-content">                  
                  <div role="tabpanel" class="tab-pane fade active show" id="strokes"> 
                    <form v-on:submit.prevent="userScores()" class="form-horizontal" autocomplete="off">
                      <fieldset>

                        <table class="table active table-condensed">
                          <thead class="thead-dark">
                            <tr>
                              <th scope="col">TEAM<input size="12" type="text" v-model="match.teams[0].name"></th>
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
                              <th scope="row"><input size="12" type="text" v-model="match.teams[0].players[0].name"></th>
                              <td><input size="2" step="0.5" type="text" v-model="player1Score1"></td>
                              <td><input size="2" step="any" type="text" v-model="player1Score2"></td>
                              <td><input size="2" step="any" type="text" v-model="player1Score3"></td>
                              <td><input size="2" step="any" type="text" v-model="player1Score4"></td>
                              <td><input size="2" step="any" type="text" v-model="player1Score5"></td>
                              <td><input size="2" step="any" type="text" v-model="player1Score6"></td>
                              <td><input size="2" step="any" type="text" v-model="player1Score7"></td>
                              <td><input size="2" step="any" type="text" v-model="player1Score8"></td>
                              <td><input size="2" step="any" type="text" v-model="player1Score9"></td>
                              <td><input size="2" step="any" type="text" v-model="player1Score10"></td>
                              <td><input size="2" step="any" type="text" v-model="player1Score11"></td>
                              <td><input size="2" step="any" type="text" v-model="player1Score12"></td>
                              <td><input size="2" step="any" type="text" v-model="player1Score13"></td>
                              <td><input size="2" step="any" type="text" v-model="player1Score14"></td>
                              <td><input size="2" step="any" type="text" v-model="player1Score15"></td>
                              <td><input size="2" step="any" type="text" v-model="player1Score16"></td>
                              <td><input size="2" step="any" type="text" v-model="player1Score17"></td>
                              <td><input size="2" step="any" type="text" v-model="player1Score18"></td>
                              
                              
                            </tr>
                            <tr class="table-secondary">
                              <th scope="row"><input size="12" type="text" v-model="match.teams[0].players[1].name"></th>
                              <td><input size="2" step="any" type="text" v-model="player2Score1"></td>
                              <td><input size="2" step="any" type="text" v-model="player2Score2"></td>
                              <td><input size="2" step="any" type="text" v-model="player2Score3"></td>
                              <td><input size="2" step="any" type="text" v-model="player2Score4"></td>
                              <td><input size="2" step="any" type="text" v-model="player2Score5"></td>
                              <td><input size="2" step="any" type="text" v-model="player2Score6"></td>
                              <td><input size="2" step="any" type="text" v-model="player2Score7"></td>
                              <td><input size="2" step="any" type="text" v-model="player2Score8"></td>
                              <td><input size="2" step="any" type="text" v-model="player2Score9"></td>
                              <td><input size="2" step="any" type="text" v-model="player2Score10"></td>
                              <td><input size="2" step="any" type="text" v-model="player2Score11"></td>
                              <td><input size="2" step="any" type="text" v-model="player2Score12"></td>
                              <td><input size="2" step="any" type="text" v-model="player2Score13"></td>
                              <td><input size="2" step="any" type="text" v-model="player2Score14"></td>
                              <td><input size="2" step="any" type="text" v-model="player2Score15"></td>
                              <td><input size="2" step="any" type="text" v-model="player2Score16"></td>
                              <td><input size="2" step="any" type="text" v-model="player2Score17"></td>
                              <td><input size="2" step="any" type="text" v-model="player2Score18"></td>
                              
                            </tr>
                          
                          </tbody>
                        </table>
                        <br>
                        <table class="table active table-condensed">
                          <thead class="thead-dark">
                            <tr>
                              <th scope="col">TEAM<input size="12" type="text" v-model="match.teams[1].name"> </th>
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
                              <th scope="row"><input size="12" type="text" v-model="match.teams[1].players[0].name"></th>
                              <td><input size="2" step="0.5" type="text" v-model="player3Score1"></td>
                              <td><input size="2" step="any" type="text" v-model="player3Score2"></td>
                              <td><input size="2" step="any" type="text" v-model="player3Score3"></td>
                              <td><input size="2" step="any" type="text" v-model="player3Score4"></td>
                              <td><input size="2" step="any" type="text" v-model="player3Score5"></td>
                              <td><input size="2" step="any" type="text" v-model="player3Score6"></td>
                              <td><input size="2" step="any" type="text" v-model="player3Score7"></td>
                              <td><input size="2" step="any" type="text" v-model="player3Score8"></td>
                              <td><input size="2" step="any" type="text" v-model="player3Score9"></td>
                              <td><input size="2" step="any" type="text" v-model="player3Score10"></td>
                              <td><input size="2" step="any" type="text" v-model="player3Score11"></td>
                              <td><input size="2" step="any" type="text" v-model="player3Score12"></td>
                              <td><input size="2" step="any" type="text" v-model="player3Score13"></td>
                              <td><input size="2" step="any" type="text" v-model="player3Score14"></td>
                              <td><input size="2" step="any" type="text" v-model="player3Score15"></td>
                              <td><input size="2" step="any" type="text" v-model="player3Score16"></td>
                              <td><input size="2" step="any" type="text" v-model="player3Score17"></td>
                              <td><input size="2" step="any" type="text" v-model="player3Score18"></td>
                              
                              
                            </tr>
                            <tr class="table-secondary">
                              <th scope="row"><input size="12" type="text" v-model="match.teams[1].players[1].name"></th>
                              <td><input size="2" step="any" type="text" v-model="player4Score1"></td>
                              <td><input size="2" step="any" type="text" v-model="player4Score2"></td>
                              <td><input size="2" step="any" type="text" v-model="player4Score3"></td>
                              <td><input size="2" step="any" type="text" v-model="player4Score4"></td>
                              <td><input size="2" step="any" type="text" v-model="player4Score5"></td>
                              <td><input size="2" step="any" type="text" v-model="player4Score6"></td>
                              <td><input size="2" step="any" type="text" v-model="player4Score7"></td>
                              <td><input size="2" step="any" type="text" v-model="player4Score8"></td>
                              <td><input size="2" step="any" type="text" v-model="player4Score9"></td>
                              <td><input size="2" step="any" type="text" v-model="player4Score10"></td>
                              <td><input size="2" step="any" type="text" v-model="player4Score11"></td>
                              <td><input size="2" step="any" type="text" v-model="player4Score12"></td>
                              <td><input size="2" step="any" type="text" v-model="player4Score13"></td>
                              <td><input size="2" step="any" type="text" v-model="player4Score14"></td>
                              <td><input size="2" step="any" type="text" v-model="player4Score15"></td>
                              <td><input size="2" step="any" type="text" v-model="player4Score16"></td>
                              <td><input size="2" step="any" type="text" v-model="player4Score17"></td>
                              <td><input size="2" step="any" type="text" v-model="player4Score18"></td>
                              
                            </tr>
                          
                          </tbody>
                        </table>
                        <div class="form-group row">
                            <div class="col-lg-10">

                              <button type="submit" class="btn btn-raised btn-primary">Update</button>
                              <button type="button" class="btn btn-raised btn-warning" v-on:click="$router.go(-1)">Cancel</button>
                            </div>
                            <div class="col-lg-10">
                              <button type="button" class="btn btn-raised btn-danger" v-on:click="destroy()">Delete Match</button>
                            </div>
                        </div>
                      </fieldset>
                    </form>
                  </div>

                  <div role="tabpanel" class="tab-pane fade" id="points">  
                    <form v-on:submit.prevent="teamScores()" class="form-horizontal" autocomplete="off">
                      <fieldset>
                        
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
                              <th scope="row"><input size="12" type="text" v-model="match.teams[0].name"></th>
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
                              <th scope="row"><input size="12" type="text" v-model="match.teams[1].name"></th>
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
                        <div class="col-lg-10">

                          <button type="submit" class="btn btn-raised btn-primary">Update</button>
                          <button type="button" class="btn btn-raised btn-warning" v-on:click="$router.go(-1)">Cancel</button>
                        </div>
                        <div class="col-lg-10">
                          <button type="button" class="btn btn-raised btn-danger" v-on:click="destroy()">Delete Match</button>
                        </div>                           
                      </fieldset> 
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
      match: {},
      newTeamName1: "",
      newTeamName2: "",
      player1: "",
      player2: "",
      player3: "",
      player4: "",
      errors: [],

      player1Score1: "",
      player1Score2: "",
      player1Score3: "",
      player1Score4: "",
      player1Score5: "",
      player1Score6: "",
      player1Score7: "",
      player1Score8: "",
      player1Score9: "",
      player1Score10: "",
      player1Score11: "",
      player1Score12: "",
      player1Score13: "",
      player1Score14: "",
      player1Score15: "",
      player1Score16: "",
      player1Score17: "",
      player1Score18: "",

      player2Score1: "",
      player2Score2: "",
      player2Score3: "",
      player2Score4: "",
      player2Score5: "",
      player2Score6: "",
      player2Score7: "",
      player2Score8: "",
      player2Score9: "",
      player2Score10: "",
      player2Score11: "",
      player2Score12: "",
      player2Score13: "",
      player2Score14: "",
      player2Score15: "",
      player2Score16: "",
      player2Score17: "",
      player2Score18: "",

      player3Score1: "",
      player3Score2: "",
      player3Score3: "",
      player3Score4: "",
      player3Score5: "",
      player3Score6: "",
      player3Score7: "",
      player3Score8: "",
      player3Score9: "",
      player3Score10: "",
      player3Score11: "",
      player3Score12: "",
      player3Score13: "",
      player3Score14: "",
      player3Score15: "",
      player3Score16: "",
      player3Score17: "",
      player3Score18: "",

      player4Score1: "",
      player4Score2: "",
      player4Score3: "",
      player4Score4: "",
      player4Score5: "",
      player4Score6: "",
      player4Score7: "",
      player4Score8: "",
      player4Score9: "",
      player4Score10: "",
      player4Score11: "",
      player4Score12: "",
      player4Score13: "",
      player4Score14: "",
      player4Score15: "",
      player4Score16: "",
      player4Score17: "",
      player4Score18: ""

      
      
    };
  },
  created: function() {
    axios.get("/api/matches/" + this.$route.params.id).then(response => {
      console.log("match", response.data);
      this.match = response.data;
    });
  },
  methods: {
    teamScores: function(){
      var params = {
        team1_name: this.match.teams[0].name,
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
        
        team2_name: this.match.teams[1].name,
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
        
      });
    },
    userScores: function(){

      // inputs for player 1 strokes
      var player1Scores = [
        Number(this.player1Score1),
        Number(this.player1Score2),
        Number(this.player1Score3),
        Number(this.player1Score4),
        Number(this.player1Score5),
        Number(this.player1Score6),
        Number(this.player1Score7),
        Number(this.player1Score8),
        Number(this.player1Score9),
        Number(this.player1Score10),
        Number(this.player1Score11),
        Number(this.player1Score12),
        Number(this.player1Score13),
        Number(this.player1Score14),
        Number(this.player1Score15),
        Number(this.player1Score16),
        Number(this.player1Score17),
        Number(this.player1Score18),
      ]
      var i = 0;

      // set player 1 scores with handicaps
      for (i = 0; i < 18; i++){
        if (this.match.teams[0].players[0].low_net_handicap >= Object.values(this.match.round.course.handicaps)[i]){
          player1Scores[i]--;
        }
      }
      console.log("player1scores", player1Scores);


      // inputs for player 2 scores
      var player2Scores = [
        Number(this.player2Score1),
        Number(this.player2Score2),
        Number(this.player2Score3),
        Number(this.player2Score4),
        Number(this.player2Score5),
        Number(this.player2Score6),
        Number(this.player2Score7),
        Number(this.player2Score8),
        Number(this.player2Score9),
        Number(this.player2Score10),
        Number(this.player2Score11),
        Number(this.player2Score12),
        Number(this.player2Score13),
        Number(this.player2Score14),
        Number(this.player2Score15),
        Number(this.player2Score16),
        Number(this.player2Score17),
        Number(this.player2Score18),
      ]
      var i = 0;

      // set player 2 scores with handicaps
      for (i = 0; i < 18; i++){
        if (this.match.teams[0].players[1].low_net_handicap >= Object.values(this.match.round.course.handicaps)[i]){
          player2Scores[i]--;
        }
      }
      console.log("player2scores", player2Scores);

      // inputs for player 3 scores
      var player3Scores = [
        Number(this.player3Score1),
        Number(this.player3Score2),
        Number(this.player3Score3),
        Number(this.player3Score4),
        Number(this.player3Score5),
        Number(this.player3Score6),
        Number(this.player3Score7),
        Number(this.player3Score8),
        Number(this.player3Score9),
        Number(this.player3Score10),
        Number(this.player3Score11),
        Number(this.player3Score12),
        Number(this.player3Score13),
        Number(this.player3Score14),
        Number(this.player3Score15),
        Number(this.player3Score16),
        Number(this.player3Score17),
        Number(this.player3Score18),
      ]
      var i = 0;

      // set player 3 scores with handicaps
      for (i = 0; i < 18; i++){
        if (this.match.teams[1].players[0].low_net_handicap >= Object.values(this.match.round.course.handicaps)[i]){
          player3Scores[i]--;
        }
      }
      console.log("player3scores", player3Scores);

      // inputs for player 4 scores
      var player4Scores = [
        Number(this.player4Score1),
        Number(this.player4Score2),
        Number(this.player4Score3),
        Number(this.player4Score4),
        Number(this.player4Score5),
        Number(this.player4Score6),
        Number(this.player4Score7),
        Number(this.player4Score8),
        Number(this.player4Score9),
        Number(this.player4Score10),
        Number(this.player4Score11),
        Number(this.player4Score12),
        Number(this.player4Score13),
        Number(this.player4Score14),
        Number(this.player4Score15),
        Number(this.player4Score16),
        Number(this.player4Score17),
        Number(this.player4Score18),
      ]

      // set player 4 scores with handicaps
      for (i = 0; i < 18; i++){
        if (this.match.teams[1].players[1].low_net_handicap >= Object.values(this.match.round.course.handicaps)[i]){
          player4Scores[i]--;
        }
      }

      console.log("player4scores", player4Scores);


      // 2-man-total-score

      var team1Strokes = [];
      var team2Strokes = [];

      // Add each team's player stroke totals after handicaps
      for (i = 0; i < 18; i++){
        team1Strokes.push(player1Scores[i] + player2Scores[i]);
        team2Strokes.push(player3Scores[i] + player4Scores[i]);
      }

      console.log("team1strokes", team1Strokes, "team2strokes", team2Strokes)

      var team1Scores = [];
      var team2Scores = [];
      
      // assign points to teams based on lower totals per hole
      for (var i = 0; i < 18; i++) {
        if (team1Strokes[i] < team2Strokes[i]) {
          team1Scores.push(1);
          team2Scores.push(0);
        } else if (team1Strokes[i] == team2Strokes[i]) {
          team1Scores.push(0.5);
          team2Scores.push(0.5);
        } else {
          team2Scores.push(1);
          team1Scores.push(0);
        }
      }
      console.log("team1scores", team1Scores);
      console.log("team2scores", team2Scores);

      var params = {
        team1_name: this.match.teams[0].name,
        team1_score1: team1Scores[0],
        team1_score2: team1Scores[1],
        team1_score3: team1Scores[2],
        team1_score4: team1Scores[3],
        team1_score5: team1Scores[4],
        team1_score6: team1Scores[5],
        team1_score7: team1Scores[6],
        team1_score8: team1Scores[7],
        team1_score9: team1Scores[8],
        team1_score10: team1Scores[9],
        team1_score11: team1Scores[10],
        team1_score12: team1Scores[11],
        team1_score13: team1Scores[12],
        team1_score14: team1Scores[13],
        team1_score15: team1Scores[14],
        team1_score16: team1Scores[15],
        team1_score17: team1Scores[16],
        team1_score18: team1Scores[17],
        
        team2_name: this.match.teams[1].name,
        team2_score1: team2Scores[0],
        team2_score2: team2Scores[1],
        team2_score3: team2Scores[2],
        team2_score4: team2Scores[3],
        team2_score5: team2Scores[4],
        team2_score6: team2Scores[5],
        team2_score7: team2Scores[6],
        team2_score8: team2Scores[7],
        team2_score9: team2Scores[8],
        team2_score10: team2Scores[9],
        team2_score11: team2Scores[10],
        team2_score12: team2Scores[11],
        team2_score13: team2Scores[12],
        team2_score14: team2Scores[13],
        team2_score15: team2Scores[14],
        team2_score16: team2Scores[15],
        team2_score17: team2Scores[16],
        team2_score18: team2Scores[17],
      }

      axios.patch("/api/matches/" + this.$route.params.id, params).then(response => {
        console.log(response.data);
        this.$router.push("/rounds/" + this.match.round.id);
      }).catch(error => {
        console.log(error.response.data);
        this.errors = error.response.data;
        
      });
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