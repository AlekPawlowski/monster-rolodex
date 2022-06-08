const ListElement = ({ 
        monster: {
            name, 
            email, 
            id
        } 
    }) => {
    return (
        <div key={id} className="card-container">
            <img
                alt={`monster ${name}`}
                src={`https://robohash.org/${id}/?set=2`}
            />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
};
const testElementCommit = ()=>{
    console.log('test');
};

export default ListElement;

