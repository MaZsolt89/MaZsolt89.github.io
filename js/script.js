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
  {id: 13, question: "A RAM jelentése 'Véletlen hozzáférésű memória'.", answer: false},
  {id: 14, question: "Az AMD K6 processzor 64bit szervezésű.", answer: false},
  {id: 15, question: "Egy HDD jellemzően rendelkezik Firmware-el.", answer: true},
  {id: 16, question: "A POST a Firmware egyik szolgáltatása.", answer: false},
  {id: 17, question: "A kettes számrendszerben 8 helyiértéken 256 érték ábrázolható.", answer: true},
  {id: 18, question: "A shift balra azonos a számrendszer alapjával történő szorzással.", answer: true},
  {id: 19, question: "Az imperatív algoritmus random jellegű.", answer: false},
  {id: 20, question: "A homokóra csak analóg óraként értelmezhető.", answer: false},
  {id: 21, question: "Az informatikában használt analóg szó latin eredetű.", answer: false},
  {id: 22, question: "Az Intel Core processzor család 32 bites szervezésű.", answer: false},
  {id: 23, question: "A TTL akár a 2/3 alatti szintet is 1-es szintnek érzékeli.", answer: true},
  {id: 24, question: "A FET vezérléséhez gyakorlatilag csak feszültségre van szükség.", answer: true},
  {id: 25, question: "Az eredeti Turing gép 10-es számrendszert használt.", answer: false},
  {id: 26, question: "Egy alaplap jellemzően rendelkezik BIOS-sal vagy UEFI-vel.", answer: true},
  {id: 27, question: "Kettes számrendszerben nem minden tört fejezhető ki pontosan.", answer: true},
  {id: 28, question: "Az 5794861<sub>10</sub> értéke 10110000110110000101100<sub>2</sub>", answer: false},
  {id: 29, question: "Informatikai szempontből a 'random' a 'sequence' ellentéte.", answer: true},
  {id: 30, question: "A tranzisztor áramvezérelt eszköz.", answer: true},
  {id: 31, question: "A Mark-I és az ENIAC gépek 2-es számrendszert használtak.", answer: false},
  {id: 32, question: "Egy nagyobb alapú számrendszer több számjegy használatát igényli.", answer: false},
  {id: 33, question: "Az általánosan használt programozási nyelvek dekleratívak.", answer: false},
  {id: 34, question: "A Harvard architektúra egy buszrendszert használ.", answer: false},
  {id: 35, question: "Egy HDD jellemzően rendelkezik BIOS-sal.", answer: false},
  {id: 36, question: "A CMOS fix feszültségszintekkel dolgozik.", answer: false},
  {id: 37, question: "A Neumann elv nem nyilatkozik a perifériákról.", answer: false},
  {id: 38, question: "A TTL-re jobban jellemző a termikus veszteség, mint a CMOS-ra.", answer: true},
  {id: 39, question: "Egy kisebb alapú számrendszer kevesebb számjegy használatát igényli.", answer: false},
  {id: 40, question: "A shift jobbra azonos a számrendszer alapjával történő szorzással", answer: false},
  {id: 41, question: "A MOSFET gyakorlatilag csak egy szigetelőrétegben tér el a FET-től.", answer: true},
  {id: 42, question: "A hétszegmens kijelzős óra értelmezhető analóg óraként.", answer: false}
];

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var formRoot = document.getElementById('quiz');
var numberOfQ = 10;
var arr = []
while(arr.length < numberOfQ){
    var randomnumber = getRandomIntInclusive(0, questions.length -1);
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
    if(i % 2 == 0) qstn.style.background = "#e0e0e0"
    formRoot.appendChild(qstn);
  }
  var btn = document.createElement('button');
  btn.appendChild(document.createTextNode('Kiértékelés'));
  btn.setAttribute('id', 'btn');
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
