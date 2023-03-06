function displayData(){
    var registeredPerson = document.getElementById("registerPerson").value;
    var PatientName = document.getElementById("Name").value;
    var PatientNumber = document.getElementById("phoneNumber").value;
    var Gender = document.getElementById("gender").value;
    var symptoms = document.getElementById("symptoms").value;
    var AppointmentDate = document.getElementById("AppointmentDate").value;

    document.getElementById("RegisteringFor").innerHTML = registeredPerson;
    document.getElementById("personName").innerHTML = PatientName;
    document.getElementById("personNumber").innerHTML = PatientNumber;
    document.getElementById("personGender").innerHTML = Gender;
    document.getElementById("personSymptoms").innerHTML = symptoms;
    document.getElementById("appDate").innerHTML = AppointmentDate;
    alert("appointment has been booked");
}