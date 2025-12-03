import React from 'react'

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-arctic-dark">About Arctic Travels</h1>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto">
          We are passionate about bringing the beauty and thrill of the Arctic to adventurers around the world.
        </p>
      </div>

      {/* Our Story */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-arctic-dark">Our Story</h2>
          <p className="text-text-secondary leading-relaxed">
            Founded in 2010 by a group of ski enthusiasts and nature lovers, Arctic Travels began with a simple mission: to make the untouched beauty of the Arctic accessible to everyone. What started as small guided tours in Iceland has grown into a premier travel agency specializing in winter experiences across the globe.
          </p>
          <p className="text-text-secondary leading-relaxed">
            We believe that travel is not just about seeing new places, but about feeling them. The crisp air of the Alps, the dancing Northern Lights in Norway, and the serene silence of a snowy forest – these are the moments we curate for you.
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-xl h-80 bg-gray-200">
          <img
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80"
            alt="Founders in the snow"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Our Mission */}
      <div className="bg-arctic-grey rounded-3xl p-12 text-center space-y-8">
        <h2 className="text-3xl font-bold text-arctic-dark">Our Mission</h2>
        <p className="text-xl text-text-secondary max-w-4xl mx-auto">
          "To inspire and enable travelers to explore the world's most breathtaking winter destinations with safety, comfort, and respect for nature."
        </p>
      </div>

      {/* Team Section */}
      <div className="space-y-12">
        <h2 className="text-3xl font-bold text-arctic-dark text-center">Meet The Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: 'Sarah Johnson',
              role: 'Founder & CEO',
              image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80'
            },
            {
              name: 'Mike Chen',
              role: 'Head of Operations',
              image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80'
            },
            {
              name: 'Emma Wilson',
              role: 'Lead Guide',
              image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80'
            },
          ].map((member) => (
            <div key={member.name} className="text-center space-y-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full object-cover shadow-lg border-4 border-arctic-blue"
              />
              <div>
                <h3 className="text-xl font-bold text-arctic-dark">{member.name}</h3>
                <p className="text-text-secondary">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About