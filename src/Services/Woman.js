import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import Data1 from '../Assets/Databases/Data1'
function Woman() {
  const history=useNavigate()
  return (
    <div>
    <Button onClick={()=>history(-1)}>Back</Button>
      {Data1.map((el)=>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el.imageUrl} />
      <Card.Body>
        <Card.Title>{el.namee}</Card.Title>
        <Card.Text>
          {el.price}
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
        )}
    </div>
  )
}

export default Woman