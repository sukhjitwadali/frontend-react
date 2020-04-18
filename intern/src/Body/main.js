
import React from 'react';
import {Container,Row,Col} from 'react-bootstrap'
import Filters from './filterBar'
import styles from './body.module.css'
import MainBody from './mainbody'
import './filter.css'
import axios from 'axios'
class Main extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          cat_chip: [],
          loc_chip:[],
          _data:[],
          main_data:[] 
        }
       this.category = [{id:0 , cat_name:''}]
       this.location = [{id:0 , name:''}]
       this.cat_list=[]
       this.location_list=[]
      

      }


    componentDidMount(props){
      // axios.get('http://localhost:8000/api/body/comp')
			// .then(response => {
      //           this._data = response.data
      //           this.setState({main_data:this._data})
              
			// })
			// .catch(error=>{
			// 	console.log(error)
      //       })




        axios.get('http://localhost:8000/api/meta/category',this.category)
          .then(response => {
                    const data = response.data;
                    this.category = data
                    var i;
                    for (i=0; i<data.length;i++){
                      this.cat_list.push(this.category[i].cat_name)
                    }
                    
          })
          .catch(error=>{
            console.log(error)
          })
          axios.get('http://localhost:8000/api/meta/state',this.location)
          .then(response => {
                    const data = response.data;
                    this.category = data
                    var i;
                    for (i=0; i<data.length;i++){
                      this.location_list.push(this.category[i].name)
                    }
                    
          })
          .catch(error=>{
            console.log(error) 
          })  
             

        }

      catOnChange = cat_chip => {
          // console.log(cat_chip)
          axios.get('http://localhost:8000/api/body/comp')
          .then(response => {
                    this._data = response.data
                    this.setState({main_data:this._data})
                  
          })
          .catch(error=>{
            console.log(error)
                })
        }

        



    render(){
        return (
    <Container>
    <div className={styles.heading_} ></div>
    <div className={styles.heading}><p>total number of opportunities</p></div>

        <Row>
        <Col>
        <div class="sidebar" ><Filters onClick={this.onChange} selOnCatChange = {this.catOnChange.bind(this)}  cat_list = {this.cat_list} location_list = {this.location_list}
        ></Filters> </div>
        </Col>  
      
      <Col xs={12} md={7}>
      <MainBody data={this.state.main_data}>  </MainBody>
         </Col>
      <Col md={2}><div class="sidebar" style={{"width":"250px","position":"fixed","background-color":"red"}}>skfcev</div>
</Col>
    </Row>
    
  </Container>

        )

    }

} 


export default Main;