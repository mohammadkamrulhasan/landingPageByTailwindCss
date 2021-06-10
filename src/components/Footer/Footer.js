import React from 'react';

const Footer = ({...otherProps}) => {
    return (
        <div>
            <footer className="bd-white">
                <div className="w-full max-w-7xl max-auto py-14 px-2.5 text-center">
                    <span className="text-base">
                        Copyright © All right reserve by Mohammad Kamrul Hasan
                    </span>
                </div>

            </footer>
        </div>
    );
};

export default Footer;