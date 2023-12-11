import React from 'react'

import { snsLink } from '../../data/footer'

const Footer = () => {
    return (
        <footer id='footer' role="contentinfo"> 
        <div className='footer__sns'>
            <ul>
                {snsLink.map((sns, key) => (
                    <li key={key}>
                        <a 
                            href={sns.url} 
                            target='_black' 
                            rel='noopener noreferrer' 
                            aria-label={sns.title}
                        >
                            <span>{sns.icon}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
        </footer>
    )
}

export default Footer