import React from 'react';
import ProjectCard from '../components/ProjectCard';

import bbot from '../assets/bbot/bbot.jpg' ;

import ddar1 from '../assets/DDAR/gazebo_setup.png' ;
import ddar3 from '../assets/DDAR/fusion_photo.png' ;
import ddar2 from '../assets/DDAR/working.png' ;

import eyantra1 from '../assets/eyantra/boxes.jpg' ;
import eyantra2 from '../assets/eyantra/det.jpg' ;
import eyantra3 from '../assets/eyantra/rack.jpg' ;
import eyantra4 from '../assets/eyantra/rack_det.jpg' ;

import robotic_palm1 from '../assets/robotic_palm/3d+printed.png' ;
import robotic_palm2 from '../assets/robotic_palm/fusion.png' ;

import Lawd1 from '../assets/LAWD/gazebo.png';
import Lawd2 from '../assets/LAWD/prototype.png';
import Lawd3 from '../assets/LAWD/prototype.png';

import quad1 from '../assets/quadruped/dog.jpg';
import quad2 from '../assets/quadruped/quad.jpg'

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Quadruped dog",
      description: "Developed a quadruped robot with precise teleoperation and customizable gait parameters. Integrated LiDAR and IMU sensors for terrain awareness and implemented full ROS2-based control architecture, including inverse kinematics and odometry for accurate locomotion.",
      images: [quad1, quad2],
      tags: ["ROS2", "Nav2", "SLAM", "Path Planning", "Reinforcement Learning"],
      githubUrl: "https://github.com/Vedhamshbode/quad_src"
    },
    {
      title: "Smart Mobility Using Dual Arm",
      description: "Developed depalletization system using dual robotic arms with side-grip friction-based manipulation. Built and controlled UR5-inspired dual-arm robot using ROS2 Control and MoveIt2. Implemented OpenCV for box and pallet detection with pose estimation.",
      images: [ddar1, ddar2, ddar3 ],
      tags: ["ROS2", "MoveIt2", "Servo", "Python", "OpenCV", "C++"],
      githubUrl: "https://github.com/Vedhamshbode/addverb_ws"
    },
    {
      title: "Logistics Cobot",
      description: "Developed autonomous logistics system coordinating UR5 arm and rover for pick-and-drop operations. Implemented navigation, obstacle avoidance, and ArUco marker-based pose estimation.",
      images: [eyantra1, eyantra2, eyantra3, eyantra4],
      tags: ["ROS2", "Nav2", "MoveIt2", "Servo", "Python"],
      githubUrl: "https://github.com/Vedhamshbode/E_yantra_ws"
    },
    {
      title: "Autonomous Mobile Robot",
      description: "Created self-localization and navigation system for differential drive robot with visual navigation and autonomous docking capabilities. Integrated hardware components using custom ROS2 Control interfaces.",
      images: [bbot],
      tags: ["ROS2", "Navigation", "SLAM", "C++", "Python"],
      githubUrl: "https://github.com/Vedhamshbode/bbot_ws"
    },
    {
      title: "Robotic Palm",
      description: "Architected and fabricated a 3D model for efficient movement of fingers replicating a human hand with anthropomorphi design for enhanced dexterity and functionality. Used elastic threads for movement of fingers with some induced tension for backtracking.",
      images: [robotic_palm1, robotic_palm2],
      tags: ["Fusion360", " 3D printing"],
      githubUrl: "https://github.com/example/dual-arm"
    },
    {
      title: "Land AnyWhere Drone",
      description: "Engineered advanced technology for UAVs, enabling precise landings on uneven terrains and reducing landing errors. Architected, fabricated, and assembled four 2-DOF legs, integrated with Arduino for motor control, enabling a stable gait to facilitate drone mobility using these legs.",
      images: [Lawd1, Lawd2, Lawd3 ],
      tags: ["Fusion360", "OpenCV", "Servo", "Arduino"],
      githubUrl: "https://github.com/Vedhamshbode/lawd_ws"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-950 mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-12 rounded-full"></div>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            A selection of my key robotics and automation projects, showcasing expertise in ROS2, computer vision, and intelligent control systems.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="h-full">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;