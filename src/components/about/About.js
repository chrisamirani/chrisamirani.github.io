import React from "react";
import "./style.css";
import Player from "../audio/Player";
export default function About() {
  return (
    <div id='about' className='about'>
      <model-viewer
        class='model'
        src='/model/656bb2fbfd16ab329ca29fe2.glb'
        ar
        ar-modes='webxr scene-viewer quick-look'
        poster='/imgs/avatar.jpeg'
        shadow-intensity='1'
        auto-rotate
      >
        {" "}
      </model-viewer>
      <div className='about-text'>
        <h1>About Me</h1>
        <p>Heya! This is M.C. (Chris)</p>
        <p>
          In short, I love three "things" the most in the world: nature, coding
          and entrepreneurship.
        </p>
        <p>
          I have a master's in computer science and have been a software
          engineer since 2013. I went to college and worked in China for 8 years
          and currently reside near Vancouver, BC. (Here's a longer version{" "}
          <Player audioUrl={"/intro.m4a"} />)
        </p>
        <p>
          At work I am outgoing and love making my coworkers laugh. I appreciate
          it when others do the same too. I also love solving hard problems and
          learning new things on the go.
        </p>
        <p>
          Outside of work if I am not working on my "million dollar ideas",
          you'll find me somewhere in the forests of North Vancouver or
          somewhere with a lake.
        </p>
      </div>
    </div>
  );
}
