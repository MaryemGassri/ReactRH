import React from 'react'

function About() {
  return (
    <div>
      <div className="container-xxl bg-white p-0">

        {/* Header Start */}
        <div className="container-xxl py-5 bg-dark page-header mb-5">
          <div className="container my-5 pt-5 pb-4">
            <h1 className="display-3 text-white mb-3 animated slideInDown">About Us</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb text-uppercase">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item"><a href="#">Pages</a></li>
                <li className="breadcrumb-item text-white active" aria-current="page">About</li>
              </ol>
            </nav>
          </div>
        </div>
        {/* Header End */}

        {/* About Section */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5 align-items-center">

              {/* Images */}
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                <div className="row g-0 about-bg rounded overflow-hidden">
                  <div className="col-6 text-start">
                    <img className="img-fluid w-100" src="img/about-1.jpg" alt="office teamwork" />
                  </div>
                  <div className="col-6 text-start">
                    <img className="img-fluid" src="img/about-2.jpg" alt="business meeting" style={{ width: '85%', marginTop: '15%' }} />
                  </div>
                  <div className="col-6 text-end">
                    <img className="img-fluid" src="img/about-3.jpg" alt="talent hiring" style={{ width: '85%' }} />
                  </div>
                  <div className="col-6 text-end">
                    <img className="img-fluid w-100" src="img/about-4.jpg" alt="corporate environment" />
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                <h1 className="mb-4">Connecting Ambitious Talent With Meaningful Career Opportunities</h1>

                <p className="mb-4">
                  We bridge the gap between skilled professionals and companies seeking to grow.
                  Whether you're building your career or expanding your team, we make hiring
                  and job discovery faster, smarter, and more efficient for everyone.
                </p>

                <p><i className="fa fa-check text-primary me-3"/> Smart and targeted job matching</p>
                <p><i className="fa fa-check text-primary me-3"/> Verified talent with proven skills</p>
                <p><i className="fa fa-check text-primary me-3"/> Faster hiring with less complexity</p>

                <a className="btn btn-primary py-3 px-5 mt-3" href="#">Learn More</a>
              </div>

            </div>
          </div>
        </div>
        {/* About End */}

        {/* Back to Top */}
        <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
          <i className="bi bi-arrow-up" />
        </a>

      </div>
    </div>
  )
}

export default About