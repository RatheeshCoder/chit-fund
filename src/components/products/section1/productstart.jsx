import React, { Component } from 'react';

class DynamicH1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textIndex: 0,
      texts: ['Earn High Returns ', 'Take Emergency Fund ', 'Feel financial freedom'],
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.changeText, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  changeText = () => {
    this.setState((prevState) => ({
      textIndex: (prevState.textIndex + 1) % this.state.texts.length,
    }));
  };

  render() {
    const { texts, textIndex } = this.state;
    return (
      <section className='product-bg'>
        <div className='cta-product-title'>
            <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900'>{texts[textIndex]}</h1>
          <p>With our Chit Fund Schemes</p>
        </div>
        
      </section>
    );
  }
}

export default DynamicH1;
