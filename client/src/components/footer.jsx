


function Footer(props){

    const phone = '+61 401 506 620'
    const email = "rachael.luo@harcourts"

    const house = 'https://harcourts.com.au/People/30164/Rachael-Luo?tab=for-sale'
    return (
    <footer id={props.id}>
            <div>
                <a href={'mailto: ' + email}> <i className="far fa-envelope fa-lg"></i> </a>
                <a href={'tel: ' + phone}><i className="fas fa-mobile-alt fa-lg"></i></a>
                <a href={house} target='house'><i className="fas fa-home fa-lg"></i></a>
            </div>
            <p>@2020 Harcourts</p>
    </footer>
    )
}

export default Footer;
