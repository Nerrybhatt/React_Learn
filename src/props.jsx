import "./App.css";

export default function IdCard(props){
    return(
       <div className='card'>
           <img src={props.imgs} alt="photo" className='photo'/>
           <h2>{props.name}</h2>
           <h4>{props.post}</h4>
            <button className="btn">Message</button>
            <div className="rank">
                <div className='follow'>
                    <li>followers</li>
                    <h2>{props.followers}</h2>
                </div>
                <div className='follow'>
                    <li>following</li>
                    <h2>{props.following}</h2>
                </div>
            </div>
       </div>

    );
}