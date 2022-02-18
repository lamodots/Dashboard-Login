import illustration from './images/ill.jpg';
import './App.css';
function Hero(){
    return(
        <div className="Container">
        <div className="Hero-Container">
            <div className="Content">
                <h1 className="Heading-1">Ominicron Studios</h1>
                <p className="HeroParagraph">We make sure you have fun to the fullest. comment with different game players from all over the globe.</p>
                <a className="Cta" href="https://www.reactjs.org">Get started</a>
            </div>
            <div className="Illustration">
                <img src={illustration} alt="Ominicro identitity" className="illustare" />
            </div>

            

        </div>
       
        </div>


    );
}

export default Hero;