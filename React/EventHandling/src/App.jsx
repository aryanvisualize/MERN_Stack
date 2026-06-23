
import './App.css'

function App() {
  function handleMouseover(event){
    event.target.style.color = "hotpink";
  }

  function handleClick(){
    alert("I am clicked");
  }

  function handleInputChange(e){
    console.log("Input value has been changed : ",e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    //Writing my custom behaviour
    alert("Should I submit the form");
  }
  return (  
    
    <div>
      {/* <button onClick={alert("Button has been clicked")}>
        Click me
      </button> */}
      {/* Avoid writing this way -> Imediately invoked when rendered */}

      <button onClick={()=> alert("Button has been clicked")}>
        Click me
      </button>


      <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleInputChange}/>
            <button type='submit'>Submit</button>
      </form>
      
      <p onMouseOver={handleMouseover}>Try to hover mouse over here</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default App
