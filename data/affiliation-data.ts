import type { TermItem, RiskItem } from '@/components/affiliation-section'

export const programmerTerms: TermItem[] = [
  {
    name: 'Software Developer / Software Engineer',
    description: 'Designs and builds software applications. Access: Full codebase, user data, business logic.',
  },
  {
    name: 'Full-Stack Developer',
    description: 'Works on both frontend and backend systems. Access: Complete application stack, databases, APIs.',
  },
  {
    name: 'Backend Developer / Backend Engineer',
    description: 'Develops server-side logic and infrastructure. Access: Databases, APIs, server configurations.',
  },
  {
    name: 'Frontend Developer / Frontend Engineer',
    description: 'Creates user-facing interfaces and experiences. Access: Client-side code, user interactions.',
  },
  {
    name: 'DevOps Engineer',
    description: 'Manages deployment, infrastructure, and automation. Access: Production systems, deployment pipelines.',
  },
  {
    name: 'Systems Programmer',
    description: 'Develops low-level system software and infrastructure. Access: Operating systems, hardware interfaces.',
  },
]

export const programmerRisks: RiskItem[] = [
  {
    name: 'Algorithmic Bias',
    tooltip: 'Homogeneous teams may inadvertently encode their political perspectives into AI systems, recommendation algorithms, and automated decision-making tools, affecting millions of users.',
  },
  {
    name: 'Selective Service Denial',
    tooltip: 'Programmers with strong ideological commitments may refuse to work on projects for clients whose values they disagree with, or intentionally degrade service quality.',
  },
  {
    name: 'Data Manipulation',
    tooltip: 'Access to critical systems allows for potential manipulation of data, analytics, or reporting that could favor certain political narratives.',
  },
  {
    name: 'Security Vulnerabilities',
    tooltip: 'Ideologically motivated insiders may introduce backdoors, weaken security measures, or selectively enforce security policies based on political alignment.',
  },
  {
    name: 'Content Filtering Bias',
    tooltip: 'Programmers controlling content moderation systems may apply standards inconsistently, suppressing certain viewpoints while allowing others.',
  },
  {
    name: 'Infrastructure Sabotage',
    tooltip: 'In extreme cases, ideological actors with system access could disrupt critical infrastructure, payment systems, or communication networks.',
  },
]

export const dataScientistTerms: TermItem[] = [
  {
    name: 'Data Analyst / Business Intelligence Analyst',
    description: 'Analyzes complex datasets to extract insights and build predictive models. Access: Large-scale databases, user behavior data.',
  },
  {
    name: 'Machine Learning Engineer / ML Engineer',
    description: 'Develops and deploys machine learning models and AI systems. Access: Training datasets, model architectures.',
  },
  {
    name: 'Data Engineer',
    description: 'Builds and maintains data processing infrastructure and pipelines. Access: Data warehouses, ETL systems.',
  },
  {
    name: 'Analytics Engineer / Statistical Analyst',
    description: 'Applies statistical methods and advanced analytics to solve business problems. Access: Statistical models, experimental data.',
  },
  {
    name: 'AI Engineer / AI Researcher',
    description: 'Designs and implements AI systems and algorithms. Access: AI model training data, neural network architectures.',
  },
  {
    name: 'Big Data Engineer / Data Architect',
    description: 'Manages and analyzes large-scale data infrastructure. Access: Big data platforms, distributed computing systems.',
  },
]

export const dataScientistRisks: RiskItem[] = [
  {
    name: 'AI Model Bias',
    tooltip: 'Data scientists control the training data and algorithms that power AI systems, allowing them to embed political biases into models that affect millions of users\' experiences and decisions.',
  },
  {
    name: 'Data Interpretation Manipulation',
    tooltip: 'Data scientists can manipulate analytics, metrics, and reporting to favor certain narratives or suppress unfavorable data about political issues or candidates.',
  },
  {
    name: 'Algorithmic Content Curation',
    tooltip: 'Control over recommendation algorithms allows data scientists to influence what content users see, potentially suppressing certain viewpoints or promoting others.',
  },
  {
    name: 'Selective Privacy Enforcement',
    tooltip: 'Data scientists can selectively enforce or ignore data privacy policies based on political alignment, potentially exposing sensitive information about certain groups.',
  },
  {
    name: 'User Profiling and Targeting',
    tooltip: 'Access to user behavior data and analytics allows data scientists to identify and target users based on political beliefs for differential treatment.',
  },
  {
    name: 'Biased Experimental Design',
    tooltip: 'Data scientists can design A/B tests and experiments with built-in biases, ensuring that results favor certain political outcomes or narratives.',
  },
]

