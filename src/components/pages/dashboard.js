import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import LandingNav from '../navigation/landingNav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import profile_pic from '../assets/noimage.jpg'
import '../stylesheets/dashboard.css'

function dashboard() {
    return (
        <div>
            <LandingNav />
            <Row noGutters={true}>
                <Col xs={12} md={5} className="dashboard-profile">
                    <Row noGutters={true} className="d-flex justify-content-center">
                        <Image src= {profile_pic} roundedCircle alt="Profile Photo" className="profile-img"/>
                    </Row> 
                    <Row noGutters={true} className="d-flex justify-content-center">
                        <h3>Parth Shah</h3>
                        
                    </Row>
                    <Row noGutters={true} className="ml-3">
                        <h6>Address : 3801 Parkview Lane, Irvine, CA - 12312</h6>
                    </Row>
                    <Row noGutters={true} className="ml-3">
                        <h6>Phone No: 21232435665</h6>
                    </Row>
                    <Row noGutters={true} className="ml-3">
                        <h6>Email: parrth2e23@gmail.com</h6>
                    </Row>
                    <Button variant="primary" type="submit" className="m-3 pl-3 pr-3">
                        Edit
                    </Button>
                </Col>
                <Col xs={12} md={7} className="">                    
                    <Row noGutters={true} className="ml-3">
                        <h3>My Items:</h3>
                    </Row>
                    <Row noGutters={true} className="ml-3">
                        <h3>Ongoing Offers:</h3>
                    </Row>
                    <Row noGutters={true} className="ml-3">
                        <h3>Past Transactions:</h3>
                    </Row>
                    <Button variant="primary" type="submit" className="m-3 pl-3 pr-3">
                        Add a New Item
                    </Button>
                </Col>
            </Row>
        </div>
    )
}

export default dashboard
