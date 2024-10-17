import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import RestaurantListComponent from '../components/RestaurantListComponent'
import NavbarComponent from '../components/NavbarComponent'
import BannerComponent from '../components/BannerComponent'
import FooterComponent from '../components/FooterComponent'

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderComponent />
      <NavbarComponent />
      <BannerComponent />
      <main className="flex-1 flex flex-row container mx-auto mt-8">
        <div >
          <RestaurantListComponent />
        </div>
      </main>
      <FooterComponent />
    </div>
  )
}

export default HomePage