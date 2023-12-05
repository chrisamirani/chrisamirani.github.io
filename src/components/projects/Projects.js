import React from "react";
import ProjectThumbnail from "./ProjectThumbnail";

const projects = [
  {
    title: "RC Streamer (FindDan)",
    image: "car-project.jpg",
    year: 2023,
    description:
      "This was an exciting project for me because I always wanted to test the limits of real-time interaction latency with robots over the internet. Specifically, I wanted to achieve sub-second latency with video streaming. To do this I used a new protocol called WebRTC-HTTP ingestion protocol (WHIP). This helped me stream video and interact with my robot on average under 400ms. This is truely game changing for the future of streaming.",
  },
  {
    title: "Room Planner (MetaMix)",
    image: "floorplanner-project.jpg",
    year: 2022,
    description:
      "After some furniture buying problems, I was very curious to find a solution to visualize the furniture I wanted in my space. This led to developing my own floor planner with Three.js. This meant having to relearn geometry and use some good old high school math. I was able to design my floor in 2D space with canvas, then convert the plan to 3D walls and fixtures using Three.js. I also had to write a scraper to download over 1500 furniture models from Wayfair and add them to my planner. Using google's model-viewer, I was able to view these designs in AR on mobile devices.",
  },
  {
    title: "ICBC Road Test Finder (OpenSlot)",
    image: "openslot-project.jpg",
    year: 2021,
    description:
      "When I decided to get my driver's license, I was told that I had to wait months to find a road test appointment. As an impatient person, that's like having to walk on glass everyday. So looking into ICBC's backend, I soon figured out how their scheduling worked and was able to create a bot that notified me when a road test was available. That meant instead of waiting months, I waited days.",
  },
];

export default function Projects() {
  return (
    <div id='projects'>
      <h1>Recent Passion Projects</h1>
      <div className='projects'>
        {projects.map((project, index) => (
          <ProjectThumbnail
            key={index}
            title={project.title}
            image={project.image}
            description={project.description}
            year={project.year}
          />
        ))}
      </div>
    </div>
  );
}
