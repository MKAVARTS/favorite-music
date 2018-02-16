// ARRAYS
var songs = ['Gods Plan', 'Perfect', 'Hanava', 'Rockstar', 'Finesse', 'Bad At Love', 'Diplomatic Immunity', 'New Rules', 'Thunder', 'No Limit'];
var artist =  ['Drake', 'Ed Sheeran', 'Camila Cabello', 'Post Malone', 'Bruno Mars', 'Halsey', 'Drake', 'Dua Lipa', 'Imagine Dragons', 'G-Easy'];
var album = ['Scary Hours', 'Divide', 'Camila', 'Stoney', '24k Magic', 'Hopeless Fountain', 'More Life', 'The Only EP', 'Evolve', 'Step Brothers'];
var counter = 0;

// DIVS
var ascendingDiv = document.getElementById('ascend');
var descendingDiv = document.getElementById('descend');
var normalDiv = document.getElementById('normal');
var reverseDiv = document.getElementById('reverse');
var normalHorizontalDiv = document.getElementById('normal-horizontal');
var alphabeticalHorizontalDiv = document.getElementById('alphabetical-horizontal');
var normalColonDiv = document.getElementById('normal-colon');
var normalPipeDiv = document.getElementById('normal-pipe');

// BUTTON IDS
let addASong = document.getElementById('addSong');
let addAnArtist = document.getElementById('addArtist');
let addAnAlbum = document.getElementById('addAlbum');

// ADD A SONG
// addASong.addEventListener('click', newSong);




// updateDom();

// function newSong(){
//     songs.push(songName.value);
//     updateDom();
// }




var normalMethod = function(array){
    array.forEach(function(item){
        return item;
    })
}

var sortMethod = function(array){
    return array.sort();
}

var reverseMethod = function(array){
    return array.reverse();
}

var joinCommaMethod = function(array){
    return array.join(', ');
}

var joinSpaceMethod = function(array){
    return array.join(' ');
}

var joinListMethod = function(array){
     var newArray = array.join('<li>');
     return newArray;
}

var joinCarrotMethod = function(array){
    return array.join(' >> ');
}

var joinPipeMethod = function(array){
    return array.join('| ');
}

var joinColonMethod = function(array){
    return array.join(': ');
}

function categories1(heading, array, method1,print){
    var y;
    var x = method1(array); 
    // console.log(x);
    // document.getElementById(print).innerHTML += `<div><h3>${heading}</h3>${x}</div>`;
    return x;
}

function categories2(heading, array, method1, method2,div){
    var y;
    var x = method1(array); 
    x = method2(array);
    y = `<div><h3>${heading}</h3>${x}</div>`;
    return y;
    // console.log(y);
}

function categories3(heading, array, method1, method2, method3, print){
    var y;
    var x = method1(array); 
    x = method2(array);
    x = method3(array);
    y = `<div><h3>${heading}</h3>${x}</div>`;
    console.log(y);
    return y;
};



//NORMAL 
normalDiv.innerHTML = categories2('Songs', songs, normalMethod, joinListMethod, 'normal');
normalDiv.innerHTML += categories2('Artists', artist, normalMethod, joinListMethod, 'normal');
normalDiv.innerHTML += categories2('Albums', album, normalMethod, joinListMethod, 'normal');


// NORMAL HORIZONTAL
normalHorizontalDiv.innerHTML = categories2('Songs', songs, normalMethod, joinCommaMethod, 'normal-horizontal');
normalHorizontalDiv.innerHTML += categories2('Artists', artist, normalMethod, joinCommaMethod, 'normal-horizontal');
normalHorizontalDiv.innerHTML += categories2('Albums', album, normalMethod, joinCommaMethod, 'normal-horizontal');

// ALPHABETICAL HORIZONTAL
alphabeticalHorizontalDiv.innerHTML = categories2('Songs', songs, sortMethod, joinCarrotMethod, 'alphabetical-horizontal');
alphabeticalHorizontalDiv.innerHTML += categories2('Artists', artist, sortMethod, joinCarrotMethod, 'alphabetical-horizontal');
alphabeticalHorizontalDiv.innerHTML += categories2('Albums', album, sortMethod, joinCarrotMethod, 'alphabetical-horizontal');

//REVERSE 
reverseDiv.innerHTML = categories2('Songs', songs, reverseMethod, joinListMethod, 'reverse');
reverseDiv.innerHTML += categories2('Artists', artist, reverseMethod, joinListMethod, 'reverse');
reverseDiv.innerHTML += categories2('Albums', album, reverseMethod, joinListMethod, 'reverse');

//ASCENDING 
ascendingDiv.innerHTML = categories3('Songs', songs, sortMethod, reverseMethod, joinListMethod, 'ascend');
ascendingDiv.innerHTML += categories3('Artists',artist, sortMethod, reverseMethod, joinListMethod,'ascend');
ascendingDiv.innerHTML += categories3('Albums', album, sortMethod, reverseMethod, joinListMethod,'ascend');


// DESCENDING
descendingDiv.innerHTML = categories2('Songs', songs, sortMethod, joinListMethod,'descend');
descendingDiv.innerHTML += categories2('Artists',artist, sortMethod, joinListMethod,'descend');
descendingDiv.innerHTML += categories2('Albums', album, sortMethod, joinListMethod,'descend');

// NORMAL :
normalColonDiv.innerHTML = categories2('Songs', songs, normalMethod, joinColonMethod, 'normal_:');
normalColonDiv.innerHTML += categories2('Artists', artist, normalMethod, joinColonMethod, 'normal_:');
normalColonDiv.innerHTML += categories2('Albums', album, normalMethod, joinColonMethod, 'normal_:');

// NORMAL |
normalPipeDiv.innerHTML = categories2('Songs', songs, normalMethod, joinPipeMethod, 'normal_|');
normalPipeDiv.innerHTML += categories2('Artists', artist, normalMethod, joinPipeMethod, 'normal_|');
normalPipeDiv.innerHTML += categories2('Albums', album, normalMethod, joinPipeMethod, 'normal_|');

