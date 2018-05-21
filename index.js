// Extra Stuff

const showArray = () => {
	document.getElementsByTagName('span')[0].innerText = avail_array;
};

const button_elem = document.getElementsByTagName('button')[0];
const target_elem = document.getElementsByTagName('p')[0];
// !Extra Stuff

const initArray = (N,S) => Array.from({length: N}, (v, k) => k+S+1) ;

const avail_array = initArray(20,Math.floor(Math.random() * 100));

var start_index = 0;

showArray();

Array.prototype.swapForMe = function (x,y) {
  var b = this[x];
  this[x] = this[y];
  this[y] = b;
  return this;
};

var randomIntPlease = (min, max) =>{
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generate = () => {
	if(start_index < avail_array.length) {
		avail_array.swapForMe(randomIntPlease(start_index, avail_array.length-1), start_index);
		target_elem.innerText = avail_array[start_index];
		start_index +=1;
	} else {
		target_elem.classList.add('limit');
		button_elem.classList.add('hide');
		target_elem.innerText = 'Limit Reached';
	}
};