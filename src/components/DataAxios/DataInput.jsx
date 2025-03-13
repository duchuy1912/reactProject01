import React, { useState, useEffect } from "react";

const UserSearch = () => {
  const [users, setUsers] = useState([]); // Danh sách người dùng từ API
  const [searchTerm, setSearchTerm] = useState(""); // Giá trị nhập vào ô tìm kiếm
  const [filteredUsers, setFilteredUsers] = useState([]); // Danh sách người dùng sau khi lọc

  // Fetch dữ liệu từ API khi component được mount
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data); // Mặc định hiển thị tất cả người dùng
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  // Cập nhật danh sách hiển thị khi người dùng nhập vào ô tìm kiếm
  useEffect(() => {
    const results = users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(results);
  }, [searchTerm, users]);

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h2>Tìm kiếm người dùng</h2>
      <input
        type="text"
        placeholder="Nhập tên người dùng..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />
      <ul>
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => <li key={user.id}>{user.name}</li>)
        ) : (
          <p>Không tìm thấy người dùng</p>
        )}
      </ul>
    </div>
  );
};

export default UserSearch;
