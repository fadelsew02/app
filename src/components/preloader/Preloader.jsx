import React, { useEffect } from 'react'

import './preloader.css'

const Preloader = () => {

    useEffect(() => {
        const handleLoad = () => {
            const preloader = document.querySelector('#preloader');
            if (preloader) {
                preloader.remove();
            }
        };

        window.addEventListener('load', handleLoad);

        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    return (
        <div id="preloader"></div>
    )
}

export default Preloader