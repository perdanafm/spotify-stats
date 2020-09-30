import React from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';

export default class About extends React.Component {
  render() {
    return (
      <div className="container-404">
        <div className="wrapper-404">
          <h5>404</h5>
          <span>We can't find the page you're looking for.</span>
          <div className="wrapper-button">
            <Button>
              <Link href="/">Back to home</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
