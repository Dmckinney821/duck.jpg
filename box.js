function createSolidRow(width) {
    var row='';
    for (var i=0; i<width; i++) {
        row=row + '*';
    }
    return row;
}

function createHollowRow(width) {
    var row='';
    for (var i=0; i<width; i++) {
        if (i == 0) {
        row = row + '*';
    }
        else if (i == width - 1) {
        row=row + '*';
    }
        else {
            row = row + ''
        }
    
    
    return row;
}

funciton createLineBreak() {
    return '\n';
}

funtion printBox(height, width) {
    var boxString = '';
    // first row full of stars

    // middle only has a star at beginning and end
    boxString = boxString + createSolidRow(width);
    boxString = boxString + createLineBreak
    
    
    //last row is full of stars
    boxString = boxString 

    return boxString;
}