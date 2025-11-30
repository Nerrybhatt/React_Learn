
export function PropsArray({num,fruit}){
    return(
        <div>
            <p>I have a {num[2]} apple and {num[3]} bananas</p>
            <p>What you like {fruit[0]} or {fruit[1]} </p>
        </div>
    );

}

export function PropsArray2({infos}){
    return(
        <div>
           <h1>{infos.name}</h1>
           <h1>{infos.age}</h1>
           <h1>{infos.address}</h1>
           <h1>{infos.number}</h1>
        </div>
    );

}