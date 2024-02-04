import "./Card.css"
import {FaStar,FaDownload} from 'react-icons/fa'
const Card = (props) => {
  return (
    <div className="aaaa">
    <div className="most-popular-item">
    <div className="card-wrapper">
    <img className="most-popular-item-image" src={props.img} alt='hello world'></img>
    <div className="most-popular-item-content">
    <h4  className="most-popular-item-title">{props.name}<br /> <span>{props.sand}</span></h4>
    <ul>
    <li><span className="FaStar"><FaStar /></span><span>{props.ex1}</span>
    </li>
    <li><span className="FaDownload"><FaDownload /></span><span>{props.ex2}</span>
    </li> 
    </ul>
    </div>
    </div>
    
    
    </div>
    </div>
  )
}

export default Card;
