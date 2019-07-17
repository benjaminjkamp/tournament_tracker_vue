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
              <iframe width="100%" height="400px" :src="'https://www.google.com/maps/embed/v1/search?key=' + key + '&q=' + course.name + course.address"></iframe>                         
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
                  <table class="table">
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
                        <td><input size="2" step="any" type="text" v-model="round.course.handicaps.hole1_handicap"></td>
                        <td><input size="2" step="any" type="text" v-model="round.course.handicaps.hole2_handicap"></td>
                        <td><input size="2" step="any" type="text" v-model="round.course.handicaps.hole3_handicap"></td>
                        <td><input size="2" step="any" type="text" v-model="round.course.handicaps.hole4_handicap"></td>
                        <td><input size="2" step="any" type="text" v-model="round.course.handicaps.hole5_handicap"></td>
                        <td><input size="2" step="any" type="text" v-model="round.course.handicaps.hole6_handicap"></td>
                        <td><input size="2" step="any" type="text" v-model="round.course.handicaps.hole7_handicap"></td>
                        <td><input size="2" step="any" type="text" v-model="round.course.handicaps.hole8_handicap"></td>
                        <td><input size="2" step="any" type="text" v-model="round.course.handicaps.hole9_handicap"></td>
                        <td><input size="2" step="any" type="text" v-model="round.course.handicaps.hole10_handicap"></td>
                        <td><input size="2" step="any" type="text" v-model="round.course.handicaps.hole11_handicap"></td>
                        <td><input size="2" step="any" type="text" v-model="round.course.handicaps.hole12_handicap"></td>
                        <td><input size="2" step="any" type="text" v-model="round.course.handicaps.hole13_handicap"></td>
                        <td><input size="2" step="any" type="text" v-model="round.course.handicaps.hole14_handicap"></td>
                        <td><input size="2" step="any" type="text" v-model="round.course.handicaps.hole15_handicap"></td>
                        <td><input size="2" step="any" type="text" v-model="round.course.handicaps.hole16_handicap"></td>
                        <td><input size="2" step="any" type="text" v-model="round.course.handicaps.hole17_handicap"></td>
                        <td><input size="2" step="any" type="text" v-model="round.course.handicaps.hole18_handicap"></td>
                        
                      </tr>
                      <tr class="table-secondary">
                        <th scope="row">Pars</th>
                        <td><input size="2" step="any" type="text" v-model="round.course.pars.hole1_par"></td>
                        <td><input size="2" step="any" type="text" v-model="round.course.pars.hole2_par"></td>
                        <td><input size="2" step="any" type="text" v-model="round.course.pars.hole3_par"></td>
                        <td><input size="2" step="any" type="text" v-model="round.course.pars.hole4_par"></td>
                        <td><input size="2" step="any" type="text" v-model="round.course.pars.hole5_par"></td>
                        <td><input size="2" step="any" type="text" v-model="round.course.pars.hole6_par"></td>
                        <td><input size="2" step="any" type="text" v-model="round.course.pars.hole7_par"></td>
                        <td><input size="2" step="any" type="text" v-model="round.course.pars.hole8_par"></td>
                        <td><input size="2" step="any" type="text" v-model="round.course.pars.hole9_par"></td>
                        <td><input size="2" step="any" type="text" v-model="round.course.pars.hole10_par"></td>
                        <td><input size="2" step="any" type="text" v-model="round.course.pars.hole11_par"></td>
                        <td><input size="2" step="any" type="text" v-model="round.course.pars.hole12_par"></td>
                        <td><input size="2" step="any" type="text" v-model="round.course.pars.hole13_par"></td>
                        <td><input size="2" step="any" type="text" v-model="round.course.pars.hole14_par"></td>
                        <td><input size="2" step="any" type="text" v-model="round.course.pars.hole15_par"></td>
                        <td><input size="2" step="any" type="text" v-model="round.course.pars.hole16_par"></td>
                        <td><input size="2" step="any" type="text" v-model="round.course.pars.hole17_par"></td>
                        <td><input size="2" step="any" type="text" v-model="round.course.pars.hole18_par"></td>
                        
                        
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
              <div v-for="match in matches">
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
                      </tr>
                    </thead>
                    <tbody v-for="team in match.teams" class="table-hover">
                      <tr v-if="team.name === 'Team Red'" class="table-secondary danger">
                        <th class="text-danger" scope="row">{{team.name}}</th>
                        <td>{{team.scores.score_1}}</td>
                        <td>{{team.scores.score_2}}</td>
                        <td>{{team.scores.score_3}}</td>
                        <td>{{team.scores.score_4}}</td>
                        <td>{{team.scores.score_5}}</td>
                        <td>{{team.scores.score_6}}</td>
                        <td>{{team.scores.score_7}}</td>
                        <td>{{team.scores.score_8}}</td>
                        <td>{{team.scores.score_9}}</td>
                        <td>{{team.scores.score_10}}</td>
                        <td>{{team.scores.score_11}}</td>
                        <td>{{team.scores.score_12}}</td>
                        <td>{{team.scores.score_13}}</td>
                        <td>{{team.scores.score_14}}</td>
                        <td>{{team.scores.score_15}}</td>
                        <td>{{team.scores.score_16}}</td>
                        <td>{{team.scores.score_17}}</td>
                        <td>{{team.scores.score_18}}</td>
                      </tr>
                      <tr v-if="team.name === 'Team Blue'" class="table-secondary primary">
                        <th class="text-primary" scope="row" id="team-red">{{team.name}}</th>
                        <td>{{team.scores.score_1}}</td>
                        <td>{{team.scores.score_2}}</td>
                        <td>{{team.scores.score_3}}</td>
                        <td>{{team.scores.score_4}}</td>
                        <td>{{team.scores.score_5}}</td>
                        <td>{{team.scores.score_6}}</td>
                        <td>{{team.scores.score_7}}</td>
                        <td>{{team.scores.score_8}}</td>
                        <td>{{team.scores.score_9}}</td>
                        <td>{{team.scores.score_10}}</td>
                        <td>{{team.scores.score_11}}</td>
                        <td>{{team.scores.score_12}}</td>
                        <td>{{team.scores.score_13}}</td>
                        <td>{{team.scores.score_14}}</td>
                        <td>{{team.scores.score_15}}</td>
                        <td>{{team.scores.score_16}}</td>
                        <td>{{team.scores.score_17}}</td>
                        <td>{{team.scores.score_18}}</td>
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
                    <td>{{handicaps.hole1_handicap}}</td>
                    <td>{{handicaps.hole2_handicap}}</td>
                    <td>{{handicaps.hole3_handicap}}</td>
                    <td>{{handicaps.hole4_handicap}}</td>
                    <td>{{handicaps.hole5_handicap}}</td>
                    <td>{{handicaps.hole6_handicap}}</td>
                    <td>{{handicaps.hole7_handicap}}</td>
                    <td>{{handicaps.hole8_handicap}}</td>
                    <td>{{handicaps.hole9_handicap}}</td>
                    <td>{{handicaps.hole10_handicap}}</td>
                    <td>{{handicaps.hole11_handicap}}</td>
                    <td>{{handicaps.hole12_handicap}}</td>
                    <td>{{handicaps.hole13_handicap}}</td>
                    <td>{{handicaps.hole14_handicap}}</td>
                    <td>{{handicaps.hole15_handicap}}</td>
                    <td>{{handicaps.hole16_handicap}}</td>
                    <td>{{handicaps.hole17_handicap}}</td>
                    <td>{{handicaps.hole18_handicap}}</td>
                    
                    
                  </tr>
                  <tr class="table-secondary">
                    <th scope="row">PAR</th>
                    <td>{{pars.hole1_par}}</td>
                    <td>{{pars.hole2_par}}</td>
                    <td>{{pars.hole3_par}}</td>
                    <td>{{pars.hole4_par}}</td>
                    <td>{{pars.hole5_par}}</td>
                    <td>{{pars.hole6_par}}</td>
                    <td>{{pars.hole7_par}}</td>
                    <td>{{pars.hole8_par}}</td>
                    <td>{{pars.hole9_par}}</td>
                    <td>{{pars.hole10_par}}</td>
                    <td>{{pars.hole11_par}}</td>
                    <td>{{pars.hole12_par}}</td>
                    <td>{{pars.hole13_par}}</td>
                    <td>{{pars.hole14_par}}</td>
                    <td>{{pars.hole15_par}}</td>
                    <td>{{pars.hole16_par}}</td>
                    <td>{{pars.hole17_par}}</td>
                    <td>{{pars.hole18_par}}</td>
                    
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

                <div v-for="match in matches" class="col-lg-6">
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
      handicaps: {},
      pars: {},
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
      this.handicaps = this.course.handicaps;
      this.pars = this.course.pars;
      this.matches = this.round.matches;

    });
    axios.get("/api/courses/" + this.$route.params.id).then(response => {
      console.log(response.data);
      this.course = response.data;
    });
    this.key = process.env.VUE_APP_MAP_KEY;
  },
  methods: {
    submit: function() {
      var params = {
        name: this.course.name,
        par_hole_1: this.course.pars.hole1_par,
        par_hole_2: this.course.pars.hole2_par,
        par_hole_3: this.course.pars.hole3_par,
        par_hole_4: this.course.pars.hole4_par,
        par_hole_5: this.course.pars.hole5_par,
        par_hole_6: this.course.pars.hole6_par,
        par_hole_7: this.course.pars.hole7_par,
        par_hole_8: this.course.pars.hole8_par,
        par_hole_9: this.course.pars.hole9_par,
        par_hole_10: this.course.pars.hole10_par,
        par_hole_11: this.course.pars.hole11_par,
        par_hole_12: this.course.pars.hole12_par,
        par_hole_13: this.course.pars.hole13_par,
        par_hole_14: this.course.pars.hole14_par,
        par_hole_15: this.course.pars.hole15_par,
        par_hole_16: this.course.pars.hole16_par,
        par_hole_17: this.course.pars.hole17_par,
        par_hole_18: this.course.pars.hole18_par,
        hdcp_hole_1: this.course.handicaps.hole1_handicap,
        hdcp_hole_2: this.course.handicaps.hole2_handicap,
        hdcp_hole_3: this.course.handicaps.hole3_handicap,
        hdcp_hole_4: this.course.handicaps.hole4_handicap,
        hdcp_hole_5: this.course.handicaps.hole5_handicap,
        hdcp_hole_6: this.course.handicaps.hole6_handicap,
        hdcp_hole_7: this.course.handicaps.hole7_handicap,
        hdcp_hole_8: this.course.handicaps.hole8_handicap,
        hdcp_hole_9: this.course.handicaps.hole9_handicap,
        hdcp_hole_10: this.course.handicaps.hole10_handicap,
        hdcp_hole_11: this.course.handicaps.hole11_handicap,
        hdcp_hole_12: this.course.handicaps.hole12_handicap,
        hdcp_hole_13: this.course.handicaps.hole13_handicap,
        hdcp_hole_14: this.course.handicaps.hole14_handicap,
        hdcp_hole_15: this.course.handicaps.hole15_handicap,
        hdcp_hole_16: this.course.handicaps.hole16_handicap,
        hdcp_hole_17: this.course.handicaps.hole17_handicap,
        hdcp_hole_18: this.course.handicaps.hole18_handicap
        
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