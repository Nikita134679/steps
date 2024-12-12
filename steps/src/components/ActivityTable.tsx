import React from 'react';
import { Activity } from '../types';
import ActivityRow from './ActivityRow';

interface ActivityTableProps {
  activities: Activity[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const ActivityTable: React.FC<ActivityTableProps> = ({ activities, onEdit, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Дата (ДД.ММ.ГГ)</th>
          <th>Пройдено км</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {activities.map((activity) => (
          <ActivityRow
            key={activity.id}
            activity={activity}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ActivityTable;
