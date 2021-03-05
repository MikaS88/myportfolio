import './style.css';

const Footer = () => {
    return (
        <footer>
            <a
            href="https://www.linkedin.com/in/mihaela-sarbeanu-68449577/" target="_blank">
                <img src={`${process.env.PUBLIC_URL}/Linkedin1.png`} alt="linkedin icon"/>
            </a>
            <a
            href="https://github.com/MikaS88" target="_blank">
               <img src={`${process.env.PUBLIC_URL}/Github1.png`} alt="github icon"/>
            </a>
        </footer>
    )
}

export default Footer;
