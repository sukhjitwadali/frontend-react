
import React from 'react';
import {Container,Row,Col} from 'react-bootstrap'
import Filters from './filterBar'
import styles from './body.module.css'
import MainBody from './mainbody'
import './filter.css'
class Main extends React.Component{
    render(){
        return (
    <Container>
    <div className={styles.heading_} ></div>
    <div className={styles.heading}><p>total number of opportunities</p></div>

        <Row>
        <Col>
        <div class="sidebar" ><Filters/></div>
        </Col>
      
      <Col xs={12} md={7}>
      <MainBody/>
         </Col>
      <Col md={2}><div class="sidebar" style={{"width":"250px","position":"fixed"}}>skfcev</div>
</Col>
    </Row>
    
  </Container>

        )

    }

} 


export default Main;