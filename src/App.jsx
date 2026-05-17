import { UserLogin } from "./Componnets/Login"
import Signup from "./Componnets/Signup"
import { Todo } from "./Componnets/Todo"


function App() {
const supabaseUrl =  import.meta.env.VITE_SUPABASEURL
  console.log(supabaseUrl)


  return (
    <UserLogin/>
    // <Todo/>
   
  )
}

export default App
