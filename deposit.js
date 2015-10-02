$("#deposit").click(function() {
    $.ajax({
        url: "http://api.reimaginebanking.com/accounts/55e94a6cf8d8770528e61745/deposits?key=a2bbad316714148d20b35ef35d0a61eb",
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        data: '{"medium":"balance", "amount":1, "description":"Pigment Incubator"}',
        success: function(data) {
            var new_val = parseInt($('.money_amount').text()) + 1;
            $('.money_amount').text(new_val);
            $("#deposit-notification").text("You have donated $1 to the artist!");
            setTimeout(function() {
                $("#deposit-notification").text("");
            }, 2000);
        },
        error: function(mod, res){
            setTimeout(function() {
                $("#deposit-notification").text("Deposit failed.");
            }, 2000);
        }
    });
});