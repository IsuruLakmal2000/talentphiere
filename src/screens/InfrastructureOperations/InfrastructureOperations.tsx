import React from 'react';
import { RoleTemplate } from '../../components/RoleTemplate';

const InfrastructureOperations: React.FC = () => {
  const heroTitle = "Infrastructure & Operations Experts Who Keep Things Running";
  
  const heroDescription = 
    "Access seasoned infrastructure and operations professionals who bring reliability, scalability, and efficiency to your systems. From cloud architecture to DevOps automation, our talent ensures your operations run smoothly at scale.";

  const profilesSectionTitle = "Best-in-class Infrastructure & Ops Profiles";
  
  const profilesSectionDescription = 
    "Our infrastructure and operations specialists go beyond maintaining systems — they architect for reliability, optimize for performance, and automate for efficiency. Each professional is carefully vetted for technical expertise, problem-solving skills, and operational excellence.";

  const categories = [
    {
      title: "DevOps Engineers",
      description: "Experts in CI/CD pipelines, infrastructure as code, container orchestration with Kubernetes, and automation tools like Jenkins, GitLab CI, and GitHub Actions."
    },
    {
      title: "Cloud Architects",
      description: "Specialists in AWS, Azure, and GCP who design scalable, secure, and cost-effective cloud infrastructure. They handle migrations, multi-cloud strategies, and serverless architectures."
    },
    {
      title: "Site Reliability Engineers (SRE)",
      description: "Professionals focused on system reliability, monitoring, incident response, and performance optimization. They implement SLOs, SLIs, and error budgets to ensure uptime."
    },
    {
      title: "Infrastructure Engineers",
      description: "Experts in network design, server management, database administration, and infrastructure automation. They build and maintain the backbone of your technical operations."
    },
    {
      title: "Security & Compliance",
      description: "Specialists who implement security best practices, handle compliance requirements (SOC 2, HIPAA, GDPR), and manage identity access management and security audits."
    },
    {
      title: "And More...",
      description: "These are our most popular specializations. We also have experts in platform engineering, data infrastructure, network engineering, IT operations, and other specialized areas."
    }
  ];

  const profileData = {
    name: "Priya",
    subtitle: "IIT Delhi, 10+ years exp"
  };

  return (
    <RoleTemplate
      heroTitle={heroTitle}
      heroDescription={heroDescription}
      profilesSectionTitle={profilesSectionTitle}
      profilesSectionDescription={profilesSectionDescription}
      categories={categories}
      profileData={profileData}
    />
  );
};

export default InfrastructureOperations;
