import React from 'react'

export default function ScrollArrows() { 
    const SlideLeft = () =>{
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
      }
    const SlideRight = () => {
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    }
      const SlideLeftt = () =>{
        let slider = document.getElementById('sliderr');
        slider.scrollLeft = slider.scrollLeft - 500;
      }
    const SlideRightt = () => {
        let slider = document.getElementById('sliderr');
        slider.scrollLeft = slider.scrollLeft + 500;
    }
      const SlideLefttt = () =>{
        let slider = document.getElementById('sliderrr');
        slider.scrollLeft = slider.scrollLeft - 500;
      }
    const SlideRighttt = () => {
        let slider = document.getElementById('sliderrr');
        slider.scrollLeft = slider.scrollLeft + 500;
    }
  return (
    <></>
  )
}
