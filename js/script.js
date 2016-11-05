var questions = [
  { question: "A napóra értelmezhető digitális óraként.", answer: false},
  { question: "A napóra csak analóg óraként értelmezhető.", answer: true},
  { question: "A hétszegmens kijelzős óra értelmezhető analóg óraként.", answer: false},
  { question: "A hétszegmens kijelzős óra csak digitális óraként értelmezhető.", answer: true},
  { question: "A homokóra csak analóg óraként értelmezhető.", answer: false},
  { question: "A homokóra értelmezhető digitális óraként.", answer: true},

  { question: "Az informatikában használt digitális szó görög eredetű.", answer: false},
  { question: "Az informatikában használt digitális szó latin eredetű.", answer: true},
  { question: "Az informatikában használt analóg szó latin eredetű.", answer: false},
  { question: "Az informatikában használt analóg szó görög eredetű.", answer: true},

  { question: "A FET vezérléséhez gyakorlatilag nincs szükség áramra.", answer: true},
  { question: "A FET vezérléséhez szükség van áramra.", answer: false},
  { question: "A FET vezérléséhez nincs szükség feszültségre.", answer: false},
  { question: "A FET vezérléséhez gyakorlatilag csak feszültségre van szükség.", answer: true},
  { question: "A MOSFET gyakorlatilag csak egy szigetelőrétegben tér el a FET-től.", answer: true},
  { question: "A tranzisztor áramvezérelt eszköz.", answer: true},
  { question: "A tranzisztor feszültségvezérelt eszköz.", answer: false},
  { question: "A tranzisztor és a FET informatikai szempontból kapcsolóelem.", answer: true},
  { question: "A TTL előnye a feszültségfüggetlenség.", answer: false},
  { question: "A CMOS egyik előnye a feszültségfüggetlenség.", answer: true},
  { question: "A TTL energiatakarákosabb, mint a CMOS.", answer: false},
  { question: "A CMOS energiatakarékosabb mint a TTL.", answer: true},
  { question: "A TTL akár a 2/3 alatti szintet is 1-es szintnek érzékeli.", answer: true},
  { question: "A TTL a pontosan 2/3 szintet nem tudja értelmezni.", answer: true},
  { question: "A TTL-re jobban jellemző a termikus veszteség, mint a CMOS-ra.", answer: true},
  { question: "A CMOS-ra jobban jellemző a termikus veszteség, mint a TTL-re.", answer: false},
  { question: "A CMOS fix feszültségszintekkel dolgozik.", answer: false},

  { question: "Az eredeti Turing gép 1-es számrendszert használt.", answer: true},
  { question: "Az eredeti Turing gép 2-es számrendszert használt.", answer: false},
  { question: "Az eredeti Turing gép 10-es számrendszert használt.", answer: false},
  { question: "A Mark-I és az ENIAC gépek 2-es számrendszert használtak.", answer: false},
  { question: "A Mark-I és az ENIAC gépek decimális számábrázolást használtak.", answer: true},

  { question: "A Neumann elvnek nem része a Controll-Flow.", answer: false},
  { question: "A Neumann elv szerint a vezérlést vezérlés-folyam (controll-flow) segítségével lehet leírni.", answer: true},
  { question: "A Neumann elv szerint ugyanazon a memórán található a program és az adatok is.", answer: true},
  { question: "A Neumann elv szerint külön memórián található a program és az adatok.", answer: false},
  { question: "A Neumann elv nem nyilatkozik a perifériákról.", answer: false},
  { question: "A Neumann elv említést tesz a perifériákról.", answer: true},
  { question: "A Neumann architektúra egy buszrendszert használ.", answer: true},
  { question: "A Neumann architektúra két memóriát tartalmaz.", answer: false},
  { question: "A Neumann architektúra külön buszon, egy időben olvas be adatot és utasítást, két külön memóriából.", answer: false},
  { question: "A Harvard architektúra egy memórát használ.", answer: false},
  { question: "A Harvard architektúra külön buszon, egy időben olvas be adatot és utasítást, két külön memóriából.", answer: true},
  { question: "A Harvard architektúra egy buszrendszert használ.", answer: false},
  { question: "A Harvard architektúra külön memóriában tárolja az adatokat és az utasításokat.", answer: true},
  { question: "A módosított Harvard architektúra külön buszon, egy időben olvas be adatot és utasítást, azonos memóriából.", answer: true},
  { question: "A módosított Harvard architektúra egy memóriát használ.", answer: true},
  { question: "A módosított Harvard architektúra egy buszrendszert használ.", answer: false},

  { question: "Dekleratív programozás során a programozó állításokat közöl.", answer: true},
  { question: "Dekleratív programozás során a programozó mondja meg, hogy mit és hogyan csináljon a program.", answer: false},
  { question: "Imperatív programozás során a programozó állításokat közöl.", answer: false},
  { question: "Imperatív programozás során a programozó mondja meg, hogy mit és hogyan csináljon a program.", answer: true},
  { question: "Az imperatív algoritmus random jellegű.", answer: false},
  { question: "Az imperatív algortmus szekvenciális.", answer: true},
  { question: "Az általánosan használt programozási nyelvek dekleratívak.", answer: false},
  { question: "Az általánosan használt programozási nyelvek imperatívak.", answer: true},

  { question: "A kettes számrendszerben 8 helyiértéken 256 érték ábrázolható.", answer: true},
  { question: "Kettes számrendszerben nem minden tört fejezhető ki pontosan.", answer: true},
  { question: "Kettes szémrendszerben minden tört pontosan kifejezhető.", answer: false},
  { question: "A shift balra azonos a számrendszer alapjával történő szorzással.", answer: true},
  { question: "A shift jobbra azonos a számrendszer alapjával történő szorzással", answer: false},
  { question: "Egy nagyobb alapú számrendszer több számjegy használatát igényli.", answer: false},
  { question: "Egy kisebb alapú számrendszer kevesebb számjegy használatát igényli.", answer: false},
  { question: "Az 5794861 (10) értéke 10110000110110000101100 (2)", answer: false},
  { question: "Az 10010011 (BCD) értéke 93 (10).", answer: true},

  { question: "Az AMD K6 processzor 64bit szervezésű.", answer: false},
  { question: "Az AMD k6 processzor 32bit szervezésű.", answer: true},
  { question: "Az Intel i3, i5, i7 processzor családok 32 bites szervezésűek.", answer: false},
  { question: "Az Intel i3, i5, i7 processzor családok 64 bites szervezésűek.", answer: true},
  { question: "Az Intel Core processzor család 32 bites szervezésű.", answer: false},
  { question: "Az Intel Core processzor család 64 bites szervezésű.", answer: true},
  { question: "Léteznek 128 bites és 256 bites CPU-k is , de a mindennapokban ezekkel nem találkozunk.", answer: true},

  { question: "Egy HDD jellemzően rendelkezik Firmware-el.", answer: true},
  { question: "Egy HDD jellemzően rendelkezik BIOS-sal.", answer: false},
  { question: "A POST a Firmware egyik szolgáltatása.", answer: false},
  { question: "A POST (Power On Self Test) a BIOS egyik szolgáltatása.", answer: true},
  { question: "Egy alaplap jellemzően rendelkezik BIOS-sal vagy UEFI-vel.", answer: true},
  { question: "A Firmware egy adott, jellemzően nem rugalmasan bővíthető Hardware-ra kreált működtető, vezérlő Software.", answer: true},
  { question: "A Firmware-t a felhasználó (elvileg) módosítani nem tudja, csak lecserélni frisebbre, javítottra, más célra áttalakítottra.", answer: true},
  { question: "A BIOS egy adott, jellemzően rugalmasan bővíthető Hardware-ra kreált működtető, vezérlő Software.", answer: true},
  { question: "A BIOS-t a felhasználó (elvileg) módosítani nem tudja, csak lecserélni frisebbre, javítottra, más célra áttalakítottra.", answer: true},
  { question: "A BIOS biztosítja a kapcsolatot a Hardwerek és a Hardwerekre telepített operációs rendszer között.", answer: true},
  { question: "A BIOS segítségével a kapcsolódó I/O eszközöket a felhasználó paraméterezheti.", answer: true},

  { question: "Informatikai szempontből a 'random' a 'sequence' ellentéte.", answer: true},
  { question: "A RAM jelentése 'Véletlen Hozzáférésű Memória'.", answer: false},
  { question: "A RAM jelentése 'Tetszőleges Hozzáférésű Memória'.", answer: true}
];
console.log('Kérdések száma: ' + questions.length);

