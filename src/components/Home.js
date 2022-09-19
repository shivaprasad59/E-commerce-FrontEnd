
import React from 'react';
import ImageOne from '../images/advertise1.jpg'
import ImageTwo from '../images/advertise4.jpg'
import ImageFive from '../images/advertise3.jpg'
import ImageThree from '../images/advertise5.jpg'
import img2 from '../images/image2.jpg'

// import Card from './Card';
import ImageFour from '../images/advertise2.jpg'
// import ImageFive from '../images/advertise3.jpg'


function Home() {

    return (
        <div>
            {/* <div className=''>
                <img src = {ImageOne} />
            </div> */}

            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div className="carousel-inner">
                <div className="carousel-item">
                    <img src={ImageFive}  className="d-block w-100 h-50" alt="..."/>
                    </div>
                    <div className="carousel-item active">
                    <img src= {ImageOne} className="d-block w-100 h-50" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src={ImageTwo}  className="d-block w-100 h-50" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src={ImageThree}  className="d-block w-100 h-50" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src={ImageFour}  className="d-block w-100 h-50" alt="..."/>
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>

            </div>
            <div className='row mt-5 ms-2 me-2 '>
            <div className="card col-10 col-sm-5 col-md-3  mt-3">
         <img src={img2} className="card-img-top w-100" alt="..."/>
         <div className="card-body">
  </div>
</div>
<div className="card col-10 col-sm-5 col-md-3  mt-3">
         <img src={img2} className="card-img-top w-100" alt="..."/>
         <div className="card-body">
  </div>
</div>
<div className="card col-10 col-sm-5 col-md-3  mt-3">
         <img src={img2} className="card-img-top w-100" alt="..."/>
         <div className="card-body">
  </div>
</div>
<div className="card col-10 col-sm-5 col-md-3 mt-3 ">
         <img src={img2} className="card-img-top w-100" alt="..."/>
         <div className="card-body">
  </div>
</div>
<div className="card col-10 col-sm-5 col-md-3 mt-3 ">
         <img src={img2} className="card-img-top w-100" alt="..."/>
         <div className="card-body">
  </div>
</div>
<div className="card col-10 col-sm-5 col-md-3 mt-3 ">
         <img src={img2} className="card-img-top w-100" alt="..."/>
         <div className="card-body">
  </div>
  </div>
  <div className="card col-10 col-sm-5 col-md-3 mt-3 ">
         <img src={img2} className="card-img-top w-100" alt="..."/>
         <div className="card-body">
  </div>
  </div>
  <div className="card col-10 col-sm-5 col-md-3 mt-3 ">
         <img src={img2} className="card-img-top w-100" alt="..."/>
         <div className="card-body">
  </div>
                
                </div>
                <div className="card col-10 col-sm-5 col-md-3 mt-3 ">
         <img src={img2} className="card-img-top w-100" alt="..."/>
         <div className="card-body">
  </div>
                
                </div>
                <div className="card col-10 col-sm-5 col-md-3 mt-3 ">
         <img src={img2} className="card-img-top w-100" alt="..."/>
         <div className="card-body">
  </div>
                
                </div>
                <div className="card col-10 col-sm-5 col-md-3 mt-3 ">
         <img src={img2} className="card-img-top w-100" alt="..."/>
         <div className="card-body">
  </div>
                
                </div>
                <div className="card col-10 col-sm-5 col-md-3 mt-3 ">
         <img src={img2} className="card-img-top w-100" alt="..."/>
         <div className="card-body">
  </div>
                
                </div>
                <div className="card col-10 col-sm-5 col-md-3 mt-3 ">
         <img src={img2} className="card-img-top w-100" alt="..."/>
         <div className="card-body">
  </div>
                
                </div>
                <div className="card col-10 col-sm-5 col-md-3 mt-3 ">
         <img src={img2} className="card-img-top w-100" alt="..."/>
         <div className="card-body">
  </div>
                
                </div>
                <div className="card col-10 col-sm-5 col-md-3 mt-3 ">
         <img src={img2} className="card-img-top w-100" alt="..."/>
         <div className="card-body">
  </div>
                
                </div>
                <div className="card col-10 col-sm-5 col-md-3 mt-3 ">
         <img src={img2} className="card-img-top w-100" alt="..."/>
         <div className="card-body">
  </div>
                
                </div>
        </div>
        </div>
    )
}

export default Home