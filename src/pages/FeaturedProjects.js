// import working from '../img/character 10.svg';
import github from '../img/github-brands.svg';
import link from '../img/external-link-alt-solid.svg';

const FeaturedProjects = () => {
  return (
    <section className='projects' id='projects'>
      <h2 className='section-title' data-aos='zoom-in' data-aos-duration='1500'>
        Some Things I've Built
      </h2>

      <div className='section-content'>
        {/* Project */}
        <div
          className='featured-project'
          data-aos='flip-left'
          data-aos-duration='800'
        >
          <h3>Izinto Cleaning</h3>
          <p className='section-text'>
            A web app that allows users to request services online.<br/>
            Implemented payment sandbox using Payfast.<br/>
            Implemented UI template using CSHTML and CSS.
          </p>
          <div className='technologies'>
            <p>C#</p>
            <p>JavaScript</p>
            <p>Entity Framework</p>
          </div>
          <div className='project-social'>
            <a href='https://github.com/2218yellow/CleaningApp'>
              <img src={github} alt='' />
            </a>
          </div>
        </div>
        {/* End of Project */}

        {/* Project */}
        <div
          className='featured-project'
          data-aos='flip-left'
          data-aos-duration='1000'
        >
          <h3>Online Clothing Store</h3>
          <p className='section-text'>
            A web app that allows users to purchase and pay for goods online.<br/>
            Users could track orders and confirming delivery with QR code.<br/>
            Implemented payment sandbox using Payfast.
          </p>
          <div className='technologies'>
            <p>C#</p>
            <p>JavaScript</p>
            <p>Entity Framework</p>
          </div>
          <div className='project-social'>
            <a href='https://github.com/2218yellow/Online-Web-App'>
              <img src={github} alt='' />
            </a>
          </div>
        </div>
        {/* End of Project */}

        {/* Project */}
        <div
          className='featured-project'
          data-aos='flip-left'
          data-aos-duration='1200'
        >
          <h3>Commu-Balance</h3>
          <p className='section-text'>
            A web app that allows users to be donors or recipients.<br/>
            Implemented payment sandbox using Payfast for donors to donate funds.<br/>
            Allow donors to download receipts for donations made.<br/>
          </p>
          <div className='technologies'>
            <p>C#</p>
            <p>JavaScript</p>
            <p>Entity Framework</p>
          </div>
          <div className='project-social'>
            <a href='https://github.com/2218yellow/CommuBalance'>
              <img src={github} alt='' />
            </a>
          </div>
        </div>
        {/* End of Project */}
      </div>
    </section>
  );
};

export default FeaturedProjects;
