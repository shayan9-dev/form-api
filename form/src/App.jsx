import { useState } from 'react'
import RegistrationForm from './registrationform'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
   <h1>Register New Account</h1>
   <RegistrationForm/>
     
    </>
  )
}

export default App
