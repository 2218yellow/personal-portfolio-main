
import github from '../img/github-brands.svg';
import linkedin from '../img/linkedin-brands.svg';

const ContactPage = () => {
  return (
    <section className='contact' id='contact'>
      <div className='section-center'>
        <h2
          className='section-title'
          data-aos='zoom-in'
          data-aos-duration='1500'
        >
          Contact
        </h2>
        <div className='section-content'>
          <p>I am looking for job opportunities, and would love to connect!</p>
          <p>
            Find me on social media:
          </p>
          <div className='social-icons'>
            <a href='https://github.com/2218yellow'>
              <img src={github} alt='my github profile' />
            </a>
            <a href='https://www.linkedin.com/in/ndumiso-buthelezi-a73681214/'>
              <img src={linkedin} alt='my linkedin profile' />
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
