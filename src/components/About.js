import aboutImg from '../images/about.jpeg'
import Title from './Title'

const About = () => {
  return (
    <section className="section" id="about">
      <Title title="about" subTitle="us" />

      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            Extremity sweetness difficult behaviour he of. On disposal of as
            landlord horrible. Afraid at highly months do things on at.
            Situation recommend objection do intention so questions.
          </p>
          <p>
            As greatly removed calling pleased improve an. Last ask him cold
            feel met spot shy want. Children me laughing we prospect answered
            followed. At it went is song that held help face.
          </p>
          <a href="#about" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  )
}
export default About
