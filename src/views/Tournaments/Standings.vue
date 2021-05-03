<template>
  <div class="standings">
    
    <br><br>
  
    <div class="ms-site-container">
      <div class="container col-lg-10">
          <span style="padding-top: 0px;" class="btn btn-raised btn-royal">
            <a aria-controls="home" role="tab" data-toggle="tab" class="nav-link">
              <h2><strong>{{tournament.name}}</strong></h2>
            </a>
          </span>  
        

        <br><br>

        <div class="row">
          <div id="standings" class=" col-xl-4 "> 
        <!-- standings card -->
            <!-- <router-link :to="'/tournaments/' + tournament.id + '/edit'"> -->
              <!-- <div class="card card-primary col-lg-10"> -->
                
              <table id="standings" class=" table ">
                <thead class="thead-dark">
                  <tr>
                    <th class="col-lg-3 text-center" scope="col"><h3><strong>Standings</strong></h3></th>
                    <th scope="col" class="text-center color-danger">Red Team</th>
                    <th scope="col" class="color-info text-center">Blue Team</th>
                    
                            
                    
                  </tr>
                </thead>
               <!--  v-for="tournament in orderBy(tournaments, sortAttribute, sortAscending)" -->
                <tbody class="text-center table-hover">
                  <tr class="table-secondary active">
                    <th scope="row" class="text-right"><h3><strong>2-Man Total Score</strong></h3></th>
                    <td class="text-danger" v-if="tournament.red_team_2mantotal > tournament.blue_team_2mantotal"><h3><strong>{{tournament.red_team_2mantotal}}</strong></h3></td>
                    <td v-else><h3><strong>{{tournament.red_team_2mantotal}}</strong></h3></td>
                    <td class="text-info" v-if="tournament.red_team_2mantotal < tournament.blue_team_2mantotal"><h3><strong>{{tournament.blue_team_2mantotal}}</strong></h3></td>
                    
                    <td v-else><h3><strong>{{tournament.blue_team_2mantotal}}</strong></h3></td>
                  </tr>

                  <tr class="table-secondary active">
                    <th scope="row" class="text-right"><h3><strong>2-Man Best Ball</strong></h3></th>
                    <td class="text-danger" v-if="tournament.red_team_2manbb > tournament.blue_team_2manbb"><h3><strong>{{tournament.red_team_2manbb}}</strong></h3></td>
                    <td v-else><h3><strong>{{tournament.red_team_2manbb}}</strong></h3></td>
                    <td class="text-info" v-if="tournament.red_team_2manbb < tournament.blue_team_2manbb"><h3><strong>{{tournament.blue_team_2manbb}}</strong></h3></td>
                    <td v-else><h3><strong>{{tournament.blue_team_2manbb}}</strong></h3></td>
                  </tr>

                  <tr class="table-secondary active">
                    <th scope="row" class="text-right"><h3><strong>Alternate Shot</strong></h3></th>
                    <td class="text-danger" v-if="tournament.red_team_altshot > tournament.blue_team_altshot"><h3><strong>{{tournament.red_team_altshot}}</strong></h3></td>
                    <td v-else><h3><strong>{{tournament.red_team_altshot}}</strong></h3></td>

                    <td class="text-info" v-if="tournament.red_team_altshot < tournament.blue_team_altshot"><h3><strong>{{tournament.blue_team_altshot}}</strong></h3></td>
                    <td v-else><h3><strong>{{tournament.blue_team_altshot}}</strong></h3></td>
                  </tr>

                  <tr class="table-secondary active">
                    <th scope="row" class="text-right"><h3><strong>Stableford</strong></h3></th>
                    <td class="text-danger" v-if="tournament.red_team_stableford > tournament.blue_team_stableford"><h3><strong>{{tournament.red_team_stableford}}</strong></h3></td>
                    <td v-else><h3><strong>{{tournament.red_team_stableford}}</strong></h3></td>

                    <td class="text-info" v-if="tournament.red_team_stableford < tournament.blue_team_stableford"><h3><strong>{{tournament.blue_team_stableford}}</strong></h3></td>
                    <td v-else><h3><strong>{{tournament.blue_team_stableford}}</strong></h3></td>
                  </tr>

                  <tr class="table-secondary active">
                    <th scope="row" class="text-right"><h3><strong>Head to Head</strong></h3></th>
                    <td class="text-danger" v-if="tournament.red_team_head2head > tournament.blue_team_head2head"><h3><strong>{{tournament.red_team_head2head}}</strong></h3></td>
                    <td v-else><h3><strong>{{tournament.red_team_head2head}}</strong></h3></td>

                    <td class="text-info" v-if="tournament.red_team_head2head < tournament.blue_team_head2head"><h3><strong>{{tournament.blue_team_head2head}}</strong></h3></td>
                    <td v-else><h3><strong>{{tournament.blue_team_head2head}}</strong></h3></td>
                  </tr>
                  <tr class="">
                    <th scope="row" style="background-color: #757575;"><h2><strong class="text-white">TOTAL</strong></h2></th>
                    <td class="color-danger-inverse"><h2><strong>{{totalRed}}</strong></h2></td>
                    <td class="color-info-inverse"><h2><strong>{{totalBlue}}</strong></h2></td>
                  </tr>
                  

                  
                  
                </tbody>
              </table>
            <!-- </div> -->
            <!-- </router-link> -->
          </div>
          
          <div class=" col-xl-8 color-success">
            
            <div class="card-tabs color-success">
              
              <ul class="nav nav-tabs shadow-2dp color-success" style="background-color: #2e7d32;" role="tablist">
                <li class="nav-item color-danger-inverse">
                  <a href="#red" aria-controls="profile" role="tab" data-toggle="tab" class="active withoutripple nav-link">
                    <strong>Red Team</strong>
                  </a>
                </li>
                  
                <li class="nav-item color-info-inverse">
                  <a href="#blue" aria-controls="home" role="tab" data-toggle="tab" class="nav-link">
                    <strong>Blue Team</strong>
                  </a>
                </li>  
                <li class="col-lg-2"></li>

                  

                
              </ul>
                                      
            </div>
            
            <div class="card-body">
              
              
                <div class="tab-content">
                  <strong class="text-danger" v-if="errors.length > 0">{{errors}}</strong>

                  <!-- Red Team Players -->
                  <div role="tabpanel" class="tab-pane fade active show" id="red">  

                    <table class="table table-condensed">
                      <thead class="color-danger-inverse">
                        <tr>
                          <th scope="col"><span v-on:click="selectSort('name')">Players</span></th>
                          <th scope="col"><span v-on:click="selectSort('low_net_handicap')">Low Net HDCP</span></th>
                          <th scope="col"><span v-on:click="selectSort('skins_handicap')">Skins HDCP</span></th>
                          <th scope="col"><span v-on:click="selectSort('ryder_cup_record.ryder_cup_wins')">Record</span></th>    
                          
                        </tr>
                      </thead>
                      <tbody id="player-info" class="table-hover table-condensed" v-bind:key="user.id" v-for="user in orderBy(users, sortAttribute, sortAscending)">

                        <tr v-if="user.team === 'Red'" class="table-secondary active">
                          <th scope="row">{{user.name}}</th>
                          <td>{{user.low_net_handicap}}</td>
                          <td>{{user.skins_handicap}}</td>
                          <td>{{user.ryder_cup_record.ryder_cup_wins}}-{{user.ryder_cup_record.ryder_cup_losses}}-{{user.ryder_cup_record.ryder_cup_ties}}</td>
                          
                        </tr>
                        
                      </tbody>
                    </table>
                    
                  </div>

                  <!-- Blue Team Players -->
                  <div role="tabpanel" class="tab-pane fade show" id="blue"> 

                    <table class="table table-condensed">
                      <thead class="color-info-inverse">
                        <tr>
                          <th scope="col"><span v-on:click="selectSort('name')">Players</span></th>
                          <th scope="col"><span v-on:click="selectSort('low_net_handicap')">Low Net HDCP</span></th>
                          <th scope="col"><span v-on:click="selectSort('skins_handicap')">Skins HDCP</span></th>
                          <th scope="col"><span v-on:click="selectSort('ryder_cup_record.ryder_cup_wins')">Record</span></th>    
                          
                        </tr>
                      </thead>
                      <tbody id="player-info" class="table-hover table-condensed" v-bind:key="user.id" v-for="user in orderBy(users, sortAttribute, sortAscending)">

                        <tr v-if="user.team === 'Blue'" class="table-secondary active">
                          <th scope="row">{{user.name}}</th>
                          <td>{{user.low_net_handicap}}</td>
                          <td>{{user.skins_handicap}}</td>
                          <td>{{user.ryder_cup_record.ryder_cup_wins}}-{{user.ryder_cup_record.ryder_cup_losses}}-{{user.ryder_cup_record.ryder_cup_ties}}</td>
                          
                        </tr>
                        
                      </tbody>
                    </table>
                  </div>
                </div>
             
              
            </div>
          </div>
        <!-- player stats card -->
        <!-- <div class="card card-primary col-lg-10"> -->

          <!-- Red Team -->
          <!-- <div id="player-info" class="col-xl-4 order-xl-2"> -->
            <!-- <table class="table table-condensed">
              <thead class="color-danger-inverse">
                <tr>
                  <th scope="col"><span v-on:click="selectSort('name')">Players</span></th>
                  <th scope="col"><span v-on:click="selectSort('low_net_handicap')">Low Net HDCP</span></th>
                  <th scope="col"><span v-on:click="selectSort('skins_handicap')">Skins HDCP</span></th>
                  <th scope="col"><span v-on:click="selectSort('ryder_cup_record.ryder_cup_wins')">Record</span></th>    
                  
                </tr>
              </thead>
              <tbody id="player-info" class="table-hover table-condensed" v-bind:key="user.id" v-for="user in orderBy(users, sortAttribute, sortAscending)">

                <tr v-if="user.team === 'Red'" class="table-secondary active">
                  <th scope="row">{{user.name}}</th>
                  <td>{{user.low_net_handicap}}</td>
                  <td>{{user.skins_handicap}}</td>
                  <td>{{user.ryder_cup_record.ryder_cup_wins}}-{{user.ryder_cup_record.ryder_cup_losses}}-{{user.ryder_cup_record.ryder_cup_ties}}</td>
                  
                </tr>
                
              </tbody>
            </table> -->
          <!-- </div> -->

          <!-- Blue Team -->
          <!-- <div id="player-info" class="col-xl-4 order-xl-2"> -->
            <!-- <table class="table table-condensed">
              <thead class="color-info-inverse">
                <tr>
                  <th scope="col"><span v-on:click="selectSort('name')">Players</span></th>
                  <th scope="col"><span v-on:click="selectSort('low_net_handicap')">Low Net HDCP</span></th>
                  <th scope="col"><span v-on:click="selectSort('skins_handicap')">Skins HDCP</span></th>
                  <th scope="col"><span v-on:click="selectSort('ryder_cup_record.ryder_cup_wins')">Record</span></th>    
                  
                </tr>
              </thead>
              <tbody id="player-info" class="table-hover table-condensed" v-bind:key="user.id" v-for="user in orderBy(users, sortAttribute, sortAscending)">

                <tr v-if="user.team === 'Blue'" class="table-secondary active">
                  <th scope="row">{{user.name}}</th>
                  <td>{{user.low_net_handicap}}</td>
                  <td>{{user.skins_handicap}}</td>
                  <td>{{user.ryder_cup_record.ryder_cup_wins}}-{{user.ryder_cup_record.ryder_cup_losses}}-{{user.ryder_cup_record.ryder_cup_ties}}</td>
                  
                </tr>
                
              </tbody>
            </table> -->
          <!-- </div> -->


        <!-- </div> -->
        </div>
      </div>

      <!-- <div class="container"> -->
        <!-- card structure for user tables -->
        
      <!-- </div> -->

    </div>
  </div>
