import { useEffect, useState } from 'react';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import { getMe, logoutUser } from './api/auth';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  //console.log('App render, current user:', user); 
 

  useEffect(() => {
    getMe().then((u) => {
        setUser(u);
           setLoading(false);
        });

  }, []);


  async function handleLogout() {
    try{
        await logoutUser();
        setUser(null);
    }catch(err){
        console.error(err)
        setUser(null);
    }
  }
  if(loading){
    return <p>Loading...</p>
  }


  if (user) {
   return (
    <div  style={{ maxWidth: 400, margin: '40px auto' }}>
        <h1>Welcome, {user.email}</h1>
        <button onClick={handleLogout}>Logout</button>
    </div>
   );
  }

  return (
    <div style={{ maxWidth: 400, margin: '40px auto' }}>
      <RegisterForm onRegistered={setUser} />
      <hr />
      <LoginForm onLoggedIn={setUser} />
    </div>
  );
}

export default App;