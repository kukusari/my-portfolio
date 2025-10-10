import img1 from '../../src/assets/images/01.jpg';
import img2 from '../../src/assets/images/02.jpg';
import img3 from '../../src/assets/images/03.jpg';
// src/data/portfolioData.js - ตัวอย่างที่นักศึกษาต้องทำ
export const projects = [
  {
    id: 1,
    title: "todo-list",
    description: "A full-featured online store built with React and Node.js",
    image: img1,
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    githubUrl: "https://github.com/kukusari/react-workshop.git",

  },
  {
    id: 2,
    title: "introduction to web programming",
    description: "Real-time weather application with location-based forecasts",
    image: img2,
    technologies: ["React", "OpenWeather API", "CSS3"],
    githubUrl: "https://github.com/kukusari/TASK2PART2.git",

  },
  {
    id: 3,
    title: "Weather App",
    description: "Real-time weather application with location-based forecasts",
    image: img3,
    technologies: ["React", "OpenWeather API", "CSS3"],
    githubUrl: "https://github.com/kukusari/my-weather-app.git",

  },
];