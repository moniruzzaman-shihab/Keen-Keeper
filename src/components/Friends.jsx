import React, { use } from 'react';
import { Link } from 'react-router';

const friendsPromise = fetch("/friends.json").then((res) => res.json());

const getStatusStyles = (status) => {
  switch (status) {
    case 'overdue': return 'bg-red-100 text-red-600';
    case 'almost due': return 'bg-orange-100 text-orange-600';
    case 'on-track': return 'bg-emerald-100 text-green-800';
    default: return 'bg-gray-100 text-gray-600';
  }
};

const Friends = () => {
  const friends = use(friendsPromise);

  return (
    <div className="p-8 max-w-11/12 mx-auto">
      <h2 className="text-2xl font-bold mb-6">Your Friends</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {friends.map((friend) => (
          <Link 
            to={`/friend/${friend.id}`} 
            key={friend.id}
            className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center"
          >
            <img 
              src={friend.picture} 
              alt={friend.name} 
              className="w-20 h-20 rounded-full object-cover mb-4"
            />
            <h3 className="font-semibold text-lg text-gray-900">{friend.name}</h3>
            <p className="text-sm text-gray-500 mb-3">{friend.days_since_contact}d ago</p>
            
            <div className="flex gap-2 mb-4">
              {friend.tags.map(tag => (
                <span key={tag} className="text-xs bg-emerald-50 text-emerald-600 px-2 py-1 rounded">
                  {tag.toUpperCase()}
                </span>
              ))}
            </div>
            
            <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase ${getStatusStyles(friend.status)}`}>
              {friend.status}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Friends;