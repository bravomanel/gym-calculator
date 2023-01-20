function Header(props) {

   function chooseCalculator(value) {
      props.choose(value);
   }

   return (
      <header>
         <ChangeLanguage setWords={props.changeDictionary} />
         <h1 id='h1'>
            <a href='#'>
               {/* Gym Calculator */}
               {props.myDictionary.gymCalculator}
            </a>
         </h1>
         <nav>
            <a href='#OneRepMax' onClick={() => chooseCalculator(<OneRepMax />)}>1 Rep Max</a>
            <a href='#2RepMax' onClick={() => chooseCalculator(<IMC />)}>IMC</a>
            <a href='#3RepMax' onClick={() => chooseCalculator(<BodyFat />)}>Body Fat</a>
         </nav>

      </header>
   )
}
function OneRepMax(props) {
   const [weightArr, setWeightArr] = React.useState(['Kg', 'Kg', 'Kg', 'Kg', 'Kg', 'Kg', 'Kg', 'Kg', 'Kg', 'Kg', 'Kg', 'Kg', 'Kg', 'Kg']);
   const [unity, setUnity] = React.useState(' Kg')
   const [kgChecked, setKgChecked] = React.useState(true);
   const [originalWeight, setOriginalWeight] = React.useState();

   const lbToKg = value => value / 2.20462;
   const kgToLb = value => value * 2.20462;


   const calculateRM = (tempWeight = 0, localUnity = unity) => {
      const reps = document.getElementById('reps').value
      let originalRepsPosition = 15;

      let weight;

      if (tempWeight == 0) {
         weight = originalWeight;
      } else {
         weight = tempWeight;
      }

      if (kgChecked) {
         document.getElementById('changeUnityToLbBtn').style.display = 'block';
         document.getElementById('changeUnityToKgBtn').style.display = 'none';
      } else {
         document.getElementById('changeUnityToKgBtn').style.display = 'block';
         document.getElementById('changeUnityToLbBtn').style.display = 'none';
      }

      switch (+reps) {
         case 1:
            originalRepsPosition = 0;
            break;
         case 2:
            originalRepsPosition = 1;
            break;
         case 3:
            originalRepsPosition = 2;
            break;
         case 4:
            originalRepsPosition = 3;
            break;
         case 5:
            originalRepsPosition = 4;
            break;
         case 6:
            originalRepsPosition = 5;
            break;
         case 8:
            originalRepsPosition = 6;
            break;
         case 10:
            originalRepsPosition = 7;
            break;
         case 12:
            originalRepsPosition = 8;
            break;
         case 16:
            originalRepsPosition = 9;
            break;
         case 20:
            originalRepsPosition = 10;
            break;
         case 24:
            originalRepsPosition = 11;
            break;
         case 30:
            originalRepsPosition = 12;
            break;
         case 40:
            originalRepsPosition = 13;
            break;
         default:
            originalRepsPosition = 14;
            break;
      }

      const oneRM = Math.round(weight * (1 + (reps / 30)));
      setWeightArr({
         ...weightArr,
         [0]: oneRM + localUnity,
         [1]: Math.round(oneRM * 9.5) / 10 + localUnity,
         [2]: Math.round(oneRM * 9.2) / 10 + localUnity,
         [3]: Math.round(oneRM * 9.0) / 10 + localUnity,
         [4]: Math.round(oneRM * 8.7) / 10 + localUnity,
         [5]: Math.round(oneRM * 8.5) / 10 + localUnity,
         [6]: Math.round(oneRM * 8.0) / 10 + localUnity,
         [7]: Math.round(oneRM * 7.5) / 10 + localUnity,
         [8]: Math.round(oneRM * 7.0) / 10 + localUnity,
         [9]: Math.round(oneRM * 6.5) / 10 + localUnity,
         [10]: Math.round(oneRM * 6.0) / 10 + localUnity,
         [11]: Math.round(oneRM * 5.5) / 10 + localUnity,
         [12]: Math.round(oneRM * 5.0) / 10 + localUnity,
         [13]: Math.round(oneRM * 4.0) / 10 + localUnity,
         [originalRepsPosition]: Math.round(weight * 10.0) / 10 + localUnity
      });

   }

   const changeToLb = () => {
      setUnity(' Lb');
      setKgChecked(false);
      setOriginalWeight(Math.round(kgToLb(originalWeight)));
      calculateRM(kgToLb(originalWeight), ' Lb');
      document.getElementById('changeUnityToKgBtn').style.display = 'block';
      document.getElementById('changeUnityToLbBtn').style.display = 'none';
   }

   const changeToKg = () => {
      setUnity(' Kg');
      setKgChecked(true);
      setOriginalWeight(Math.round(lbToKg(originalWeight)));
      calculateRM(lbToKg(originalWeight), ' Kg');
      document.getElementById('changeUnityToLbBtn').style.display = 'block';
      document.getElementById('changeUnityToKgBtn').style.display = 'none';
   }

   console.log(props.myDictionary)

   return (
      <section id='oneRepMax'>
         <h2>One Rep Max Calculator</h2>

         <div id='ORMInput'>
            <div class='inputsDiv'>
               <label for='ORMInput'>Weight:</label>
               <input type='number' id='weight' name='weight' placeholder='100' min='1' value={originalWeight} onChange={() => setOriginalWeight(document.getElementById('weight').value)}></input>
            </div>
            <div class='inputsDiv'>
               <label for='reps'>Repetitions:</label>
               <input type='number' id='reps' name='reps' placeholder='8' min='1' max='32'></input>
            </div>
            <form class='inputsDiv'>
               <div class='radioBtns'>
                  <input type='radio' id='weight-unity-lb' name='weight-unity' value='Lb' onClick={() => {
                     setKgChecked(false);
                     setUnity(' Lb')
                  }} checked={!kgChecked} />
                  <label for='weight-unity-lb'>Pounds</label>
               </div>
               <div class='radioBtns'>
                  <input type='radio' id='weight-unity-kg' name='weight-unity' value='Kg' onClick={() => {
                     setKgChecked(true);
                     setUnity(' Kg')
                  }} checked={kgChecked} />
                  <label for='weight-unity-kg'>Kilograms</label>
               </div>
            </form>
            <div id='btnContainer'>
               <button id='changeUnityToKgBtn' class='buttons' value='Calculate' onClick={changeToKg}>Convert To Kg</button>
               <button id='changeUnityToLbBtn' class='buttons' value='Calculate' onClick={changeToLb}>Convert To Lb</button>
               <button id='calculateBtn' class='buttons' value='Calculate' onClick={() => calculateRM()}>Calculate</button>
            </div>
         </div>

         <div id='ORMTable'>
            <table id='reps_table'>
               <tr>
                  <th>Percentage</th>
                  <th>Weight</th>
                  <th>Reps</th>
               </tr>
               <tr id='1rm-table'>
                  <th id='1rm-percentage-table'>100%RM</th>
                  <th id='1rm-weight-table'>{weightArr[0]}</th>
                  <th id='1rm-reps-table'>1 Reps</th>
               </tr>
               <tr id='2rm-table'>
                  <th id='2rm-percentage-table'>95% RM</th>
                  <th id='2rm-weight-table'>{weightArr[1]}</th>
                  <th id='2rm-reps-table'>2 Reps</th>
               </tr>
               <tr id='3rm-table'>
                  <th id='3rm-percentage-table'>92% RM</th>
                  <th id='3rm-weight-table'>{weightArr[2]}</th>
                  <th id='3rm-reps-table'>3 Reps</th>
               </tr>
               <tr id='4rm-table'>
                  <th id='4rm-percentage-table'>90% RM</th>
                  <th id='4rm-weight-table'>{weightArr[3]}</th>
                  <th id='4rm-reps-table'>4 Reps</th>
               </tr>
               <tr id='5rm-table'>
                  <th id='5rm-percentage-table'>87% RM</th>
                  <th id='5rm-weight-table'>{weightArr[4]}</th>
                  <th id='5rm-reps-table'>5 Reps</th>
               </tr>
               <tr id='6rm-table'>
                  <th id='6rm-percentage-table'>85% RM</th>
                  <th id='6rm-weight-table'>{weightArr[5]}</th>
                  <th id='6rm-reps-table'>6 Reps</th>
               </tr>
               <tr id='8rm-table'>
                  <th id='8rm-percentage-table'>80% RM</th>
                  <th id='8rm-weight-table'>{weightArr[6]}</th>
                  <th id='8rm-reps-table'>8 Reps</th>
               </tr>
               <tr id='10rm-table'>
                  <th id='10rm-percentage-table'>75% RM</th>
                  <th id='10rm-weight-table'>{weightArr[7]}</th>
                  <th id='10rm-reps-table'>10 Reps</th>
               </tr>
               <tr id='12rm-table'>
                  <th id='12rm-percentage-table'>70% RM</th>
                  <th id='12rm-weight-table'>{weightArr[8]}</th>
                  <th id='12rm-reps-table'>12 Reps</th>
               </tr>
               <tr id='16rm-table'>
                  <th id='16rm-percentage-table'>65% RM</th>
                  <th id='16rm-weight-table'>{weightArr[9]}</th>
                  <th id='16rm-reps-table'>16 Reps</th>
               </tr>
               <tr id='20rm-table'>
                  <th id='20rm-percentage-table'>60% RM</th>
                  <th id='20rm-weight-table'>{weightArr[10]}</th>
                  <th id='20rm-reps-table'>20 Reps</th>
               </tr>
               <tr id='24rm-table'>
                  <th id='24rm-percentage-table'>55% RM</th>
                  <th id='24rm-weight-table'>{weightArr[11]}</th>
                  <th id='24rm-reps-table'>24 Reps</th>
               </tr>
               <tr id='30rm-table'>
                  <th id='30rm-percentage-table'>50% RM</th>
                  <th id='30rm-weight-table'>{weightArr[12]}</th>
                  <th id='30rm-reps-table'>30 Reps</th>
               </tr>
               <tr id='40rm-table'>
                  <th id='40rm-percentage-table'>40% RM</th>
                  <th id='40rm-weight-table'>{weightArr[13]}</th>
                  <th id='40rm-reps-table'>40 Reps</th>
               </tr>
            </table>
         </div>
      </section>
   )
}

