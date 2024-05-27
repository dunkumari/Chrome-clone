
// import React from 'react';
// import Slider from 'react-slick';
// import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import fast from '../images/fast video.mp4';
// import fastImg from '../images/fast-desktop.png';
// import '../App.css';

// const CardCarousel = () => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1
//   };

//   return (
//     <Slider {...settings}>
//       <Box px={2} className="slider-box">
//         <Card className="card">
//           <CardContent className="card-content">
//             <div className="left">
//               <Typography variant="h1" component="h1" sx={{ fontSize: '32px', lineHeight: '1.2', fontWeight: '700', fontFamily: 'Roboto, sans-serif' }}>Prioritise <br/> performance</Typography>
//             </div>
//             <div className="right">
//               <Typography variant="body2" sx={{ fontSize: '24', lineHeight: '1.2', fontWeight: '300', fontFamily: 'Roboto, sans-serif', color: '#000' }} >
//                 Chrome is built for performance. Optimise your experience with
//                 <br />
//                 features like Energy Saver and Memory Saver.
//               </Typography>
//             </div>
//           </CardContent>
//           <CardMedia className="card-media">
//             <video
//               src={fast}
//               title="Video Title"
//               autoPlay
//               loop
//               muted
//             />
//           </CardMedia>
//         </Card>
//       </Box>
//       <Box px={2} className="slider-box">
//         <Card className="card">
//           <CardContent className="card-content">
//             <div className="left">
//               <Typography variant="h5">Card 2</Typography>
//             </div>
//             <div className="right">
//               <Typography variant="body2">
//                 This is the content of the second card.
//               </Typography>
//             </div>
//           </CardContent>
//           <CardMedia className="card-media">
//             <img
//               src={fastImg}
//               title="Image Title 1"
//               alt="Image Title 1"
//             />
//           </CardMedia>
//         </Card>
//       </Box>
//       <Box px={2} className="slider-box">
//         <Card className="card">
//           <CardContent className="card-content">
//             <div className="left">
//               <Typography variant="h5">Card 3</Typography>
//             </div>
//             <div className="right">
//               <Typography variant="body2">
//                 This is the content of the third card.
//               </Typography>
//             </div>
//           </CardContent>
//           <CardMedia className="card-media">
//             <img
//               src={fastImg}
//               title="Image Title 2"
//               alt="Image Title 2"
//             />
//           </CardMedia>
//         </Card>
//       </Box>
//     </Slider>
//   );
// };

// export default CardCarousel;



import React from 'react';
import Slider from 'react-slick';
import { Box, Card, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import fast from '../images/fast video.mp4';
import fastImg from '../images/fast-desktop.png';
import '../App.css';

const CardCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      <Box px={2} className="slider-box">
        <Card className="card">
          <CardContent className="card-content" sx={{borderRadius: '10px'}}>
            <div className="left">
              <Typography variant="h1" component="h1" sx={{ fontSize: '32px', lineHeight: '1.2', fontWeight: '700', fontFamily: 'Roboto, sans-serif' }}>Prioritise <br/> performance</Typography>
            </div>
            <div className="right">
              <Typography variant="body2" sx={{ fontSize: '24', lineHeight: '1.2', fontWeight: '300', fontFamily: 'Roboto, sans-serif', color: '#000' }} >
                Chrome is built for performance. Optimise your experience with
                <br />
                features like Energy Saver and Memory Saver.
              </Typography>
            </div>
          </CardContent>
          <CardMedia className="card-media">
            <video
              src={fast}
              title="Video Title"
              autoPlay
              loop
              muted
            />
          </CardMedia>
        </Card>
      </Box>
      <Box px={2} className="slider-box">
        <Card className="card"  sx={{background: '#FFA62F' ,borderRadius: '10px'}}>
          <CardContent className="card-content">
            <div className="left">
              <Typography variant="h1" component="h1" sx={{ fontSize: '32px', lineHeight: '1.2', fontWeight: '700', fontFamily: 'Roboto, sans-serif' }}>Stay on top <br/>of tabs</Typography>
            </div>
            <div className="right">
              <Typography variant="body2" sx={{ fontSize: '24', lineHeight: '1.2', fontWeight: '300', fontFamily: 'Roboto, sans-serif', color: '#000' }}>
              Chrome has tools to help you manage the tabs you’re not quite ready to close. Group, label, and colour-code your tabs to stay organised and work faster.
              </Typography>
            </div>
          </CardContent>
          <CardMedia className="card-media">
            <img
              src={fastImg}
              title="Image Title 1"
              alt="Image Title 1"
            />
          </CardMedia>
        </Card>
      </Box>
      <Box px={2} className="slider-box">
        <Card className="card">
          <CardContent className="card-content">
            <div className="left">
              <Typography variant="h5">Card 3</Typography>
            </div>
            <div className="right">
              <Typography variant="body2">
                This is the content of the third card.
              </Typography>
            </div>
          </CardContent>
          <CardMedia className="card-media">
            <img
              src={fastImg}
              title="Image Title 2"
              alt="Image Title 2"
            />
          </CardMedia>
        </Card>
      </Box>
      
    </Slider>
  );
};

export default CardCarousel;
