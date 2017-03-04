// Add ID's to the questions dynamically
for(var i = 0; i < questions.length; i++){
  questions[i].id = i + 1;
}

//Generating random number
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


var formRoot = document.getElementById('quiz');
var numberOfQ = 12;
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
  btnNew.setAttribute("id", "btnNew");
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
               $(div).after(function(){
                 return "<div style='background-color: #468BF2; color: white; margin-left: 5px;'>" + questions[arr[i]].hint + "</div>"
               });
             }
          break;
        }
      }
  }
  var str = 'Elért pontszám: ' + good + ' / ' + arr.length;
  if(!document.getElementById("btnNew"))
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
