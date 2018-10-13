import React from 'react';
import {Jumbotron, Container} from 'reactstrap';

const Jumbo = (props) => (
        <Jumbotron>
            <Container>
                <h1 className="display-3">Test</h1>
                <h4 className="lead">test2</h4>
            </Container>
        </Jumbotron>
    );

export default Jumbo;