function IMC(props) {
   const [originalWeight, setOriginalWeight] = React.useState();
   const [originalHeight, setOriginalHeight] = React.useState();
   const [IMC, setIMC] = React.useState(0);
   const [label, setLabel] = React.useState('');


   const calculateIMC = () => {
      const newIMC = originalWeight / ((originalHeight / 100) ** 2);
      setIMC(Math.round(newIMC * 10) / 10);

      changeLabel(newIMC);
      changeSlideBar(newIMC);


   }

   const changeSlideBar = (value) => {
      if (value < 18.5) {
         backgroundGradient('slide0', value, 14, 18.5, 'orange');
         backgroundGradient('slide1', value, 18.5, 25, 'orange');
         backgroundGradient('slide2', value, 25, 30, 'orange');
         backgroundGradient('slide3', value, 30, 35, 'orange');
         backgroundGradient('slide4', value, 35, 40, 'orange');
         backgroundGradient('slide5', value, 40, 45, 'orange');
      } else if (value < 25) {
         backgroundGradient('slide0', value, 14, 18.5, 'green');
         backgroundGradient('slide1', value, 18.5, 25, 'green');
         backgroundGradient('slide2', value, 25, 30, 'green');
         backgroundGradient('slide3', value, 30, 35, 'green');
         backgroundGradient('slide4', value, 35, 40, 'green');
         backgroundGradient('slide5', value, 40, 45, 'green');
      } else if (value < 30) {
         backgroundGradient('slide0', value, 14, 18.5, 'orange');
         backgroundGradient('slide1', value, 18.5, 25, 'orange');
         backgroundGradient('slide2', value, 25, 30, 'orange');
         backgroundGradient('slide3', value, 30, 35, 'orange');
         backgroundGradient('slide4', value, 35, 40, 'orange');
         backgroundGradient('slide5', value, 40, 45, 'orange');
      } else {
         backgroundGradient('slide0', value, 14, 18.5, 'red');
         backgroundGradient('slide1', value, 18.5, 25, 'red');
         backgroundGradient('slide2', value, 25, 30, 'red');
         backgroundGradient('slide3', value, 30, 35, 'red');
         backgroundGradient('slide4', value, 35, 40, 'red');
         backgroundGradient('slide5', value, 40, 45, 'red');
      }
   }

   const backgroundGradient = (element, value, start, end, color) => {
      const distance = (100 * (value - start) / (end - start))
      const style = `linear-gradient(90deg, ${color} 0%, ${color} ${distance}%, rgba(0, 0, 0, 0) ${distance}%, rgba(0, 0, 0, 0) 100%)`;
      document.getElementById(element).style.background = style;
   }

   const changeLabel = (value) => {
      if (value > 40) {
         setLabel('Obesidade grave (grau III)')
      } else if (value > 30) {
         setLabel('Obesidade grau II');
      } else if (value > 25) {
         setLabel('Obesidade grau I');
      } else if (value >= 18.5) {
         setLabel('Normal');
      } else if (value > 0) {
         setLabel('Magreza');
      } else {
         setLabel('');
      }
   }

   return (
      <section id='imc'>
         <h2>IMC</h2>

         <div id='imcInputContainer'>
            <div class='inputsDiv'>
               <label for='weight'>Weight:</label>
               <input type='number' id='weight' name='weight' placeholder='70' min='1' max='800' value={originalWeight} onChange={() => setOriginalWeight(document.getElementById('weight').value)}></input>
            </div>
            <div class='inputsDiv'>
               <label for='height'>Height:</label>
               <input type='number' id='height' name='height' placeholder='170' min='1' max='250' value={originalHeight} onChange={() => setOriginalHeight(document.getElementById('height').value)}></input>
            </div>
            <form class='inputsDiv'>
               <div class='radioBtns'>
                  <input type='radio' id='weight-unity-lb' name='weight-unity' value='Lb' onClick={() => { }} />
                  <label for='weight-unity-lb'>Imperial</label>
               </div>
               <div class='radioBtns'>
                  <input type='radio' id='weight-unity-kg' name='weight-unity' value='Kg' onClick={() => { }} />
                  <label for='weight-unity-kg'>Metric</label>
               </div>
            </form>
            <div id='btnContainer'>
               <button id='calculateBtn' class='buttons' value='Calculate' onClick={() => calculateIMC()}>Calculate</button>
            </div>
         </div>
         <div>
            <div id='displayIMC'>
               <p>Seu IMC: {IMC}</p>
            </div>

            <div id='slideDiv'>
               <div id='slide0' className='slides'><p>14</p></div>
               <div id='slide1' className='slides'><p>18.5</p></div>
               <div id='slide2' className='slides'><p>25</p></div>
               <div id='slide3' className='slides'><p>30</p></div>
               <div id='slide4' className='slides'><p>35</p></div>
               <div id='slide5' className='slides'><p>40</p></div>
               <div id='slide6' className='slides'><p>45</p></div>
            </div>

            <div id='label' >
               <p>
                  {label}
               </p>
            </div>

         </div>
      </section>
   )
}

