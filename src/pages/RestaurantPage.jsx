import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import NavbarComponent from '../components/NavbarComponent'
import RestaurantListComponent from '../components/RestaurantListComponent'
import FooterComponent from '../components/FooterComponent'
import SearchComponent from '../components/SearchComponent'
import ModalComponent from '../components/ModalComponent'

const RestaurantPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#faebd7]">
    <HeaderComponent />
    <NavbarComponent />
    <SearchComponent />
    <main className="flex-1 flex flex-row container">
      <div >
        <RestaurantListComponent />
      </div>
    </main>
    <FooterComponent />
  </div>
  )
}

export default RestaurantPage