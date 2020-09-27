import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these Epic Destinations</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src='images/img-1.jpg'
                        text="Explore The Awesome Mountains"
                        label='Adventure'
                        path='/services'
                        />
                        <CardItem 
                        src='images/img-7.jpg'
                        text="Restore the Dreams of the Samurai"
                        label='Asia'
                        path='/services'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src='images/img-3.jpg'
                        text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label='Adventure'
                        path='/services'
                        />
                        <CardItem 
                        src='images/img-8.jpg'
                        text="Luxury Island"
                        label='Luxury'
                        path='/services'
                        />
                        <CardItem 
                        src='images/img-5.jpg'
                        text="Taste the best luxury hotels in Spain"
                        label='Luxury'
                        path='/services'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src='images/img-4.jpg'
                        text="Watch the sunset in Dubai"
                        label='Luxury'
                        path='/services'
                        />
                        
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Cards
