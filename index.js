function tipAmount (billAmount,serviceLevel) {
    var finalTipAmount = 0;

    if (serviceLevel == 'good') {
        finalTipAmount =billAmount*0.2;
    }
        else if (serviceLevel == 'fair') {
            finalTipAmount = billAmount*0.15;
        }
        else if (serviceLevel == 'bad') {
            finalTipAmount = billAmount*0.1;
        }
    


    return finalTipAmount
}



var goodTip = tipAmount(100, 'good')
var fairTip = tipAmount(40, 'fair')


console.log(goodTip)
console.log(fairTip)

