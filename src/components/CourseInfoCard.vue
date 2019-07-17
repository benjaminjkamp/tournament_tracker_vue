<template>
  <div class="card card-primary">
   
    <div class="row">
      <div class="col-xl-5">
        <div  class="card-body wow fadeInUp">

          <div class="mb-2">
            <span class="ms-logo ms-logo-sm mr-1">TnT</span>
            <h3 class="no-m ms-site-title"><span>Courses</span></h3>
            <a href="javascript:void(0)" class="btn-circle btn-circle-primary no-focus animated zoomInDown animation-delay-3" data-toggle="modal" data-target="#courseAdd"><i class="zmdi zmdi-account"></i>Add</a>
          </div>
          <address id="courseList" class="no-mb">
            <div v-for="course in $parent.courses">
              <div v-on:click="changeLocation(course.name + course.location)"><i class="color-danger-light zmdi zmdi-pin mr-1"></i> <b>{{course.id}} {{course.name}}</b> - {{course.location || "Location Unknown"}}</div>
            </div>
          </address>
        </div>
      </div>
      
      <!-- map -->
      <div class="col-xl-7 col-lg-8 col-md-7">
        <iframe width="100%" height="100%" :src="'https://www.google.com/maps/embed/v1/search?key=' + mapKey + '&q=' + location"></iframe>
      </div>

    </div>
  </div>
</template>

<style>
  .card-body {
    min-height: 400px;
  }
</style>

<script>
  export default {
    props: {
      courses: Array,
      mapKey: String,
      location: String
    },
    methods: {
      changeLocation: function(course) {
        this.$emit("changeLocation", course);
      }
    }
  }
</script>