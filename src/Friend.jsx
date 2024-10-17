export default function Friend ({friend}){
   const {id, name, email, username} = friend;
    return(
        <div className="box">
            <h3>Name:{name}</h3>
            <p>Id:{id}</p>
            <p>Username:{username}</p>
            <p>Email:{email}</p>
        </div>
    )
}