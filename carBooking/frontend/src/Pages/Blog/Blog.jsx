import React from 'react'
import BlogItem from '../../Components/BlogItem/BlogItem'
import './Blog.css'
import blogImg from '../../images/blogImg.svg'
import blogImg2 from '../../images/blogImg2.svg'
import blogImg3 from '../../images/blogImg3.svg'
import blogImg4 from '../../images/blogImg4.svg'
import heroImg from '../../images/heroImg.svg'

const cardData = [
  {
    image:heroImg,
    title:'Lorem, ipsum.',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing.'
  },
  {
    image:blogImg2,
    title:'Lorem, ipsum.',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing.'
  },
  {
    image:blogImg3,
    title:'Lorem, ipsum.',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing.'
  },
  {
    image:blogImg4,
    title:'Lorem, ipsum.',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing.'
  },
  {
    image:heroImg,
    title:'Lorem, ipsum.',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing.'
  },
  {
    image:blogImg,
    title:'Lorem, ipsum.',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing.'
  },


]

const Blog = () => {
  return (
    <div className='blog-main-container'>
      <div className="blog-container-heading">
          <h2>On the move in Pune</h2>
          <h2>Things to do and ways to get there</h2>
      </div>
      <div className="blog-items">
      {cardData.map((item)=>{
       return( <BlogItem image={item.image} title={item.title} description={item.description}/>
      )})}
        
      </div>
    </div>
  )
}

export default Blog
