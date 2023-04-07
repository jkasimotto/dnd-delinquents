import React from 'react';

interface SkillNodeProps {
  title: string;
  description: string;
  isActive: boolean;
}

const SkillNode: React.FC<SkillNodeProps> = ({ title, description, isActive }) => {
  const nodeClass = isActive ? 'skill-node active' : 'skill-node';

  return (
    <div className={nodeClass}>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default SkillNode;
