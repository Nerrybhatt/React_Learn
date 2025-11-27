import "./App.css";

export default function IdCard(props){
    return(
       <div className='card'>
           <img src={props.imgs} alt="photo" className='photo'  />
           <h2 style={{ margin: "5px 0", fontSize: "22px", fontWeight: "700" }}>{props.name}</h2>
           <h4 style={{ margin: "0", fontSize: "15px", color: "#666" }}>{props.post}</h4>
            <button className="btn" style={{
          marginTop: "20px",
          padding: "12px 25px",
          background: "#dcd8ff",
          border: "none",
          borderRadius: "12px",
          fontSize: "16px",
          cursor: "pointer"
        }}>Message</button>
            <div className="rank">
                <div className='follow'>
                    <li>followers</li>
                    <h1>{props.followers}</h1>
                </div>
                <div className='follow'>
                    <li>following</li>
                    <h1>{props.following}</h1>
                </div>
            </div>
       </div>

    );
}