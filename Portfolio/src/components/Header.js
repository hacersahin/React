import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: av.hacersahin@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/hacersahin",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/hacersahin/",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];
/** 
* Bu bileşen hem useRef kancasının he de useEffect kancasının kullanılmasını göstermektedir. 
* UseRef kancası, başlık stillerini değiştirmek ve bir geçiş animasyonu çalıştırmak için bir DOM öğesine referans oluşturmak için kullanılır.. 
* useEffect kancası, bileşen monte edildiğinde bir abonelik gerçekleştirmek ve bileşen çıkarıldığında abonelikten çıkmak için kullanılır. 
* Ek olarak, başlık öğelerine tıklandığında sayfanın farklı bölümlerine sorunsuz bir şekilde gitmek için düzgün bir uygulama sergiliyor. 

*/
const Header = () => {
  const headerRef = useRef(null)

  useEffect(() => {
    let prevScrollPos = window.scrollY;
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const headerElement = headerRef.current;
      if (!headerElement) {
        return;
      }
      if (prevScrollPos > currentScrollPos) {
        headerElement.style.transform = "translateY(0)";

      } else {
        headerElement.style.transform = "translateY(-200px)"
      }
      prevScrollPos = currentScrollPos;
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }

  }, []);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      ref={headerRef}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
              {socials.map(({ icon, url }) => (
                <a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"

                >
                  <FontAwesomeIcon icon={icon} size="2x" key={url} />
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a
                href="/#projects-section"
                onClick={handleClick("projects-section")}
              >
                Projects
              </a>
              <a
                href="/#contactme-section"
                onClick={handleClick("contactme-section")}
              >
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
