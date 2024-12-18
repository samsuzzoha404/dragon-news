import { useEffect, useState } from "react";

const LeftBottomCard = () => {
  const [data, setData] = useState([]);

  // Fetch data.json dynamically
  useEffect(() => {
    fetch("/public/Fake.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container mx-auto p-4 grid grid-rows-1-1 md:grid-rows-2 lg:grid-rows-3 gap-6">
      {data.map((item) => (
        <div
          key={item.id}
          className="card w-full bg-white shadow-md rounded-lg overflow-hidden"
        >
          <figure className="w-full h-52">
            <img
              src={item.imageUrl}
              alt="Card Image"
              className="w-full h-full object-cover"
            />
          </figure>
          <div className="p-4">
            <h2 className="font-bold text-lg text-gray-800 mb-2">
              {item.title}
            </h2>
            <div className="flex justify-between items-center text-gray-500 text-sm">
              <span className="uppercase">{item.category}</span>
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7v6l4 2 4-2V7m0-4H8a2 2 0 00-2 2v16a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2z"
                  />
                </svg>
                <span>{item.date}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeftBottomCard;
