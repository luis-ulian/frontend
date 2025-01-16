import './Home.scss'
import bannerPrincipal1 from './public/static/images/image-crop1.png'
import bannerPrincipal2 from './public/static/images/image-crop2.png'

function Home(){
    return(
        <body className='home'>
                <div className="grid1">
                    <img src={bannerPrincipal1} alt="banner-principal1" className="banner-principal1"/>
                    <img src={bannerPrincipal2} alt="banner-principal2" className="banner-principal2"/>
                </div>                
        </body>
    );
}

export default Home
