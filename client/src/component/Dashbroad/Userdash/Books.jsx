import  { useState, useEffect } from 'react';

const Mess = () => {

  const [menus, setMenus] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/books/book-section')
      .then(response => response.json())
      .then(data => setMenus(data))
      .catch(error => console.error('Error fetching menu:', error));
  }, []);
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4"><b>Avalible Books</b></h1>
      <div className="row">
        {menus.map(menu => (
          <div className="col-md-4 mb-4" key={menu._id}>
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">{menu.day}</h3>
                <p className="card-text"><strong>Title:</strong> {menu.Title}</p>
                <p className="card-text"><strong>Author:</strong> {menu.Author}</p>
                <p className="card-text"><strong>Genre:</strong> {menu.Genre}</p>
                <p className="card-text"><strong>Stock:</strong> {menu.Stock}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="btn btn-info">Buy</button>
    </div>
  )
}

export default Mess