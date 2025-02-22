import React from 'react'

function About() {
  return (
    <>
    
    <div className='w-[80%] m-auto mt-[50px]'>
    <iframe src="https://www.google.com/maps/embed?pb=!4v1740226309469!6m8!1m7!1s1Nad7MnE1oV8tDtX-vNZuQ!2m2!1d40.57327718360585!2d-73.8623121954678!3f261.2509!4f0!5f0.7820865974627469" width="100%" height="650"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/lT7gQTkAEq8?si=IMCSlsRmxKMQNENY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='m-auto mt-[5%]'></iframe>
    </div>
    <h1 className='text-[50px] text-[pink] text-center pt-[50px]'>
      Peter Parker this is Spider-Man
    </h1>
    </>
  )
}

export default About