import React, {View} from "react";
import { Placeholder } from 'react-bootstrap'
import ReactDOM from 'react-dom';
import ReactLogo from './react-logo.png'
import CSharpLogo from './cs-logo.svg'
import DotNetLogo from './net-logo.png'
import VueLogo from './vue-logo.png'
import GradPicture from './grad-pic.jpg'
import { Grommet, Page, PageContent, Box, Text, Image, Grid } from 'grommet'

const theme = {
    "global": {
      "colors": {
        "background": {
          "light": "#ffffff",
          "dark": "#000000"
        }
      },
      "font": {
        "family": "-apple-system,\n         BlinkMacSystemFont, \n         \"Segoe UI\", \n         Roboto, \n         Oxygen, \n         Ubuntu, \n         Cantarell, \n         \"Fira Sans\", \n         \"Droid Sans\",  \n         \"Helvetica Neue\", \n         Arial, sans-serif,  \n         \"Apple Color Emoji\", \n         \"Segoe UI Emoji\", \n         \"Segoe UI Symbol\""
      }
    },
    "button": {
      "extend": [
        null
      ]
    }
  }

const About = () => {
  return (
    <Grommet>
    <Page background={{"position":"center"}}>
    <PageContent>
      <Box align="center" justify="center" direction="row-responsive">
        <Text>
            A software engineer with a passione for creating, debugging, and optimizing. I am goal driven. My current work experience is 1 year professionally but, I have been coding since I was a freshman in high school (8 years ago). When I'm not creating software you can find me playing video games, hanging out with friends, admiring the newest car trends, and playing with my wonderful dog Hart. 
        </Text>
        <Image src="https://careercenter.tamu.edu/Images/New-Web-Icons-2021/appointments_230x180-02" width="50%"/>
      </Box>
    </PageContent>
  </Page>
</Grommet>


  );
};
  
export default About;