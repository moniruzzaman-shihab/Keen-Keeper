import React, { use } from 'react';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';

const friendsPromise = fetch("/friends.json").then((res) => res.json());

const getStatusStyles = (status) => {
  switch (status) {
    case 'overdue': return 'bg-red-100 text-red-600';
    case 'almost due': return 'bg-orange-100 text-orange-600';
    case 'on-track': return 'bg-emerald-100 text-emerald-800';
    default: return 'bg-gray-100 text-gray-600';
  }
};

const FriendDetails = () => {
  const { id } = useParams();
  const friends = use(friendsPromise);
  const friend = friends.find((f) => f.id === parseInt(id));

  if (!friend) return <div>Friend not found!</div>;


  const handleAction = (type) => {
    const newEvent = {
      id: Date.now(),
      type,
      friendName: friend.name,
      date: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
    };

    const existing = JSON.parse(localStorage.getItem("timeline")) || [];
    localStorage.setItem("timeline", JSON.stringify([newEvent, ...existing]));

   
    if (type === "call") toast.success("📞 Call successful!");
    else if (type === "text") toast.success("💬 Text sent successfully!");
    else if (type === "video") toast.success("📹 Video call successful!");
  };

  return (
    <div className="p-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

   
      <div className="md:col-span-1 bg-white p-6 rounded-2xl border shadow-sm">
        <img src={friend.picture} alt={friend.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
        <h2 className="text-2xl font-bold text-center">{friend.name}</h2>

        <div className="flex justify-center gap-2 my-2 flex-wrap">
          <span className={`text-xs px-3 py-1 rounded-full uppercase font-bold ${getStatusStyles(friend.status)}`}>
            {friend.status}
          </span>

          {friend.tags.map(tag => (
            <span key={tag} className="text-xs bg-gray-100 px-3 py-1 rounded-full uppercase">{tag}</span>
          ))}
        </div>

        <p className="text-gray-600 text-sm mt-4 text-center italic">"{friend.bio}"</p>
        <p className="text-gray-400 text-xs mt-2 text-center">Preferred: {friend.email}</p>
      </div>


      <div className="md:col-span-2 space-y-6">

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-xl border text-center">
            <div className="text-2xl font-bold">{friend.days_since_contact}</div>
            <div className="text-xs text-gray-500">Days Since Contact</div>
          </div>
          <div className="bg-white p-4 rounded-xl border text-center">
            <div className="text-2xl font-bold">{friend.goal}</div>
            <div className="text-xs text-gray-500">Goal (Days)</div>
          </div>
          <div className="bg-white p-4 rounded-xl border text-center">
            <div className="text-lg font-bold">{friend.next_due_date}</div>
            <div className="text-xs text-gray-500">Next Due</div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border">
          <h3 className="font-bold mb-4">Quick Check-In</h3>

          <div className="grid grid-cols-3 gap-4">
            <button onClick={() => handleAction("call")} className="py-4 border rounded-xl hover:bg-emerald-50">
              📞 Call
            </button>
            <button onClick={() => handleAction("text")} className="py-4 border rounded-xl hover:bg-emerald-50">
              💬 Text
            </button>
            <button onClick={() => handleAction("video")} className="py-4 border rounded-xl hover:bg-emerald-50">
              📹 Video
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FriendDetails;