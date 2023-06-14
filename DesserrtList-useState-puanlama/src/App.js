import DessertsList from "./DessertsList";
import { useState } from 'react';



const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];


function App() {

  const [score, setScore] = useState(10);
  const [comments, setComments] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Number(score) <= 5 && comments.length < 10) {
      alert('Lütfen puanı ve yorumu eksiksiz giriniz.');
      return;
    }

    console.log('Geri bildirim başarıyla gönderildi.');

    setScore("10");
    setComments('');
  };

  return (
    <div className="App">
      <h2>List of low calorie desserts:</h2>
      <DessertsList data={desserts} />


      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Feedback From</h2>
          <div className='Field'>
            <label htmlFor="score">Score: {score} &#9733; </label>
            <input
              type="range"
              min={0}
              max={10}
              value={score}
              onChange={(e) => setScore(e.target.value)}
            />

          </div>
          <div className='Field'>
            <label htmlFor="comments">Comment: </label>
            <textarea
              id="comments"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
            ></textarea>
          </div>
          <button type="submit">Gönder</button>
        </fieldset>
      </form>


    </div>
  );
}

export default App;
