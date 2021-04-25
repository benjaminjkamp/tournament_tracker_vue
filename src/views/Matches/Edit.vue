<template>
  <div class="matches-edit">
    <div class="ms-site-container">
      <div class="container">
       
        <div class="col-lg-14 ms-paper-content-container">
          <div class="ms-paper-content">
            <div class="row">
              <div class="col-lg-13">
                <div class="card card-royal">
                  <div class="card-tabs card-royal">
                    <ul class="nav nav-tabs shadow-2dp nav-tabs-royal" role="tablist">
                      <li class="nav-item"><a href="#strokes" aria-controls="strokes" role="tab" data-toggle="tab" class="active withoutripple nav-link "><i class="zmdi zmdi-home"></i> <span class="d-none d-sm-inline">Strokes</span></a></li>
                      
                      <!-- <li class="nav-item"><a href="#" aria-controls="points" role="tab" data-toggle="tab" class="withoutripple nav-link"> <span class="d-none d-sm-inline"><strong>{{match.teams[0].players[0].name}} & {{match.teams[0].players[1].name}} Vs. {{match.teams[1].players[0].name}} & {{match.teams[1].players[1].name}}</strong></span></a></li> -->
                      
                    </ul>
                  </div>
                  <div class="card-body">
                    <div class="tab-content">                  
                      <div role="tabpanel" class="tab-pane fade active show" id="strokes"> 
                        <form v-on:submit.prevent="userScores()" class="form-horizontal" autocomplete="off">
                          <fieldset>
                            <strong v-if="errors.length > 0" class="text-danger">{{errors[errors.length-1]}}</strong>
                            <table class="table active table-condensed">
                              <thead class="thead-dark">
                                <tr>
                                  <th v-if="match.round.format !== 'Scramble'" scope="col" class="color-danger">{{teams[0].name}}</th>
                                  <th v-if="match.round.format === 'Scramble'" scope="col" class="color-danger"></th>
                                  <th scope="col"><td>01</td></th>
                                  <th scope="col"><td>02</td></th>
                                  <th scope="col"><td>03</td></th>
                                  <th scope="col"><td>04</td></th>
                                  <th scope="col"><td>05</td></th>
                                  <th scope="col"><td>06</td></th>
                                  <th scope="col"><td>07</td></th>
                                  <th scope="col"><td>08</td></th>
                                  <th scope="col"><td>09</td></th>
                                  <th scope="col"><td>10</td></th>
                                  <th scope="col"><td>11</td></th>
                                  <th scope="col"><td>12</td></th>
                                  <th scope="col"><td>13</td></th>
                                  <th scope="col"><td>14</td></th>
                                  <th scope="col"><td>15</td></th>
                                  <th scope="col"><td>16</td></th>
                                  <th scope="col"><td>17</td></th>
                                  <th scope="col"><td>18</td></th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr  class="table-secondary">
                                  <th v-if="match.round.format === 'Scramble'" scope="row">Team {{teams[0].players[0].last_name}}</th>
                                  <th v-if="match.round.format !== 'Scramble'" scope="row">{{teams[0].players[0].first_name}}<br>{{teams[0].players[0].last_name}}</th>
                                  <td><input class="text-center" @blur="updateScore(player1Scores[0], 1, 0)" size="2" step="0.5" type="text" v-model="player1Scores[0].score"></td>
                                  <td><input class="text-center" @blur="updateScore(player1Scores[1], 1, 1)" size="2" step="any" type="text" v-model="player1Scores[1].score"></td>
                                  <td><input class="text-center" @blur="updateScore(player1Scores[2], 1, 2)" size="2" step="any" type="text" v-model="player1Scores[2].score"></td>
                                  <td><input class="text-center" @blur="updateScore(player1Scores[3], 1, 3)" size="2" step="any" type="text" v-model="player1Scores[3].score"></td>
                                  <td><input class="text-center" @blur="updateScore(player1Scores[4], 1, 4)" size="2" step="any" type="text" v-model="player1Scores[4].score"></td>
                                  <td><input class="text-center" @blur="updateScore(player1Scores[5], 1, 5)" size="2" step="any" type="text" v-model="player1Scores[5].score"></td>
                                  <td><input class="text-center" @blur="updateScore(player1Scores[6], 1, 6)" size="2" step="any" type="text" v-model="player1Scores[6].score"></td>
                                  <td><input class="text-center" @blur="updateScore(player1Scores[7], 1, 7)" size="2" step="any" type="text" v-model="player1Scores[7].score"></td>
                                  <td><input class="text-center" @blur="updateScore(player1Scores[8], 1, 8)" size="2" step="any" type="text" v-model="player1Scores[8].score"></td>
                                  <td><input class="text-center" @blur="updateScore(player1Scores[9], 1, 9)" size="2" step="any" type="text" v-model="player1Scores[9].score"></td>
                                  <td><input class="text-center" @blur="updateScore(player1Scores[10], 1, 10)" size="2" step="any" type="text" v-model="player1Scores[10].score"></td>
                                  <td><input class="text-center" @blur="updateScore(player1Scores[11], 1, 11)" size="2" step="any" type="text" v-model="player1Scores[11].score"></td>
                                  <td><input class="text-center"  @blur="updateScore(player1Scores[12], 1, 12)" size="2" step="any" type="text" v-model="player1Scores[12].score"></td>
                                  <td><input class="text-center"  @blur="updateScore(player1Scores[13], 1, 13)" size="2" step="any" type="text" v-model="player1Scores[13].score"></td>
                                  <td><input class="text-center"  @blur="updateScore(player1Scores[14], 1, 14)" size="2" step="any" type="text" v-model="player1Scores[14].score"></td>
                                  <td><input class="text-center"  @blur="updateScore(player1Scores[15], 1, 15)" size="2" step="any" type="text" v-model="player1Scores[15].score"></td>
                                  <td><input class="text-center"  @blur="updateScore(player1Scores[16], 1, 16)" size="2" step="any" type="text" v-model="player1Scores[16].score"></td>
                                  <td><input class="text-center"  @blur="updateScore(player1Scores[17], 1, 17)" size="2" step="any" type="text" v-model="player1Scores[17].score"></td>
                                  
                                  
                                </tr>
                                <tr v-if="match.round.format !== 'Scramble'" class="table-danger">
                                  <td class="text-right" v-if="match.round.format !== 'Alternate Shot'"><strong>Net</strong></td>
                                  <td class="text-center" v-if="match.round.format !== 'Alternate Shot'"><strong>{{player1Scores[0].net_score}}</strong></td>
                                  <td class="text-center" v-if="match.round.format !== 'Alternate Shot'"><strong>{{player1Scores[1].net_score}}</strong></td>
                                  <td class="text-center" v-if="match.round.format !== 'Alternate Shot'"><strong>{{player1Scores[2].net_score}}</strong></td>
                                  <td class="text-center" v-if="match.round.format !== 'Alternate Shot'"><strong>{{player1Scores[3].net_score}}</strong></td>
                                  <td class="text-center" v-if="match.round.format !== 'Alternate Shot'"><strong>{{player1Scores[4].net_score}}</strong></td>
                                  <td class="text-center" v-if="match.round.format !== 'Alternate Shot'"><strong>{{player1Scores[5].net_score}}</strong></td>
                                  <td class="text-center" v-if="match.round.format !== 'Alternate Shot'"><strong>{{player1Scores[6].net_score}}</strong></td>
                                  <td class="text-center" v-if="match.round.format !== 'Alternate Shot'"><strong>{{player1Scores[7].net_score}}</strong></td>
                                  <td class="text-center" v-if="match.round.format !== 'Alternate Shot'"><strong>{{player1Scores[8].net_score}}</strong></td>
                                  <td class="text-center" v-if="match.round.format !== 'Alternate Shot'"><strong>{{player1Scores[9].net_score}}</strong></td>
                                  <td class="text-center" v-if="match.round.format !== 'Alternate Shot'"><strong>{{player1Scores[10].net_score}}</strong></td>
                                  <td class="text-center" v-if="match.round.format !== 'Alternate Shot'"><strong>{{player1Scores[11].net_score}}</strong></td>
                                  <td class="text-center" v-if="match.round.format !== 'Alternate Shot'"><strong>{{player1Scores[12].net_score}}</strong></td>
                                  <td class="text-center" v-if="match.round.format !== 'Alternate Shot'"><strong>{{player1Scores[13].net_score}}</strong></td>
                                  <td class="text-center" v-if="match.round.format !== 'Alternate Shot'"><strong>{{player1Scores[14].net_score}}</strong></td>
                                  <td class="text-center" v-if="match.round.format !== 'Alternate Shot'"><strong>{{player1Scores[15].net_score}}</strong></td>
                                  <td class="text-center" v-if="match.round.format !== 'Alternate Shot'"><strong>{{player1Scores[16].net_score}}</strong></td>
                                  <td class="text-center" v-if="match.round.format !== 'Alternate Shot'"><strong>{{player1Scores[17].net_score}}</strong></td>
                                  
                                </tr>
                                <tr v-if="match.round.format !== 'Scramble' && teams[1].players.length > 1" class="table-secondary">
                                  <th scope="row">{{teams[0].players[1].first_name}}<br>{{teams[0].players[1].last_name}}</th>
                                  <td><input class="text-center" v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player2Scores[0])" size="2" step="0.5" type="text" v-model="player2Scores[0].score"></td>
                                  <td><input class="text-center" v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player2Scores[1])" size="2" step="any" type="text" v-model="player2Scores[1].score"></td>
                                  <td><input class="text-center" v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player2Scores[2])" size="2" step="any" type="text" v-model="player2Scores[2].score"></td>
                                  <td><input class="text-center" v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player2Scores[3])" size="2" step="any" type="text" v-model="player2Scores[3].score"></td>
                                  <td><input class="text-center" v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player2Scores[4])" size="2" step="any" type="text" v-model="player2Scores[4].score"></td>
                                  <td><input class="text-center" v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player2Scores[5])" size="2" step="any" type="text" v-model="player2Scores[5].score"></td>
                                  <td><input class="text-center" v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player2Scores[6])" size="2" step="any" type="text" v-model="player2Scores[6].score"></td>
                                  <td><input class="text-center" v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player2Scores[7])" size="2" step="any" type="text" v-model="player2Scores[7].score"></td>
                                  <td><input class="text-center" v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player2Scores[8])" size="2" step="any" type="text" v-model="player2Scores[8].score"></td>
                                  <td><input class="text-center" v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player2Scores[9])" size="2" step="any" type="text" v-model="player2Scores[9].score"></td>
                                  <td><input class="text-center" v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player2Scores[10])" size="2" step="any" type="text" v-model="player2Scores[10].score"></td>
                                  <td><input class="text-center" v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player2Scores[11])" size="2" step="any" type="text" v-model="player2Scores[11].score"></td>
                                  <td><input class="text-center" v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player2Scores[12])" size="2" step="any" type="text" v-model="player2Scores[12].score"></td>
                                  <td><input class="text-center" v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player2Scores[13])" size="2" step="any" type="text" v-model="player2Scores[13].score"></td>
                                  <td><input class="text-center" v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player2Scores[14])" size="2" step="any" type="text" v-model="player2Scores[14].score"></td>
                                  <td><input class="text-center" v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player2Scores[15])" size="2" step="any" type="text" v-model="player2Scores[15].score"></td>
                                  <td><input class="text-center" v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player2Scores[16])" size="2" step="any" type="text" v-model="player2Scores[16].score"></td>
                                  <td><input class="text-center" v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player2Scores[17])" size="2" step="any" type="text" v-model="player2Scores[17].score"></td>
                                  
                                </tr>
                                <tr v-if="match.round.format === '2 Man Best Ball'" class="table-danger">
                                  <td class="text-right"><strong>Net</strong></td>
                                  <td class="text-center"><strong>{{player2Scores[0].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player2Scores[1].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player2Scores[2].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player2Scores[3].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player2Scores[4].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player2Scores[5].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player2Scores[6].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player2Scores[7].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player2Scores[8].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player2Scores[9].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player2Scores[10].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player2Scores[11].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player2Scores[12].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player2Scores[13].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player2Scores[14].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player2Scores[15].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player2Scores[16].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player2Scores[17].net_score}}</strong></td>
                                  
                                </tr>
                                <tr v-if="match.round.format === '2 Man Total Score'" class="table-danger">
                                  <td class="text-right"><strong>Net</strong></td>
                                  <td class="text-center"><strong>{{player2Scores[0].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player2Scores[1].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player2Scores[2].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player2Scores[3].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player2Scores[4].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player2Scores[5].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player2Scores[6].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player2Scores[7].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player2Scores[8].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player2Scores[9].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player2Scores[10].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player2Scores[11].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player2Scores[12].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player2Scores[13].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player2Scores[14].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player2Scores[15].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player2Scores[16].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player2Scores[17].net_score}}</strong></td>
                                  
                                </tr>
                              
                              </tbody>
                            </table>
                            <br>
                            <table v-if="match.round.format !== 'Scramble'" class="table active table-condensed">
                              <thead class="thead-dark">
                                <tr>
                                  <th scope="col" class="color-primary">{{teams[1].name}} </th>
                                  <th scope="col"><td>01</td></th>
                                  <th scope="col"><td>02</td></th>
                                  <th scope="col"><td>03</td></th>
                                  <th scope="col"><td>04</td></th>
                                  <th scope="col"><td>05</td></th>
                                  <th scope="col"><td>06</td></th>
                                  <th scope="col"><td>07</td></th>
                                  <th scope="col"><td>08</td></th>
                                  <th scope="col"><td>09</td></th>
                                  <th scope="col"><td>10</td></th>
                                  <th scope="col"><td>11</td></th>
                                  <th scope="col"><td>12</td></th>
                                  <th scope="col"><td>13</td></th>
                                  <th scope="col"><td>14</td></th>
                                  <th scope="col"><td>15</td></th>
                                  <th scope="col"><td>16</td></th>
                                  <th scope="col"><td>17</td></th>
                                  <th scope="col"><td>18</td></th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr  class="table-secondary">
                                  <th scope="row">{{teams[1].players[0].first_name}}<br>{{teams[1].players[0].last_name}}</th>
                                  <td><input class="text-center" v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player3Scores[0])" size="2" step="0.5" type="text" v-model="player3Scores[0].score"></td>
                                  <td><input class="text-center" v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player3Scores[1])" size="2" step="any" type="text" v-model="player3Scores[1].score"></td>
                                  <td><input class="text-center" v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player3Scores[2])" size="2" step="any" type="text" v-model="player3Scores[2].score"></td>
                                  <td><input class="text-center" v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player3Scores[3])" size="2" step="any" type="text" v-model="player3Scores[3].score"></td>
                                  <td><input class="text-center" v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player3Scores[4])" size="2" step="any" type="text" v-model="player3Scores[4].score"></td>
                                  <td><input class="text-center" v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player3Scores[5])" size="2" step="any" type="text" v-model="player3Scores[5].score"></td>
                                  <td><input class="text-center" v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player3Scores[6])" size="2" step="any" type="text" v-model="player3Scores[6].score"></td>
                                  <td><input class="text-center" v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player3Scores[7])" size="2" step="any" type="text" v-model="player3Scores[7].score"></td>
                                  <td><input class="text-center" v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player3Scores[8])" size="2" step="any" type="text" v-model="player3Scores[8].score"></td>
                                  <td><input class="text-center" v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player3Scores[9])" size="2" step="any" type="text" v-model="player3Scores[9].score"></td>
                                  <td><input class="text-center" v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player3Scores[10])" size="2" step="any" type="text" v-model="player3Scores[10].score"></td>
                                  <td><input class="text-center" v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player3Scores[11])" size="2" step="any" type="text" v-model="player3Scores[11].score"></td>
                                  <td><input class="text-center" v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player3Scores[12])" size="2" step="any" type="text" v-model="player3Scores[12].score"></td>
                                  <td><input class="text-center" v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player3Scores[13])" size="2" step="any" type="text" v-model="player3Scores[13].score"></td>
                                  <td><input class="text-center" v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player3Scores[14])" size="2" step="any" type="text" v-model="player3Scores[14].score"></td>
                                  <td><input class="text-center" v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player3Scores[15])" size="2" step="any" type="text" v-model="player3Scores[15].score"></td>
                                  <td><input class="text-center" v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player3Scores[16])" size="2" step="any" type="text" v-model="player3Scores[16].score"></td>
                                  <td><input class="text-center" v-if="match.round.format !== 'Alternate Shot'" @blur="updateScore(player3Scores[17])" size="2" step="any" type="text" v-model="player3Scores[17].score"></td>
                                  
                                  
                                </tr>
                                <tr v-if="match.round.format !== 'Scramble'" class="table-info">
                                  <td class="text-right" v-if="match.round.format !== 'Alternate Shot'"><strong>Net</strong></td>
                                  <td class="text-center" v-if="match.round.format !== 'Alternate Shot'"><strong>{{player3Scores[0].net_score}}</strong></td>
                                  <td class="text-center" v-if="match.round.format !== 'Alternate Shot'"><strong>{{player3Scores[1].net_score}}</strong></td>
                                  <td class="text-center" v-if="match.round.format !== 'Alternate Shot'"><strong>{{player3Scores[2].net_score}}</strong></td>
                                  <td class="text-center" v-if="match.round.format !== 'Alternate Shot'"><strong>{{player3Scores[3].net_score}}</strong></td>
                                  <td class="text-center" v-if="match.round.format !== 'Alternate Shot'"><strong>{{player3Scores[4].net_score}}</strong></td>
                                  <td class="text-center" v-if="match.round.format !== 'Alternate Shot'"><strong>{{player3Scores[5].net_score}}</strong></td>
                                  <td class="text-center" v-if="match.round.format !== 'Alternate Shot'"><strong>{{player3Scores[6].net_score}}</strong></td>
                                  <td class="text-center" v-if="match.round.format !== 'Alternate Shot'"><strong>{{player3Scores[7].net_score}}</strong></td>
                                  <td class="text-center" v-if="match.round.format !== 'Alternate Shot'"><strong>{{player3Scores[8].net_score}}</strong></td>
                                  <td class="text-center" v-if="match.round.format !== 'Alternate Shot'"><strong>{{player3Scores[9].net_score}}</strong></td>
                                  <td class="text-center" v-if="match.round.format !== 'Alternate Shot'"><strong>{{player3Scores[10].net_score}}</strong></td>
                                  <td class="text-center" v-if="match.round.format !== 'Alternate Shot'"><strong>{{player3Scores[11].net_score}}</strong></td>
                                  <td class="text-center" v-if="match.round.format !== 'Alternate Shot'"><strong>{{player3Scores[12].net_score}}</strong></td>
                                  <td class="text-center" v-if="match.round.format !== 'Alternate Shot'"><strong>{{player3Scores[13].net_score}}</strong></td>
                                  <td class="text-center" v-if="match.round.format !== 'Alternate Shot'"><strong>{{player3Scores[14].net_score}}</strong></td>
                                  <td class="text-center" v-if="match.round.format !== 'Alternate Shot'"><strong>{{player3Scores[15].net_score}}</strong></td>
                                  <td class="text-center" v-if="match.round.format !== 'Alternate Shot'"><strong>{{player3Scores[16].net_score}}</strong></td>
                                  <td class="text-center" v-if="match.round.format !== 'Alternate Shot'"><strong>{{player3Scores[17].net_score}}</strong></td>
                                  
                                </tr>
                                
                                <tr v-if="teams[1].players.length > 1" class="table-secondary">
                                  <th scope="row">{{teams[1].players[1].first_name}}<br>{{teams[1].players[1].last_name}}</th>
                                  <td><input class="text-center" @blur="updateScore(player4Scores[0])" size="2" step="0.5" type="text" v-model="player4Scores[0].score"></td>
                                  <td><input class="text-center" @blur="updateScore(player4Scores[1])" size="2" step="any" type="text" v-model="player4Scores[1].score"></td>
                                  <td><input class="text-center" @blur="updateScore(player4Scores[2])" size="2" step="any" type="text" v-model="player4Scores[2].score"></td>
                                  <td><input class="text-center" @blur="updateScore(player4Scores[3])" size="2" step="any" type="text" v-model="player4Scores[3].score"></td>
                                  <td><input class="text-center" @blur="updateScore(player4Scores[4])" size="2" step="any" type="text" v-model="player4Scores[4].score"></td>
                                  <td><input class="text-center" @blur="updateScore(player4Scores[5])" size="2" step="any" type="text" v-model="player4Scores[5].score"></td>
                                  <td><input class="text-center" @blur="updateScore(player4Scores[6])" size="2" step="any" type="text" v-model="player4Scores[6].score"></td>
                                  <td><input class="text-center" @blur="updateScore(player4Scores[7])" size="2" step="any" type="text" v-model="player4Scores[7].score"></td>
                                  <td><input class="text-center" @blur="updateScore(player4Scores[8])" size="2" step="any" type="text" v-model="player4Scores[8].score"></td>
                                  <td><input class="text-center" @blur="updateScore(player4Scores[9])" size="2" step="any" type="text" v-model="player4Scores[9].score"></td>
                                  <td><input class="text-center" @blur="updateScore(player4Scores[10])" size="2" step="any" type="text" v-model="player4Scores[10].score"></td>
                                  <td><input class="text-center" @blur="updateScore(player4Scores[11])" size="2" step="any" type="text" v-model="player4Scores[11].score"></td>
                                  <td><input class="text-center" @blur="updateScore(player4Scores[12])" size="2" step="any" type="text" v-model="player4Scores[12].score"></td>
                                  <td><input class="text-center" @blur="updateScore(player4Scores[13])" size="2" step="any" type="text" v-model="player4Scores[13].score"></td>
                                  <td><input class="text-center" @blur="updateScore(player4Scores[14])" size="2" step="any" type="text" v-model="player4Scores[14].score"></td>
                                  <td><input class="text-center" @blur="updateScore(player4Scores[15])" size="2" step="any" type="text" v-model="player4Scores[15].score"></td>
                                  <td><input class="text-center" @blur="updateScore(player4Scores[16])" size="2" step="any" type="text" v-model="player4Scores[16].score"></td>
                                  <td><input class="text-center" @blur="updateScore(player4Scores[17])" size="2" step="any" type="text" v-model="player4Scores[17].score"></td>
                                  
                                </tr>
                                <tr v-if="match.round.format === '2 Man Best Ball'" class="table-info">
                                  <td class="text-right"><strong>Net</strong></td>
                                  <td class="text-center"><strong>{{player4Scores[0].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player4Scores[0].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player4Scores[0].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player4Scores[0].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player4Scores[0].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player4Scores[0].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player4Scores[0].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player4Scores[0].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player4Scores[0].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player4Scores[0].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player4Scores[0].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player4Scores[0].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player4Scores[0].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player4Scores[0].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player4Scores[0].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player4Scores[0].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player4Scores[0].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player4Scores[0].net_score}}</strong></td>
                                  
                                </tr>
                                <tr v-if="match.round.format === '2 Man Total Score'" class="table-info">
                                  <td class="text-right"><strong>Net</strong></td>
                                  <td class="text-center"><strong>{{player4Scores[0].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player4Scores[0].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player4Scores[0].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player4Scores[0].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player4Scores[0].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player4Scores[0].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player4Scores[0].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player4Scores[0].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player4Scores[0].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player4Scores[0].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player4Scores[0].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player4Scores[0].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player4Scores[0].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player4Scores[0].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player4Scores[0].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player4Scores[0].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player4Scores[0].net_score}}</strong></td>
                                  <td class="text-center"><strong>{{player4Scores[0].net_score}}</strong></td>
                                  
                                </tr>
                               
                                
                              
                              </tbody>
                            </table>
                            <div class="form-group row">
                                <div class="col-lg-10">

                                  <button type="submit" class="btn btn-raised btn-primary">Update</button>
                                  <button type="button" class="btn btn-raised btn-warning" v-on:click="$router.go(-1)">Back</button>
                                </div>
                                <div v-if="isAdmin()" class="col-lg-10">
                                  <button type="button" class="btn btn-raised btn-danger" v-on:click="destroy()">Delete Match</button>
                                </div>
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
      user: {},
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
      oldScore: ""
        
      
    };
  },
  created: function() {
    axios.get("/api/matches/" + this.$route.params.id).then(response => {
      console.log("match", response.data);
      this.match = response.data;
      this.teams = this.match.teams;
      if (this.match.round.format !== 'Scramble'){
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
      }

      if (this.match.round.format === 'Scramble'){
        this.player1Scores = response.data.teams[0].scores.filter(scores => scores.user_id == this.match.teams[0].players[0].id);
        this.player3Scores = response.data.teams[0].scores.filter(scores => scores.user_id == this.match.teams[0].players[1].id);
        console.log("player1 scores", this.player1Scores);
        console.log("player3 scores", this.player3Scores);  

        if(this.match.teams[0].players.length > 1){
          this.player2Scores = response.data.teams[0].scores.filter(scores => scores.user_id == this.match.teams[0].players[2].id);
          this.player4Scores = response.data.teams[0].scores.filter(scores => scores.user_id == this.match.teams[0].players[3].id);
          
          console.log("player2 scores", this.player2Scores);
          console.log("player4 scores", this.player4Scores);
        }
      }
    });

    axios.get("/api/users/me").then(response => {
      this.user = response.data;
      console.log("Current User", this.user);
    })
  },
  methods: {
    isAdmin: function(){
      if (this.user.admin){
        return true;
      }else {
        return false;
      }

    },
    updateScore: function(score, player, scoreNumber){
      
     
      var params = {
        score: score.score
      }
      axios.patch("/api/scores/" + score.id, params).then(response => {
        console.log("score update", response.data);
        this.errors = [];
      }).catch(error => {
        console.log(error.response.data.errors);
        this.errors.push(error.response.data.errors);
  
  
        // ideal to have a way to revert back to original value after error.
      });
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
        this.$router.push("/rounds/" + this.match.round.id);
        console.log("Match Deleted.", response.data);
        
      })
    }
  }
};
</script>