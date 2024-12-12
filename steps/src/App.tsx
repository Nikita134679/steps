import React, { useState } from 'react';
import { Activity } from './types';
import ActivityForm from './components/ActivityForm';
import ActivityTable from './components/ActivityTable';

const App: React.FC = () => {
  const [activities, setActivities] = useState<Activity[]>([]);

  const handleAddActivity = (newActivity: Omit<Activity, 'id'>) => {
    setActivities((prev) => [
      ...prev,
      { id: `${Date.now()}-${Math.random()}`, ...newActivity },
    ]);
  };

  const handleEditActivity = (id: string) => {
    const activityToEdit = activities.find((act) => act.id === id);
    if (!activityToEdit) return;

    const newDate = prompt('Введите новую дату', activityToEdit.date);
    const newDistance = prompt(
      'Введите новое расстояние',
      activityToEdit.distance.toString()
    );

    if (!newDate || !newDistance) return;

    setActivities((prev) =>
      prev.map((act) =>
        act.id === id ? { ...act, date: newDate, distance: parseFloat(newDistance) } : act
      )
    );
  };

  const handleDeleteActivity = (id: string) => {
    setActivities((prev) => prev.filter((act) => act.id !== id));
  };

  return (
    <div>
      <h1>Тренировки</h1>
      <ActivityForm onSubmit={handleAddActivity} />
      <ActivityTable
        activities={activities}
        onEdit={handleEditActivity}
        onDelete={handleDeleteActivity}
      />
    </div>
  );
};

export default App;