import { GripVertical, MapPin, Pencil, Trash2 } from 'lucide-react';

const ActivityCard = ({ activity, dragOverlay, attributes, listeners, onEdit, onDelete }) => {
  return (
    <div
      className={`flex items-start gap-4 p-4 rounded-xl shadow-sm bg-white mb-4 ${
        dragOverlay ? 'scale-105 shadow-lg' : ''
      }`}
    >
      <div {...attributes} {...listeners} className="cursor-grab pt-2">
        <GripVertical size={20} />
      </div>
      <img
        src={activity.image}
        alt={activity.title}
        className="w-20 h-20 object-cover rounded-lg"
      />
      <div className="flex-1">
        <h3 className="font-semibold text-lg">{activity.title}</h3>
        <p className="text-sm text-gray-500 mb-1">
          ⭐ {activity.rating} ({activity.reviews})
        </p>
        <p className="text-sm text-gray-600">{activity.description}</p>
      </div>
      <div className="flex flex-col gap-2 pt-1 text-gray-500">
      <MapPin size={18} className="cursor-pointer hover:text-blue-500" />
<Pencil
  size={18}
  className="cursor-pointer hover:text-yellow-500"
  onClick={() => onEdit(activity)}
/>
<Trash2
  size={18}
  className="cursor-pointer hover:text-red-500"
  onClick={() => onDelete(activity.id)}
/>
      </div>
    </div>
  );
};

export default ActivityCard;
