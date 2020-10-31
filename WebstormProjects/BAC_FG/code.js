$(document).ready(
    function()
    {
        // add event handlers
        $("#calcMyBac").click(showMyBac);


        // all other functions (program logic)
        function showMyBac()
        {
            // get data from input boxes

            // Number of beers consumed
            var numberOfBeers = parseInt($("#numberOfBeers").val());

            // Number of number of Wine consumed
            var numberOfWine = parseInt($("#numberOfWine").val());


            // Number of shots consumed
            var numOfShots = parseInt($("#numOfShots").val());


            // Get the weight
            var weight = parseFloat($("#weight").val());

            // Hours since the drink
            var hours = parseFloat($("#hours").val());


            // Let's do math

            // Liquid ounces of alcohol for beers drank
            var beerRate = 0.54;
            var liquidBeer = numberOfBeers * beerRate;

            // Liquid ounces of alcohol for wine drank
            var wineRate = 0.6;
            var liquidWine = numberOfWine * wineRate;

            // Liquid ounces of alcohol for shots drank
            var shotsRate = 0.6;
            var liquidShots = numOfShots * shotsRate;

            // Total liquid ounces of alcohol
            var totalAlcohol = (liquidBeer + liquidWine + liquidShots);

            // Average alcohol absorption
            var avrgAlcRate = 7.5;
            var averageAlcohol = totalAlcohol * avrgAlcRate;

            // Calculate the BAC
            var bac = averageAlcohol / weight;

            // Calculate BAC since hours of drink
            var hoursRate = 0.015;
            var bacHours = bac - (hours * hoursRate);

            // Display result
            $("#bacOutput").text(`Your Blood Alcohol Content (BAC) is ${bacHours.toFixed(3)}`);


        }

    }

);


