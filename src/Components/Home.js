import React from 'react'
import DropDown from './DropDown'
import ImageSlider from './ImageSlider'
import Services from './Services'
import { SliderData } from './SliderData'

export default function Home() {
  return (
    <div>
    <DropDown/>
    <ImageSlider slides={SliderData} />
    <Services/>
    </div>
  )
}
