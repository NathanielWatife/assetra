'use client'

import Image from 'next/image'

export default function Team() {
  const teamMembers = [
    {
      name: "JANET ABIMBOLA ALABI",
      role: "CEO/MD",
      image: "/assets/team/janet.jpeg"
    },
    {
      name: "OLUWASEUN AYOBAMI AYEJOTO ALABI",
      role: "CHIEF FINANCIAL OFFICER",
      description: "Blockchain Architect & Strategist",
      image: "/assets/team/oluwaseun.jpeg"
    },
    {
      name: "OGU DANIEL AROME",
      role: "COO",
      image: "/assets/team/daniel.jpeg"
    },
    {
      name: "OLAIDE OMOBOLAJI OLUMADE",
      role: "CHIEF TECHNICAL OFFICER",
      image: "/assets/team/olaide.jpeg"
    }
  ]

  return (
    <section id="team" className="section section-dark">
      <div className="container">
        <h2 className="text-center mb-8">OUR TEAM</h2>
        <div className="grid grid-3">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card text-center fade-in-up">
              <div className="team-image-container">
                <Image 
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="team-image"
                />
              </div>
              <h3 className="team-name">{member.name}</h3>
              <h4 className="team-role">{member.role}</h4>
              {member.description && <p className="team-description">{member.description}</p>}
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .team-card {
          background: var(--white);
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .team-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(212, 175, 55, 0.2);
        }
        
        .team-image-container {
          width: 200px;
          height: 200px;
          margin: 0 auto 1.5rem;
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid var(--accent-gold);
          background: var(--light-bg);
        }
        
        .team-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        
        .team-card:hover .team-image {
          transform: scale(1.1);
        }
        
        .team-name {
          color: var(--primary-blue);
          margin-bottom: 1rem;
          font-size: 1.1rem;
          line-height: 1.4;
        }
        
        .team-role {
          color: var(--accent-gold);
          margin-bottom: 1rem;
          font-size: 1rem;
          font-weight: 600;
        }
        
        .team-description {
          color: var(--text-light);
          font-size: 0.9rem;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .team-image-container {
            width: 120px;
            height: 120px;
          }
          
          .team-name {
            font-size: 1rem;
          }
          
          .team-role {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  )
}