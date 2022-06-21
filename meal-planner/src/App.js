import {useState} from 'react';

function App() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  const getMealData = () => {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=eca293f96dc34bddbbbf1b26adfa7c61&timeFrame=day&targetCalories=${calories}`
      )
      .then(res => res.json())
      .then(data => {
        setMealData(data)
        console.log(data)
      })
      .catch(() => {
        console.log('Error')
      })

  }

  const handleChange = (e)=> {
    setCalories(e.target.value)

  }

  return (
    <div className="App">
      <section className='controls'>
        <input
        type='number'
        placeholder='Calories (e.g 2000)' 
        onChange={handleChange}
        />
        <button onClick={getMealData}>Get Daily Meal Plan</button>
      </section>
    </div>
  );
}

export default App;
