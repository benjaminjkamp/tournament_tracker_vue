<template>
  <div class="rounds-show">
    <div class="ms-site-container">

      <!-- Course Location Modal -->
      <div class="modal modal-light modal-xl" id="courseAdd" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg modal-dialog-centered animated zoomIn animated-3x" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h2 class="modal-title color-dark">{{course.name}}</h2>

              <button type="button" class="btn-dark close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i class="zmdi zmdi-close"></i></span></button>
            </div>
            
            <!-- modal map -->
            <div class="modal-body">
              <iframe width="100%" height="400px" :src="'https://www.google.com/maps/embed/v1/search?key=' + key + '&q=' + course.name + course.location"></iframe>                         
            </div>
              
          </div>
        </div>
      </div>

      <!-- Course Edit Modal -->
      <div class="modal modal-light" id="courseEdit" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-xl modal-dialog-centered animated zoomIn animated-3x" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h2 class="modal-title color-dark">{{course.name}}</h2>

              <button type="button" class="btn-dark close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i class="zmdi zmdi-close"></i></span></button>
            </div>
            
            <div class="modal-body">
              <div class="table-responsive">
                <form v-on:submit.prevent="submit()">
                  <table class="table text-center">
                    <thead class="thead-dark">
                      <tr>
                        <th scope="col"><input type="text" placeholder="Course Name" v-model="course.name"></th>
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
                      <tr class="table-secondary">
                        <th scope="row">Handicaps</th>
                        <td><input @blur="updateHandicap(handicaps[0], 1)" size="2" step="any" type="text" v-model="handicaps[0]"></td>
                        <td><input @blur="updateHandicap(handicaps[1], 2)" size="2" step="any" type="text" v-model="handicaps[1]"></td>
                        <td><input @blur="updateHandicap(handicaps[2], 3)" size="2" step="any" type="text" v-model="handicaps[2]"></td>
                        <td><input @blur="updateHandicap(handicaps[3], 4)" size="2" step="any" type="text" v-model="handicaps[3]"></td>
                        <td><input @blur="updateHandicap(handicaps[4], 5)" size="2" step="any" type="text" v-model="handicaps[4]"></td>
                        <td><input @blur="updateHandicap(handicaps[5], 6)" size="2" step="any" type="text" v-model="handicaps[5]"></td>
                        <td><input @blur="updateHandicap(handicaps[6], 7)" size="2" step="any" type="text" v-model="handicaps[6]"></td>
                        <td><input @blur="updateHandicap(handicaps[7], 8)" size="2" step="any" type="text" v-model="handicaps[7]"></td>
                        <td><input @blur="updateHandicap(handicaps[8], 9)" size="2" step="any" type="text" v-model="handicaps[8]"></td>
                        <td><input @blur="updateHandicap(handicaps[9], 10)" size="2" step="any" type="text" v-model="handicaps[9]"></td>
                        <td><input @blur="updateHandicap(handicaps[10], 11)" size="2" step="any" type="text" v-model="handicaps[10]"></td>
                        <td><input @blur="updateHandicap(handicaps[11], 12)" size="2" step="any" type="text" v-model="handicaps[11]"></td>
                        <td><input @blur="updateHandicap(handicaps[12], 13)" size="2" step="any" type="text" v-model="handicaps[12]"></td>
                        <td><input @blur="updateHandicap(handicaps[13], 14)" size="2" step="any" type="text" v-model="handicaps[13]"></td>
                        <td><input @blur="updateHandicap(handicaps[14], 15)" size="2" step="any" type="text" v-model="handicaps[14]"></td>
                        <td><input @blur="updateHandicap(handicaps[15], 16)" size="2" step="any" type="text" v-model="handicaps[15]"></td>
                        <td><input @blur="updateHandicap(handicaps[16], 17)" size="2" step="any" type="text" v-model="handicaps[16]"></td>
                        <td><input @blur="updateHandicap(handicaps[17], 18)" size="2" step="any" type="text" v-model="handicaps[17]"></td>
                        
                      </tr>
                      <tr class="table-secondary">
                        <th scope="row">Pars</th>
                        <td><input @blur="updatePar(pars[0], 1)" size="2" step="any" type="text" v-model="pars[0]"></td>
                        <td><input @blur="updatePar(pars[1], 2)" size="2" step="any" type="text" v-model="pars[1]"></td>
                        <td><input @blur="updatePar(pars[2], 3)" size="2" step="any" type="text" v-model="pars[2]"></td>
                        <td><input @blur="updatePar(pars[3], 4)" size="2" step="any" type="text" v-model="pars[3]"></td>
                        <td><input @blur="updatePar(pars[4], 5)" size="2" step="any" type="text" v-model="pars[4]"></td>
                        <td><input @blur="updatePar(pars[5], 6)" size="2" step="any" type="text" v-model="pars[5]"></td>
                        <td><input @blur="updatePar(pars[6], 7)" size="2" step="any" type="text" v-model="pars[6]"></td>
                        <td><input @blur="updatePar(pars[7], 8)" size="2" step="any" type="text" v-model="pars[7]"></td>
                        <td><input @blur="updatePar(pars[8], 9)" size="2" step="any" type="text" v-model="pars[8]"></td>
                        <td><input @blur="updatePar(pars[9], 10)" size="2" step="any" type="text" v-model="pars[9]"></td>
                        <td><input @blur="updatePar(pars[10], 11)" size="2" step="any" type="text" v-model="pars[10]"></td>
                        <td><input @blur="updatePar(pars[11], 12)" size="2" step="any" type="text" v-model="pars[11]"></td>
                        <td><input @blur="updatePar(pars[12], 13)" size="2" step="any" type="text" v-model="pars[12]"></td>
                        <td><input @blur="updatePar(pars[13], 14)" size="2" step="any" type="text" v-model="pars[13]"></td>
                        <td><input @blur="updatePar(pars[14], 15)" size="2" step="any" type="text" v-model="pars[14]"></td>
                        <td><input @blur="updatePar(pars[15], 16)" size="2" step="any" type="text" v-model="pars[15]"></td>
                        <td><input @blur="updatePar(pars[16], 17)" size="2" step="any" type="text" v-model="pars[16]"></td>
                        <td><input @blur="updatePar(pars[17], 18)" size="2" step="any" type="text" v-model="pars[17]"></td>
                        
                        
                      </tr>
                             
                    </tbody>
                  </table>
                  <button type="submit">Edit Course</button>
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- match scores modal -->
        <div class="modal modal-light" id="matchScores" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div class="modal-dialog modal-xl modal-dialog-centered animated zoomIn animated-3x" role="document">
            <div class="modal-content">
              <div v-bind:key="match" v-for="match in matches">
                <div class="modal-header">
                  <!-- <h2 class="modal-title color-dark">{{course.name}}</h2> -->
                  <h2 class="modal-title color-dark"><span class="text-danger">{{match.teams[0].players[0].name}} and {{match.teams[0].players[1].name}}</span> Vs. <span class="text-primary">{{match.teams[1].players[0].name}} and {{match.teams[1].players[1].name}}</span></h2>
                  <button type="button" class="btn-dark close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i class="zmdi zmdi-close"></i></span></button>
                </div>
                
                <div class="modal-body">
                  
                  <table class="table table-condensed">
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
                        <th scope="col">Total</th>
                      </tr>
                    </thead>
                    <tbody v-bind:key="team" v-for="team in match.teams" class="table-hover">
                      <tr v-if="team.name === 'Team Red'" class="table-secondary danger">
                        <th class="text-danger" scope="row">{{team.name}}</th>
                        <td>{{team.team_scores.score_1}}</td>
                        <td>{{team.team_scores.score_2}}</td>
                        <td>{{team.team_scores.score_3}}</td>
                        <td>{{team.team_scores.score_4}}</td>
                        <td>{{team.team_scores.score_5}}</td>
                        <td>{{team.team_scores.score_6}}</td>
                        <td>{{team.team_scores.score_7}}</td>
                        <td>{{team.team_scores.score_8}}</td>
                        <td>{{team.team_scores.score_9}}</td>
                        <td>{{team.team_scores.score_10}}</td>
                        <td>{{team.team_scores.score_11}}</td>
                        <td>{{team.team_scores.score_12}}</td>
                        <td>{{team.team_scores.score_13}}</td>
                        <td>{{team.team_scores.score_14}}</td>
                        <td>{{team.team_scores.score_15}}</td>
                        <td>{{team.team_scores.score_16}}</td>
                        <td>{{team.team_scores.score_17}}</td>
                        <td>{{team.team_scores.score_18}}</td>
                        <td>{{match.team_1_score}}</td>
                      </tr>
                      <tr v-if="team.name === 'Team Blue'" class="table-secondary primary">
                        <th class="text-primary" scope="row" id="team-red">{{team.name}}</th>
                        <td>{{team.team_scores.score_1}}</td>
                        <td>{{team.team_scores.score_2}}</td>
                        <td>{{team.team_scores.score_3}}</td>
                        <td>{{team.team_scores.score_4}}</td>
                        <td>{{team.team_scores.score_5}}</td>
                        <td>{{team.team_scores.score_6}}</td>
                        <td>{{team.team_scores.score_7}}</td>
                        <td>{{team.team_scores.score_8}}</td>
                        <td>{{team.team_scores.score_9}}</td>
                        <td>{{team.team_scores.score_10}}</td>
                        <td>{{team.team_scores.score_11}}</td>
                        <td>{{team.team_scores.score_12}}</td>
                        <td>{{team.team_scores.score_13}}</td>
                        <td>{{team.team_scores.score_14}}</td>
                        <td>{{team.team_scores.score_15}}</td>
                        <td>{{team.team_scores.score_16}}</td>
                        <td>{{team.team_scores.score_17}}</td>
                        <td>{{team.team_scores.score_18}}</td>
                        <td>{{match.team_2_score}}</td>
                      </tr>
                      
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>


      <!-- Course Info Card -->
      <div class="container">
        <div class="panel panel-black">
          <div class="panel-heading">
            <router-link :to="'/rounds/' + round.id + '/edit'" class="text-light">
              <h3><i class="zmdi zmdi-hc-2x zmdi-edit"></i> <b>{{round.name}}</b></h3>
            </router-link>
          </div>
          <div class="panel-body">
            <div>
              <table class="table table-hover active">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">{{course.name}}</th>
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
                  <tr class="table-secondary">
                    <th scope="row">HDCP</th>
                    <td>{{handicaps[0]}}</td>
                    <td>{{handicaps[1]}}</td>
                    <td>{{handicaps[2]}}</td>
                    <td>{{handicaps[3]}}</td>
                    <td>{{handicaps[4]}}</td>
                    <td>{{handicaps[5]}}</td>
                    <td>{{handicaps[6]}}</td>
                    <td>{{handicaps[7]}}</td>
                    <td>{{handicaps[8]}}</td>
                    <td>{{handicaps[9]}}</td>
                    <td>{{handicaps[10]}}</td>
                    <td>{{handicaps[11]}}</td>
                    <td>{{handicaps[12]}}</td>
                    <td>{{handicaps[13]}}</td>
                    <td>{{handicaps[14]}}</td>
                    <td>{{handicaps[15]}}</td>
                    <td>{{handicaps[16]}}</td>
                    <td>{{handicaps[17]}}</td>
                    
                    
                  </tr>
                  <tr class="table-secondary">
                    <th scope="row">PAR</th>
                    <td>{{pars[0]}}</td>
                    <td>{{pars[1]}}</td>
                    <td>{{pars[2]}}</td>
                    <td>{{pars[3]}}</td>
                    <td>{{pars[4]}}</td>
                    <td>{{pars[5]}}</td>
                    <td>{{pars[6]}}</td>
                    <td>{{pars[7]}}</td>
                    <td>{{pars[8]}}</td>
                    <td>{{pars[9]}}</td>
                    <td>{{pars[10]}}</td>
                    <td>{{pars[11]}}</td>
                    <td>{{pars[12]}}</td>
                    <td>{{pars[13]}}</td>
                    <td>{{pars[14]}}</td>
                    <td>{{pars[15]}}</td>
                    <td>{{pars[16]}}</td>
                    <td>{{pars[17]}}</td>
                    
                    
                  </tr>                  
                </tbody>
              </table>
            </div>       
          </div>
          <div class="panel-footer">
            <div>
               
            </div>
           
            <div>
              <h3 class="text-dark">
                <a href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#courseAdd">
                
                  <button class="btn btn-black btn-raised">
                    <i class="color-dark-light zmdi zmdi-hc-lg zmdi-pin mr-1"> Course Location</i>
                    <!-- See Course Location -->
                  </button>
                
                </a>
                <a href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#courseEdit">
               
                  <button class="btn btn-black btn-raised">
                    <i class="zmdi zmdi-hc-lg zmdi-edit">
                      Edit Course Info
                    </i>
                  </button>
               
                </a>
                
              </h3>
            </div>
            
          </div>
        </div>
      </div>
