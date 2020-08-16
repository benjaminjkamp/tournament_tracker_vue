<template>
  <div class="matches-edit">
    <div class="ms-site-container">
      <div class="container">
       
        <div class="col-lg-14 ms-paper-content-container">
          <div class="ms-paper-content">
            <div class="row">
              <div class="col-lg-13">
                <div class="card">
                  <div class="card-tabs">
                    <ul class="nav nav-tabs shadow-2dp" role="tablist">
                      <li class="nav-item"><a href="#strokes" aria-controls="strokes" role="tab" data-toggle="tab" class="active withoutripple nav-link "><i class="zmdi zmdi-home"></i> <span class="d-none d-sm-inline">Strokes</span></a></li>
                      <li class="nav-item"><a href="#points" aria-controls="points" role="tab" data-toggle="tab" class="withoutripple nav-link "><i class="zmdi zmdi-male"></i> <span class="d-none d-sm-inline">Points</span></a></li>
                      <!-- <li class="nav-item"><a href="#" aria-controls="points" role="tab" data-toggle="tab" class="withoutripple nav-link"> <span class="d-none d-sm-inline"><strong>{{match.teams[0].players[0].name}} & {{match.teams[0].players[1].name}} Vs. {{match.teams[1].players[0].name}} & {{match.teams[1].players[1].name}}</strong></span></a></li> -->
                      
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
                                  <th scope="col" class="color-danger"></th>
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
                                  <th scope="row">Team {{teams[0].players[0].last_name}}</th>
                                  <td><input @blur="updateScore(player1Scores[0])" size="2" step="0.5" type="text" v-model="player1Scores[0].score">{{player1Scores[0].net_score}}</td>
                                  <td><input @blur="updateScore(player1Scores[1])" size="2" step="any" type="text" v-model="player1Scores[1].score">{{player1Scores[1].net_score}}</td>
                                  <td><input @blur="updateScore(player1Scores[2])" size="2" step="any" type="text" v-model="player1Scores[2].score">{{player1Scores[2].net_score}}</td>
                                  <td><input @blur="updateScore(player1Scores[3])" size="2" step="any" type="text" v-model="player1Scores[3].score">{{player1Scores[3].net_score}}</td>
                                  <td><input @blur="updateScore(player1Scores[4])" size="2" step="any" type="text" v-model="player1Scores[4].score">{{player1Scores[4].net_score}}</td>
                                  <td><input @blur="updateScore(player1Scores[5])" size="2" step="any" type="text" v-model="player1Scores[5].score">{{player1Scores[5].net_score}}</td>
                                  <td><input @blur="updateScore(player1Scores[6])" size="2" step="any" type="text" v-model="player1Scores[6].score">{{player1Scores[6].net_score}}</td>
                                  <td><input @blur="updateScore(player1Scores[7])" size="2" step="any" type="text" v-model="player1Scores[7].score">{{player1Scores[7].net_score}}</td>
                                  <td><input @blur="updateScore(player1Scores[8])" size="2" step="any" type="text" v-model="player1Scores[8].score">{{player1Scores[8].net_score}}</td>
                                  <td><input @blur="updateScore(player1Scores[9])" size="2" step="any" type="text" v-model="player1Scores[9].score">{{player1Scores[9].net_score}}</td>
                                  <td><input @blur="updateScore(player1Scores[10])" size="2" step="any" type="text" v-model="player1Scores[10].score">{{player1Scores[10].net_score}}</td>
                                  <td><input @blur="updateScore(player1Scores[11])" size="2" step="any" type="text" v-model="player1Scores[11].score">{{player1Scores[11].net_score}}</td>
                                  <td><input @blur="updateScore(player1Scores[12])" size="2" step="any" type="text" v-model="player1Scores[12].score">{{player1Scores[12].net_score}}</td>
                                  <td><input @blur="updateScore(player1Scores[13])" size="2" step="any" type="text" v-model="player1Scores[13].score">{{player1Scores[13].net_score}}</td>
                                  <td><input @blur="updateScore(player1Scores[14])" size="2" step="any" type="text" v-model="player1Scores[14].score">{{player1Scores[14].net_score}}</td>
                                  <td><input @blur="updateScore(player1Scores[15])" size="2" step="any" type="text" v-model="player1Scores[15].score">{{player1Scores[15].net_score}}</td>
                                  <td><input @blur="updateScore(player1Scores[16])" size="2" step="any" type="text" v-model="player1Scores[16].score">{{player1Scores[16].net_score}}</td>
                                  <td><input @blur="updateScore(player1Scores[17])" size="2" step="any" type="text" v-model="player1Scores[17].score">{{player1Scores[17].net_score}}</td>
                                  
                                  
                                </tr>
                                <tr v-if="match.round.format !== 'Scramble' && teams[1].players.length > 1" class="table-secondary">
                                  <th scope="row">{{teams[0].players[1].name}}</th>
                                  <td><input v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player2Scores[0])" size="2" step="0.5" type="text" v-model="player2Scores[0].score">{{player2Scores[0].net_score}}</td>
                                  <td><input v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player2Scores[1])" size="2" step="any" type="text" v-model="player2Scores[1].score">{{player2Scores[1].net_score}}</td>
                                  <td><input v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player2Scores[2])" size="2" step="any" type="text" v-model="player2Scores[2].score">{{player2Scores[2].net_score}}</td>
                                  <td><input v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player2Scores[3])" size="2" step="any" type="text" v-model="player2Scores[3].score">{{player2Scores[3].net_score}}</td>
                                  <td><input v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player2Scores[4])" size="2" step="any" type="text" v-model="player2Scores[4].score">{{player2Scores[4].net_score}}</td>
                                  <td><input v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player2Scores[5])" size="2" step="any" type="text" v-model="player2Scores[5].score">{{player2Scores[5].net_score}}</td>
                                  <td><input v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player2Scores[6])" size="2" step="any" type="text" v-model="player2Scores[6].score">{{player2Scores[6].net_score}}</td>
                                  <td><input v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player2Scores[7])" size="2" step="any" type="text" v-model="player2Scores[7].score">{{player2Scores[7].net_score}}</td>
                                  <td><input v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player2Scores[8])" size="2" step="any" type="text" v-model="player2Scores[8].score">{{player2Scores[8].net_score}}</td>
                                  <td><input v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player2Scores[9])" size="2" step="any" type="text" v-model="player2Scores[9].score">{{player2Scores[9].net_score}}</td>
                                  <td><input v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player2Scores[10])" size="2" step="any" type="text" v-model="player2Scores[10].score">{{player2Scores[10].net_score}}</td>
                                  <td><input v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player2Scores[11])" size="2" step="any" type="text" v-model="player2Scores[11].score">{{player2Scores[11].net_score}}</td>
                                  <td><input v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player2Scores[12])" size="2" step="any" type="text" v-model="player2Scores[12].score">{{player2Scores[12].net_score}}</td>
                                  <td><input v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player2Scores[13])" size="2" step="any" type="text" v-model="player2Scores[13].score">{{player2Scores[13].net_score}}</td>
                                  <td><input v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player2Scores[14])" size="2" step="any" type="text" v-model="player2Scores[14].score">{{player2Scores[14].net_score}}</td>
                                  <td><input v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player2Scores[15])" size="2" step="any" type="text" v-model="player2Scores[15].score">{{player2Scores[15].net_score}}</td>
                                  <td><input v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player2Scores[16])" size="2" step="any" type="text" v-model="player2Scores[16].score">{{player2Scores[16].net_score}}</td>
                                  <td><input v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player2Scores[17])" size="2" step="any" type="text" v-model="player2Scores[17].score">{{player2Scores[17].net_score}}</td>
                                  
                                </tr>
                              
                              </tbody>
                            </table>
                            <br>
                            <table v-if="match.round.format !== 'Scramble'" class="table active table-condensed">
                              <thead class="thead-dark">
                                <tr>
                                  <th scope="col" class="color-primary">{{teams[1].name}} </th>
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
                                  <th scope="row">{{teams[1].players[0].name}}</th>
                                  <td><input v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player3Scores[0])" size="2" step="0.5" type="text" v-model="player3Scores[0].score">{{player3Scores[0].net_score}}</td>
                                  <td><input v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player3Scores[1])" size="2" step="any" type="text" v-model="player3Scores[1].score">{{player3Scores[1].net_score}}</td>
                                  <td><input v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player3Scores[2])" size="2" step="any" type="text" v-model="player3Scores[2].score">{{player3Scores[2].net_score}}</td>
                                  <td><input v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player3Scores[3])" size="2" step="any" type="text" v-model="player3Scores[3].score">{{player3Scores[3].net_score}}</td>
                                  <td><input v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player3Scores[4])" size="2" step="any" type="text" v-model="player3Scores[4].score">{{player3Scores[4].net_score}}</td>
                                  <td><input v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player3Scores[5])" size="2" step="any" type="text" v-model="player3Scores[5].score">{{player3Scores[5].net_score}}</td>
                                  <td><input v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player3Scores[6])" size="2" step="any" type="text" v-model="player3Scores[6].score">{{player3Scores[6].net_score}}</td>
                                  <td><input v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player3Scores[7])" size="2" step="any" type="text" v-model="player3Scores[7].score">{{player3Scores[7].net_score}}</td>
                                  <td><input v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player3Scores[8])" size="2" step="any" type="text" v-model="player3Scores[8].score">{{player3Scores[8].net_score}}</td>
                                  <td><input v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player3Scores[9])" size="2" step="any" type="text" v-model="player3Scores[9].score">{{player3Scores[9].net_score}}</td>
                                  <td><input v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player3Scores[10])" size="2" step="any" type="text" v-model="player3Scores[10].score">{{player3Scores[10].net_score}}</td>
                                  <td><input v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player3Scores[11])" size="2" step="any" type="text" v-model="player3Scores[11].score">{{player3Scores[11].net_score}}</td>
                                  <td><input v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player3Scores[12])" size="2" step="any" type="text" v-model="player3Scores[12].score">{{player3Scores[12].net_score}}</td>
                                  <td><input v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player3Scores[13])" size="2" step="any" type="text" v-model="player3Scores[13].score">{{player3Scores[13].net_score}}</td>
                                  <td><input v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player3Scores[14])" size="2" step="any" type="text" v-model="player3Scores[14].score">{{player3Scores[14].net_score}}</td>
                                  <td><input v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player3Scores[15])" size="2" step="any" type="text" v-model="player3Scores[15].score">{{player3Scores[15].net_score}}</td>
                                  <td><input v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player3Scores[16])" size="2" step="any" type="text" v-model="player3Scores[16].score">{{player3Scores[16].net_score}}</td>
                                  <td><input v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player3Scores[17])" size="2" step="any" type="text" v-model="player3Scores[17].score">{{player3Scores[17].net_score}}</td>
                                  
                                  
                                </tr>
                                <tr v-if="teams[1].players.length > 1" class="table-secondary">
                                  <th scope="row">{{teams[1].players[1].name}}</th>
                                  <td><input @blur="updateScore(player4Scores[0])" size="2" step="0.5" type="text" v-model="player4Scores[0].score">{{player4Scores[0].net_score}}</td>
                                  <td><input @blur="updateScore(player4Scores[1])" size="2" step="any" type="text" v-model="player4Scores[1].score">{{player4Scores[1].net_score}}</td>
                                  <td><input @blur="updateScore(player4Scores[2])" size="2" step="any" type="text" v-model="player4Scores[2].score">{{player4Scores[2].net_score}}</td>
                                  <td><input @blur="updateScore(player4Scores[3])" size="2" step="any" type="text" v-model="player4Scores[3].score">{{player4Scores[3].net_score}}</td>
                                  <td><input @blur="updateScore(player4Scores[4])" size="2" step="any" type="text" v-model="player4Scores[4].score">{{player4Scores[4].net_score}}</td>
                                  <td><input @blur="updateScore(player4Scores[5])" size="2" step="any" type="text" v-model="player4Scores[5].score">{{player4Scores[5].net_score}}</td>
                                  <td><input @blur="updateScore(player4Scores[6])" size="2" step="any" type="text" v-model="player4Scores[6].score">{{player4Scores[6].net_score}}</td>
                                  <td><input @blur="updateScore(player4Scores[7])" size="2" step="any" type="text" v-model="player4Scores[7].score">{{player4Scores[7].net_score}}</td>
                                  <td><input @blur="updateScore(player4Scores[8])" size="2" step="any" type="text" v-model="player4Scores[8].score">{{player4Scores[8].net_score}}</td>
                                  <td><input @blur="updateScore(player4Scores[9])" size="2" step="any" type="text" v-model="player4Scores[9].score">{{player4Scores[9].net_score}}</td>
                                  <td><input @blur="updateScore(player4Scores[10])" size="2" step="any" type="text" v-model="player4Scores[10].score">{{player4Scores[10].net_score}}</td>
                                  <td><input @blur="updateScore(player4Scores[11])" size="2" step="any" type="text" v-model="player4Scores[11].score">{{player4Scores[11].net_score}}</td>
                                  <td><input @blur="updateScore(player4Scores[12])" size="2" step="any" type="text" v-model="player4Scores[12].score">{{player4Scores[12].net_score}}</td>
                                  <td><input @blur="updateScore(player4Scores[13])" size="2" step="any" type="text" v-model="player4Scores[13].score">{{player4Scores[13].net_score}}</td>
                                  <td><input @blur="updateScore(player4Scores[14])" size="2" step="any" type="text" v-model="player4Scores[14].score">{{player4Scores[14].net_score}}</td>
                                  <td><input @blur="updateScore(player4Scores[15])" size="2" step="any" type="text" v-model="player4Scores[15].score">{{player4Scores[15].net_score}}</td>
                                  <td><input @blur="updateScore(player4Scores[16])" size="2" step="any" type="text" v-model="player4Scores[16].score">{{player4Scores[16].net_score}}</td>
                                  <td><input @blur="updateScore(player4Scores[17])" size="2" step="any" type="text" v-model="player4Scores[17].score">{{player4Scores[17].net_score}}</td>
                                  
                                </tr>
                              
                              </tbody>
                            </table>
                            <div class="form-group row">
                                <div class="col-lg-10">

                                  <button type="submit" class="btn btn-raised btn-primary">Update</button>
                                  <button type="button" class="btn btn-raised btn-warning" v-on:click="$router.go(-1)">Back</button>
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
                                  <th scope="row" class="color-danger">{{teams[0].name}}</th>
                                  Player 1 {{player1NetScores}}
                                  Player 2 {{player2NetScores}}
                                  Player 3 {{player3NetScores}}
                                  Player 4 {{player4NetScores}}
                                  <td><input size="2" step="0.5" type="text" min="0" max="1" v-model="match.teams[0].scores.score_1"></td>
                                  <td><input size="2" step="any" type="text" v-model="teams[0].scores.score_2"></td>
                                  <td><input size="2" step="any" type="text" v-model="teams[0].scores.score_3"></td>
                                  <td><input size="2" step="any" type="text" v-model="teams[0].scores.score_4"></td>
                                  <td><input size="2" step="any" type="text" v-model="teams[0].scores.score_5"></td>
                                  <td><input size="2" step="any" type="text" v-model="teams[0].scores.score_6"></td>
                                  <td><input size="2" step="any" type="text" v-model="teams[0].scores.score_7"></td>
                                  <td><input size="2" step="any" type="text" v-model="teams[0].scores.score_8"></td>
                                  <td><input size="2" step="any" type="text" v-model="teams[0].scores.score_9"></td>
                                  <td><input size="2" step="any" type="text" v-model="teams[0].scores.score_10"></td>
                                  <td><input size="2" step="any" type="text" v-model="teams[0].scores.score_11"></td>
                                  <td><input size="2" step="any" type="text" v-model="teams[0].scores.score_12"></td>
                                  <td><input size="2" step="any" type="text" v-model="teams[0].scores.score_13"></td>
                                  <td><input size="2" step="any" type="text" v-model="teams[0].scores.score_14"></td>
                                  <td><input size="2" step="any" type="text" v-model="teams[0].scores.score_15"></td>
                                  <td><input size="2" step="any" type="text" v-model="teams[0].scores.score_16"></td>
                                  <td><input size="2" step="any" type="text" v-model="teams[0].scores.score_17"></td>
                                  <td><input size="2" step="any" type="text" v-model="teams[0].scores.score_18"></td>
                                  
                                  
                                </tr>
                                <tr v-if="match.round.format !== 'Scramble'" class="table-secondary">
                                  <th scope="row" class="color-primary">{{teams[1].name}}</th>
                                  <td><input size="2" step="any" type="text" v-model="teams[1].scores.score_1"></td>
                                  <td><input size="2" step="any" type="text" v-model="teams[1].scores.score_2"></td>
                                  <td><input size="2" step="any" type="text" v-model="teams[1].scores.score_3"></td>
                                  <td><input size="2" step="any" type="text" v-model="teams[1].scores.score_4"></td>
                                  <td><input size="2" step="any" type="text" v-model="teams[1].scores.score_5"></td>
                                  <td><input size="2" step="any" type="text" v-model="teams[1].scores.score_6"></td>
                                  <td><input size="2" step="any" type="text" v-model="teams[1].scores.score_7"></td>
                                  <td><input size="2" step="any" type="text" v-model="teams[1].scores.score_8"></td>
                                  <td><input size="2" step="any" type="text" v-model="teams[1].scores.score_9"></td>
                                  <td><input size="2" step="any" type="text" v-model="teams[1].scores.score_10"></td>
                                  <td><input size="2" step="any" type="text" v-model="teams[1].scores.score_11"></td>
                                  <td><input size="2" step="any" type="text" v-model="teams[1].scores.score_12"></td>
                                  <td><input size="2" step="any" type="text" v-model="teams[1].scores.score_13"></td>
                                  <td><input size="2" step="any" type="text" v-model="teams[1].scores.score_14"></td>
                                  <td><input size="2" step="any" type="text" v-model="teams[1].scores.score_15"></td>
                                  <td><input size="2" step="any" type="text" v-model="teams[1].scores.score_16"></td>
                                  <td><input size="2" step="any" type="text" v-model="teams[1].scores.score_17"></td>
                                  <td><input size="2" step="any" type="text" v-model="teams[1].scores.score_18"></td>
                                  
                                </tr>
                              
                              </tbody>
                            </table>
                            <div class="col-lg-10">

                              <button type="submit" class="btn btn-raised btn-primary">Update</button>
                              <button type="button" class="btn btn-raised btn-warning" v-on:click="$router.go(-1)">Back</button>
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
      teams: [],
      newTeamName1: "",
      newTeamName2: "",
      player1: "",
      player2: "",
      player3: "",
      player4: "",
      player1Scores: [],
      player2Scores: [],
      player3Scores: [],
      player4Scores: [],
      player1NetScores: [],
      player2NetScores: [],
      player3NetScores: [],
      player4NetScores: [],
      errors: [],

        
      
    };
  },
  created: function() {
    axios.get("/api/matches/" + this.$route.params.id).then(response => {
      console.log("match", response.data);
      this.match = response.data;
      this.teams = this.match.teams;
      this.player1Scores = response.data.teams[0].scores.filter(scores => scores.user_id == this.match.teams[0].players[0].id);
      this.player3Scores = response.data.teams[1].scores.filter(scores => scores.user_id == this.match.teams[1].players[0].id);
      console.log("player1 scores", this.player1Scores);
      console.log("player3 scores", this.player3Scores);  

      if(this.match.teams[0].players.length > 1){
        this.player2Scores = response.data.teams[0].scores.filter(scores => scores.user_id == this.match.teams[0].players[1].id);
        this.player4Scores = response.data.teams[1].scores.filter(scores => scores.user_id == this.match.teams[1].players[1].id);
        
        console.log("player2 scores", this.player2Scores);
        console.log("player4 scores", this.player4Scores);
      }
    });
  },
  methods: {
    updateScore: function(score){
      
      var params = {
        score: score.score
      }
      axios.patch("/api/scores/" + score.id, params).then(response => {
        console.log("score update", response.data);
      })
    },
    userScores: function(){
      if (this.match.round.format === "Scramble"){
        var params = {
          team1_name: this.match.teams[0].name
        }
      } else{
        var params = {
          team1_name: this.match.teams[0].name,
          team2_name: this.match.teams[1].name
        }
      }
      axios.patch("/api/matches/" + this.$route.params.id, params).then(response => {
        console.log(response.data);
        this.player1Scores = response.data.teams[0].scores.filter(scores => scores.user_id == this.match.teams[0].players[0].id);
        if (this.match.round.format !== "Scramble"){  
          if (this.match.teams[0].players.length > 1 && this.match.round.format !== "Alternate Shot"){
            this.player2Scores = response.data.teams[0].scores.filter(scores => scores.user_id == this.match.teams[0].players[1].id);
          }
          this.player3Scores = response.data.teams[1].scores.filter(scores => scores.user_id == this.match.teams[1].players[0].id);
          if (this.match.teams[1].players.length > 1 && this.match.round.format !== "Alternate Shot"){
            this.player4Scores = response.data.teams[1].scores.filter(scores => scores.user_id == this.match.teams[1].players[1].id);
          }
        }
        // this.$router.push("/rounds/" + this.match.round.id);
      }).catch(error => {
        console.log(error);
        this.errors = error;
        
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