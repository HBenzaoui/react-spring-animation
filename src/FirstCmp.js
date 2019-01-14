import React, { Component } from 'react';
import { Spring, config } from 'react-spring';

export class FirstCmp extends Component {
  render() {
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ duration: 1000, delay: 100 }}
      >
        {props => (
          <div style={props}>
            <div style={frStyle}>
              <h1>This is the First Component</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                aut ut facere harum rerum dolore at nisi iure quo ea sint error,
                voluptatum corrupti ducimus repellat eum atque vel quas?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                aut ut facere harum rerum dolore at nisi iure quo ea sint error,
                voluptatum corrupti ducimus repellat eum atque vel quas?
              </p>
              <Spring
                from={{ number: 0 }}
                to={{ number: 100 }}
                config={{ duration: 10000 }}
              >
                {props => (
                  <div style={props}>
                    <h1>{props.number.toFixed(0)}</h1>
                  </div>
                )}
              </Spring>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

const frStyle = {
  margin: '25px',
  padding: '30px',
  backgroundColor: '#00cec9',
  textAlign: 'center',
  color: 'white'
};

export default FirstCmp;
