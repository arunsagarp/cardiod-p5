let slider;
let poi=[];
let scale =2;
let count = 0;
let checkbox;
function setup() {
	createCanvas(800, 500);
	checkbox = createCheckbox('Rotate', false);
	slider = createSlider(20,200,100);
	frameRate(1);
}

function draw() {
	background(0);

	translate(400,250)
	let angle = (TWO_PI)/slider.value();
	let radius = 200;
	stroke(255);
	noFill();
	ellipse(0,0,radius*2);
	stroke(255);
	noFill();
	for (let i=0;i<slider.value();i++){
		let j=(i*scale)%slider.value()

		line(radius * cos(angle*(i+1)),radius * sin(angle*(i+1)),radius * cos(angle*(j+1)),radius * sin(angle*(j+1)))
	}
	if(checkbox.checked()){
	count +=1;
	if(count==5){
		count=0;
		scale +=1;
	}
	if(scale>=100){
		scale = 2;
	}
	}else{
		scale=2;
	}
	console.log(scale);
}