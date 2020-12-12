import React from 'react';
import HomeIcon from '@material-ui/icons/Home';

function Header () {

    const Imp_Info_url = "https://harcourts.com.au/People/30164/Rachael-Luo?tab=for-sale"

    const register_button = {
        'padding' : '5px 20px ',
        'margin' : '0'
    }

    return (
    <header>
        {/*Nav Bar*/}
        <nav className="navbar navbar-expand-lg navbar-dark nav_bg">
            <a className="navbar-brand nav_brand_font_size" href={Imp_Info_url} target='house'><HomeIcon style={{fontSize: 50 }}/>Harcourts</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNav">
                <ul className="navbar-nav  ml-auto">
                    <li className="nav-item">
                        <a className="nav-link nav-pad" href="/contact">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link nav-pad" href="/about">About</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link nav-pad" href="/">home</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link BUTTON_TBH " href="/register" style={register_button}>Register</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    )
}

export default Header;