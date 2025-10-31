const Card = (props) => {
   return(
    <div className="card">
        <img src="https://images.unsplash.com/photo-1760497925596-a6462350c583?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688"></img>
        <h2>User: {props.user}, {props.age}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, harum!</p>
    <button>View Profile</button>
    </div>
   )
}


export default Card;
