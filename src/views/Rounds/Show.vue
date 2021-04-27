<template>
  <div class="rounds-show">
    <div class="ms-site-container">

      <!-- Course Location Modal -->
      <div class="modal modal-light modal-xl" id="courseAdd" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg modal-dialog-centered animated zoomIn animated-3x" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h2 class="modal-title color-dark">{{course.name}}</h2>

              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i class="zmdi zmdi-close"></i></span></button>
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

              <button class="btn btn-dark" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i class="zmdi zmdi-close"></i></span></button>
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

      <!-- Score Input Modal -->
      <div v-if="scores.length > 0" class="modal modal-light" id="scoreInput" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div v-if="!roundFinalized" class="modal-dialog modal-md modal-dialog-centered animated zoomIn animated-3x" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h2 class="modal-title color-dark">{{this.user.name}}'s Scorecard</h2>

              <button type="button" class="btn-dark close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i class="zmdi zmdi-close"></i></span></button>
            </div>
            
            <div class="modal-body">
              <div class="table-responsive">
                <form v-on:submit.prevent="userScores()">
                  <table class="table text-center table-bordered">
                    <thead class="thead-dark">
                      <tr>
                        <th scope="col">Hole</th>
                        <th scope="col">Score</th>
                        <th scope="col">Net Score</th>
                        
                      </tr>
                    </thead>
                    <tbody v-if="page === 1">
                      <tr class=" table-secondary">
                        <th scope="row">1</th>
                        <td><input @blur="updateScore(scores[0], 0)" size="2" step="any" type="text" v-model="scores[0].score"></td>     
                        <th scope="row">{{scores[0].net_score}}</th>                 
                      </tr>
                      <tr class="">
                        <th scope="row">2</th>
                        <td><input @blur="updateScore(scores[1], 1)" size="2" step="any" type="text" v-model="scores[1].score""></td>
                        <th scope="row">{{scores[1].net_score}}</th>
                      </tr>
                      <tr class=" table-secondary">
                        <th scope="row">3</th>
                        <td><input @blur="updateScore(scores[2], 2)" size="2" step="any" type="text" v-model="scores[2].score"></td>  
                        <th scope="row">{{scores[2].net_score}}</th>                    
                      </tr>
                      <tr class=" table-striped">
                        <th scope="row">4</th>
                        <td><input @blur="updateScore(scores[3], 3)" size="2" step="any" type="text" v-model="scores[3].score"></td>  
                        <th scope="row">{{scores[3].net_score}}</th>                    
                      </tr>
                      <tr class=" table-secondary">
                        <th scope="row">5</th>
                        <td><input @blur="updateScore(scores[4], 4)" size="2" step="any" type="text" v-model="scores[4].score"></td>  
                        <th scope="row">{{scores[4].net_score}}</th>                    
                      </tr>    
                      <tr class=" table-striped">
                        <th scope="row">6</th>
                        <td><input @blur="updateScore(scores[5], 5)" size="2" step="any" type="text" v-model="scores[5].score"></td>  
                        <th scope="row">{{scores[5].net_score}}</th>                    
                      </tr>
                      <tr class=" table-secondary">
                        <th scope="row">7</th>
                        <td><input @blur="updateScore(scores[6], 6)" size="2" step="any" type="text" v-model="scores[6].score"></td>  
                        <th scope="row">{{scores[6].net_score}}</th>                    
                      </tr>   
                      <tr class=" table-striped">
                        <th scope="row">8</th>
                        <td><input @blur="updateScore(scores[7], 7)" size="2" step="any" type="text" v-model="scores[7].score"></td>  
                        <th scope="row">{{scores[7].net_score}}</th>                    
                      </tr>
                      <tr class=" table-secondary">
                        <th scope="row">9</th>
                        <td><input @blur="updateScore(scores[8], 8)" size="2" step="any" type="text" v-model="scores[8].score"></td>  
                        <th scope="row">{{scores[8].net_score}}</th>                    
                      </tr>   
                    </tbody>
                    <tbody v-if="page === 2">
                      <tr class=" table-secondary">
                        <th scope="row">10</th>
                        <td><input @blur="updateScore(scores[9], 9)" size="2" step="any" type="text" v-model="scores[9].score"></td>     
                        <th scope="row">{{scores[9].net_score}}</th>                 
                      </tr>
                      <tr class="">
                        <th scope="row">11</th>
                        <td><input @blur="updateScore(scores[10], 10)" size="2" step="any" type="text" v-model="scores[10].score"></td>
                        <th scope="row">{{scores[10].net_score}}</th>
                      </tr>
                      <tr class=" table-secondary">
                        <th scope="row">12</th>
                        <td><input @blur="updateScore(scores[11], 11)" size="2" step="any" type="text" v-model="scores[11].score"></td>  
                        <th scope="row">{{scores[11].net_score}}</th>                    
                      </tr>
                      <tr class=" table-striped">
                        <th scope="row">13</th>
                        <td><input @blur="updateScore(scores[12], 12)" size="2" step="any" type="text" v-model="scores[12].score"></td>  
                        <th scope="row">{{scores[12].net_score}}</th>                    
                      </tr>
                      <tr class=" table-secondary">
                        <th scope="row">14</th>
                        <td><input @blur="updateScore(scores[13], 13)" size="2" step="any" type="text" v-model="scores[13].score"></td>  
                        <th scope="row">{{scores[13].net_score}}</th>                    
                      </tr>    
                      <tr class=" table-striped">
                        <th scope="row">15</th>
                        <td><input @blur="updateScore(scores[14], 14)" size="2" step="any" type="text" v-model="scores[14].score"></td>  
                        <th scope="row">{{scores[14].net_score}}</th>                    
                      </tr>
                      <tr class=" table-secondary">
                        <th scope="row">16</th>
                        <td><input @blur="updateScore(scores[15], 15)" size="2" step="any" type="text" v-model="scores[15].score"></td>  
                        <th scope="row">{{scores[15].net_score}}</th>                    
                      </tr>   
                      <tr class=" table-striped">
                        <th scope="row">17</th>
                        <td><input @blur="updateScore(scores[16], 16)" size="2" step="any" type="text" v-model="scores[16].score"></td>  
                        <th scope="row">{{scores[16].net_score}}</th>                    
                      </tr>
                      <tr class=" table-secondary">
                        <th scope="row">18</th>
                        <td><input @blur="updateScore(scores[17], 17)" size="2" step="any" type="text" v-model="scores[17].score"></td>  
                        <th scope="row">{{scores[17].net_score}}</th>                    
                      </tr>   
                    </tbody>
                  </table>
                  <nav aria-label="Page navigation">
                      <ul class="pagination pagination-square pagination-dark"">
                          <li class="page-item">
                            <a v-on:click="setPage(1)" class="page-link" href="javascript:void(0)" aria-label="Previous">
                              <span aria-hidden="true"><<</span>
                            </a>
                          </li>
                          <li v-if="page === 1" class="page-item active">
                            <a v-on:click="setPage(1)" class="page-link" href="javascript:void(0)">
                              <span aria-hidden="true">1</span>
                            </a>
                          </li>
                          <li v-if="page === 2" class="page-item">
                            <a v-on:click="setPage(1)" class="page-link" href="javascript:void(0)">
                              <span aria-hidden="true">1</span>
                            </a>
                          </li>
                          <li v-if="page === 2" v-on:click="setPage(2)" class="page-item active">
                            <a class="page-link" href="javascript:void(0)">
                              <span aria-hidden="true">2</span>
                            </a>
                          </li>
                          <li v-if="page === 1" v-on:click="setPage(2)" class="page-item">
                            <a class="page-link" href="javascript:void(0)">
                              <span aria-hidden="true">2</span>
                            </a>
                          </li>
                          <li v-on:click="setPage(2)" class="page-item inactive">
                            <a class="page-link" href="javascript:void(0)" aria-label="Next">
                              <span aria-hidden="true">>></span>
                            </a>
                          </li>
                      </ul>
                  </nav>
                  <button type="submit">Update Scores</button>
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>


      <!-- Non-Scramble match box scores modal -->
        <div v-if="round.format !== 'Scramble'" class="modal modal-light" id="matchScores" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div class="modal-dialog modal-xl modal-dialog-centered animated zoomIn animated-3x col-lg-3" role="document">
            <div class="modal-content">
              <button type="button" class="btn-danger zmdi zmdi-close" data-dismiss="modal" aria-label="Close">
                <span ></span>
              </button>
              <div v-bind:key="match" v-for="match in matches">
                <div class="modal-header">
                  <!-- <h2 class="modal-title color-dark">{{course.name}}</h2> -->
                  <h2 class="modal-title color-dark">
                    <span class="text-danger">{{match.teams[0].players[0].name}}  
                      <span v-if="match.teams[0].players[1]">and {{match.teams[0].players[1].name}}
                      </span>
                    </span> 
                    Vs. 
                    <span class="text-primary">
                      {{match.teams[1].players[0].name}} 
                        <span v-if="match.teams[1].players[1]">and {{match.teams[1].players[1].name}}</span>
                    </span>
                  </h2>
                  
                </div>
                
                <div id="matchScoresOverflow" class="modal-body">
                  
                  <table  class="table table-condensed">
                    <thead class="thead-dark">
                      <tr>
                        <th scope="col" class="background-primary"></th>
                        <th scope="col" v-for="hole in holes">
                          <!-- <span class="color-danger" v-if="match.teams[0].team_scores.score_1 < match.teams[1].team_scores.score_1">{{hole}}</span> -->
                          <!-- <span class="color-primary" v-if="match.teams[0].team_scores.score_1 > match.teams[1].team_scores.score_1">{{hole}}</span> -->
                         
                          <td class="border-box color-danger text-center" v-if="compareScores(hole, match) == 1">{{hole}}</td>
                          <td class="border-box color-primary" v-if="compareScores(hole, match) == 2">{{hole}}</td>
                          <td class="border-box color-royal" v-if="compareScores(hole, match) == 3">{{hole}}</td>
                          
                        </th>
                        
                        <th scope="col"><td class="color-inverse">Total</td></th>
                      </tr>
                    </thead>
                    <tbody v-bind:key="team" v-for="team in match.teams" class="table-hover">
                      <tr v-if="team.name === 'Team Red'" >

                        <th class="text-danger" scope="row">{{team.name}}</th>
                        <th v-for="hole in holes" class="">
                          <td v-if="compareScores(hole, match) == 1" class="border-box text-danger">{{getScore(hole, team)}}</td>
                          <td v-if="compareScores(hole, match) != 1" class="">{{getScore(hole, team)}}</td>
                          
         <!--                  <td v-if="compareScores(hole, match) == 2" class="">{{team1Scores[hole-1]}}</td>
                          <td v-if="compareScores(hole, match) == 3" class="">{{team1Scores[hole-1]}}</td> -->
                          
                        </th>
                        <th class="color-danger-inverse">{{match.team_1_score}}</th>
                      </tr>
                      <tr v-if="team.name === 'Team Blue'" class="">
                        <th class="text-primary" scope="row" id="team-red">{{team.name}}</th>
                        <th v-for="hole in holes" class="">
                          <td v-if="compareScores(hole, match) == 2" class="border-box text-primary">{{getScore(hole, team)}}</td>
                          <td v-if="compareScores(hole, match) != 2" class="">{{getScore(hole, team)}}</td>
                          
                        </th>
                        <th class="color-info-inverse">{{match.team_2_score}}</th>
                      </tr>
                      
                    </tbody>
                  </table>
                </div>
                <div>
               
                </div>


              </div>
            </div>
          </div>
        </div>

        <!-- Scramble match box scores modal -->
          <div v-if="round.format === 'Scramble'" class="modal modal-light" id="matchScores" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog modal-xl modal-dialog-centered animated zoomIn animated-3x" role="document">
              <div class="modal-content">
                <div v-bind:key="match" v-for="match in matches">
                  <div class="modal-header">
                    <!-- <h2 class="modal-title color-dark">{{course.name}}</h2> -->
                    
                    <button type="button" class="btn-dark close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i class="zmdi zmdi-close"></i></span></button>
                  </div>
                  
                  <div class="modal-body">
                    
                    <table class="table table-condensed">
                      <thead class="thead-dark">
                        <tr>
                          <th scope="col"></th>
                          <!-- <th scope="col" v-for="hole in holes"><span class="color-primary" v-if="match.teams[0].team_scores.score_1 > match.teams[1].team_scores.score_1">{{hole}}</span></th> -->
                          
                    
                          <th scope="col">Total</th>
                        </tr>
                      </thead>
                      <tbody v-bind:key="team" v-for="team in match.teams" class="table-hover">
                        <tr  class="table-secondary danger">
                          <!-- <th class="text-danger" scope="row">{{team.name}}</th> -->
                          <th></th>
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
            <!-- <div class="card"> -->
                  
              <!-- <div class="card-tabs"> -->
                <ul class="nav nav-tabs nav-tabs-dark" role="tablist">
                  
                  <li v-if="isAdmin()" class="av-item">
                    
                    <button class="btn btn-success btn-raised">
                      <router-link :to="'/rounds/' + round.id + '/edit'">
                        <i class="zmdi zmdi-hc-2x zmdi-edit"></i> 
                        <strong class="text-white">{{round.name}}</strong>
                      </router-link> 
                    </button>
                    
                    
                  </li>

                  <h2 class="color-success-inverse" v-if="!isAdmin()">
                    <strong class="text-white">{{round.name}}</strong>
                  </h2>
                
                  <li class="col-lg-6"></li>
                  <li v-if="isAdmin()" class="av-item">
                    <button v-if="!roundFinalized" v-on:click="finalizeRound()" class="btn btn-success btn-raised">
                      <i class="zmdi zmdi-hc-2x zmdi-cloud-done"></i>
                      <strong>Finalize Round</strong>
                    </button>
                  </li>
                  <li v-if="isCommissioner()" class="av-item">
                    <button v-if="roundFinalized" v-on:click="reopenRound()" class="btn btn-success btn-raised">
                      <i class="zmdi zmdi-hc-2x zmdi-cloud-done"></i>
                      <strong>Reopen Round</strong>
                    </button>
                  </li>
                  
                </ul>
              <!-- </div> -->
            <!-- </div> -->
           <!--  <router-link v-if="isAdmin()" :to="'/rounds/' + round.id + '/edit'" class="text-light">
              <h3><i class="zmdi zmdi-hc-2x zmdi-edit"></i> <span class="col-lg-3"><b>{{round.name}}</b></span> <span class="col-lg-9"></span> <button class="btn btn-white btn-raised">hi</button></h3>
              <h3 class="col-lg-3"></h3>
              
            </router-link>
            <div class="text-light" v-else>
              <h3 class="col-lg-3"> <b>{{round.name}}</b></h3>
              
            </div> -->
           
          </div>

          <div class="panel-body">
            <div id="courseInfoCard" >
              <h2 class="color-success-inverse"><strong>{{course.name}}</strong></h2>
              <table class="table table-hover active">

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
                  <tr class="table-secondary">
                    <th scope="row">HDCP</th>
                    <td><strong>{{handicaps[0]}}</strong></td>
                    <td><strong>{{handicaps[1]}}</strong></td>
                    <td><strong>{{handicaps[2]}}</strong></td>
                    <td><strong>{{handicaps[3]}}</strong></td>
                    <td><strong>{{handicaps[4]}}</strong></td>
                    <td><strong>{{handicaps[5]}}</strong></td>
                    <td><strong>{{handicaps[6]}}</strong></td>
                    <td><strong>{{handicaps[7]}}</strong></td>
                    <td><strong>{{handicaps[8]}}</strong></td>
                    <td><strong>{{handicaps[9]}}</strong></td>
                    <td><strong>{{handicaps[10]}}</strong></td>
                    <td><strong>{{handicaps[11]}}</strong></td>
                    <td><strong>{{handicaps[12]}}</strong></td>
                    <td><strong>{{handicaps[13]}}</strong></td>
                    <td><strong>{{handicaps[14]}}</strong></td>
                    <td><strong>{{handicaps[15]}}</strong></td>
                    <td><strong>{{handicaps[16]}}</strong></td>
                    <td><strong>{{handicaps[17]}}</strong></td>
                    
                    
                  </tr>
                  <tr class="table-secondary">
                    <th scope="row">PAR</th>
                    <td><strong>{{pars[0]}}</strong></td>
                    <td><strong>{{pars[1]}}</strong></td>
                    <td><strong>{{pars[2]}}</strong></td>
                    <td><strong>{{pars[3]}}</strong></td>
                    <td><strong>{{pars[4]}}</strong></td>
                    <td><strong>{{pars[5]}}</strong></td>
                    <td><strong>{{pars[6]}}</strong></td>
                    <td><strong>{{pars[7]}}</strong></td>
                    <td><strong>{{pars[8]}}</strong></td>
                    <td><strong>{{pars[9]}}</strong></td>
                    <td><strong>{{pars[10]}}</strong></td>
                    <td><strong>{{pars[11]}}</strong></td>
                    <td><strong>{{pars[12]}}</strong></td>
                    <td><strong>{{pars[13]}}</strong></td>
                    <td><strong>{{pars[14]}}</strong></td>
                    <td><strong>{{pars[15]}}</strong></td>
                    <td><strong>{{pars[16]}}</strong></td>
                    <td><strong>{{pars[17]}}</strong></td>
                    
                    
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
                
                  <button class="btn btn-white btn-raised">
                    <i class="color-dark-light zmdi zmdi-hc-lg zmdi-pin mr-1"> <strong> Course Location</strong></i>
                    <!-- See Course Location -->
                  </button>
                
                </a>
                <a v-if="isAdmin()" href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#courseEdit">
               
                  <button v-if="!roundFinalized" class="btn btn-white btn-raised">
                    <i class="zmdi zmdi-hc-lg zmdi-edit">
                      <strong> Edit Course Info</strong>
                    </i>
                  </button>
               
                </a>

                <br>
                <a v-if="scoreInputAvailable" href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#scoreInput">
                
                  <button v-if="!roundFinalized" class="btn btn-white btn-raised">
                    <i class="zmdi zmdi-grid zmdi-hc-lg">
                      Score Input
                    </i>
                  </button>
                
                </a>
                
              </h3>
             
            </div>
            
          </div>
        </div>
      </div>
      <br>


      <div >
        <div v-if="matches.length == 0">
          <h1 v-if="!isAdmin()" class="text-center border-box">
            <strong  class="text-danger">No matches have been setup for this round yet.<br>Please check back later.</strong>
          </h1>
          <h3 class="text-center">
            <router-link v-if="isAdmin()" :to="'/matches/' + round.id + '/new'">
              <button v-if="!roundFinalized" class="btn btn-raised btn-white">
                <i class="zmdi zmdi-hc-lg text-dark zmdi-plus-circle"> Add Match</i>
              </button>
            </router-link>
          </h3>
        </div>        
        <div v-if="matches.length > 0"  class="col-xs-1">
          <h2 class="text-center">
            <strong class="border color-success-inverse">Matches</strong><br><br>
          </h2>
          <h3 class="text-center">  
            <a href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#matchScores">
              <button class="btn btn-white btn-raised">
                <i class="color-dark-light zmdi-eye zmdi zmdi-hc-lg "> Box Scores</i>
                <!-- See Course Location -->
              </button>
            </a>
            <router-link v-if="isAdmin()" :to="'/matches/' + round.id + '/new'">
              <button v-if="!roundFinalized" class="btn btn-raised btn-white">
                <i class="zmdi zmdi-hc-lg text-dark zmdi-plus-circle"> Add Match</i>
              </button>
            </router-link>
          </h3>
          <ScorecardScramble v-if="format === 'Scramble'" :round="round" :roundFinalized="roundFinalized" :scores="scores" :netScores="netScores" :matches="matches" :parTotal="parTotal" :user="user" :scorecardKey="scorecardKey" @isAdmin="isAdmin()" @refreshRound="refreshRound()"/>
          <ScorecardNotScramble v-if="format !== 'Scramble'" :round="round" :roundFinalized="roundFinalized" :scores="scores" :netScores="netScores" :matches="matches" :parTotal="parTotal" :user="user" :scorecardKey="scorecardKey" @isAdmin="isAdmin()" @refreshRound="refreshRound()"/>
        </div>
      </div>
      <!-- <div v-if="round.format === 'Scramble'">
        <ScorecardScramble :round="round" :roundFinalized="roundFinalized" :scores="scores" :netScores="netScores" :matches="matches" :parTotal="parTotal" :user="user" :scorecardKey="scorecardKey" @isAdmin="isAdmin()" @refreshRound="refreshRound()"/>
      </div>
      <div v-if="round.format !== 'Scramble'">
        <ScorecardNotScramble :round="round" :roundFinalized="roundFinalized" :scores="scores" :netScores="netScores" :matches="matches" :parTotal="parTotal" :user="user" :scorecardKey="scorecardKey" @isAdmin="isAdmin()" @refreshRound="refreshRound()"/> -->






     
    </div>

  </div>