</template>

<style>
  #red {
    max-height: 580px;
    overflow-y: auto;
  }
  #blue {
    overflow-y: auto;
    max-height: 580px;
  }
</style>

<script>
import Vue2Filters from "vue2-filters";
import axios from "axios";
export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      users: [],
      errors: [],
      tournament: {},
      sortAttribute: 'name',
      sortAscending: 1,
      totalRed: 0,
      totalBlue: 0
    };
  },
  created: function() {
    axios.get("/api/users").then(response => {
      console.log("users", response.data);
      this.users = response.data;
    });
    axios.get("/api/tournaments/" + this.$route.params.id).then(response => {
      console.log("tournament", response.data);
      this.tournament = response.data;
      this.totalRed = this.tournament.red_team_2manbb + this.tournament.red_team_2mantotal + this.tournament.red_team_altshot + this.tournament.red_team_head2head + this.tournament.red_team_stableford;
      this.totalBlue = this.tournament.blue_team_2manbb + this.tournament.blue_team_2mantotal + this.tournament.blue_team_altshot + this.tournament.blue_team_head2head + this.tournament.blue_team_stableford;
    })
  },
  methods: {
    selectSort: function(attribute){
      
      if (this.sortAttribute === attribute) {
        this.sortAscending = this.sortAscending * -1;
      } else {
        if (attribute === 'ryder_cup_record.ryder_cup_wins' || 
        attribute === 'ryder_cup_record.ryder_cup_losses' || 
        attribute === 'ryder_cup_record.ryder_cup_ties' || 
        attribute === 'record_2017') 
      {
        this.sortAscending = -1;
      } else{
        this.sortAscending = 1;
      }
      };
      this.sortAttribute = attribute;
    }
  }
};
</script>