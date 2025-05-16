import React from 'react'
import { AuthContext } from '../../AugthContext'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../fairebase/firebase.init'

function AugthProvider({children}) {



    const createuser = (email, password)=>{
        return createUserWithEmailAndPassword(auth,email, password)
    }

    const userIinfo = {
        createuser,

    }
  return (
   <AuthContext.Provider value={userIinfo}>
        {children}
   </AuthContext.Provider>
  )
}

export default AugthProvider