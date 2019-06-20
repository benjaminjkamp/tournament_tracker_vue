<template>
  <div class="rounds-show">
    <br><br>
    <router-link :to="'/rounds/' + round.id + '/edit'"><h1>{{ round.name }}</h1></router-link>
    <br>

    <div>
      <table class="table">
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
    <br><br>
    <button>
      <router-link :to="'/matches/' + this.round.id + '/new'">Add Match</router-link>
    </button>
    <br><br><br>
    <div v-for="match in matches">
      <router-link :to="'/matches/' + match.id + '/edit'">
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">{{match.name}}</th>
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
              <th scope="row">{{match.teams.team_1.name}}</th>
              <td>{{match.teams.team_1.scores.score_1}}</td>
              <td>{{match.teams.team_1.scores.score_2}}</td>
              <td>{{match.teams.team_1.scores.score_3}}</td>
              <td>{{match.teams.team_1.scores.score_4}}</td>
              <td>{{match.teams.team_1.scores.score_5}}</td>
              <td>{{match.teams.team_1.scores.score_6}}</td>
              <td>{{match.teams.team_1.scores.score_7}}</td>
              <td>{{match.teams.team_1.scores.score_8}}</td>
              <td>{{match.teams.team_1.scores.score_9}}</td>
              <td>{{match.teams.team_1.scores.score_10}}</td>
              <td>{{match.teams.team_1.scores.score_11}}</td>
              <td>{{match.teams.team_1.scores.score_12}}</td>
              <td>{{match.teams.team_1.scores.score_13}}</td>
              <td>{{match.teams.team_1.scores.score_14}}</td>
              <td>{{match.teams.team_1.scores.score_15}}</td>
              <td>{{match.teams.team_1.scores.score_16}}</td>
              <td>{{match.teams.team_1.scores.score_17}}</td>
              <td>{{match.teams.team_1.scores.score_18}}</td>
              
              
            </tr>
            <tr class="table-secondary">
              <th scope="row">{{match.teams.team_2.name}}</th>
              <td>{{match.teams.team_2.scores.score_1}}</td>
              <td>{{match.teams.team_2.scores.score_2}}</td>
              <td>{{match.teams.team_2.scores.score_3}}</td>
              <td>{{match.teams.team_2.scores.score_4}}</td>
              <td>{{match.teams.team_2.scores.score_5}}</td>
              <td>{{match.teams.team_2.scores.score_6}}</td>
              <td>{{match.teams.team_2.scores.score_7}}</td>
              <td>{{match.teams.team_2.scores.score_8}}</td>
              <td>{{match.teams.team_2.scores.score_9}}</td>
              <td>{{match.teams.team_2.scores.score_10}}</td>
              <td>{{match.teams.team_2.scores.score_11}}</td>
              <td>{{match.teams.team_2.scores.score_12}}</td>
              <td>{{match.teams.team_2.scores.score_13}}</td>
              <td>{{match.teams.team_2.scores.score_14}}</td>
              <td>{{match.teams.team_2.scores.score_15}}</td>
              <td>{{match.teams.team_2.scores.score_16}}</td>
              <td>{{match.teams.team_2.scores.score_17}}</td>
              <td>{{match.teams.team_2.scores.score_18}}</td>
              
            </tr>
          
          </tbody>
        </table>
      </router-link>
      {{match.team_1_score}} - {{match.team_2_score}} <br><br>
      
    </div>

    <br><br>
    
    

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
      matches: {}
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

    })
  },
  methods: {}
};
</script>