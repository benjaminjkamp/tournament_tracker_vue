<template>
  <div class="modal modal-light" id="courseAdd" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog modal-xl modal-dialog-centered animated zoomIn animated-3x" role="document">
      <div class="modal-content">
        
        <form v-on:submit.prevent="addCourse()">
          <div class="modal-header">
            <h4 class="modal-title color-dark">
              <input type="text" size="40" placeholder="Name" v-model="$parent.courseName">
            </h4>

            <button type="button" class="btn-dark close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i class="zmdi zmdi-close"></i></span></button>
          </div>

          <div class="modal-header">
            <h4 class="modal-title color-dark">
              <input size="40" type="text" placeholder="Address" v-model="$parent.address">
            </h4>
          </div>

          <!-- modal map -->
          <div class="modal-header">
            <iframe width="100%" height="400px" :src="'https://www.google.com/maps/embed/v1/search?key=' + $parent.mapKey + '&q=' + courseName + address"></iframe>
          </div>

          
          <div class="modal-footer">
          
            <button type="submit" class="btn btn-raised btn-primary btn-block">Add Course</button>
            <br>
            <button type="button" class="btn btn-danger btn-raised btn-block" data-dismiss="modal">Close</button>
          </div>
          <div class="modal-footer">
            
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style>
  .modal-xl {
    max-width:1500px;
  }
</style>

<script>
  export default {
    props: {
      // courses: Array,
      mapKey: String,
      // location: String
      par1: String,
      par2: String,
      par3: String,
      par4: String,
      par5: String,
      par6: String,
      par7: String,
      par8: String,
      par9: String,
      par10: String,
      par11: String,
      par12: String,
      par13: String,
      par14: String,
      par15: String,
      par16: String,
      par17: String,
      par18: String,
      hdcp1: String,
      hdcp2: String,
      hdcp3: String,
      hdcp4: String,
      hdcp5: String,
      hdcp6: String,
      hdcp7: String,
      hdcp8: String,
      hdcp9: String,
      hdcp10: String,
      hdcp11: String,
      hdcp12: String,
      hdcp13: String,
      hdcp14: String,
      hdcp15: String,
      hdcp16: String,
      hdcp17: String,
      hdcp18: String,
      courseName: String,
      address: String
    },
    methods: {
      addCourse: function() {
        var params = {
          name: this.courseName,
          location: this.address
        }
        this.$emit("addCourse", params)
      }
      // changeLocation: function(course) {
      //   this.$emit("changeLocation", course);
      // }
    }
  }
</script>