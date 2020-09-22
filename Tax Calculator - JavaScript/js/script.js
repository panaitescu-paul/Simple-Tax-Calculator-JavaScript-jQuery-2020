document.getElementById("myForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    var monetaryAmmount = document.getElementById("monetaryAmmount").value;
    var taxPercentage = document.getElementById("taxPercentage").value;

    TA = (monetaryAmmount*taxPercentage)/100

    document.getElementById("taxAmmount").innerHTML = TA.toFixed(2);
    document.getElementById("finalAmmount").innerHTML = (monetaryAmmount-TA).toFixed(2);
});