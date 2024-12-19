const RightBottom = () => {
  const cardData = [
    {
      title: "Swimming",
      img: "https://vmrw8k5h.tinifycdn.com/news/wp-content/uploads/2021/03/kelly-pash-texas--1024x683.jpg",
    },
    {
      title: "Class",
      img: "https://media.istockphoto.com/id/170036830/photo/students-at-the-lecture.jpg?s=612x612&w=0&k=20&c=DgJcrCRpj83Uc55daWfv2JEFH_fn4OeyUdr9PODBqxg=",
    },
    {
      title: "Play Ground",
      img: "https://adventureworldplaysets.com/wp-content/uploads/2022/01/54142-PKG-D48-1-Large.jpg",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-center mb-6">Q-Zone</h2>
      <div className="grid grid-rows-3 gap-6">
        {cardData.map((card, index) => (
          <div key={index} className="card bg-white shadow-lg rounded-lg">
            <figure>
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h3 className="card-title">{card.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightBottom;
