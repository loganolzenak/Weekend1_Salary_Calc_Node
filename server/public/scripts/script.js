var input = [];
var monthlySalary = [];

$(document).ready(function() {
  $('#submit').on('click', function(){
    // console.log('button work' );

    var employee = {
    firstName : $( '#firstName' ).val(),
    lastName : $( '#lastName' ).val(),
    idNumber : $( '#idNumber' ).val(),
    jobTitle : $( '#jobTitle' ).val(),
    annualSalary : $('#annualSalary' ).val()
};
  input.push(employee);
  monthlySalary.push(employee);

  function displayInput(){
    console.log("in display", employee);
    var smell = $('#outputInfo');

    smell.empty();

    for( var i=0; i<input.length; i++){
      var output = '<li>';
      output += input [ i ].firstName + ' ';
      output += input [ i ].lastName + ' ';
      output += input [ i ].idNumber + ' ';
      output += input [ i ].jobTitle + ' ';
      output += input [ i ].annualSalary + ' ';
      output += '</li>';
      smell.append(output);
    }

}
  displayInput();
  displaySalary();


  $('#firstName').val( '' );
  $('#lastName').val( '' );
  $('#idNumber').val( '' );
  $('#jobTitle').val( '' );
  $('#annualSalary').val( '' );

  });
});


function displaySalary(){

  var salary = $('#salaryOutput');

  salary.empty();

  for( var i=0; i<monthlySalary.length; i++){
    var salaryOutput = '<li>';
    salaryOutput += monthlySalary [ i ].firstName + ' ';
    salaryOutput += monthlySalary [ i ].lastName + ' ';
    salaryOutput += monthlySalary [ i ].annualSalary /12 +' '+'monthly salary';
    salaryOutput += '</li>';
    salary.append(salaryOutput);
  }

}
