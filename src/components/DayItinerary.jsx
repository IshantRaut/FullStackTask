import {
    DndContext,
    closestCenter,
    useSensor,
    useSensors,
    PointerSensor,
  } from '@dnd-kit/core';
  import {
    arrayMove,
    SortableContext,
    useSortable,
    verticalListSortingStrategy,
  } from '@dnd-kit/sortable';
  import { CSS } from '@dnd-kit/utilities';
  import { useState } from 'react';
  import ActivityCard from './ActivityCard';
  
  function SortableItem({ activity, onEdit, onDelete }) {
    const {
      attributes,
      listeners,
      setNodeRef,
      transform,
      transition,
      isDragging,
    } = useSortable({ id: activity.id });
  
    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
    };
  
    return (
      <div ref={setNodeRef} style={style}>
        <ActivityCard
          activity={activity}
          dragOverlay={isDragging}
          attributes={attributes}
          listeners={listeners}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      </div>
    );
  }
  
  const DayItinerary = ({ title = 'Day', activities }) => {
    const [items, setItems] = useState(activities);
    const sensors = useSensors(useSensor(PointerSensor));
  
    const handleDragEnd = (event) => {
      const { active, over } = event;
      if (active.id !== over?.id) {
        const oldIndex = items.findIndex((i) => i.id === active.id);
        const newIndex = items.findIndex((i) => i.id === over.id);
        setItems(arrayMove(items, oldIndex, newIndex));
      }
    };

    const handleEdit = (activity) => {
      // TODO: Implement edit functionality
      console.log('Edit activity:', activity);
    };

    const handleDelete = (activityId) => {
      setItems(items.filter(item => item.id !== activityId));
    };
  
    return (
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={items.map(i => i.id)} strategy={verticalListSortingStrategy}>
            {items.map(activity => (
              <SortableItem 
                key={activity.id} 
                activity={activity} 
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </SortableContext>
        </DndContext>
      </div>
    );
  };
  
  export default DayItinerary;
  