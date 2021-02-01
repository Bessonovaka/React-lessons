import { useRouteMatch } from 'react-router-dom';

function Users() {
        let match = useRouteMatch();
        return(
            <>
               <ul>
                    <li><a href={`${match.url}/ivanov`}>Ivanov</a></li>  
                    <li><a href={`${match.url}/petrov`}>Petrov</a></li>  
                </ul> 
            </>
        )
}

export default Users;