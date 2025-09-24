function Profile(){
    return(
        <div>
            <h1>Profile Card Challenge</h1>
            <ProfileCard
            name="Alice"
            age={30}
            greetings={
                <div>
                    <strong>HI,How are you</strong>
                </div>
            }
            >
                <p>Hobbies:Dance</p>
                <button>Contact</button>
            </ProfileCard>

            <ProfileCard
            name="Bob"
            age={30}
            greetings={
                <div>
                    <strong>HI,How are you</strong>
                </div>
            }
            >
                <p>Hobbies:Art</p>
                <button>Contact</button>
            </ProfileCard>
        </div>
    );
};
export default Profile;

function ProfileCard(props){
    return(
        <>
        <h2>Name:{props.name}</h2>
        <p>Age:{props.age}</p>
        <p>{props.greetings}</p>
        <div></div>
        </>
    );
}