</template>

<style>
#matchScoresOverflow, #courseInfoCard {
  overflow: scroll;
  /*max-height: 780px;*/
  /*max-width: 800px;*/
}
</style>

<script>
import axios from "axios";
import ScorecardScramble from "../../components/ScorecardScramble.vue";
import ScorecardNotScramble from "../../components/ScorecardNotScramble.vue";
export default {
  components: {
    ScorecardScramble,
    ScorecardNotScramble
  },
  data: function() {
    return {
      page: 1,
      round: {},
      match: {},
      user: {},
      course: {},
      handicaps: [],
      pars: [],
      matches: [],
      scores: [],
      netScores: [],
      holes: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
   
      teamScores: [],
      arrayOfTeamScores: [],
      key: "",
      errors: [],
      parTotal: 0,
      format: "",
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
      componentKey: 0,
      scorecardKey: 0,
      scoreInputAvailable: false,
      roundFinalized: false
      
    };
  },
  created: function() {
    axios.get("/api/rounds/" + this.$route.params.id ).then(response => {
      console.log("round", response.data);
      this.round = response.data;
      this.format = this.round.format;
      this.course = this.round.course;
      this.roundFinalized = this.round.finalized;
      // this.roundFinalized = this.round.finalized;

      console.log(this.course);
      this.course.handicaps.forEach(handicap => {
        this.handicaps.push(handicap.value);
      })
      this.course.pars.forEach(par => {
        this.pars.push(par.value);
        this.parTotal = this.parTotal + par.value;
      })
      this.matches = this.round.matches;
      console.log(this.matches);

      var teamScoresCurrent = [];
      var teamIndex = 0;
      for (let match of this.matches){
        console.log("match", match);
        for (let team of match.teams){
          console.log("team", team);
          for (let score of team.scores){
            //console.log("scores", score);
            if (score.user_id === this.user.id){
              this.scores.push(score);
              this.netScores.push(score.net_score);
            }
          }
          console.log("team", team);
          console.log("user", this.user);
          for (let player of team.players){
            if (player.id === this.user.id){
              this.match = match;
            //console.log("Current User's Match", this.match);
            }
          }
          this.teamScores.push(Object.values(team.team_scores));
          
          
          teamIndex++;
        }
     
      }
      if (this.scores.length > 1){
        this.scoreInputAvailable = true;
      }
      // console.log("Team Scores", this.team1Scores, this.team2Scores);
      // console.log("Logged in user's scores for this round", this.scores, this.netScores);

    });
    // axios.get("/api/courses/" + this.$route.params.id).then(response => {
    //   console.log(response.data);
    //   this.course = response.data;
    // });
    this.key = process.env.VUE_APP_MAP_KEY;

    axios.get("/api/users/me").then(response => {
      this.user = response.data;
      console.log("Current User", this.user);
    })

    
  },
  methods: {
    isCommissioner: function(){
      if (this.round.commissioner === this.$parent.currentUser.id){
        return true;
      } else {
        return false;
      }
    },
    reopenRound: function(){
      var params = {
        finalized: false
      }
      axios.patch("/api/rounds/" + this.$route.params.id, params).then(response => {
        this.roundFinalized = false;
        console.log("Reopening...", response.data);
      }).catch(error => {
        this.errors = error.response.data.errors;
      })
    },
    finalizeRound: function(){
      //This function will finalize the round, making edits no longer available and updating standings and users' records based on the included matches
      // A patch should be done to the round to set 'finalized' to true (add column to rounds table)
      // A patch should be done to all users to increase a win, loss or tie to the user's gnc record
      // A patch should be done to Tournament to add wins to each team for the format e.g. 9 wins to red team for red_team_2manbb in tournament edit
      var params = {
        finalized: true
      }
      axios.patch("/api/rounds/" + this.$route.params.id, params).then(response => {
        this.roundFinalized = true;
        console.log("Finalizing...", response.data);
      }).catch(error => {
        this.errors = error.response.data.errors;
      })
      if (this.format !== 'Scramble'){
        console.log("Adding scores to standings...");
      } else {
        console.log("Scramble doesn't matter!");
      }
      var redWins = 0;
      var blueWins = 0;
      for (let match of this.matches){
        if (this.format !== 'Scramble'){
          if (match.winner === "Team Red"){
            redWins++;
            console.log("+1 for Red");
          }
          else {
            blueWins++;
            console.log("+1 for Blue");
          }
        }
        
      }

      var paramsTournament = {
        red_team_2manbb: redWins,
        blue_team_2manbb: blueWins
      }
      console.log("tournament params", paramsTournament);

      // axios.patch("/api/tournaments/" + this.round.tournament_id, paramsTournament).then(response => {
      //   console.log("Standings Updated");

      // }).catch(error => {
      //   this.errors = error.response.data.errors;
      //   console.log("errors", error.response.data.errors);
      // })


    },
    compareScores: function(hole, match){
      var winner = "";
      //console.log("compare scores", hole, match);
      var team1Scores = Object.values(match.teams[0].team_scores);
      var team2Scores = Object.values(match.teams[1].team_scores);
      //console.log("team scores in compare scores", team1Scores, team2Scores);
      if (team1Scores[hole-1] < team2Scores[hole-1]){
        if (this.format === "Stableford"){
          winner = "2";
        }else{
          winner = "1";
        }
        
      } else if (team1Scores[hole-1] > team2Scores[hole-1]){
        if (this.format === "Stableford"){
          winner = "1";
        } else {
          winner = "2";
        }
        
      } else {
        winner = "3";
      }
      return winner;
    },
    getScore: function(hole, team){
      var teamScores = Object.values(team.team_scores);

      return teamScores[hole-1];
      
    },
    refreshRound: function() {
      axios.get("/api/rounds/" + this.$route.params.id ).then(response => {
        console.log("Refreshed Round Data", response.data);
        this.round = response.data;
        this.matches = this.round.matches;

        var teamIndex = 0;
        for (let match of this.matches){
          console.log("match", match);
          for (let team of match.teams){
            console.log("team", team);
            for (let score of team.scores){
              //console.log("scores", score);
              if (score.user_id === this.user.id){
                this.scores.push(score);
                this.netScores.push(score.net_score);
              }
            }
            console.log("team", team);
            console.log("user", this.user);
            for (let player of team.players){
              if (player.id === this.user.id){
                this.match = match;
              //console.log("Current User's Match", this.match);
              }
            }
            // if (teamIndex === 0){
            //   this.team1Scores[0]=(team.team_scores.score_1);
            //   this.team1Scores[1]=(team.team_scores.score_2);
            //   this.team1Scores[2]=(team.team_scores.score_3);
            //   this.team1Scores[3]=(team.team_scores.score_4);
            //   this.team1Scores[4]=(team.team_scores.score_5);
            //   this.team1Scores[5]=(team.team_scores.score_6);
            //   this.team1Scores[6]=(team.team_scores.score_7);
            //   this.team1Scores[7]=(team.team_scores.score_8);
            //   this.team1Scores[8]=(team.team_scores.score_9);
            //   this.team1Scores[9]=(team.team_scores.score_10);
            //   this.team1Scores[10]=(team.team_scores.score_11);
            //   this.team1Scores[11]=(team.team_scores.score_12);
            //   this.team1Scores[12]=(team.team_scores.score_13);
            //   this.team1Scores[13]=(team.team_scores.score_14);
            //   this.team1Scores[14]=(team.team_scores.score_15);
            //   this.team1Scores[15]=(team.team_scores.score_16);
            //   this.team1Scores[16]=(team.team_scores.score_17);
            //   this.team1Scores[17]=(team.team_scores.score_18);
              
            // } else {
            //   this.team2Scores[0]=(team.team_scores.score_1);
            //   this.team2Scores[1]=(team.team_scores.score_2);
            //   this.team2Scores[2]=(team.team_scores.score_3);
            //   this.team2Scores[3]=(team.team_scores.score_4);
            //   this.team2Scores[4]=(team.team_scores.score_5);
            //   this.team2Scores[5]=(team.team_scores.score_6);
            //   this.team2Scores[6]=(team.team_scores.score_7);
            //   this.team2Scores[7]=(team.team_scores.score_8);
            //   this.team2Scores[8]=(team.team_scores.score_9);
            //   this.team2Scores[9]=(team.team_scores.score_10);
            //   this.team2Scores[10]=(team.team_scores.score_11);
            //   this.team2Scores[11]=(team.team_scores.score_12);
            //   this.team2Scores[12]=(team.team_scores.score_13);
            //   this.team2Scores[13]=(team.team_scores.score_14);
            //   this.team2Scores[14]=(team.team_scores.score_15);
            //   this.team2Scores[15]=(team.team_scores.score_16);
            //   this.team2Scores[16]=(team.team_scores.score_17);
            //   this.team2Scores[17]=(team.team_scores.score_18);
            // }
            
            teamIndex++;
          }
        
        }
        // console.log("team1Scores", this.team1Scores);
        // console.log("team2Scores", this.team2Scores);
        
      }).catch(error => {
        console.log(error);
        this.errors = error;
      })
    },
    forceRerender() {
      this.componentKey += 1;
    },
    isAdmin: function(){
      if (this.user.admin){
        return true;
      } else {
        return false;
      }
    },
    setPage: function(page){
      this.page = page;
    },
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
    updateScore: function(score){
      
      
      var params = {
        score: score.score
      }
      axios.patch("/api/scores/" + score.id, params).then(response => {
        console.log("score update", response.data);
        
      }).catch(error => {
        console.log(error.response.data.errors);
        this.errors.push(error.response.data.errors);
        // if (player === 1){
        //   this.player1Scores[scoreNumber].score = this.oldScore;
        //   console.log("oldScore", this.oldScore);
        // }
  
        // ideal to have a way to revert back to original value after error.
      });
    },
    userScores: function(){
      $('#scoreInput').modal('hide');
      
      if (this.match){
        console.log(this.match);

        
      }
      var params = {};
      axios.patch("/api/matches/" + this.match.id, params).then(response => {
        console.log("match after user scores", response.data);
        
        this.match = response.data;
        this.refreshRound();

      }).catch(error => {
        console.log(error);
        this.errors = error;
        
      });
    },
    
    submit: function() {
      var params = {
        name: this.course.name,      
      };
      console.log("course", this.course);
      axios.patch("/api/courses/" + this.course.id, params).then(response => {
        console.log(response.data);
        this.course = response.data;
        $('#courseEdit').modal('hide');
        // this.location('reload');
      }).catch(error => {
        console.log(error);
        this.errors = error;
      });
    }
  }
};
</script>