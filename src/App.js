import React, { Component } from 'react'
import './App.css'
import Header from './Header/Header'
import Customize from './Customize/Customize'
import Cart from './Cart/Cart'
import Total from './Total/Total'

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class App extends Component {

  state = {
    selected: {
      'Processor': {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      'Display': {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <form className="main__form">
            <h2>Customize your laptop</h2>
            <Customize
              update={(feature, newValue) => {this.updateFeature(feature, newValue)}}
              features={this.props.features}
              selected={this.state.selected}
              format={USCurrencyFormat}
						/>
          </form>
          <section className="main__summary">
            <h2>Your cart</h2>
            <Cart
              selected={this.state.selected}
              format={USCurrencyFormat}
            />
            <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                <Total
                  selected={this.state.selected}
                  format={USCurrencyFormat}
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;