import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function ActivityForm() {
  return (
    <Form>
        
 
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label> Exercise Activity Name</Form.Label>
          <Form.Control type="email" placeholder="Exercise Activity Name" />
        </Form.Group>
 
          
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Exercise Activity Description</Form.Label>
          <Form.Control type="password" placeholder="Exercise Activity Description" />
        </Form.Group>
  


       
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Exercise Activity Types</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose Activity Type</option>
            <option>Run</option>
            <option>Bicycle Ride</option>
            <option>Swim</option>
            <option>Walk</option>
            <option>Hike</option>

          </Form.Select>


        </Form.Group>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Exercise Activity Duration</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose Exercise Activity Duration</option>
            <option>4 Weeks</option>
            <option>8 Weeks</option>
            <option>3 Months</option>
            <option>6 Months</option>


          </Form.Select>
        </Form.Group>


        
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Exercise Activity Date</Form.Label>
          <Form.Control type="password" placeholder="Exercise Activity Date" />
        </Form.Group>
    

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default ActivityForm;