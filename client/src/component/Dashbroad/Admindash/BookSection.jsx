import { useState, useEffect } from "react";

const Books = () => {
  const [menus, setMenus] = useState([]);
  const [formData, setFormData] = useState({
    Title: "",
    Author: "",
    Genre: "",
    Stock: "",
  });
  const [editMode, setEditMode] = useState(false);
  const [currentMenuId, setCurrentMenuId] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/books/book-section")
      .then((response) => response.json())
      .then((data) => setMenus(data))
      .catch((error) => console.error("Error fetching menu:", error));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      fetch(`http://localhost:3000/api/books/book-section/${currentMenuId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((updatedMenu) => {
          setMenus(
            menus.map((menu) =>
              menu._id === currentMenuId ? updatedMenu : menu
            )
          );
          setEditMode(false);
          setFormData({
            Title: "",
            Author: "",
            Genre: "",
            Stock: "",
          });
        })
        .catch((error) => console.error("Error updating menu:", error));
    } else {
      fetch("http://localhost:3000/api/books/book-section", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((newMenu) => setMenus([...menus, newMenu]))
        .catch((error) => console.error("Error adding menu:", error));
    }
  };

  const handleEdit = (menu) => {
    setEditMode(true);
    setCurrentMenuId(menu._id);
    setFormData({
      Title: menu.Title,
      Author: menu.Author,
      Genre: menu.Genre,
      Stock: menu.Stock,
    });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4"><b>Books Section</b></h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-3">
          <input type="text" name="Title" value={formData.Title} onChange={handleChange} className="form-control" placeholder="Title" required />
        </div>
        <div className="mb-3">
          <input type="text" name="Author" value={formData.Author} onChange={handleChange} className="form-control" placeholder="Author" required />
        </div>
        <div className="mb-3">
          <input type="text" name="Genre" value={formData.Genre} onChange={handleChange} className="form-control" placeholder="Genre" required />
        </div>
       
        <div className="mb-3">
          <input type="number" name="Stock" value={formData.Stock} onChange={handleChange} className="form-control" placeholder="Stock" required />
        </div>
        <button type="submit" className="btn btn-primary">{editMode ? 'Update Books' : 'Add Books'}</button>
      </form>
      <div className="row">
        {menus.map(menu => (
          <div className="col-md-4 mb-4" key={menu._id}>
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">{menu.day}</h3>
                <p className="card-text"><strong>Title:</strong> {menu.Title}</p>
                <p className="card-text"><strong>Author:</strong> {menu.Author}</p>
                <p className="card-text"><strong>Genre:</strong> {menu.Genre}</p>
                <p className="card-text"><strong>stock:</strong> {menu.Stock}</p>
                <button className="btn btn-success" onClick={() => handleEdit(menu)}>Edit</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
