import { useState } from 'react';
import styles from './Container.module.css'

const Container = ({ id }) => {

    // Check if a number is odd
    const isOdd = ( num ) => {
        return num % 2 == 1;
    }

    // Set the background color of the container depending on its id
    const className = isOdd(id) ? 'container' : 'container grey'

    return ( 
        <div className={className}>
            esto sera drive
        </div>
    );
}
 
export default Container;