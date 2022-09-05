import React, { useState } from 'react'
import '../css/footer.css'


const Footer = () => {
return (
<>
    <footer className="footer-class d-flex justify-content-center">
        <div className="container d-flex justify-content-center align-items-center">
            <div className="col-md-4 d-flex align-items-center justify-content-center">
                <a href="/" className="mb-2 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                <img src="../src/img/logo.png" alt="logo" height="45"/>
                </a>
                <span className="mb-md-0 text-white">&copy; 2022 Delivery Services Company, Garu</span>
            </div>
        </div>
    </footer>
</>
)
}

export default Footer