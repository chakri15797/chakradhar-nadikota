import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const CardContainer = ({ children }) => {
  const containerRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const isHidden = rect.bottom < 0 || rect.top > window.innerHeight;
      container.style.opacity = isHidden ? 0 : 1;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call it initially to set the correct opacity

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div ref={containerRef} className="card-container" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} transition={{ duration: 1, ease: 'easeOut' }}>
      {children}
    </motion.div>
  );
};

const Experience = () => {
  return (
    <div id="experience">
      <CardContainer>
        <p className="about-title">Experience</p>
        <div className="experience-card">
        <h4 className="job-title">Software Engineer Intern</h4>
        <p>Advanced Micro Devices, Austin | Jun 2023 - Dec 2023</p>
        <ul className='bullet-list'>
        <li>Evaluated and implemented the ideal build system (Gradle, Airflow) for our work environment, enhancing development efficiency and project outcomes.</li>
          <li>Created a generalized API for maintaining and managing arguments across various ASIC flows.</li>
          <li>Optimized build efficiency by 18% through a strategic shift from GNU Make to CMake + Ninja, aligning with modern standards and elevating maintainability and performance.</li>

</ul>
      </div>

      </CardContainer>
      <CardContainer>
        <div className="experience-card">
        <h4 className="job-title">Sr. Software Development Engineer (SSDE)</h4>
        <p>Advanced Micro Devices, Hyderabad | Jul 2019 - Aug 2022</p>
        <ul className='bullet-list'>
          <li>Spearheaded the development and maintenance of ASIC flow frontend build tools, multiple enterprise-level microservice applications, ensuring efficient and streamlined processes.</li>
          <li>Developed and deployed a cloud-based regression methodology utilizing Python, FastAPI, Kubernetes, Docker, Postgres, Kafka, Celery, and Redis.</li>
          <li>Developed and maintained in-house Ruby based legacy ASIC build system using master-client architecture with efficient load balancing and failure resilience over IBM Spectrum LSF (on-premises) & AWS EC2 (Cloud).</li>
          <li>Contributed to designing and developing a heterogeneous machine learning model (SVM + Naive Bayes) for predicting verification flow failures in advance with an 83% accuracy.</li>
        </ul>
        </div>
      </CardContainer>

      <CardContainer>
      <div className="experience-card">
        <h4 className="job-title">Software Engineer (SWE)</h4>
       <p>Capgemini | May 2018 - Jul 2019</p>
        <ul className='bullet-list'>
        <li>Automated IT support for Fortune 500 companies using a Python-based AI platform. Deployed on AWS EC2 instance with Knime for data processing, Django for model deployment, achieving a 70% reduction in SLA and a 60% decrease in operating costs.</li>
        <li>Designed, developed, and deployed a Microsoft Bot framework-powered chatbot, integrating NLP and Machine Learning with LUIS and QnAMaker on Sinequa, serving over 5,000 users across three platforms (internal portal, Microsoft Teams, and Skype for Business). Continuously updated based on Azure App Insights metrics.</li>
      <li>Implemented Sinequa, a Cognitive AI-powered Enterprise Search Engine, indexing 100+ knowledge sources and creating a centralized hub for business insights.</li>
      </ul>      
      </div>
      </CardContainer>
    </div>
  );
};

export default Experience;










