import { useState,useEffect } from 'react'
import api from './service/Api'; 
import './index.css'
import { ListNotice } from './components/ListNotices'

function App() {
  
    const[notices, setData] = useState([])

        useEffect(() => {
          loadNotices()
        }, [])
  
        async function loadNotices(){
          
          try{
            const res = await api.get('/')
            
            setData(res.data.items)
            console.log(res.data.items[1])

          }catch(error){
            console.log(error);
            
          }
            
        }
        return(
          <div>
            <div className="header">
              <h1>
                NOTÍCIAS DO BRASIL
              </h1>
            </div>

            {notices.map((notice) => <ListNotice notice={notice}/>)}
          </div>
          
        )
  } 
  export default App
  
