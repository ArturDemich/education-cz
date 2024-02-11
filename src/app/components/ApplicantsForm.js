'use client'
import { useState } from "react";

export default function ApplicantsForm() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    birthday: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Ваша логіка для обробки вірно заповненої форми
      console.log("Form submitted:", formData);
    } else {
      console.log("Form validation failed");
    }
  };

  const validateForm = () => {
    const { name, surname, email, phone, birthday } = formData;
    if (!name || !surname || !email || !phone || !birthday) {
      return false; // Перевірка чи всі поля заповнені
    }
    if (!validateEmail(email)) {
      return false; // Перевірка електронної пошти
    }
    if (!validatePhone(phone)) {
      return false; // Перевірка номера телефону
    }
    return true; // Всі перевірки пройдено успішно
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = (phone) => {
    const regex = /^\+?\d{10,}$/;
    return regex.test(phone);
  };

  return (
    <section>
      <form id="FORM" onSubmit={handleSubmit}>
        <div className="page-main-content form-padding form-header">
          <h2>Анкета студента для заказа консультации</h2>
          <p className="f5">
            Заполняйте, пожалуйста, все пункты анкеты. Вся эта информация
            необходима для того что б ми связались с Вами в дальнейшем.
          </p>
        </div>
        <div className="form-area form-width">
          <div className="form-body">
            <div className="form-item">
              <label>
                Имя студента:
                <input
                  type="text"
                  name="name"
                  placeholder="Имя"
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className="form-item">
              <label>
                Фамилия студента:
                <input
                  type="text"
                  name="surname"
                  placeholder="Фамилия"
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className="form-item">
              <label>
                Электронная почта студента:
                <input
                  type="email"
                  name="email"
                  placeholder="Ел. почта"
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className="form-item">
              <label>
                Контактный телефон:
                <input
                  type="tel"
                  name="phone"
                  placeholder="Моб. телефон"
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className="form-item">
              <label>
                Дата рождения студента:
                <input
                  type="date"
                  name="birthday"
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className="form-item">
              <label>
                Ваш коментарий / вопрос:
                <textarea type="text" name="comment" onChange={handleChange} />
              </label>
            </div>
            <button className="form-button" type="submit">
              Заказать консультацию
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
