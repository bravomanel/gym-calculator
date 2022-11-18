// import React, { useState } from 'react';

function Header() {
   return (
      <header>
         <h1 id='h1'>
            {/* <a href='./index.html'> */}
            <a href='#'>
               Gym Calculator
            </a>
         </h1>
         {/* <nav>
            <a href='#OneRepMax'>1RM Max</a>
            <a href='#2RepMax'>2RM Max</a>
            <a href='#3RepMax'>3RM Max</a>
            <a href='#4RepMax'>4RM Max</a>
         </nav> */}

      </header>
   )
}

function OneRepMax() {
   const [weightArr, setWeightArr] = React.useState(['Kg', 'Kg', 'Kg', 'Kg', 'Kg', 'Kg', 'Kg', 'Kg', 'Kg', 'Kg', 'Kg', 'Kg', 'Kg', 'Kg']);
   const [unity, setUnity] = React.useState(' Kg')


   const calculateRM = () => {
      const weight = document.getElementById('weight').value
      const reps = document.getElementById('reps').value

      const oneRM = Math.round(weight * (1 + (reps / 30)));
      setWeightArr({
         ...weightArr,
         [0]: oneRM + unity,
         [1]: Math.round(oneRM * 0.95) + unity,
         [2]: Math.round(oneRM * 0.92) + unity,
         [3]: Math.round(oneRM * 0.90) + unity,
         [4]: Math.round(oneRM * 0.87) + unity,
         [5]: Math.round(oneRM * 0.85) + unity,
         [6]: Math.round(oneRM * 0.80) + unity,
         [7]: Math.round(oneRM * 0.80) + unity,
         [8]: Math.round(oneRM * 0.70) + unity,
         [9]: Math.round(oneRM * 0.65) + unity,
         [10]: Math.round(oneRM * 0.60) + unity,
         [11]: Math.round(oneRM * 0.65) + unity,
         [12]: Math.round(oneRM * 0.50) + unity,
         [13]: Math.round(oneRM * 0.40) + unity
      });
   }

   return (
      <section id='oneRepMax'>
         <h2>One Rep Max Calculator</h2>

         <div id='ORMInput'>
            <div class='inputsDiv'>
               <label for='ORMInput'>Weight:</label>
               <input type='number' id='weight' name='weight' placeholder='100' min='1'></input>
            </div>
            <div class='inputsDiv'>
               <label for='reps'>Repetitions:</label>
               <input type='number' id='reps' name='reps' placeholder='8' min='1' max='32'></input>
            </div>
            <form class='inputsDiv'>
               <div class='radioBtns'>
                  <input type='radio' id='weight-unity-lb' name='weight-unity' value='Lb' onClick={() => { setUnity(' Lb') }} />
                  <label for='weight-unity-lb'>Pounds</label>
               </div>
               <div class='radioBtns'>
                  <input type='radio' id='weight-unity-kg' name='weight-unity' value='Kg' onClick={() => { setUnity(' Kg') }} />
                  <label for='weight-unity-kg'>Kilograms</label>
               </div>
            </form>
            <div id='calculateBtnContainer'>
               <button id='calculateBtn' value='Calculate' onClick={calculateRM}>Calculate</button>
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

function MyApp() {
   return (
      <div>
         <Header />
         <OneRepMax />
      </div>
   )
}


const root = ReactDOM.render(<MyApp />, document.getElementById('app'));