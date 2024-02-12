import React from 'react'
import html from '../Assets/skillsicons/html5.svg';
import css from '../Assets/skillsicons/css3.svg';
import jasc from '../Assets/skillsicons/javascript.svg';
import rea from '../Assets/skillsicons/react.svg';
import nod from '../Assets/skillsicons/nodejs.svg';
import docker from '../Assets/skillsicons/docker.png';
import mon from '../Assets/skillsicons/mongodb.png';
import ms from '../Assets/skillsicons/mysql.svg';
import java from '../Assets/skillsicons/java1.png';
import python from '../Assets/skillsicons/python.svg';
import ruby from '../Assets/skillsicons/ruby.png';
import airflow from '../Assets/skillsicons/airflow.png';
import git from '../Assets/skillsicons/git.svg';
import django from '../Assets/skillsicons/django.png';
import kube from '../Assets/skillsicons/kube.jpeg';
import tensor from '../Assets/skillsicons/tensor.png';




export default function Skills() {


  return (
    <div name="skills" id='skills' >
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p id='skillsheading'>Skills</p>
        </div>
        
        <div className='w-full  grid grid-cols-2  sm:grid-cols-3 gap-8 skillscontainer'>
        
        <div  className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-orange-500" >
                <img src={html} className="w-20  mx-auto"/>
                <h6>HTML5</h6>
            </div>
            
            <div  className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-500">
                <img src={css} className="w-20  mx-auto"/>
                <h6>CSS3</h6>
            </div>
            <div  className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-yellow-500">
                <img src={jasc} className="w-20  mx-auto"/>
                <h6>JavaScript</h6>
            </div>
            <div  className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-500">
                <img src={rea} className="w-20 mx-auto"/>
                <h6>React</h6>
            </div>
            <div  className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-green-400">
                <img src={nod} className="w-20 mx-auto"/>
                <h6>Node.js</h6>
            </div>
            <div  className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-red-500">
                <img src={ruby} className="w-20 mx-auto"/>
                <h6>Ruby</h6>
            </div>
            <div  className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-green-500">
                <img src={mon} className="w-20 mx-auto"/>
                <h6>MongoDB</h6>
            </div>
            <div  className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-300">
                <img src={ms} className="w-20 mx-auto"/>
                <h6>MySql</h6>
            </div>
            <div  className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-orange-500">
                <img src={java} className="w-20 mx-auto"/>
                <h6>Java</h6>
            </div>
            <div  className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-green-500">
                <img src={django} className="w-20 mx-auto"/>
                <h6>Django</h6>
            </div>
            <div  className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg  shadow-blue-500/40 ">
                <img src={python} className="w-20 mx-auto"/>
                <h6>Python 3</h6>
            </div>
            <div  className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg  shadow-blue-500/40 ">
                <img src={docker} className="w-20 mx-auto"/>
                <h6>Docker</h6>
            </div>
            <div  className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg  shadow-blue-500/40">
                <img src={kube} className="w-20 mx-auto"/>
                <h6>Kubernetes</h6> 
            </div>
            <div  className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-gray-500">
                <img src={airflow} className="w-20 mx-auto"/>
                <h6>Apache Airflow</h6>
            </div>
            <div  className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-gray-500">
                <img src={tensor} className="w-20 mx-auto"/>
                <h6>TensorFlow</h6>
            </div>
            <div  className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-red-500">
                <img src={git} className="w-20 mx-auto"/>
                <h6>GIT</h6>
            </div>
            
        </div>
      </div>
    </div>
  )
}
