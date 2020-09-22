$(document).ready(function() { 
    $( "#myForm" ).submit(function( event ) {
        event.preventDefault();

        const monetaryAmmount = $( "#monetaryAmmount" ).val();
        const taxPercentage = $( "#taxPercentage" ).val();

        let TA = (monetaryAmmount*taxPercentage)/100;

        $("#taxAmmount").html(TA.toFixed(2));
        $("#finalAmmount").html((monetaryAmmount-TA).toFixed(2));
    });

}); 