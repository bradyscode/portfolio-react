import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.png'
import React, { Component, props} from 'react'
import { Link } from 'react-router';
import { Grommet, Nav, Anchor, Button } from 'grommet'
import { Github, Linkedin } from 'grommet-icons'


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

class Navigation extends Component {
    render() {
        return (

            <Nav align="center" flex={false} direction="row-responsive" justify="center" pad="large">
              <Anchor label="Home" href="/home" />
              <Anchor label="About Me" href="/about-me" />
              <Anchor label="Contact Me" href="/contact-me" />
              <Button plain icon={<Github />} href="http://github.com/bradyscode" />
              <Button plain icon={<Linkedin />} />
            </Nav>

        );
    }
}

export default Navigation;