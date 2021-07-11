const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

//const totalBatteries = (accumulator , currentValue) => accumulator + currentValue;
//console.log(batteryBatches.reduce(totalBatteries)) ;

const totalBatteries = batteryBatches.reduce(function (accumulator, currentValue){
    return currentValue + accumulator;
})
