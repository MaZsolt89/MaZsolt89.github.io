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
  { question: "A Neumann elv a 2-es (bináris) számrendszert alkalmazza.", answer: true},
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

  { question: "A 4 bites abszolútértékes ábrázolásnál nincs negatív nulla.", answer: false},
  { question: "A 4 bites abszolútértékes kód a pozitív számokat és a nullát egy vezető zérussal, e számok ellentetjét egy vezető eggyessel írja le.", answer: true},
  { question: "A 4 bites abszolútértékes ábrázolás (Egyenes kód) jellegzetessége a negatív nulla.", answer: true},
  { question: "A 4 bites egyes komplemens ábrázolásnál (Negációs-kód) van negatív nulla.", answer: true},
  { question: "A 4 bites egyes komplemens ábrázolásnál (Negációs-kód) nincs negatív nulla.", answer: false},
  { question: "A 4 bites egyes komplemens ábrázolásnál (Negációs-kód) a pozitív számokat és a nullát ugyanúgy írjuk, mint a természetes számírásban.", answer: true},
  { question: "A 4 bites egyes komplemens ábrázolásnál (Negációs-kód) a pozitív számok ellentetjét a jegyek mindegyikének átfordításával (negáció) kapjuk.", answer: true},
  { question: "A 4 bites kettes komplemens ábrázolásnál (Komplemens kód) a negatív előjelbit a 0.", answer: false},
  { question: "A 4 bites kettes komplemens ábrázolásnál (Komplemens kód) a negatív előjelbit az 1.", answer: true},
  { question: "A 4 bites többletes kód ábrázolás 2^n-1 többletet használ.", answer: true},
  { question: "A 4 bites többletes kód ábrázolásnál a negatív előjelbit a 0.", answer: true},
  { question: "A 4 bites többletes kód ábrázolásnál nincs ábrázolva negatív 0 érték", answer: true},
  { question: "A 'Carry' mint fogalom a helyiértékre vonatkozik.", answer: true},
  { question: "A 'Carry' mint fogalom a számábrázolási tartományra vonatkozik.", answer: false},
  { question: "Az átvitel bit (Carry) jelzi ha egy adott helyiértéken elvégzett művelet eredménye meghaladja az ott ábrázolható értéket.", answer: true},
  { question: "Az 'Overflow' mint fogalom a számábrázolási tartományra vonatkozik.", answer: true},
  { question: "Az 'Overflow' mint fogalom a helyiértékre vonatkozik.", answer: false},
  { question: "A túlcsordulás, illetve alulcsordulás (Overflow) akkor fordul elő ha egy összeadás vagy kivonás művelet eredménye kívül esik az aktuális számábárzolási tartományon.", answer: true},

  { question: "A lebegőpontos szám lényege, hogy az ábrázolásnál a tizedespont 'lebeg', vagyis az ábrázolható értékes számjegyeken belül bárhova kerülhet.", answer: true},
  { question: "A lebegőpontos ábrázolás előnye a fixpontos számábrázolással szemben az, hogy sokkal szélesebb tartományban képres értékeket felvenni.", answer: true},
  { question: "A lebegőpontos számábárzolás hátránya a fixpontos számábárzolással szemben az, hogy sokkal kisebb tartományban képes értékeket felvenni.", answer: false},
  { question: "Az IEEE 754 (I triple E) szabvány szerint 4 féle lebegőpontos számábrázolási forma létezik, melyek csak az adott elem bitszámában térnek el egymástól.", answer: true},
  { question: "Az IEEE 754 szabvány szerint a mantissza előjele 0, ha a szám pozitív és 1, ha negatív.", answer: true},
  { question: "Az IEEE 754 szabvány szerint a mantissza előjele 1, ha a szám pozitív és 0, ha negatív.", answer: false},

  { question: "Az Excess N ábrázolás lényege az, hogy a számtartományt, mely a kitevőt jelzi, két részre osztjuk (az N a felező érték).", answer: true},
  { question: "Az Excess N ábrázolásnál az N-hez a nulla kitevőt rendeljük.", answer: true},
  { question: "Az Excess N ábrázolásnál az N-hez a legnagyobb (N) kitevőt rendeljük.", answer: false},
  { question: "Az Excess N ábrázolásnál az N-nél kisebb értékek a negatív, az N-nél nagyobb értékek a pozitív kitevőket jelentik.", answer: true},
  { question: "Az Excess N ábrázolásnál az N-nél nagyobb értékek a negatív, az N-nél kisebb értékek a pozitív kitevőket jelentik.", answer: false},
  { question: "Az Excess 50 esetében a legnagyobb ábrázolható kitevő 99", answer: true},
  { question: "Az Excess 50 esetében a legnagyobb ábrázolható kitevő 100", answer: false},
  { question: "Az Excess 128 legkisebb értéke a -128, legnagyobb értéke pedig a +127.", answer: true},
  { question: "Az Excess 128 legkisebb értéke a -128, legnagyobb értéke pedig a +128.", answer: false},
  { question: "Az Excess 128 esetében a mantissza 'klasszikus' alakú, azaz a bázispont (tízes számrendszer esetében a tizedesvessző) az első nem nulla karakter elé kerül.", answer: true},
  { question: "Az Excess 127 esetében a mantissza kvázi 'törtként szerepel', de így nyerünk egy helyiértéket, ami nőveli az ábrázolható pontosságot.", answer: true},
  { question: "Az Excess 127 esetében a mantissza kvázi 'törtként szerepel', ezért vesztünk egy helyiértéket, ami csökkenti az ábrázolható pontosságot.", answer: false},

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
  { question: "Az UEFI a BIOS-nál gyorsabb rendszerindítást és hibernálásból való visszatérést tesz lehetővé.", answer: true},
  { question: "Az UEFI felügyeli a rendszerindítás folyamatát és csak megbízható kód indulását engedélyezi.", answer: true},
  { question: "Az UEFI grafikus felületet használ karakteres helyett.", answer: true},
  { question: "Az UEFI modulárisan bővíthető.", answer: true},

  { question: "Az 'AND' igazságtáblája több 1-est tartalmaz mint a 'XOR'.", answer: false},
  { question: "A 'XOR' igazságtáblája kevesebb 1-est tartalmaz mint a 'NAND'.", answer: true},
  { question: "Az implikáció összefonódást jelent (ha A, akkor B).", answer: true},
  { question: "Matematikai logikában az A+(B*C)=(A+B)*(A+C) állítás", answer: true},
  { question: "Matematikai logikában az A+0=0 állítás", answer: false},
  { question: "Matematikai logikában az A+1=1 állítás", answer: true},
  { question: "Matematikai logikában az A*1=1 állítás", answer: false},

  { question: "A két logikai kapuból álló RS tároló 1 bájt tárolására képes.", answer: false},
  { question: "A Statikus Hazárd csak rövid, egyszeri jelváltást okoz a kimeneten.", answer: true},
  { question: "A Statikus Hazárdot tervezési hiba okozza.", answer: true},
  { question: "A Statikus Hazárd kiváltó oka az áramköri megvalósítás.", answer: true},
  { question: "Statikus Hazárd akkor jelentkezik amikor egy logikai kapu két bemenetére a bemenő jelek nem egy időben, hanem kis késéssel érkeznek egymáshoz képest.", answer: true},
  { question: "A Statikus Hazárd csak 2-nél többszintű hálózatban jöhet létre.", answer: false},
  { question: "A Statikus Hazárdot a szekunder változók okozzák.", answer: false},
  { question: "A Dinamikus Hazárd csak 2-nél többszintű hálózatban jöhet létre.", answer: true},
  { question: "A Dinamikus Hazárd feltétele, hogy a jel legalább 3 úton terjedjen a kimenetre.", answer: true},
  { question: "A Dinamikus Hazárdot kivédeni a Statikus Hazárdok megszüntetésével lehet.", answer: true},
  { question: "A Dinamikus Hazárdot szinkronizációval lehet megszüntetni.", answer: false},
  { question: "A Funkcionális Hazárd akkor jelentkezhet, ha több bemeneti változó változik egyszerre.", answer: true},
  { question: "A Funkcionális Hazárd kivédésének a legbiztosabb módja a szinkronizáció.", answer: true},
  { question: "A Funkcionális Hazárd az aszinkoron sorrendi hálózatokban nem kívánt állapotátmeneteket okozhat.", answer: true},
  { question: "A Lényeges Hazárd csak aszinkron sorrendi hálózatokban fordul elő.", answer: true},
  { question: "A Lényeges Hazárd kiküszöböléséhez szándékos késleltetést kell alkalmaznunk, vagy módosítanunk kell az állapottáblát.", answer: true},
  { question: "A Rendszerhazárd több szekunder változó esetén fordulhat elő.", answer: true},
  { question: "A Rendszerhazárd oka, hogy a visszacsatoló ágban lévő flip-flopok bemenetén eltérő időkésleltetések fordulnak elő.", answer: true},

  { question: "A szabályozás zárt hatásláncú folyamat, visszacsatolással.", answer: true},
  { question: "A szabályozás nyitott hatásláncú folyamat, visszacsatolás nélkül.", answer: false},
  { question: "A szabáylozás célja az alapjel elérése és megtartása.", answer: true},
  { question: "A szabályozás célja egy előre meghatározott műveletros végrehajtása.", answer: false},
  { question: "A vezérlés nyitott hatásláncú folyamat, visszacsatolás nélkül.", answer: true},
  { question: "A vezérlés zárt hatásláncú folyamat, visszacsatolással.", answer: false},
  { question: "A vezérlés célja egy előre meghatározott műveletsor végrehajtása.", answer: true},
  { question: "A vezérlés célja az alapjel elérése és megtartása.", answer: false},

  { question: "A hiszterézis szó görög eredetű.", answer: true},
  { question: "A hiszterézis szó latin eredetű.", answer: false},
  { question: "A hiszterézis szó hiányosságot, késést jelent.", answer: true},
  { question: "Egy hiszterézissel rendelkező rendszer pillanatnyi állapota függ a korábbi állapotától, a erendszer előéletétől.", answer: true},
  { question: "Egy hiszterézissel rendelkező rendszer pillanatnyi állapota nem függ a korábbi állapotától.", answer: false},
  { question: "Hiszterézises rendszer pléldául egy termosztát, amiben egy elektronikus szabályozás elvén műküdő kapcsoló (hiszterézises Schmitt trigger) működik.", answer: true},
  { question: "Egy hiszterézises rendszerben, ha nem ismerjük a rendszer pillanatnyi állapotát, akkor egy adott bemenő jel esetén nem lehet meghatározni a rendszer válaszát.", answer: true},

  { question: "A ZIP Drive Bernoulli elven működik.", answer: true},
  { question: "A ZIP Drive-nál a lemez 3000-et fordul percenként.", answer: true},
  { question: "A ZIP Drive-nál a lemez 1500-at fordul percenként.", answer: false},
  { question: "A ZIP Drive-nál a fej a forgás következtében létrejövő légpárnán - a lemeztől kb. 1 mikro m-re - helyezkedik el.", answer: true},
  { question: "A ZIP Drive-nál a fej hozzáér a lemezhez.", answer: false},
  { question: "A ZIP Drive nem terjedt el a PenDrive megjelenése miatt.", answer: true},

  { question: "A Latency a lemez forgásából fakadó késedelem.", answer: true},
  { question: "Az NCQ beolvasás alapja a kevesebb fejmozgás.", answer: true},

  { question: "A dinamikus memóriák minden egyes cellája egy kondenzátort és egy tranzisztort tartalmaz.", answer: true},
  { question: "A DDR3-1600 PC3-12800 valós órajele 800 MHz.", answer: true},
  { question: "A DDR3-800 PC3-6400 sávszélessége 800MB/s. ", answer: false},
  { question: "A DDR3-2000 PC3-16000 Föoldali busza 1000 MHz.", answer: false},
  { question: "A ROM csak egyszer írható.", answer: true},

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
