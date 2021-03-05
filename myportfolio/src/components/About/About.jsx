import './style.css'

const About = () => {
    return (
        <div className="about">
            <h1>Bio</h1>
            <div className="bio">
            <p>I am always energetic and eager to learn new skills, with a positive attitude and who always strives to achieve the highest standard possible, at any given task. I love working in a team and meet new people from different cultures and listen to their stories. Passionate about web development.
            </p>
            <br />
            <qoute>"Don't aim for success if you want it, just do what you love and believe it will come naturally." -- Robert Frost</qoute>
            <br />
            <br />
            <img src={`${process.env.PUBLIC_URL}/success.jpg`} alt="image about success"/>
            </div>
        </div>
    )
}

export default About;