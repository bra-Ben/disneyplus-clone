import styled from "styled-components"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function ImageSlider() {
    
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true
    }

    return (
        <Carousel {...settings}>
            
        </Carousel>
    )
}

export default ImageSlider

const Carousel = styled(Slider)`

`






