
import {useReducer} from "react"


interface Profile {
    name: string
    age: string
    email: string
}

const initialState: Profile = {
    name: 'John Doe',
    age: "30",
    email: 'johndoe@example.com',
  };

interface UserProfileState {
    name: string
    age: string
    email: string
}


interface UserProfileAction {
    type: string
    payload: string 
}

function profileReducer(state: UserProfileState, action: UserProfileAction) {

    switch (action.type) {
      case 'UPDATE_NAME':
        return { ...state, name: action.payload };
      case 'UPDATE_AGE':
        return { ...state, age: action.payload };
      case 'UPDATE_EMAIL':
        return { ...state, email: action.payload };
      default:
        return state;
    }
  }
  

function UserProfile() {
    const [profile, dispatch] = useReducer(profileReducer, initialState);
  
    return (
      <div>
        <h2>User Profile</h2>
        <div>Name: {profile.name}</div>
        <div>Age: {profile.age}</div>
        <div>Email: {profile.email}</div>
  
        <button onClick={() => dispatch({type: 'UPDATE_NAME', payload: "Jane"})}>
          Update Name to Jane Doe
        </button>
        <button onClick={() => dispatch({ type: 'UPDATE_AGE', payload: "25" })}>
          Update Age to 25
        </button>
        <button onClick={() => dispatch({ type: 'UPDATE_EMAIL', payload: 'janedoe@example.com' })}>
          Update Email to janedoe@example.com
        </button>
      </div>
    );
  }
  
  export default UserProfile;
  