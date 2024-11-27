import React from 'react'

const HeroSection = () => {
  return (
    <>
        <div id="carouselExampleCaptions" className="carousel slide d-none" data-bs-ride="false">
            
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="..." className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default HeroSection