import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
  );
};

const Profile = () => {
  const { user } = useAuth0();

  if ( user === undefined ) {
    return <></>
  } else {
    return (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    );
  }
};

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  if ( isLoading ) {
    return (
      <div>
        <span>loading</span>
      </div>
    )
  } else if ( isAuthenticated ) {
    return (
      <div>
        <LogoutButton></LogoutButton>
        <Profile></Profile>
      </div>
    )
  } else {
    return (
      <div>
        <LoginButton></LoginButton>
      </div>
    );
  }
}

export default App;
