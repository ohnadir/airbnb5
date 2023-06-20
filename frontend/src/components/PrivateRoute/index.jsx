import { useEffect } from "react";
import Spinner from "../Spinner";
import { useSelector } from 'react-redux'

const PrivateRoute = ({children, setAuthModal}) => {
    const { isAuthenticated, loading } = useSelector(state => state.auth);
    useEffect(()=>{
        if (loading) {
            <Spinner/>
        }
    },[loading])
    
    if (isAuthenticated) {
        return children;
    }else{
        return setAuthModal(true)
    }
}

export default PrivateRoute