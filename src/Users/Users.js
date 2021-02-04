import { useRouteMatch } from 'react-router-dom';
import React from 'react';
import {useState} from 'react';

function Users() {

        const [count, setCount] = useState(0);
        const [comment, setComment] = useState([]);

        let myRef = React.createRef();

        let match = useRouteMatch();

        let handler = () => {
            let currentCount=count;
            currentCount++;
            setCount(currentCount);
        }

        let addComment = () => {
            let commentValue = myRef.current.value;
            let comments = [...comment, commentValue];
            setComment(comments);
            myRef.current.value='';
        }

        return(
            <>
               <ul>
                    <li><a href={`${match.url}/ivanov`}>Ivanov</a></li>  
                    <li><a href={`${match.url}/petrov`}>Petrov</a></li>  
                </ul> 
                <h1> Function State</h1>
            <div>
                <button onClick = {handler}>This button change state</button>
            </div>
            <div>
                {count}
            </div>
            <div>
                <textarea ref={myRef}></textarea>
            </div>
            <div>
                <button onClick={addComment}>Add comment</button>
            </div>
            <div>
                <ul>
                    {comment.map((item, index) => <li key={index.toString()}>{item}</li>)}
                </ul>
            </div>
            </>
        )
}

export default Users;