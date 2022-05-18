import React, {View} from "react";
import { Placeholder } from 'react-bootstrap'
import ReactDOM from 'react-dom';
import ReactLogo from './react-logo.png'
import CSharpLogo from './cs-logo.svg'
import DotNetLogo from './net-logo.png'
import VueLogo from './vue-logo.png'
import GradPicture from './grad-pic.jpg'


const About = () => {
  return (

        <div>
            <div class="container overflow-hidden">
            <div class="row gy-5">
                <div class="row-md-4">
                    <h1>Brady Stohler</h1>
                    <div class="row row-cols-auto">
                <div class="col"><img src={DotNetLogo} width="30"/></div>
                <div class="col"><img src={CSharpLogo} width="30"/></div>
                <div class="col"><img src={ReactLogo} width="30"/></div>
                <div class="col"><img src={VueLogo} width="30"/></div>
            </div>
                </div>
            </div>
            <div class="row gy-5">
                <div class="col-7"> <p class="lead">A software engineer with a passione for creating, debugging, and optimizing. I am goal driven. My current work experience is 1 year professionally but, I have been coding since I was a freshman in high school (8 years ago). When I'm not creating software you can find me playing video games, hanging out with friends, admiring the newest car trends, and playing with my wonderful dog Hart. <br/> <br/> If you want to know more about me please contact me by clicking the "Hire Me!" button at the top! You can also view my resume by clicking the "Resume" button at the top of the page! This will also include multiple ways to contact me as well as my professional experience.</p> </div>
                <div class="col"><img src={GradPicture} width="500"/></div>
            </div>
            </div>
            <div class="container">
            <div class="row">
                <div class="col">
                1 of 3
                </div>
                <div class="col">
                2 of 3
                </div>
                <div class="col">
                3 of 3
                </div>
            </div>
            </div>
        </div>


  );
};
  
export default About;