$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var firstName = $("input#firstName").val();
    var lastName = $("input#lastName").val();
    var streetAddress = $("input#streetAddress").val();
    var city = $("input#city").val();
    var state = $("input#state").val();
    var zipCode = $("input#zipCode").val();




    var food = $("#food").val();
    var music = $("input:radio[name=music]:checked").val();
    var dob = $("#born").val();
    var myFavColor = $("#color").val();
    console.log(color);

    $(".firstName").text(firstName);
    $(".lastName").text(lastName);
    $(".streetAddress").text(streetAddress);
    $(".city").text(city);
    $(".state").text(state);
    $(".zipCode").text(zipCode);



    $(".born").text(dob);
    $(".music").text(music);
    $(".food").text(food);
    $(".color").css("color", myFavColor);
    $(".colorHex").text(myFavColor);

    $("#submittedSurvey").show();

  });
});