function BodyFat(props) {
   return (
      <section>
         <h2>Estamos trabalhando nessa função...</h2>
      </section>
   )
}

function ChangeLanguage(props) {
   const [language, setLanguage] = React.useState('EN-UK');
   const [languageImage, setLanguageImage] = React.useState('./img/UK_flag.png');

   function changeLanguageButton() {
      if (language == 'PT-BR') {
         setLanguage('EN-UK');
         setLanguageImage('./img/UK_flag.png');
      } else if (language == 'EN-UK') {
         setLanguage('PT-BR');
         setLanguageImage('./img/BR_flag.png');
      }
      console.log('change');
      props.changeDictionary({
         gymCalculator: 'Calculara de Academia',
         pounds: 'Libras',
      });

   }

   return (
      <section>
         <img src={languageImage} id="lang_img" onClick={changeLanguageButton}></img>
      </section>
   )
}

function MyApp() {
   const [calculator, setCalculator] = React.useState(<OneRepMax myDictionary={dictionary} />);
   const [dictionary, setDictionary] = React.useState({
      gymCalculator: 'Gym Calculator',
      pounds: "Pounds",
      oneRepMaxCalculator: '1RM Calculator',
      weight: 'Weight',
      height: 'Height',
      repetitions: 'Reps',
   });


   return (
      <div>
         <Header choose={setCalculator} myDictionary={dictionary} />
         {calculator}
         {/* <OneRepMax myDictionary={dictionary} /> */}
      </div>
   )
}


const root = ReactDOM.render(<MyApp />, document.getElementById('app'));