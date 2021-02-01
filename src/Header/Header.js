import React from 'react';

export default class Header extends React.Component{
    render() {
        return(
            <>
                <nav>
                    <li>
                        <a>Main</a>
                    </li>
                    <li>
                        <a>About</a>
                    </li>
                    <li>
                        <a>Users</a>
                    </li>
                </nav>
            </>
        )
    }
}
