import './App.css';
import Post from './components/Post';
import coffeeShops from './coffeeShops.js';

const App = () => {

  return (
    <div className="App">
      <h1> 📌 List of top Coffee shops in Katy, TX area ☕</h1>
      <h2>A helpful list of places that will cure your 🎓 CS major soul</h2>
      <div className="container">
        {
          coffeeShops.map((coffeeShops, i) => {
            return (<Post 
              name={coffeeShops.name} 
              key={i}
              coffeCost={coffeeShops.coffeCost} 
              link={coffeeShops.link} 
              photoDirectory = {coffeeShops.photoDirectory}/>)

          })
        }
      </div>
      
      
      
    </div>
  )
}

export default App
