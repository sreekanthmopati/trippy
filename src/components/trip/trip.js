import React from 'react'
import './trip.css'
import Tripdata from './tripdata';
import malasia from'../assets/malasia.jpg';
import indonesia from'../assets/indonesia.jpg';
import france from'../assets/france.jpg';

const Trip = () => {
  return (
    <div className='trip'>
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google maps</p>
      <div className='tripcard'>
        <Tripdata image={indonesia} heading='Trip to Indonesia'
        text='indonesia,[a] officially the Republic of Indonesia,[b] is a country in Southeast 
        Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands,
         including Sumatra, Java, Sulawesi, and parts of Borneo 
        and New Guinea. Indonesia is the worlds largest archipelagic state and the 14th-largest country
         by area, at 1,904,569 square kilometres (735,358 square miles). With over 279 million people, Indonesia is the worlds fourth-most-populous 
        country and the most populous Muslim-majority country.
    '
        />

<Tripdata image={france} heading='Trip to France'
        text='Step into a land of renowned artists, royal crusaders and remarkable cuisine 
         France seduces with its extraordinary wealth of museums, historic sites, centuries-old
          villages and home-grown delicacies.

        From the dramatic shores of Normandy to the château-sprinkled countryside of the Loire
         Valley, well take our time to savor the finer things in life with a small group of 
         like-minded travelers. '
        />

<Tripdata image={malasia} heading='Trip to Malasyia'
        text='It now nourishes Lenggong’s 19,000 plus-strong population, 
        some of whom make their home in the tranquil villages along the shores of the lake.
        Travellers to Lenggong usually come for three things: “saito” river fish, Loh Dee’s
         charcoal-cooked wan tan mee, or a look at the 11,000-year-old Perak Man, Southeast 
         Asia’s oldest and most complete human skeleton.'


        />
      </div>
    </div>
  )
}

export default Trip;