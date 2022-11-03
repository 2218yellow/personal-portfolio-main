import about from '../img/drawkit-support-woman-colour.svg';
import caretright from '../img/caret-right-solid.svg';

const AboutPage = () => {
  return (
    <section className='about-page' id='about'>
      <div className='section-center'>
        <h2
          className='section-title'
          data-aos='zoom-in'
          data-aos-duration='1500'
        >
          About Me
        </h2>
        <div className='section-content'>
          <img src={about} alt='' />
          <p className='section-text'>
            I am a well organized and determined graduate from the Durban University of Technology
            <br/> seeking a position as an entry level Software Engineer.
            
            <br />
            <br />
            I am passionate about building because I enjoy the process of piecing things
            together <br/> in order to produce a master piece that is at my level at that point , so this field is perfect
            <br />
            for me since I am also very eager to grow and 
            I want to build that is going to have<br />
             an impact in people's lives.
            <br />
            <br />

            Here are a few languages and technologies I've been exposed to thus far:
          </p>

          <div className='technologies'>
            <div className='single-technology'>
              <img src={caretright} alt='' />
              <p>HTML5</p>
            </div>
            <div className='single-technology'>
              <img src={caretright} alt='' />
              <p>CSS3</p>
            </div>
            <div className='single-technology'>
              <img src={caretright} alt='' />
              <p>JavaScript</p>
            </div>
            <div className='single-technology'>
              <img src={caretright} alt='' />
              <p>Python</p>
            </div>
            <div className='single-technology'>
              <img src={caretright} alt='' />
              <p>C#</p>
            </div>
            <div className='single-technology'>
              <img src={caretright} alt='' />
              <p>Azure</p>
            </div>
            <div className='single-technology'>
              <img src={caretright} alt='' />
              <p>Azure Blob Storage</p>
            </div>
            <div className='single-technology'>
              <img src={caretright} alt='' />
              <p>Entity Framework</p>
            </div>
            <div className='single-technology'>
              <img src={caretright} alt='' />
              <p>React</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
