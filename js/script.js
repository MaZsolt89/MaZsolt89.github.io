var questions = [
  {id: 1, question: "A napóra értelmezhető digitális óraként.", answer: false},
  {id: 2, question: "Az informatikában használható digitális szó görög eredetű.", answer: false},
  {id: 3, question: "A FET vezérléséhez gyakorlatilag nincs szükség áramra.", answer: true},
  {id: 4, question: "A tranzisztor és a FET informatikai szempontból kapcsolóelem.", answer: true},
  {id: 5, question: "A TTL előnye a feszültségfüggetlenség.", answer: false},
  {id: 6, question: "A TTL energiatakarákosabb, mint a CMOS.", answer: false},
  {id: 7, question: "Az eredeti Turing gép 1-es számrendszert használt.", answer: true},
  {id: 8, question: "A Neumann elvnek nem része a Controll-Flow.", answer: false},
  {id: 9, question: "A Neumann architektúra egy buszrendszert használ.", answer: true},
  {id: 10, question: "A Harvard architektúra egy memórát használ.", answer: false},
  {id: 11, question: "A módosított Harvard architektúra egy memóriát használ.", answer: true},
  {id: 12, question: "Dekleratív programozás során a programozó állításokat közöl.", answer: true},
  {id: 13, question: "A ram jelentése 'Véletlen hozzáférésű memória'.", answer: false},
  {id: 14, question: "Az AMD K6 processzor 64bit szervezésű.", answer: false},
  {id: 15, question: "Egy HDD jellemzően rendelkezik Firmware-el.", answer: true},
  {id: 16, question: "A POST a Firmware egyik szolgáltatása.", answer: false},
  {id: 17, question: "A kettes számrendszerben 8 helyiértéken 256 érték ábrázolható.", answer: true}
];

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var formRoot = document.getElementById('quiz');
var arr = []
while(arr.length < 5){
    var randomnumber = getRandomIntInclusive(0, 5)
    if(arr.indexOf(randomnumber) > -1) continue;
    arr[arr.length] = randomnumber;
}

console.log(arr);

function createQuiz(){
  for(var i = 0; i< arr.length; i++){
    var qstn = document.createElement('div');
    var qstnSpan = document.createElement('span');
    var op1 = document.createElement('input');
    var op2 = document.createElement('input');
    var lblT = document.createElement('label');
    var lblF = document.createElement('label');

    qstn.setAttribute('id', 'q' + questions[arr[i]].id);

    op1.setAttribute('id', questions[arr[i]].id);
    op1.setAttribute('type', 'radio');
    op1.setAttribute('name', 'question' + questions[arr[i]].id);
    op1.setAttribute('value', 'true');
    op1.setAttribute('class', 'true');

    op2.setAttribute('id', questions[arr[i]]);
    op2.setAttribute('type', 'radio');
    op2.setAttribute('name', 'question' + questions[arr[i]].id);
    op2.setAttribute('value', 'false');
    op2.setAttribute('class', 'false');

    lblT.setAttribute('for', 'true');
    lblT.appendChild(document.createTextNode('Igaz'));

    lblF.setAttribute('for', 'false');
    lblF.appendChild(document.createTextNode('Hamis'));

    qstnSpan.appendChild(document.createTextNode(questions[arr[i]].question))
    qstn.appendChild(qstnSpan);
    qstn.appendChild(lblT);
    qstn.appendChild(op1);
    qstn.appendChild(lblF);
    qstn.appendChild(op2);
    formRoot.appendChild(qstn);
  }
  var btn = document.createElement('button');
  btn.appendChild(document.createTextNode('Kiértékelés'));
  btn.setAttribute('type', 'button');
  btn.setAttribute('onclick', 'kiertekel()');
  formRoot.appendChild(btn)
}

function kiertekel(){
  var good = 0;
  for(var i = 0; i< arr.length; i++){
    var radios = document.getElementsByName('question' + questions[arr[i]].id);
    var div = document.getElementById('q' + questions[arr[i]].id);
    var checkedValue = null;
    for(var j=0; j < 2; j++){
        if(radios[j].checked == true){
             checkedValue = radios[j].value;
             if(checkedValue.localeCompare( String(questions[arr[i]].answer)) == 0){
               good++;
               div.style.background = '#75FF58';
             } else {
               div.style.background = '#FF443F';
             }
             break;
           }
         }
  }
  var str = 'Elért pontszám: ' + good + ' / ' + arr.length;
  if(!document.getElementById('result')){
    var result = document.createElement('div');
    result.setAttribute('id', 'result');
    result.appendChild(document.createTextNode(str))
    formRoot.appendChild(result);
  } else {
      result = document.getElementById('result');
      result.removeChild(result.firstChild);
      result.appendChild(document.createTextNode(str))
  }

}

createQuiz();
