import React from 'react';
import { Activity } from '../types';

interface ActivityRowProps {
  activity: Activity;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const ActivityRow: React.FC<ActivityRowProps> = ({ activity, onEdit, onDelete }) => {
  return (
    <tr>
      <td>{activity.date}</td>
      <td>{activity.distance}</td>
      <td>
        <button onClick={() => onEdit(activity.id)}>✏️</button>
        <button onClick={() => onDelete(activity.id)}>❌</button>
      </td>
    </tr>
  );
};

export default ActivityRow;
