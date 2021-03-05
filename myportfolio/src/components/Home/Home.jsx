import './style.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
            <div className="title">
                <h1>
                    <p>Hi,</p>
                    <p>I am Mika</p>
                    <p>Web developer</p>
                </h1>
                <Link to="/about">
                    <button>More info</button>
                </Link>
            </div>
            <div className="person">
                <img src={`${process.env.PUBLIC_URL}/Mika.jpg`} alt="person image"/>
            </div>
        </div>
    )
}

export default Home;
