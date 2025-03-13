import { useState } from "react";

function FormExample() {
  const [formData, setFormData] = useState({ name: "", email: "" });

  // Xử lý khi nhập dữ liệu
  const handleChange = (event) => {
    setFormData({
      ...formData, // Giữ nguyên dữ liệu cũ
      [event.target.name]: event.target.value, // Cập nhật giá trị mới
    });
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Form Đăng Ký</h2>
      <input
        type="text"
        name="name"
        placeholder="Nhập tên"
        value={formData.name}
        onChange={handleChange}
        style={{ padding: "8px", margin: "5px", fontSize: "16px" }}
      />
      <input
        type="email"
        name="email"
        placeholder="Nhập email"
        value={formData.email}
        onChange={handleChange}
        style={{ padding: "8px", margin: "5px", fontSize: "16px" }}
      />
      <p>Tên: {formData.name}</p>
      <p>Email: {formData.email}</p>
    </div>
  );
}

export default FormExample;
