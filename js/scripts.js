$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var firstName = $("input#firstName").val();
    var lastName = $("input#lastName").val();
    var streetAddress = $("input#streetAddress").val();
    var city = $("input#city").val();
    var state = $("input#state").val();
    var zipCode = $("input#zipCode").val();



    console.log(submittedInfo);

    $(".firstName").text(firstName);
    $(".lastName").text(lastName);
    $(".streetAddress").text(streetAddress);
    $(".city").text(city);
    $(".state").text(state);
    $(".zipCode").text(zipCode);

    $("#submittedInfo").show();

  });
});
