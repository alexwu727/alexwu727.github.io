import React from 'react';
import contacts from '../data/contactData';

const Contact = () => {

    return (
        <div>
            <div className='title'>Contact</div>
            <div className="contact">
                <p>Welcome to my online portfolio page! Here, you can find links to my various online profiles and professional work. You can connect with me on the following platforms:</p>
                <ul>
                    {contacts.map((item) => {
                        let icon = require(`../images/icons/${item.icon}`)
                        return (
                            <li>
                                <img src={icon} className="icon" />
                                <div className='item'>
                                    <div className='key'>{`${item.key}: `}</div>
                                    {
                                        item.isLink ?
                                            <a className='value' href={item.value}> {item.display} </a> :
                                            <div className='value'> {item.value} </div>
                                    }
                                </div>
                            </li>
                        );
                    })}
                </ul>
                <p>Feel free to take a look around and view my work. I welcome any questions or feedback you may have.</p>
            </div>
        </div>
    )
}
export default Contact