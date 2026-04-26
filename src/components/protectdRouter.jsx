import { Navigate, Outlet, useLocation } from "react-router-dom"


const ProtectedRouter=({allowedRole}) =>{

    let loc = useLocation()

    const auth = localStorage.getItem("userRole")
    console.log(auth)
    console.log(allowedRole)

    if(!auth){
        return <Navigate to={"/"}/>

    }

    if( allowedRole  && !allowedRole.includes(auth)){
     return <Navigate to={"/"}/>
    }

    return <Outlet/>
    
}
export default ProtectedRouter