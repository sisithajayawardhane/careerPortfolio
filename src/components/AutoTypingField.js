import React from 'react'
import {Typewriter} from 'react-simple-typewriter'
import {Grid, Text} from '@nextui-org/react'

export default function AutoTypingField() {

    const strings = ['Full Stack Developer', 'iOS Developer'];

    
  return (
    <div class="bg-white m-1 text-center">
      <Grid md={12} sm={12} xs={0}>
        <Text h1 size={35}>
          
          <Typewriter
              words={strings}
              loop
              cursor
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
          /> 
        </Text>
      </Grid>
      
        
    </div>
  )
}
