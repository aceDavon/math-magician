import React from 'react';

const Quotes = () => {
  const [arr, setArr] = React.useState({
    id: 0,
    author: 'Anonymous',
    quote: 'Math is the source code of reality.',
  });

  const fetchData = async () => {
    const data = await fetch('https://random-math-quote-api.herokuapp.com/');

    const res = await data.json();

    setArr(res);
  };

  const { quote, author } = arr;

  return (
    <div className="w-full pt-20 relative h-screen bg-gradient-to-r from-gray-300 to-gray-500 text-black">
      <div className="mt-28 w-4/12 mx-auto px-8 py-4 text-center shadow-sm shadow-gray-100 bg-white rounded-lg">
        <blockquote>{quote}</blockquote>
        <p className="italic font-thin text-right">
          --
          {author}
        </p>
        <button
          type="button"
          className="px-12 py-1 rounded-lg bg-red-300"
          onClick={() => fetchData()}
        >
          Shuffle
        </button>
      </div>
    </div>
  );
};
export default Quotes;
