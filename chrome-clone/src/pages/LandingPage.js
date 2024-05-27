
import React, { useEffect, useRef } from 'react';
import { Container, Typography, Box, AppBar, Toolbar, Button } from '@mui/material';
import { Link as ScrollLink, Element } from 'react-scroll';
import ChromeImage from '../images/chrome.svg';
import meter from '../images/meter.png';
import Image1 from '../images/land4.webp';
import Image2 from '../images/land2.webp';
import Image4 from '../images/land1.webp';
import Image3 from '../images/land3.webp';
import Image5 from '../images/land5.webp';
import CardCarousel from './CardCarousel';
import '../App.css';

const LandingPage = () => {
  const imagesRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollDirection = scrollTop > (window.prevScrollTop || 0) ? 'down' : 'up'; 
      window.prevScrollTop = scrollTop; 
      imagesRef.current.forEach((image, index) => {
        const imageTop = image.offsetTop;
        const windowHeight = window.innerHeight;

        if (scrollDirection === 'up') {
          if (index === 2 || index === 4) {
            image.style.transform = 'scale(1.2)'; 
          } else {
            image.style.transform = 'translateX(0)';
          }
          image.style.opacity = 1;
        } else {
          if (scrollTop > imageTop - windowHeight && scrollTop < imageTop + windowHeight) {
            const distance = scrollTop / 5;
            requestAnimationFrame(() => {
              image.style.transform = `translateX(${distance}px)`; 
              image.style.opacity = 1;
            });
          } else {
            image.style.transform = 'translateX(0)';
            image.style.opacity = 0.5;
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* Main content */}
      <Container>
        <Box textAlign="center" py={4}>
          <img src={ChromeImage} alt="Chrome" style={{ height: '50px' }} />
          <Typography variant="h2" component="h1" sx={{ fontSize: '64px', lineHeight: '1.2', fontWeight: '700', fontFamily: 'Roboto, sans-serif' }}>
            The browser<br />built to be yours
          </Typography>
        </Box>
      </Container>

      {/* Small Navbar */}
      <AppBar sx={{ backgroundColor: '#ffffff', borderRadius: '20px', width: '400px', margin: '0 auto', position: 'static', top: 0, zIndex: 999 }}>
        <Toolbar>
          <Box display="flex" justifyContent="center" width="100%" gap={1}>
            <Button sx={{ color: '#747264', fontWeight: '500', fontFamily: 'Roboto, sans-serif', textTransform: 'none' }}>Updates</Button>
            <Button sx={{ color: '#747264', fontWeight: '500', fontFamily: 'Roboto, sans-serif', textTransform: 'none' }}>Yours</Button>
            <Button sx={{ color: '#747264', fontWeight: '500', fontFamily: 'Roboto, sans-serif', textTransform: 'none' }}>Safe</Button>
            <ScrollLink to="fastSection" smooth={true} duration={500}>
              <Button sx={{ color: '#747264', fontWeight: '500', fontFamily: 'Roboto, sans-serif', textTransform: 'none' }}>Fast</Button>
            </ScrollLink>
            <Button sx={{ color: '#747264', fontWeight: '500', fontFamily: 'Roboto, sans-serif', textTransform: 'none' }}>ByGoogle</Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Download Here */}
      <Container>
        <Box textAlign="center" py={4}>
          <Typography sx={{ fontSize: '24', lineHeight: '1.2', fontWeight: '300', fontFamily: 'Roboto, sans-serif', color: '#000' }}>
            Need The Chrome Installer? <span style={{ color: 'blue' }}>Download Here</span>
          </Typography>
        </Box>
      </Container>

      {/* Cards with animations */}
      <Box sx={{ overflow: 'hidden', width: '100vw', padding: 0, margin: 0 }}>
        <Box display="flex" justifyContent="center" py={4} className="image-container">
          {[Image1, Image2, Image3, Image4, Image5].map((src, index) => (
            <Box
              key={index}
              className={`scroll-image-box ${index === 0 || index === 3 || index === 4 ? 'large' : 'small'}`}
              ref={el => imagesRef.current[index] = el}
            >
              <img src={src} alt={`Image ${index + 1}`} className="scroll-image" />
            </Box>
          ))}
        </Box>
      </Box>

      {/* Fast Section */}
      <Element name="fastSection">
        <Box textAlign="center" py={4}>
          <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
            <Box display="flex" justifyContent="center" alignItems="center">
              <Typography variant="h2" component="span" sx={{ fontSize: '48px', lineHeight: '1.2', fontWeight: '700', fontFamily: 'Roboto, sans-serif' }}>
                The
              </Typography>
              <Box mx={2} px={2} py={1} sx={{ backgroundColor: '#e0f2f1', borderRadius: '20px', display: 'flex', alignItems: 'center' }}>
                <img src={meter} alt="Fast" style={{ height: '30px', marginRight: '10px' }} />
                <Typography variant="h2" component="span" sx={{ fontSize: '48px', lineHeight: '1.2', fontWeight: '700', fontFamily: 'Roboto, sans-serif', color: '#388e3c' }}>
                  fast
                </Typography>
              </Box>
              <Typography variant="h2" component="span" sx={{ fontSize: '48px', lineHeight: '1.2', fontWeight: '700', fontFamily: 'Roboto, sans-serif' }}>
                way to do
              </Typography>
            </Box>
            <Typography variant="h2" component="span" sx={{ fontSize: '48px', lineHeight: '1.2', fontWeight: '700', fontFamily: 'Roboto, sans-serif' }}>
              things now
            </Typography>
          </Box>
          
          {/* Carousel */}
          <br/>
          <br/>
          <CardCarousel />
        </Box>
      </Element>
    </div>
  );
};

export default LandingPage;
