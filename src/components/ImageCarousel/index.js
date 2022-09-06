import { useContext } from 'react'
import './style.css'
import { Carousel } from 'react-carousel-minimal';
import data from './homePageImages'
import { WidthContext } from '../../App';

const ImageCarousel = () => {
    const width = useContext(WidthContext)

    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    }
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    }

    const mobileStyle = {
        textAlign: "center",
        maxWidth: "1000px",
        maxHeight: "350px",
        margin: "0px auto",
    }

    const laptopStyle = {
        textAlign: "center",
        maxHeight: "600px",
        margin: "0 auto",
    }

    return (
        <div>
            <div id="carousel-container" style={{ textAlign: "center", height: "100%" }} >
                <Carousel
                    data={data}
                    time={1800}
                    width="100%"
                    height={width < 900 ? "350px" : "500px"}
                    radius="0px"
                    slideNumber={false}
                    slideNumberStyle={slideNumberStyle}
                    automatic={true}
                    dots={true}
                    // pauseIconColor="white"
                    // pauseIconSize="40px"
                    slideBackgroundColor="white"
                    slideImageFit="cover"
                    thumbnails={false}
                    thumbnailWidth="100px"
                // style={width < 900 ? mobileStyle : laptopStyle}
                />

            </div>
        </div >
    );
}

export default ImageCarousel