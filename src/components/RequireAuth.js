import { useLocation, Navigate } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';

function RequireAuth({children, type}) {
    const location = useLocation();
    const { route } = useAuthenticator((context) => [context.route]);
    const { user } = useAuthenticator((context) => [context.user]);
    if (route !== 'authenticated'){
        return <Navigate to="/login" state={{ from: location}} replace />;
    }
    else{ 
        const userGroup = user.signInUserSession.accessToken.payload["cognito:groups"][0];
        if (userGroup !== type){
            console.log("ramura else din requireAuth")
            console.log(userGroup, type)
            const from = location.state?.from || '/'; // Get the previous location or fallback to the home page
            return <Navigate to={from} replace />;
        }
    }
    return children;
}

export {RequireAuth};