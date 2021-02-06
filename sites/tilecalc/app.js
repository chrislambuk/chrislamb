const width = document.getElementById('tileWidth');
const height = document.getElementById('tileHeight');
const tDepth = document.getElementById('tileDepth');
const gWidth = document.getElementById('groutWidth');
const area = document.getElementById('tileArea');
const waste = document.getElementById('wasteVal');
const percent = waste.value

const resultOutput = document.getElementById('result');


document.addEventListener('DOMContentLoaded', reset)
document.getElementById('calc').addEventListener('click', calculate);


function reset(){
  document.getElementById('alert').style.display = 'none';
}

function calculate() {    
	if (
		width.value !== '' &&
		height.value !== '' &&
		tDepth.value !== '' &&
		gWidth.value !== '' &&
		area.value !== ''
		) {
			let tileArea = width.value * height.value;
			let tileLength = (parseFloat(width.value) + parseFloat(height.value))
			let result = Math.ceil((area.value * 1000000) / tileArea);
			let wastage = Math.ceil(result * waste.value);
			let adhesive = area.value * 3;
			let grout =
				(((tileLength * tDepth.value * gWidth.value * 1.65) /
				(tileArea)) *
				area.value).toFixed(2);

    resultOutput.innerHTML = `
    <div class='card'>
    <div class='card-header'>FOR <span class='highlight'>${area.value}m<sup>2</sup></span> YOU WILL NEED:
    </div>
      <ul class='list-group list-group-flush'>
          <li class='list-group-item'>Tiles: <span class='resultCalc'>${result}</span></li>
          <li class='list-group-item'>+${Math.floor((waste.value)*100)-100}% wastage: <span class="resultCalc">${wastage}</span></li>
          <li class='list-group-item'>Adhesive: <span class="resultCalc">${adhesive}kg</span></li>
          <li class='list-group-item'>Grout: <span class="resultCalc">${grout}kg</span></li>
      </ul>
    </div>
    `;
	} else {
		setTimeout(() => {
			document.getElementById('alert').style.display = 'none';
		}, 3000);
		document.getElementById('alert').style.display = 'block';
		}
}
