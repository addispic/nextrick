export default function Page() {
  return (
    <div className="w-screen h-screen overflow-hidden flex items-center justify-center">
      <div className="card">
        <div className="imgBx">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQnrEOEMw888bA9JfkrLAi8VUtrMf_-FdG5w&s"
            className="w-full h-full object-center object-cover"
            alt=""
          />
        </div>
        <div className="content">
          <span className="price"></span>
        </div>
      </div>
    </div>
  );
}
