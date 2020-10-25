import React, { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';

// CSS STYLES
import '../styles/pages/Register.css';

// IMAGES
import LogoImg from '../assets/images/logo.png';
import api from '../services/api';


function Register() {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [contact, setContact] = useState('');
  const [stateUf, setStateUf] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [image, setImage] = useState('');


  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    console.log({
      name,
      description,
      contact,
      stateUf,
      city,
      address,
      image,
    })


    const dataBody = {
      name,
      description,
      image,
      contact,
      location: {
        address,
        city,
        state: stateUf
      }
    }

    api.post(`campings`, dataBody).then((response) => {
      console.log(response)
    })
  }

  return (
    <div id="page-register">
      <Link to="/">
        <img src={LogoImg} className="logo-camping-fire" alt="Camping Fire" />
      </Link>
      <Link to="/">
        <button className="btn-back">Voltar</button>
      </Link>
      <div className="container">
        <h1>Cadastrar</h1>
        <form id='form' onSubmit={handleSubmit}>
          <label>Nome do local</label>
          <input
            type="text"
            placeholder="Digite o nome do local..."
            name='name'
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          <label>Estado</label>
          <select 
          id="estado" 
          name="estado"
          value={stateUf}
          onChange={event => setStateUf(event.target.value)}
          >
            <option selected>
              Selecione o estado
            </option>
            <option value="AC">Acre</option>
            <option value="AL">Alagoas</option>
            <option value="AP">Amapá</option>
            <option value="AM">Amazonas</option>
            <option value="BA">Bahia</option>
            <option value="CE">Ceará</option>
            <option value="DF">Distrito Federal</option>
            <option value="ES">Espírito Santo</option>
            <option value="GO">Goiás</option>
            <option value="MA">Maranhão</option>
            <option value="MT">Mato Grosso</option>
            <option value="MS">Mato Grosso do Sul</option>
            <option value="MG">Minas Gerais</option>
            <option value="PA">Pará</option>
            <option value="PB">Paraíba</option>
            <option value="PR">Paraná</option>
            <option value="PE">Pernambuco</option>
            <option value="PI">Piauí</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="RN">Rio Grande do Norte</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="RO">Rondônia</option>
            <option value="RR">Roraima</option>
            <option value="SC">Santa Catarina</option>
            <option value="SP">São Paulo</option>
            <option value="SE">Sergipe</option>
            <option value="TO">Tocantins</option>
            <option value="EX">Estrangeiro</option>
          </select>

          <label>Cidade</label>
          <input
            type="text"
            placeholder="Digite sua cidade..."
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />

          <label>Endereço</label>
          <input
            type="text"
            placeholder="Digite seu endereço..."
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />

          <label>Whatsapp</label>
          <input
            type="number"
            placeholder="(xx) xxxxx-xxxx"
            value={contact}
            onChange={(event) => setContact(event.target.value)}
          />

          <label>Sobre</label>
          <textarea
            id=""
            name="sobre"
            placeholder="Descreva seu camping..."
            cols={5}
            rows={8}
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />

          <label>Image</label>
          <input
            type="url"
            placeholder="Cole a URL da imagem..."
            value={image}
            onChange={(event) => setImage(event.target.value)}
          />

        <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
export default Register;
