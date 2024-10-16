import './App.css'
import Counter from './counter';
import Team from './Team';

function App() {
  function handleClicked (){
    alert("Button Clicked");
  }
  const handleClicked2 = () => {
    alert("Button2 Clicked");
  }
  const AddFive = (num) => {
    alert(num + 5);
  }
  return (
    <>
      <h2>React Core Concept 2</h2>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClicked}>Click me</button>
      <br />
      <button onClick={handleClicked2}>button 2</button>
      <br />
      <button onClick={()=>{alert("button 3 clicked")}}>button 3</button>
      <br />
      {/* Jhamela */}
      <button onClick={()=> AddFive(100)}>button 4</button>
    </>
  )
}

export default App
