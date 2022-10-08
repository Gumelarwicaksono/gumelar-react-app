import React from 'react';
import './style.css';

class Plus extends React.Component {
  constructor() {
    super();
    this.state = {
      value1: 0,
      value2: 0,
      hasil: 0,
    };
    this.Plus = this.Plus.bind(this);
    this.minus = this.minus.bind(this);
    this.PlusTwo = this.PlusTwo.bind(this);
    this.minusTwo = this.minusTwo.bind(this);
    this.hasil = this.hasil.bind(this);
  }
  Plus() {
    this.setState({ value1: this.state.value1 + 1 });
  }
  minus() {
    if (this.state.value1 > 0) {
      this.setState({ value1: this.state.value1 - 1 });
    }
  }
  // value 2
  PlusTwo() {
    this.setState({ value2: this.state.value2 + 1 });
  }
  minusTwo() {
    if (this.state.value2 > 0) {
      this.setState({ value2: this.state.value2 - 1 });
    }
  }
  // hasil
  hasil() {
    this.setState({ hasil: this.state.value1 + this.state.value2 });
  }
  

  render() {
    return (
      <>
        <div className="container">
          <h4 className="nav">{this.props.nama}</h4>
        </div>
        <h3 style={{marginLeft : 20}}> <i>penjumlahan</i> </h3>
        <div className="tambah">
          <h5>value 1 :</h5>
          <button onClick={this.minus}> - </button>
          <h3> {this.state.value1}</h3>
          <button onClick={this.Plus}> + </button>
          <h5>value 2 :</h5>
          <button onClick={this.minusTwo}> - </button>
          <h3> {this.state.value2}</h3>
          <button onClick={this.PlusTwo}> + </button>
          <button className='btn' onClick={this.hasil}> hasil  = </button>
          <h3 className='btn-hasil'> {this.state.hasil}</h3>
        </div>
      </>
    );
  }
}

export default Plus;
