import React from 'react';
import Styles from './Styles/Style.css'


function Header() {
    return (
        <header>
            <nav>
                <div className="habr"><a href="https://habr.com/ru/">habr</a></div>
                <div className='list'>

                    <a href="https://habr.com/ru/">Публикации</a>
                    <a href="https://habr.com/ru/news/">News</a>
                    <a href="https://habr.com/ru/users/">Users</a>
                    <a href="https://habr.com/ru/hubs/">Hubs</a>
                    <a href='https://habr.com/ru/companies/'>Companies</a>
                    <a href="https://habr.com/ru/sandbox/">Sandbox</a>

                </div>
                <button>Войти</button>
                <button>Registration</button>
            </nav>

        </header >
    )
}

export default Header;