for(var i = 0; i < questions.length; i++){
  questions[i].id = i + 1;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var formRoot = document.getElementById('quiz');
var numberOfQ = 24;
var arr = []
while(arr.length < numberOfQ){
    var randomnumber = getRandomIntInclusive(0, questions.length -1);
    if(arr.indexOf(randomnumber) > -1) continue;
    arr[arr.length] = randomnumber;
}

function createQuiz(){
  var formRoot = document.getElementById('quiz');
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

    op2.setAttribute('id', questions[arr[i]].id);
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
  btn.setAttribute('class', 'btn');
  btn.setAttribute('type', 'button');
  btn.setAttribute('onclick', 'kiertekel()');
  formRoot.appendChild(btn)
}

function newQuiz(){
  var content = document.getElementById('content');
  content.removeChild(content.firstChild);
  createQuiz();
}

function kiertekel(){

  var good = 0;
  var btnNew = document.createElement('button');

  btnNew.appendChild(document.createTextNode('Új Quiz'));
  btnNew.setAttribute('class', 'btn');
  btnNew.setAttribute('onclick', 'newQuiz()');

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
               div.style.color = 'white';
             }
          break;
        }
      }
  }
  var str = 'Elért pontszám: ' + good + ' / ' + arr.length;
  formRoot.appendChild(btnNew);
  if(!document.getElementById('result')){
    var result = document.createElement('div');
    result.setAttribute('id', 'result');
    result.appendChild(document.createTextNode(str))
    formRoot.appendChild(result);
  } else {
    var result = document.getElementById('result');
    result.removeChild(result.firstChild);
    result.appendChild(document.createTextNode(str))
  }

}

createQuiz();
