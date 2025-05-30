import { Login } from './Login';
import { useState } from 'react';

interface LoginInterface {
    email: string
    password: string
}

function App() {
  const [users, setUser] = useState<LoginInterface>({} as LoginInterface)
  return (
    <Login />
  );
}

export default App;
