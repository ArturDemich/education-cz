'use client'
import { useState } from "react";
import { postDataClientApi } from "../ui/data";


const NAMES = /^[a-zA-Zа-яА-ЯіІїЇєЄёЁґҐ'\-]+(?:\s+[a-zA-Zа-яА-ЯіІїЇєЄёЁґҐ'\-]+)*$/;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE = /^\+?\d{10,}$/;


export default function ApplicantsForm() {  
  const [nameRule, setNameRule] = useState('')
  const [surnameRule, setSurnameRule] = useState('')
  const [emailRule, setEmailRule] = useState('')
  const [phoneRule, setPhoneRule] = useState('')
  const [birthdayRule, setBirthdayRule] = useState('')
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    number: "",
    birthday: "",
    clientText: "",
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    let cleanedValue = value;
    if (name === 'number') {
        // Видаляємо всі символи, крім цифр і +
        cleanedValue = value.replace(/[^\d+]/g, '');
      }
    setFormData({ ...formData, [name]: cleanedValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Ваша логіка для обробки вірно заповненої форми
      postDataClientApi(formData)
      console.log("Form submitted:", formData);
    } else {
      console.log("Form validation failed");
    }
  };

  const validateForm = () => {
    const { name, surname, email, number, birthday } = formData;
    let isValid = true

    if (!name || !surname || !email || !number || !birthday) {
      isValid = false; 
    }
    if (!validateInputs(NAMES, name)) {
        setNameRule('Имя указанао неверно!')
        isValid = false; 
        
    }
    if (!validateInputs(NAMES, surname)) {
        setSurnameRule('Фамилия указана неверно!')
        isValid = false; 
    }
    if (!validateInputs(EMAIL, email)) {
        setEmailRule('Електронная почта указана неверно!')
        isValid = false;
    }
    if (!validateInputs(PHONE, number)) {
        setPhoneRule('Контактный телефон указана неверно!')
        isValid = false;
    }
    if (!validateBirthdate(birthday)) {        
        isValid = false; 
    }    
    return isValid;
  };  

  const validateInputs = (regex, value) => {    
    return regex.test(value);
  };

  const validateBirthdate = (birthdate) => {
    const today = new Date();
    const birthDate = new Date(birthdate);      
    const maxAge = 100 * 365 * 24 * 60 * 60 * 1000; // 100 years  
    if (birthDate > today) {
        setBirthdayRule('Дата рождения не может быть больше текущей даты!')
      return false; 
    }
    if (today - birthDate > maxAge) {
        setBirthdayRule('Дата рождения указана неверно!')
      return false; 
    }
  
    return true; 
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
            <div className={[nameRule ? "form-item form-rule" : "form-item"]}>
              <label>
                Имя студента:
                <input
                  type="text"
                  name="name"
                  placeholder="Имя"
                  onChange={handleChange}
                  value={formData.name}
                  onFocus={() => nameRule && setNameRule("")}
                  minLength="3"
                  required
                />
                {nameRule && <span>{nameRule}</span>}
              </label>
            </div>
            <div className={[surnameRule ? "form-item form-rule" : "form-item"]}>
              <label>
                Фамилия студента:
                <input
                  type="text"
                  name="surname"
                  placeholder="Фамилия"
                  value={formData.surname}
                  onChange={handleChange}
                  onFocus={() => surnameRule && setSurnameRule("")}
                  minLength="3"
                  required
                />
                {surnameRule && <span>{surnameRule}</span>}
              </label>
            </div>
            <div className={[emailRule ? "form-item form-rule" : "form-item"]}>
              <label>
                Электронная почта студента:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="Ел. почта"
                  onChange={handleChange}
                  onFocus={() => emailRule && setEmailRule("")}
                  required
                />
                {emailRule && <span>{emailRule}</span>}
              </label>
            </div>
            <div className={[phoneRule ? "form-item form-rule" : "form-item"]}>
              <label>
                Контактный телефон:
                <input
                  type="tel"
                  name="number"
                  value={formData.number}
                  placeholder="+7 747 000 00 00"
                  onChange={handleChange}
                  onFocus={() => phoneRule && setPhoneRule("")}
                  required
                />
                {phoneRule && <span>{phoneRule}</span>}
              </label>
            </div>
            <div className={[birthdayRule ? "form-item form-rule" : "form-item"]}>
              <label>
                Дата рождения студента:
                <input
                  type="date"
                  name="birthday"
                  value={formData.birthday}
                  onChange={handleChange}
                  onFocus={() => birthdayRule && setBirthdayRule("")}
                  required
                />
                {birthdayRule && <span>{birthdayRule}</span>}
              </label>
            </div>
            <div className="form-item">
              <label>
                Ваш коментарий / вопрос:
                <textarea 
                type="text" 
                name="clientText" 
                value={formData.clientText}
                onChange={handleChange} 
                />
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
