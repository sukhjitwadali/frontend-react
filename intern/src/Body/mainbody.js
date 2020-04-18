import React from 'react'
import Main from './main'
import axios from 'axios'
import GridList from '@material-ui/core/GridList'
import { Card,Container,Row,Col } from 'react-bootstrap'
import data from './data'
import styles from './body.module.css'
const socialMediaList = data.SocialMedias;

class MainBody extends React.Component{
    constructor(props){
        super(props);
        // this.state = {data:[]}
    
    }
    
    // componentDidMount(props){
	// 	axios.get('http://localhost:8000/api/body/comp')
	// 		.then(response => {
    //             console.log(response)
    //             const data = response.data;
    //             this.setState({data});
    //             // console.log(data)
	// 		})
	// 		.catch(error=>{
	// 			console.log(error)
    //         })
            
    // }


    checkClick() {
        alert("notyId");
    }
    
    render(){
        return(

            <div>
                
            {
              this.props.data.map((company) => {
                return (
                    <div >
                    <Card>
                    <Card.Body>
                        <Card.Title>
                        {company.name_category}
                        </Card.Title>
                        <Card.Text>
                        <span class={styles.header}>Location(s): </span> 
                        { company.state}
                        </Card.Text>
                            <Row ClassName={styles.cardheaders} xs={2} md={4} lg={5}>
                            <Col><span class={styles.header}>Start Date</span></Col>
                            <Col><span class={styles.header}>Duration</span></Col>
                            <Col><span class={styles.header}>stipend</span></Col>
                            <Col><span class={styles.header}>Post On</span></Col>
                            <Col><span class={styles.header}>Apply By</span></Col>
                            </Row>
                        <Row className={styles.carddata} xs={2} md={4} lg={5}>
                        <Col><span class={styles.data}>{company.startdate}</span></Col>
                        <Col><span class={styles.data}>{company.duration}</span> </Col>
                        <Col><span class={styles.data}>{company.stipend}</span> </Col>
                        <Col><span class={styles.data}>{company.startdate}</span> </Col>
                        <Col><span class={styles.data}>{company.startdate}</span> </Col>
                    </Row>

                    </Card.Body>
                    <Card.Footer className={styles.footer}>2 days ago</Card.Footer>

                    </Card>
                    <div className={styles.cards}></div>

                    </div>
            
                );
              })
            } 
        </div>


    //         <GridList> 
    //         {tileData.map((tile) => (
    //       <GridListTile key={tile.img} cols={tile.cols || 1}>
    //         {/* <img src={tile.img} alt={tile.title} /> */}

    //         {/* <Card>
    //          <Card.Body>

    //         </Card.Body>
    //         <Card/> */}

    //       </GridListTile>
    // ))}
    //   </GridList>
            
        )
    }

}

export default MainBody;