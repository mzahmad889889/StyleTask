import styled from 'styled-components'
import React from 'react'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import {motion} from 'framer-motion'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 150px;
    
`

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${({color})=> color};
  width: 400px;
  height: 260px;
  margin-left: 5px;
  border-radius: 5px;
  border-color: none;
  outline : 0;
  

`


function Home() {

  const Red = 'red';
  const Green = 'green';
  const Blue = 'blue';
  return (
    <div>
      <Container>
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        animate={{ y: -100, x: 50 }}
        transition={{ ease: "easeIn", duration: 1 }}
      >
      <Section color={Red}>
            <img style={{borderRadius: '10px', zIndex:2}} src={img1} alt='img1'/>
      </Section>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        animate={{ y: 50 }}
        transition={{ ease: "easeIn", duration: 1 }} 
      >
      <Section color={Green}>
        <img style={{borderRadius: '10px', zIndex:1}} src={img2} alt='img2'/>
      </Section>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        animate={{ y: -100, x: -50 }}
        transition={{ ease: "easeIn", duration: 1 }}
      >
      <Section color={Blue}>
        <img src={img3} style={{borderRadius: '10px', zIndex:2}} alt='img3'/>
      </Section>
      </motion.div>
      </Container>
    </div>
  )
}

export default Home

   
