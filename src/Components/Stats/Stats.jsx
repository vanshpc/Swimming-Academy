import React from 'react';
import './Stats.css';

const statsData = [
  { id: 1, value: '2,400', label: 'Happy Clients', icon: '🎈' },
  { id: 2, value: '28', label: 'Experience', icon: '📋' },
  { id: 3, value: '90', label: 'Success', icon: '😊' },
  { id: 4, value: '560', label: 'Awards', icon: '🏆' }
];

const Stats = () => {
  return (
    <div className="stats-section">
      {statsData.map(stat => (
        <div className="stat-item" key={stat.id}>
          <div className="stat-icon">{stat.icon}</div>
          <div>
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
