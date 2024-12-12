import React, { useState } from 'react';
import { Activity } from '../types';

interface ActivityFormProps {
  onSubmit: (activity: Omit<Activity, 'id'>) => void;
}

const ActivityForm: React.FC<ActivityFormProps> = ({ onSubmit }) => {
  const [date, setDate] = useState('');
  const [distance, setDistance] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !distance) return;

    onSubmit({ date, distance: parseFloat(distance) });
    setDate('');
    setDistance('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px' }}>
      <input
        type="text"
        placeholder="Дата (ДД.ММ.ГГ)"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="number"
        placeholder="Пройдено км"
        value={distance}
        onChange={(e) => setDistance(e.target.value)}
      />
      <button type="submit">OK</button>
    </form>
  );
};

export default ActivityForm;
