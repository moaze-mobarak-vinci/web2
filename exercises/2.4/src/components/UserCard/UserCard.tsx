interface UserCardProps {
    name : string;
    age : number;
}


export function UserCard ({name, age} : UserCardProps) {
    return (<div>
        <h2>
            {name}
        </h2>
        <p>
            Age : {age}
        </p>
    </div>
    );
}