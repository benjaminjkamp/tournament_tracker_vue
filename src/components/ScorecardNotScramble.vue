<template>       
  <div> 
    <div class="container">
          
      <div class="col-xs-1">

        <div v-if="matches.length > 0"  class="card">
          <div  style="background-color: #2e7d32;" class="row">

            <div v-bind:key="match.id" v-for="match in matches" class="col-lg-6">
                                
              <table class="table table-condensed table-striped">
                <tr class="border-box border-danger">
                  <th class="">
                    <strong v-if="match.teams[0].players.length > 1"><h3 class="text-danger">{{match.teams[0].players[0].name}} & {{match.teams[0].players[1].name}}</h3></strong>
                    <strong v-if="match.teams[0].players.length < 2"><h3 class="text-danger">{{match.teams[0].players[0].name}}</h3></strong>
                      <!-- & <br>  -->
                  </th>
                  <th class="text-danger">
                    <strong><h3 class="text-danger">{{match.team_1_score}}</h3></strong>
                  </th>
                  
                </tr>
                <tr class="border-box border-primary">
                  <th>
                    <strong v-if="match.teams[1].players[1]"><h3 class="text-primary">{{match.teams[1].players[0].name}} & {{match.teams[1].players[1].name}}</h3></strong>
                    <strong v-if="!match.teams[1].players[1]"><h3 class="text-primary">{{match.teams[1].players[0].name}}</h3></strong>
                  </th>
                  <th>
                    <strong>
                      <h3 class="text-primary">{{match.team_2_score}}</h3>
                    </strong>
                  </th>
                  
                </tr>
                <!-- <div class="panel-footer "> -->
                  
                <tr class=" text-center">  
                  <td v-if="!roundFinalized">
                    <router-link v-if="isAdmin()" class="btn btn-raised btn-white" :to="'/matches/' + match.id + '/edit'"><i class="zmdi zmdi-edit zmdi-hc-lg"> Edit Scores</i></router-link>
                  </td>
                  <th></th>
                </tr>
                     
                      
                    <!-- </div> -->
              </table>
              <hr>
              </hr>
            </div>
                
          </div>
        </div>
      </div>
        
            
            
    </div> 
  </div>
</template>





<script>
  import axios from "axios";
  export default {
    props: {
      round: Object,
      matches: Array,
      parTotal: Number,
      user: Object,
      scorecardKey: Number,
      scores: Array,
      netScores: Array,
      team1Scores: Array,
      team2Scores: Array,
      roundFinalized: Boolean
    },
    methods: {
      isAdmin: function(){
        console.log("isAdmin User", this.user.admin);
        if (this.user.admin){
          return true;
        } else {
          return false;
        }
      },
      refreshRound: function() {
        this.$emit("refreshRound");
      // axios.get("/api/rounds/" + this.$route.params.id ).then(response => {
      //   console.log("Refreshed Round Data", response.data);
      //   this.round = response.data;
      //   this.matches = this.round.matches;
      //   this.team1Scores = []
      //   this.team2Scores = []
      //   var teamIndex = 0;
      //   for (let match of this.matches){
      //     console.log("match", match);
      //     for (let team of match.teams){
      //       console.log("team", team);
      //       for (let score of team.scores){
      //         console.log("scores", score);
      //         if (score.user_id === this.user.id){
      //           this.scores.push(score);
      //           this.netScores.push(score.net_score);
      //         }
      //       }
      //       console.log("team", team);
      //       console.log("user", this.user);
      //       for (let player of team.players){
      //         if (player.id === this.user.id){
      //           this.match = match;
      //         console.log("Current User's Match", this.match);
      //         }
      //       }
      //       if (teamIndex === 0){
      //         this.team1Scores[0]=(team.team_scores.score_1);
      //         this.team1Scores[1]=(team.team_scores.score_2);
      //         this.team1Scores[2]=(team.team_scores.score_3);
      //         this.team1Scores[3]=(team.team_scores.score_4);
      //         this.team1Scores[4]=(team.team_scores.score_5);
      //         this.team1Scores[5]=(team.team_scores.score_6);
      //         this.team1Scores[6]=(team.team_scores.score_7);
      //         this.team1Scores[7]=(team.team_scores.score_8);
      //         this.team1Scores[8]=(team.team_scores.score_9);
      //         this.team1Scores[9]=(team.team_scores.score_10);
      //         this.team1Scores[10]=(team.team_scores.score_11);
      //         this.team1Scores[11]=(team.team_scores.score_12);
      //         this.team1Scores[12]=(team.team_scores.score_13);
      //         this.team1Scores[13]=(team.team_scores.score_14);
      //         this.team1Scores[14]=(team.team_scores.score_15);
      //         this.team1Scores[15]=(team.team_scores.score_16);
      //         this.team1Scores[16]=(team.team_scores.score_17);
      //         this.team1Scores[17]=(team.team_scores.score_18);
              
      //       } else {
      //         this.team2Scores[0]=(team.team_scores.score_1);
      //         this.team2Scores[1]=(team.team_scores.score_2);
      //         this.team2Scores[2]=(team.team_scores.score_3);
      //         this.team2Scores[3]=(team.team_scores.score_4);
      //         this.team2Scores[4]=(team.team_scores.score_5);
      //         this.team2Scores[5]=(team.team_scores.score_6);
      //         this.team2Scores[6]=(team.team_scores.score_7);
      //         this.team2Scores[7]=(team.team_scores.score_8);
      //         this.team2Scores[8]=(team.team_scores.score_9);
      //         this.team2Scores[9]=(team.team_scores.score_10);
      //         this.team2Scores[10]=(team.team_scores.score_11);
      //         this.team2Scores[11]=(team.team_scores.score_12);
      //         this.team2Scores[12]=(team.team_scores.score_13);
      //         this.team2Scores[13]=(team.team_scores.score_14);
      //         this.team2Scores[14]=(team.team_scores.score_15);
      //         this.team2Scores[15]=(team.team_scores.score_16);
      //         this.team2Scores[16]=(team.team_scores.score_17);
      //         this.team2Scores[17]=(team.team_scores.score_18);
      //       }
            
      //       teamIndex++;
      //     }
        
      //   }

      // }).catch(error => {
      //   console.log(error);
      //   this.errors = error;
      // })
    },
    }
  }
</script>