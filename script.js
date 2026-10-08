const billingToggle = document.getElementById("billingToggle");
const amounts = document.querySelectorAll(".amount");

billingToggle.addEventListener("change", function () {

    amounts.forEach(function (amount) {

        if (billingToggle.checked) {
            amount.textContent = amount.dataset.yearly;
        } else {
            amount.textContent = amount.dataset.monthly;
        }

    });

});