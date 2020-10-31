// 1- BOOKS AND DVDs FEES

$(document).ready(
    function()
    {
        // add event handlers
        $("#calcTotalFee").click(showTotalFee);


        // all other functions (program logic)
        function showTotalFee()
        {
            // get data from input boxes

            // Late fee for book per day
            var lateFeeBook = 0.25;


            var numberOfBook = parseInt($("#numberOfBook").val());

            // Number of days late for book
            var numberDayLateBook = parseInt($("#numberDayLateBook").val());

            // Late fee for DVD per day
            var lateFeeDVD = 0.50;

            // Number of DVD
            var numberOfDVD = parseInt($("#numberOfDVD").val());

            // Number of days late for DVD
            var numberDayLateDVD = parseInt($("#numberDayLateDVD").val());


            // Let's do math

            // Fees pay for book
            var feePayForBook = numberOfBook * numberDayLateBook * lateFeeBook;

            // Fees pay for DVDs
            var feePayForDVD = numberOfDVD * numberDayLateDVD * lateFeeDVD;

            // Total fee
            var totalFee = feePayForBook + feePayForDVD;


            // Display result
            $("#feeOutput").text(`Your total fee is $ ${totalFee.toFixed(2)}.`);



        }

    }

);


// 2- PIZZA COST PER COWORKERS


$(document).ready(
    function()
    {
        // add event handlers
        $("#calcCostOfPizza").click(showCostPerCoworker);


        // all other functions (program logic)
        function showCostPerCoworker()
        {
            // get data from input boxes


            // Number of book
            var numberOfBook = parseInt($("#numberOfBook").val());

            // Number of days late for book
            var numberDayLateBook = parseInt($("#numberDayLateBook").val());

            // Late fee for DVD per day
            var lateFeeDVD = 0.50;

            // Number of DVD
            var numberOfDVD = parseInt($("#numberOfDVD").val());

            // Number of days late for DVD
            var numberDayLateDVD = parseInt($("#numberDayLateDVD").val());


            // Cost of basic pizza
            var costBasicPizza = 15;

            // Cost of topping
            var costOfTopping = 1.25;

            // Number of coworker
            var numberCoworker = parseInt($("#numberCoworker").val());

            // Number of pizzas purchased
            var numberPizza = parseInt($("#numberPizza").val());

            // Number of topping chose
            var numberOfTopping = parseInt($("#numberOfTopping").val());


            // Let's do math

            // Total cost of the pizza order
            var totalCostPizzaOrder = (numberPizza * costBasicPizza) + (numberOfTopping * costOfTopping);

            // Cost of pizza per coworker
            var costPerCoworker = totalCostPizzaOrder / (numberCoworker + 1);


            // Display result


            $("#costOutput").text(`Each person will pay $ ${costPerCoworker.toFixed(2)}
            for pizza.`);




        }

    }

);

