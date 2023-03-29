import React from 'react'
import HomeLayout from '../../components/Layouts/HomeLayout'
import SecondaryLayout from '../../components/Layouts/SecondaryLayout'
import LandingSection from '../../components/Discover/Landing/Landing'

export default function index() {
  return (
    <SecondaryLayout>
      <LandingSection/>
    </SecondaryLayout>
  )
}
