import React from 'react';
import ReactDOM from 'react-dom';

function Header() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                            Header
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;

if (document.getElementById('header')) {
    ReactDOM.render(<Header />, document.getElementById('header'));
}
