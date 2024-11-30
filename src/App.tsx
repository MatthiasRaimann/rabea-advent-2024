import Day from './classes/Day';
import { DayComponent } from './classes/DayComponent';
import days from './days.json'
import classes from './styling/App.module.css'
import Snowfall from 'react-snowfall'



function App() {
  return (
    <div
      // className={}
      style={{
        textAlign: 'center',
      }}
    >
      <Snowfall
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
        }}
      />

      <h1>Rabeas Adventskalender</h1>

      <div className={classes.days}>
        {
          shuffleArray(Object.entries(days)
            .map(([key, value]) => new Day(key, value.image, value.message, value.href)))
            .map((d, i) => {
              (d.day === '2024-12-01') && console.log(Date.now(), d.date.getTime())
              return <DayComponent key={d.day} day={d} isLocked={new Date().getDate() < d.date.getDate()} />
            })
        }
      </div>

    </div>
  );
}

function shuffleArray<R>(array: R[]): R[] {
  const copyArray = [...array]
  for (var i = copyArray.length - 1; i >= 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = copyArray[i];
    copyArray[i] = copyArray[j];
    copyArray[j] = temp;
  }

  return copyArray
}

export default App;
