import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { Myvalues } from './Authcontext';

import Signin  from '../pages/Authenticate/signin';
// Example authentication check function

const ProtectedRoute = ({ children }) => {
    const router = useRouter();
    const {datas,setdatas}=useContext(Myvalues)
 return <>{Object.keys(datas).length===0 && !['/admin', '/Authenticate/register'].includes(router.pathname)?<Signin/>
    :children}</>;
};

export default ProtectedRoute;
