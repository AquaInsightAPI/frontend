"use client";
import { createContext} from 'react';

const UserContext = createContext({
    plan: '',
    email: '',
    name: '',
    secretKey:'',
});

export default UserContext;