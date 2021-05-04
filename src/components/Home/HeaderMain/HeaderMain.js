
import React from 'react';
import Buttons from '../../../UI/Buttons';
import Type from './Type';


const HeaderMain = () => {
  return (
    <section id="header-main" className="py-5 mb-5 text-center">
      <div className="container py-5 mb-5">
        <div className="row">
          <div className="col align-items-center align-self-center mt-5">
            <p className="mb-0 font-30 uppercase bold-500 text-white  ls-1"><span className="primaryColor font-25 d-block">Hello,</span> I'm Taieb Hossain</p>
            <Type></Type>
            <div className="d-flex justify-content-center mt-5">
              <div>
                <Buttons label="Hire Me"></Buttons>
              </div>
              <div className="mx-3">
                <Buttons link="https://drive.google.com/file/d/1CcDw9qsrsjlw2l37Qe1-K4v3tL8-dVYb/view?usp=sharing" label="Download Resume" inverse></Buttons>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default HeaderMain;