//your JS code here. If required.
const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong","stop"];

sounds.forEach((element)=>{
	let btn = document.createElement("button");
	btn.classList.add("btn");
	btn.innerText = element;

	btn.addEventListener('click',()=>{
		if(element == "stop") stopAudio();
		document.getElementById(element).play();
	})

	document.querySelector("#buttons").appendChild(btn);
})

function stopAudio(){
	sounds.forEach((element)=>{
		let song = document.getElementById(element);
		song.pause();
		song.currentTime = 0;
	});
}