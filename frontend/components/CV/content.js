import React from 'react'

const Content = () => {
  return (
    <div className="container">
    <div className="row justify-content-center">
      <div className="col-sm-6">
        <div className="card">
        <div className="bg-primary bg-gradient  text-white">
            <h3 className="card-title text-center">Education</h3>
            </div>
          <div className="card-body ">
            <ul className="mt-3">
              <li>
                <h6 className="text-primary">Rangsit University 2018-2023</h6>
                <p>
                  Bachelor of Engineering Program in Computer Engineering
                </p>
              </li>
              <li>
                <h6 className="text-primary">
                  SatriPhattalung School 2012-2018
                </h6>
                <p>English-Mathematics Program</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="card h-100">
        <div className="bg-primary text-white bg-gradient ">
            <h3 className="card-title text-center">Experience</h3>
            </div>
          <div className="card-body">
            <ul className="mt-3">
              <li>
                <h6 className="text-primary">
                  Back-end Developer Internship / July 18 - December 9, 2022
                </h6>
                <ul>
                  <li>Designed and implemented database structures.</li>
                  <li>Developed and maintained API services.</li>
                  <li>Conducted unit testing.</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-sm-12 mt-3 mb-5">
        <div className="card ">
        <div className="bg-primary bg-gradient  text-white">
            <h3 className="card-title text-center">Skill</h3>
            </div>
          <div className="card-body">
            <div className="container">
              <div className="row p-3 d-flex justify-content-center">
                <div className="col-sm-4 mt-3">
                  <h5 className="text-center">Programming Languages</h5>
                  <ul className="mt-3">
                    <li>
                      <h6>JavaScript</h6>
                    </li>
                    <li>
                      <h6>TypeScript</h6>
                    </li>
                    <li>
                      <h6>HTML</h6>
                    </li>
                    <li>
                      <h6>CSS</h6>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-4 mt-3">
                  <h5 className="text-center">Tools and Frameworks</h5>
                  <ul className="mt-3">
                    <li>
                      <h6>Node.js</h6>
                    </li>
                    <li>
                      <h6>Express.js</h6>
                    </li>
                    <li>
                      <h6>GraphQL</h6>
                    </li>
                    <li>
                      <h6>React.js</h6>
                    </li>
                    <li>
                      <h6>Next.js</h6>
                    </li>
                    <li>
                      <h6>Git</h6>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-4 mt-3">
                  <h5 className="text-center">Database</h5>
                  <ul className="mt-3 ">
                    <li>
                      <h6>PostgreSQL</h6>
                    </li>
                    <li>
                      <h6>MySQL</h6>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Content