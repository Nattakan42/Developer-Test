import React from "react";
import Contact from "../../components/CV/contact";
import Content from "../../components/CV/content";

const Cv = () => {
  return (
    <div>
      <header className="bg-primary bg-gradient text-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-left text-md-center mb-3">
              <img
                className="rounded-circle "
                src="/img/nattakan.png"
                alt="Profile Photo"
                width={220}
                height={220}
              />
            </div>
            <div className="col-md-9">
              <h1>Nattakan Nuykliang</h1>
              <h5>Web Developer</h5>
              <p className="border-top pt-3">
                {" "}
                I am a recent graduate with a strong interest in programming and
                technology, particularly in developing user-friendly and
                efficient web applications and websites. Committed to continuous
                growth and improvement in the field, I am dedicated to learning
                and staying updated with the latest advancements. I believe in
                the power of collaboration and teamwork, and I strive to deliver
                quality work and solve problems effectively for organizations.{" "}
              </p>
            </div>
          </div>
        </div>
      </header>
      <Contact/>
      <Content/>
    </div>
  );
};

export default Cv;
