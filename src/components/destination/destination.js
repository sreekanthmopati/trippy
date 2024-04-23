import React from 'react'
import './destination.css'
import valcano from '../assets/valcano.jpg'
import valcano2 from '../assets/valcano2.jpg'
import Destinationdata from './destinationdata'
import mount1 from '../assets/mount1.jpg'
import mount2 from '../assets/mount2.jpg'
const Destination = () => {
  return (
    <div className='destination'>
      <h1>Popular Destinations</h1>
      <p>Tours give you the oppurtunity to see a lot,
        within a time frame.
      </p>

     <Destinationdata cname = 'first-dest' heading = 'Taal valcano, Batangas' text='one of the most iconic views in luzon
                  ,mt taal boasts a valcano inside a lake inside in an island
                  .if  you fancy a closer look,the hike the the crater is mere45 minutes
                  and is easy enough for beginners.guides will assist you most of the way and you will see the peculiar
                  environment found on the active valcano,including valconic rocks and steam vents. '
                  img1={valcano} img2={valcano2}
                  />

<Destinationdata cname = 'first-dest-rev' heading = 'Mt Daguldul,Batangas' text='if you are lokkiung for a hike then you have got one of the most iconic views in luzon
                  ,mt taal boasts a valcano inside a lake inside in an island
                  .if  you fancy a closer look,the hike the the crater is mere45 minutes
                  and is easy enough for beginners.guides will assist you most of the way and you will see the peculiar
                  environment found on the active valcano,including valconic rocks and steam vents. '
                  img1={mount1} img2={mount2}
                  />
      
    </div>
  )
}

export default Destination
