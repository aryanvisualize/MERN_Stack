
import './UserCard.css'
const UserCard = (props) => {
  return (
    <div className='user-container' style={props.style}>
       
      <p id='title'>{props.name}</p>
      <img id='user-img' src={props.image} alt="" ></img>
      <p id='user-desc'>Description : {props.desc}</p>
    </div>
  )
}

export default UserCard
