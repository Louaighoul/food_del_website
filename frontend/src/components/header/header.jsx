import React from 'react'
import './header.css'

const header = () => {
return (
    <div className="header">
            <div className="header-content">
                    <h2>
                            Order your
                            <br />
                            favorite food here
                    </h2>
                    <p>
                            Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients.
                            Whether you're craving classic comfort food or adventurous flavors, our selection is sure to satisfy every palate.
                    </p>
                    <button>View Menu</button>
            </div>
    </div>
)
}

export default header
