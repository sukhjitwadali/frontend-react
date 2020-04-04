import React from 'react';
import {InputGroup,Card,Form} from 'react-bootstrap'
import Chips, { Chip } from 'react-chips';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import styles from './filter.module.css';
import './filter.css'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Filter } from 'react-bootstrap-icons';

class Filters extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          chips: []
        }
      }
     
      onChange = chips => {
        this.setState({ chips });
      }

      state = {
        startDate: new Date()
      };
     
      handleChange = date => {
        this.setState({
          startDate: date
        });
      };

    render(){
        return (
            <Card ClassName = {styles.filter}>
            <Card.Body>
              <Card.Title> <div className={styles.filterhead}><Filter></Filter><span>Filters</span></div></Card.Title>

              <Card.Text>
                 <div className={styles.inputheaders}> <span >Category</span></div>
              <Chips
          value={this.state.chips}
          onChange={this.onChange}
          suggestions={["Your", "You", "Here"]}
        />
              </Card.Text>
              <Card.Text>
              <span>Location</span>
              <Chips
          value={this.state.chips}
          onChange={this.onChange}
          suggestions={["Your", "You", "Here"]}
        />
               
              </Card.Text>
              <div className={styles.inputheaders}>
                <span className={styles.inputheaders }>Starting from (or after)</span>
                </div>
              <Card.Text ClassName={styles.skdjc}>

              <DatePicker className = {styles.wrapper}
                    selected={this.state.startDate}
                    onChange={this.handleChange}
      />
              </Card.Text>
              <Card.Text>
              <div className={styles.inputheaders}>
                <span className={styles.inputheaders}> Max. duration (months)</span>
                </div>
                <InputGroup>
                <input list="ice-cream-flavors" type ="number" className={styles.dropdown}  name="ice-cream-choice" />
                    <datalist id="ice-cream-flavors">
                        <option value="1"></option>
                        <option value="2"></option>
                        <option value="3"></option>
                        <option value="4"></option>
                        <option value="5"></option>
                    </datalist>
			
                </InputGroup>
              </Card.Text>
              {/* <Card.Text> */}
                <FormControlLabel
                control={
              <Checkbox

                  defaultChecked
                  color="primary"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
                }
                label="internships for women"
                
                />
              {/* </Card.Text> */}
              {/* <Card.Text> */}
                <FormControlLabel
                control={
              <Checkbox
                  defaultChecked
                  color="primary"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
                }
                label="internships with job offer"
                
                />
              {/* </Card.Text> */}
            </Card.Body>
            {/* <ListGroup className="list-group-flush">
              <ListGroupItem>Cras justo odio</ListGroupItem>
              <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
              <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body> */}
          </Card>
    
        )

    }

} 


export default Filters;