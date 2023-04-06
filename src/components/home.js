import { useState } from 'react';
import Backdrop from './Backdrop';
import Model from './Model';

const Home = (props) => {
const [ showModel,setModel ] = useState(false);

const deleteHandler = () => {
    setModel(true);
}

const closeModel = () => {
    setModel(false);
}

    return ( 
        <div className="home">
            <div className="card">
                <h2>{props.titile}</h2>
                <div className="action">
                    <button className="btn" onClick={deleteHandler}>Delete</button>
                </div>
            </div>
            { showModel && <Model onCancel={closeModel} onConfirm={closeModel}/>  }
            { showModel && <Backdrop onClick={closeModel}/>  }
            

        </div>
     );
}
 
export default Home;