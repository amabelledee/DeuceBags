import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './footer.css'


class Footer extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Navbar fixed="bottom" className="navyBlue justify-content-center reversedCopy"> © 2019  SUTHER. All Rights Reserved. SUTHER is a trademark of DeuceBags</Navbar>
            </React.Fragment>
        );
    }
}

export default Footer;