<br>

      

<br>

      <!-- Match Score Cards -->
      <div class="container">
        <div >
          <div class="col-xs-1">
            <h3 class="text-center">
              <strong>Matches </strong>
            </h3>
            <h3 class="text-center">  
              <a href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#matchScores">
                <button class="btn btn-white btn-raised">
                  <i class="color-dark-light zmdi-eye zmdi zmdi-hc-lg "> Box Scores</i>
                  <!-- See Course Location -->
                </button>
              </a>
              <router-link :to="'/matches/' + this.round.id + '/new'">
                <button class="btn btn-raised btn-white">
                  <i class="zmdi zmdi-hc-lg text-dark zmdi-plus-circle"> Add Match</i>
                </button>
              </router-link>
            </h3>
            <div  class="card">
              <div  class="row">

                <div v-bind:key="match.id" v-for="match in matches" class="col-lg-6">
                  <div class="panel-heading">
                    <span class="">
                      <!-- <strong><h3 class="text-danger">{{match.teams[0].players[0].name}} and {{match.teams[0].players[1].name}}</h3> <h3 class="text-primary">{{match.teams[1].players[0].name}} and {{match.teams[1].players[1].name}}</h3></strong> -->
                    </span>
                    
                  </div>
                  
                  <table class="table table-condensed table-striped">
                    <tr class="border-box border-danger">
                      <th class="">
                        <strong><h3 class="text-danger">{{match.teams[0].players[0].name}} & <br> {{match.teams[0].players[1].name}}</h3> </strong>
                      </th>
                      <th class="text-danger">
                        <strong><h3 class="text-danger">{{match.team_1_score}}</h3></strong>
                      </th>
                      
                    </tr>
                    <tr class="border-box border-primary">
                      <th>
                        <strong>
                          <h3 class="text-primary">{{match.teams[1].players[0].name}} & <br> {{match.teams[1].players[1].name}}</h3>
                        </strong>
                      </th>
                      <th>
                        <strong>
                          <h3 class="text-primary">{{match.team_2_score}}</h3>
                        </strong>
                      </th>
                      
                    </tr>
                    <!-- <div class="panel-footer "> -->
                      
                    <tr class=" text-center">  
                      <td>
                        <router-link class="btn btn-raised btn-white" :to="'/matches/' + match.id + '/edit'"><i class="zmdi zmdi-edit zmdi-hc-lg"> Update Scores</i></router-link>
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
      round: {},
      course: {},
      handicaps: [],
      pars: [],
      matches: [],
      key: "",
      errors: [],
      courseName: "",
      par1: "",
      par2: "",
      par3: "",
      par4: "",
      par5: "",
      par6: "",
      par7: "",
      par8: "",
      par9: "",
      par10: "",
      par11: "",
      par12: "",
      par13: "",
      par14: "",
      par15: "",
      par16: "",
      par17: "",
      par18: "",
      hdcp1: "",
      hdcp2: "",
      hdcp3: "",
      hdcp4: "",
      hdcp5: "",
      hdcp6: "",
      hdcp7: "",
      hdcp8: "",
      hdcp9: "",
      hdcp10: "",
      hdcp11: "",
      hdcp12: "",
      hdcp13: "",
      hdcp14: "",
      hdcp15: "",
      hdcp16: "",
      hdcp17: "",
      hdcp18: "",
    };
  },
  created: function() {
    axios.get("/api/rounds/" + this.$route.params.id ).then(response => {
      console.log("round", response.data);
      this.round = response.data;
      this.course = this.round.course;
      this.course.handicaps.forEach(handicap => {
        this.handicaps.push(handicap.value);
      })
      this.course.pars.forEach(par => {
        this.pars.push(par.value)
      })
      this.matches = this.round.matches;

    });
    axios.get("/api/courses/" + this.$route.params.id).then(response => {
      console.log(response.data);
      this.course = response.data;
    });
    this.key = process.env.VUE_APP_MAP_KEY;
  },
  methods: {
    updatePar: function(par, hole){
      
      var params = {
        hole: hole,
        par: par
      }
      axios.patch("/api/courses/" + this.course.id, params).then(response => {
        console.log("Par Update", response.data);
      })
    },
    updateHandicap: function(handicap, hole){
      
      var params = {
        hole: hole,
        handicap: handicap
      }
      axios.patch("/api/courses/" + this.course.id, params).then(response => {
        console.log("Handicap Update", response.data);
      })
    },
    submit: function() {
      var params = {
        name: this.course.name,      
      };

      axios.patch("/api/courses/" + this.course.id, params).then(response => {
        console.log(response.data);
        this.course = response.data;
        $('#courseEdit').modal('hide');
        this.location('reload');
      }).catch(error => {
        console.log(error.data);
        this.errors = error.data;
      });
    }
  }
};
</script>