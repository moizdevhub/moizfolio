import { SkillCategory } from './skills-types';

export const skillsData: SkillCategory[] = [
  {
    id: 'programming-languages',
    title: 'Programming Languages',
    skills: [
      { id: 'javascript', name: 'JavaScript', icon: 'SiJavascript', color: '#F7DF1E' },
      { id: 'typescript', name: 'TypeScript', icon: 'SiTypescript', color: '#3178C6' },
      { id: 'dart', name: 'Dart', icon: 'SiDart', color: '#0175C2' }
    ]
  },
  {
    id: 'frontend-development',
    title: 'Frontend Development',
    skills: [
      { id: 'nextjs', name: 'Next.js', icon: 'SiNextdotjs', color: '#000000' },
      { id: 'reactjs', name: 'React.js', icon: 'SiReact', color: '#61DAFB' },
      { id: 'html', name: 'HTML', icon: 'SiHtml5', color: '#E34F26' },
      { id: 'css', name: 'CSS', icon: 'SiCss3', color: '#1572B6' },
      { id: 'sass', name: 'SASS', icon: 'SiSass', color: '#CC6699' },
      { id: 'redux-toolkit', name: 'Redux Toolkit', icon: 'SiRedux', color: '#764ABC' }
    ]
  },
  {
    id: 'backend-development',
    title: 'Backend Development',
    skills: [
      { id: 'nodejs', name: 'Node.js', icon: 'SiNodedotjs', color: '#339933' },
      { id: 'expressjs', name: 'Express.js', icon: 'SiExpress', color: '#000000' },
      { id: 'socketio', name: 'Socket.io', icon: 'SiSocketdotio', color: '#010101' }
    ]
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    skills: [
      { id: 'flutter', name: 'Flutter', icon: 'SiFlutter', color: '#02569B' },
      { id: 'getx', name: 'GetX', icon: 'SiFlutter', color: '#9C27B0' }
    ]
  },
  {
    id: 'database-management',
    title: 'Database Management',
    skills: [
      { id: 'mongodb', name: 'MongoDB', icon: 'SiMongodb', color: '#47A248' },
      { id: 'postgresql', name: 'PostgreSQL', icon: 'SiPostgresql', color: '#336791' },
      { id: 'mysql', name: 'MySQL', icon: 'SiMysql', color: '#4479A1' }
    ]
  },
  {
    id: 'devops-vcs',
    title: 'DevOps/VCS',
    skills: [
      { id: 'docker', name: 'Docker', icon: 'SiDocker', color: '#2496ED' },
      { id: 'aws', name: 'AWS', icon: 'SiAmazonaws', color: '#FF9900' },
      { id: 'git', name: 'Git', icon: 'SiGit', color: '#F05032' },
      { id: 'github', name: 'GitHub', icon: 'SiGithub', color: '#181717' }
    ]
  }
];