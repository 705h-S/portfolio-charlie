// Carousel
$(document).ready(function(){
    $("#carouselProjects").carousel({
        // time delay between cycles 
        interval:3000,

    });
});
// Resume modal
$(document).ready(function(){
    $("#Rresume").click(function(){
      $("#resumeModal").modal();
    });
  });