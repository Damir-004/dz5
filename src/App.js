import React,{useState} from 'react';
import './App.css';

const App = ()=>{
    const [show, setShow] = useState(true)

    return(
        <div className='box'>
            <button onClick={()=>setShow(true)}>Show dialog</button>
            {show && 
                <div className='block'>
                    <div className='blockBox'>
                        <p>Dialog Title</p>
                        <p>Body</p>
                        <button onClick={()=>setShow(false)}>Hide</button>
                    </div>
                </div>
            }
        </div>
    )
}
export default App;