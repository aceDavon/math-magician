import React, { Component } from 'react';
import PropType from 'prop-types';
import { operands, Symbols } from './Data';

export default class Calculator extends Component {
  PropsType = { styles: PropType.string.isRequired };

  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };
  }

  handleClick = (e) => this.setState({ value: e.target.value });

  render() {
    const { value } = this.state;
    return (
      <div className="w-1/3 rounded-lg shadow-lg shadow-gray-200 py-4">
        <div className="flex flex-col gap-0 w-9/12 mx-auto">
          <div className="bg-slate-500 w-full text-white text-right px-3 py-2">
            {value}
          </div>
          <div className="flex gap-0 w-full">
            <div className="bg-gray-300 grid grid-cols-3 w-full">
              {operands.map((button) => (
                <button
                  type="button"
                  className="bg-gray-400 border px-2 py-2"
                  value={button}
                  key={button}
                  onClick={this.handleClick}
                >
                  {button}
                </button>
              ))}
              <button
                type="button"
                value={0}
                className="col col-span-2 bg-gray-400 py-2 "
              >
                0
              </button>
              <button type="button" className="px-2 py-2 border bg-gray-400">
                .
              </button>
            </div>
            <div className="w-3/12 flex flex-col">
              {Symbols.map((signs) => (
                <button
                  type="button"
                  className="bg-orange-500 border px-2 py-2"
                  key={signs}
                  onClick={this.handleClick}
                  value={signs}
                >
                  {signs}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
