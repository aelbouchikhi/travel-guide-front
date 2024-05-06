import React from 'react';
import './subscribe.css'
import subs from '../src/assets/images/subs.png'

const Subscribe = () => {
    return (
        <section className=' container mx-auto subscribe'>
            <img src={subs} />
            <div className='heading'>
                <p>subscribe to our newsletter</p>
                <h2>Prepare yourself & let’s explore the <br/> beauty of the world</h2>
            </div>
            <form>
                <input type='email' placeholder='your email'/>
                <button type='submit'>subscribe</button>
            </form>
            
        </section>
    );
}

export default Subscribe;
