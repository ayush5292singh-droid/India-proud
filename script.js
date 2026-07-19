// INDIA EXPLORER DATA


const states = {

const states = {


UttarPradesh:{

name:"Uttar Pradesh 🇮🇳",

capital:"Lucknow",

population:"Around 240 million",

area:"243,286 km²",

language:"Hindi",

food:"Kebabs, Kachori, Petha",

places:"Taj Mahal, Varanasi, Ayodhya",

festival:"Diwali, Holi",

symbol:"Barasingha (Swamp Deer)",

culture:"Rich history, art and traditions"

},



Rajasthan:{

name:"Rajasthan 🇮🇳",

capital:"Jaipur",

population:"Around 80 million",

area:"342,239 km²",

language:"Hindi, Rajasthani",

food:"Dal Baati Churma",

places:"Jaipur, Jaisalmer Fort, Udaipur",

festival:"Gangaur, Pushkar Fair",

symbol:"Camel",

culture:"Royal forts, deserts and folk music"

},



Maharashtra:{

name:"Maharashtra 🇮🇳",

capital:"Mumbai",

population:"Around 130 million",

area:"307,713 km²",

language:"Marathi",

food:"Vada Pav, Misal Pav",

places:"Gateway of India, Ajanta Caves",

festival:"Ganesh Chaturthi",

symbol:"Indian Giant Squirrel",

culture:"Bollywood and Marathi heritage"

},



TamilNadu:{

name:"Tamil Nadu 🇮🇳",

capital:"Chennai",

population:"Around 80 million",

area:"130,058 km²",

language:"Tamil",

food:"Dosa, Idli",

places:"Meenakshi Temple, Marina Beach",

festival:"Pongal",

symbol:"Nilgiri Tahr",

culture:"Temples, music and classical arts"

}


};




// Show state information

function showState(id){


let state = states[id];


if(!state){

return;

}



document.getElementById("info").innerHTML = `


<h2>🇮🇳 ${state.name}</h2>


<p>🏛 Capital: ${state.capital}</p>


<p>👥 Population: ${state.population}</p>
<p>📐 Area: ${state.area}</p>

<p>🎉 Festival: ${state.festival}</p>

<p>🏳️ Symbol: ${state.symbol}</p>

<p>🗣 Language: ${state.language}</p>


<p>🍛 Food: ${state.food}</p>


<p>🏞 Places: ${state.places}</p>


<p>🎭 Culture: ${state.culture}</p>


`;

}




// Make map clickable

setTimeout(()=>{


document.querySelectorAll(".state")

.forEach(state=>{


state.onclick=function(){

showState(this.id);

};


});


},1000);





// Search Function

function searchState(){


let input = 

document.getElementById("searchBox")
.value
.toLowerCase();



for(let id in states){


if(states[id].name.toLowerCase()
.includes(input)){


showState(id);

return;

}

}



document.getElementById("info").innerHTML=

`

<h2>❌ State not found</h2>

<p>Try another name</p>

`;

}
