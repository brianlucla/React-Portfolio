import React from 'react'
import Projects from '../components/Projects'
import image1 from '../images/bassinvadershomepage.png'
import image2 from '../images/project01-screenshot.png'
import image3 from '../images/blogPostMVC.jpg'


export default function ProjectsPage() {
  const links = [
    {
      github: "https://github.com/brianlucla/Bass-Invaders-2",
      app: "https://whispering-river-57701-843970124066.herokuapp.com/",
    },
    {
      github:
        "https://github.com/brianlucla/Recipe-Generator-Based-on-Ingredient-Availability",
      app: "https://brianlucla.github.io/Recipe-Generator-Based-on-Ingredient-Availability/",
    },
    {
      github: "https://github.com/brianlucla/Blog-Post-MVC",
      app: "https://fast-river-80085-31b3a2f20203.herokuapp.com/",
    },
  ];

  const imageURLs = [
    image1,
    image2,
    image3
  ]
  
  return (
    <div className="w-screen h-[650px] px-[20px] py-[50px] bg-[#3F2E56]">
      <Projects links={links} imageURLs={imageURLs} />
    </div>
  );
}

