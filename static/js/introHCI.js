$(document).ready(function() {
    initializePage();
});

function initializePage() {
    $('#testjs').click(function(e) {
            $('.jumbotron h1').text("It's alive!!!");
            $(".jumbotron p").addClass("active");
            $("#testjs").text("Patience is a virtue");
            });
    $("a.thumbnail").click(projectClick);
function projectClick(e) { 
    // prevent the page from reloading      
    e.preventDefault();
    var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
       $(description).hide();
    }
} 
}
