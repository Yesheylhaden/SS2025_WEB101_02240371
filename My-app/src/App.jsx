import React, { useState } from 'react';
import Header from './Header';
import ProfileCard from './ProfileCard';
import EditForm from './EditForm';
import StatsDashboard from './StatsDashboard';
import './App.css';

function App() {
  const [user, setUser] = useState({
    name: 'Mona Lisa',
    bio: 'Software Engineer',
    avatar: 'Mr mona lisa',
    location: 'New York',
    email: 'mona_lisa@gmail.com',
    posts: 100,
    followers: 500,
    following: 250,
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleUpdateUser = (updatedUser) => {
    setUser(updatedUser);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <div className="app">
      <Header />
      <div className="dashboard-container">
        <div className="profile-section">
          {isEditing ? (
            <EditForm user={user} onUpdate={handleUpdateUser} onCancel={handleCancelEdit} />
          ) : (
            <ProfileCard user={user} onEdit={handleEditClick} />
          )}
        </div>
        <div className="stats-section">
          <StatsDashboard stats={user} />
        </div>
      </div>
    </div>
  );
  return (
    <Router>
      <div className="app">
        <Header />
        <nav>
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/profile" element={<ProfileCard user={user} />} />
          <Route path="/profile/edit" element={<EditForm user={user} />} />
          <Route path="/stats" element={<StatsDashboard stats={user} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;