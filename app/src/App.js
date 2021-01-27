// Import CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import React Elements
import { React, useState } from 'react';

// Import Bootstrap Components
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function App() {

  // Declare State
  const [characters, setCharacters] = useState(["Jim", "Joey"]); // Characters to be used in the scene

  // A function that dynamically creates the select component based on the provided characters.
  const createSelectItems = () => {
    let listItems = characters.map((character) => {
      return <option>{character}</option>
    });

    return <Form.Control as="select">{ listItems }</Form.Control>;
  }

  const formSelect = createSelectItems();

  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <h1>Dialogue Generator</h1>
          <p>This is Nathan's Dialogue Generator. Instructions: 1) Enter the characters that will speak in this scene. 2) Select the character speaknig from a drop-down selector, and then add their speech. Click the "Generate Dialogue" button when you are done.</p>
          <br/>
          <Form>
            <Form.Group controlId="createCharacters">
              <Row>
                <Col md="auto">
                  <Form.Label className="pl-3">Enter Characters</Form.Label>
                </Col>
                <Col>
                  <Form.Control type="text" placeholder="Character Name"></Form.Control>
                </Col>
                <Col md="auto">
                  <Form.Control className="btn-primary" type="submit" value="Add Character"></Form.Control>
                </Col>
              </Row>
            </Form.Group>
          </Form>
          <br/>
          <Form>
            <Row>
              <Col md="auto">
                <Form.Label className="pl-3 pr-3">Character Speaking</Form.Label>
                <Form.Group controlId="character1">
                  { formSelect }
                </Form.Group>
                <Form.Group controlId="character2">
                  { formSelect }
                </Form.Group>
                <Form.Group controlId="character3">
                  { formSelect }
                </Form.Group>
                <Form.Group controlId="character4">
                  { formSelect }
                </Form.Group>
              </Col>
              <Col>
                <Form.Label>Character's Dialogue</Form.Label>
                <Form.Group controlId="speech1">
                  <Form.Control type="text" placeholder="Speech..."></Form.Control>
                </Form.Group>
                <Form.Group controlId="speech2">
                  <Form.Control type="text" placeholder="Speech..."></Form.Control>
                </Form.Group>
                <Form.Group controlId="speech3">
                  <Form.Control type="text" placeholder="Speech..."></Form.Control>
                </Form.Group>
                <Form.Group controlId="speech4">
                  <Form.Control type="text" placeholder="Speech..."></Form.Control>
                </Form.Group>
              </Col>
            </Row>
          </Form>
          <Button>Generate Dialogue</Button>
        </Container>
      </header>
    </div>
  );
}

export default App;
