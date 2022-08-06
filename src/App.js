import { useEffect } from 'react';
import AllRoutes from './AllRoutes/AllRoutes';
import './App.css';
import { auth } from './firebase';
import {useSetvalue} from "./StateProvider"

function App() {
  const [{},dispatch] = useSetvalue();

  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      console.log('the user is',authUser);
      if(authUser){
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }
      else{
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
  },[])
  return (
          <div className="App">
            
            <AllRoutes/>
          </div>
  );
}

export default App;
