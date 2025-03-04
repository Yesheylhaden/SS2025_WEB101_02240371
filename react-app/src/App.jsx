import React from 'react';
import ProfileCard from './components/ProfileCard';
import './App.css';

function App() {
  // Sample profile data
  const profiles = [
    {
      id: 1,
      name: "Yeshey Lhaden",
      role: "UX Designer",
      avatar: "/src/components/image/Yeshey.jpg",
      skills: ["Figma", "Wireframing", "Prototyping"],
      location: "Gelephu, Bhutan"
    }
  ];

  return (
    <div className="App">
      <header>
        <h1>Profile</h1>
      </header>
      <div className="profiile-container">
        {profiles.map(profile => (
          <ProfileCard
            key={profile.id}
            name={profile.name}
            role={profile.role}
            avatar={profile.avatar}
            skills={profile.skills}
            location={profile.location}
          />
        ))}
      </div>
    </div>
  )
}

export default App;