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
        maxHeight: "500px",
        margin: "0px auto",
    }

    const laptopStyle = {
        textAlign: "center",
        maxWidth: "1000px",
        maxHeight: "500px",
        margin: "40px auto",
    }

    return (
        <div>
            <div style={{ textAlign: "center" }}>
                <div style={{
                }}>
                    <Carousel
                        data={data}
                        time={2000}
                        width="100%"
                        height="350px"
                        radius="0px"
                        slideNumber={false}
                        slideNumberStyle={slideNumberStyle}
                        automatic={true}
                        dots={true}
                        pauseIconColor="white"
                        pauseIconSize="40px"
                        slideBackgroundColor="white"
                        slideImageFit="cover"
                        thumbnails={false}
                        thumbnailWidth="100px"
                        style={width < 900 ? mobileStyle : laptopStyle}
                    />
                </div>
            </div>
        </div>
    );
}

export default ImageCarousel