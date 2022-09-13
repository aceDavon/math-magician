import * as React from 'react';
import { operands, Symbols } from './Data';
import calculate from '../logic/Calculate';

const Calculator = () => {
  const [obj, setData] = React.useState({
    total: '',
    next: null,
    operation: null,
  });

  const { total, next, operation } = obj;
  const handleClick = (e) => {
    const data = e.target.value;
    const state = calculate(obj, data);
    setData(state);
  };

  return (
    <div className="w-full pt-20 flex justify-center relative h-screen bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <h1 className="text-4xl mt-28 ml-12 text-red-500">Let&apos;s Do some math!</h1>
      <div className="flex flex-col gap-0 w-5/12 mx-auto mt-28">
        <div className="bg-slate-500 w-10/12 text-white text-right h-10 flex items-center px-4">
          {total}
          {operation}
          {next}
        </div>
        <div className="flex gap-0 w-10/12">
          <div className="bg-gray-300 grid grid-cols-3 w-full">
            {operands.map((button) => (
              <button
                type="button"
                className="bg-gray-300 border px-2 py-2"
                value={button}
                key={button}
                onClick={handleClick}
              >
                {button}
              </button>
            ))}
            <button
              type="button"
              value={0}
              className="col col-span-2 border bg-gray-300 py-2"
              onClick={handleClick}
            >
              0
            </button>
            <button
              type="button"
              value="."
              className="px-2 py-2 border bg-gray-300"
              onClick={handleClick}
            >
              .
            </button>
          </div>
          <div className="w-3/12 flex flex-col">
            {Symbols.map((signs) => (
              <button
                type="button"
                className="bg-orange-400 border px-2 py-2"
                key={signs}
                onClick={handleClick}
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
};

export default Calculator;
