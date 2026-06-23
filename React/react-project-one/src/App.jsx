import './App.css'
import UserCard from './Components/UserCard';
import aryan from './assets/aryan.jpeg';
import vikasThakur from './assets/cloudJury.jpg';
import samay from './assets/samay.jpg';
import sharukh from './assets/sharukh.jpg';


function App() {

  return (
    /* Props and components */
    <div className='container'>
      <UserCard name="Aryan Rastogi" desc="MERN Stack Devloper" image={aryan} style={{"border-radius":"10px"}}/>
      <UserCard name="Vikas Thakur" desc="Google Cloud Jury" image={vikasThakur} style={{"border-radius":"10px"}}/>
      <UserCard name="Samay Raina" desc="Standup Comedian" image={samay} style={{"border-radius":"10px"}}/>
      <UserCard name="Sharukh Khan" desc="Actor & Director" image={sharukh} style={{"border-radius":"10px"}}/>
    </div>
  )
}

export default App
