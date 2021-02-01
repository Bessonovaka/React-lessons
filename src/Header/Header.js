import React from 'react';

export default class Header extends React.Component{
    render() {
        return(
            <>
                <h1>Header {this.props.data.site_name}</h1>
                <Nav nav = {this.props.data.nav} />
            </>
        )
    }
}

function Nav(props) {
        let data = props.nav;
        const listItem = data.map( item => <li key={item.link}><a href={item.link}>{item.text}</a></li>)
        return(
            <>
                <ul>
                    {listItem}
                </ul>
            </>
        )
}