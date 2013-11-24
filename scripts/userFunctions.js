function multiplyTrio(num1, num2, num3) {
    return num1 * num2 * num3;
}

multiplyTrio(8, 4, 10);


function maxOf2(num1, num2) {
    return num1 < num2 ? num2 : num1;
}

function mystery(x, y) {
    return (4 * x * y) + (3 * y + 5);
}

function feedPerRanger(nbSheeps, nbRangers) {
    alert("Each Park Ranger should load " + (nbSheeps / nbRangers) * 2 + " lb(s) of feed into his/her BART today.");
}


function changePowerTotal(totalMW, generatorId, generatorStatus, productionMW) {
    if (generatorStatus == "off") {
        totalMW -= productionMW;
        alert("Generator #" + generatorId + " is now off, removing " + productionMW + " MW, for a total of " + totalMW + " MW!");
        return totalMW;
    }

    totalMW += productionMW;
    alert("Generator #" + generatorId + " is now on, adding " + productionMW + " MW, for a total of " + totalMW + " MW!");
    return totalMW;
}