import React from 'react';

const Profile: React.FC = () => {
  return (
    <div className="page-content">
      <section className="hero">
        <h1 className="title">Software Engineer</h1>
        <p className="subtitle">Focusing on UI development & Systems Architecture</p>
      </section>
      
      <section className="bio-section">
        <div className="card">
          <h2>About Me</h2>
          <p>
            I am a Software Engineer currently focusing on pivoting into a new role focused around data and AI. 
            I've completed my Master's in Computer Science from Boston University (May 2026) and I'm 
            implementing my learnings through personal projects (feel free to checkout in the Projects tab!). 
            Outside of this, my interests include DIY hardware engineering, 3D printing, Magic: The Gathering, 
            Riftbound: League of Legends, and plenty of other PC games! Feel free to checkout my socials tab 
            if you want to connect with me and leave a message saying "orange" so that I know you're not a bot :)
          </p>
        </div>
      </section>
    </div>
  );
};

export default Profile;
