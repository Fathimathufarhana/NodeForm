import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function BasicExample({data}) {
    const{name,email,password,_id}=data
  return (
    <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>Name : {name}</Card.Title>
        <Card.Text>Email : {email}</Card.Text>
        <Card.Text>Password : {password}</Card.Text>
            {/* {_id} */}
       <Link to={`/update/${_id}`}><Button variant="primary">Update</Button></Link> 
      </Card.Body>
    </Card>
  );
}

export default BasicExample;