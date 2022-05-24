const colors = [
    'blue',
    'red',
    'cyan',
    'orange',
    '#988BC7',
    '#44475a',
    '#483C67',
    '#191622',
    '',
 ]
 let position = 0
 function changeBackground() {
    document.getElementById('card').style.borderColor = colors[position]
    if (position < colors.length -1) {
       position = position + 1
    } else {
       position = 0;
    }
 }