import React, { Component } from 'react';

class FilterByColor extends Component {
  render() {
    return (
      <div className="col-md-4 ml-auto">
        <div className="colors-check">
          <p>Filter by color:</p>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="black"
              value="black"
            />
            <label htmlFor="black" className="black">
              <span />
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="white"
              value="white"
            />
            <label htmlFor="white" className="white">
              <span />
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="red"
              value="red"
            />
            <label htmlFor="red" className="red">
              <span />
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="pink"
              value="pink"
            />
            <label htmlFor="pink" className="pink">
              <span />
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="beige"
              value="beige"
            />
            <label htmlFor="beige" className="beige">
              <span />
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="brown"
              value="brown"
            />
            <label htmlFor="brown" className="brown">
              <span />
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="blue"
              value="blue"
            />
            <label htmlFor="blue" className="blue">
              <span />
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="gray"
              value="gray"
            />
            <label htmlFor="gray" className="gray">
              <span />
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default FilterByColor;
