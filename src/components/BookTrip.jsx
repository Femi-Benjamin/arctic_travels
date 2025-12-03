import React, { useState } from 'react'
import Button from './Button'

const BookTrip = () => {
  const [formData, setFormData] = useState({
    location: 'Iceland',
    resort: '',
    persons: '4 Persons',
    checkIn: '2022-01-12',
    checkOut: '2022-01-18'
  });

  // Local UI filters
  const [locationQuery, setLocationQuery] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBook = () => {
    // Simple validation
    if (!formData.location || !formData.persons || !formData.checkIn || !formData.checkOut) {
      alert('Please fill in all fields');
      return;
    }

    // Mock booking success
    alert(`Trip booked successfully!\n\nLocation: ${formData.location}\nResort: ${formData.resort || 'Not selected'}\nPersons: ${formData.persons}\nDates: ${formData.checkIn} to ${formData.checkOut}`);
  };

  const nights = (() => {
    try {
      const ci = new Date(formData.checkIn);
      const co = new Date(formData.checkOut);
      const diff = Math.round((co - ci) / (1000 * 60 * 60 * 24));
      return Number.isFinite(diff) && diff > 0 ? diff : 0;
    } catch (e) {
      return 0;
    }
  })();

  return (
    <div className='bg-transparent py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='bg-arctic-800/60 rounded-2xl shadow-xl p-8 md:p-12 -mt-32 relative z-20 border border-arctic-700/40 text-text-primary'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-end'>

            {/* Location */}
            <div className='space-y-3'>
              <label className='flex items-center gap-2 text-text-secondary font-medium text-sm uppercase tracking-wider'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#3E86F5" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                Location
              </label>
              <div className="flex flex-col gap-2">
                <input
                  aria-label="Filter locations"
                  value={locationQuery}
                  onChange={(e) => setLocationQuery(e.target.value)}
                  placeholder="Filter locations"
                  className="px-3 py-2 rounded-md bg-arctic-800/40 text-text-primary placeholder:text-text-secondary focus:outline-none"
                />
              <select
                name="location"
                value={formData.location}
                onChange={handleChange}
                className='w-full p-2 bg-transparent border-b-2 border-arctic-700/30 focus:border-arctic-blue outline-none font-semibold text-lg text-text-primary'
              >
                {['Iceland','Norway','Swiss Alps','Aspen'].filter(l=>l.toLowerCase().includes(locationQuery.toLowerCase())).map(loc=> (
                  <option key={loc}>{loc}</option>
                ))}
              </select>
              </div>
            </div>

            {/* Resort */}
            <div className='space-y-3'>
              <label className='flex items-center gap-2 text-text-secondary font-medium text-sm uppercase tracking-wider'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#3E86F5" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                </svg>
                Resort
              </label>
              <select
                name="resort"
                value={formData.resort}
                onChange={handleChange}
                className='w-full p-2 bg-transparent border-b-2 border-arctic-700/30 focus:border-arctic-blue outline-none font-semibold text-lg text-text-primary'
              >
                <option value="">Select Resort</option>
                <option>Arctic Glass Igloos</option>
                <option>Ice Hotel Jukkasjärvi</option>
                <option>Kakslauttanen Resort</option>
                <option>Sorrisniva Igloo Hotel</option>
                <option>Snowcastle of Kemi</option>
              </select>
            </div>

            {/* Persons */}
            <div className='space-y-3'>
              <label className='flex items-center gap-2 text-text-secondary font-medium text-sm uppercase tracking-wider'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#00C07B" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                Persons
              </label>
              <select
                name="persons"
                value={formData.persons}
                onChange={handleChange}
                className='w-full p-2 bg-transparent border-b-2 border-arctic-700/30 focus:border-arctic-blue outline-none font-semibold text-lg text-text-primary'
              >
                <option>1 Person</option>
                <option>2 Persons</option>
                <option>4 Persons</option>
                <option>6+ Persons</option>
              </select>
            </div>

            {/* Check In */}
            <div className='space-y-3'>
              <label className='flex items-center gap-2 text-text-secondary font-medium text-sm uppercase tracking-wider'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#CC0024" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
                Check In
              </label>
              <input
                type="date"
                name="checkIn"
                value={formData.checkIn}
                onChange={handleChange}
                className='w-full p-2 bg-transparent border-b-2 border-arctic-700/30 focus:border-arctic-blue outline-none font-semibold text-lg text-text-primary'
              />
            </div>

            {/* Check Out */}
            <div className='space-y-3'>
              <label className='flex items-center gap-2 text-text-secondary font-medium text-sm uppercase tracking-wider'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#CC0024" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
                Check Out
              </label>
              <input
                type="date"
                name="checkOut"
                value={formData.checkOut}
                onChange={handleChange}
                min={formData.checkIn}
                className='w-full p-2 bg-transparent border-b-2 border-arctic-700/30 focus:border-arctic-blue outline-none font-semibold text-lg text-text-primary'
              />
            </div>

            {/* Nights summary */}
            <div className='space-y-1'>
              {nights > 0 ? (
                <div className="text-sm text-text-secondary">Planning for <strong className="text-text-primary">{nights} {nights === 1 ? 'night' : 'nights'}</strong>.</div>
              ) : (
                <div className="text-sm text-red-400">Please choose valid check-in and check-out dates.</div>
              )}
            </div>

            {/* Book Button */}
            <div className='pt-4 md:pt-0'>
              <Button
                onClick={handleBook}
                className="w-full h-14 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
              >
                Book Trip
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default BookTrip