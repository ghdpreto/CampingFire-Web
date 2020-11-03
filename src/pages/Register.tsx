import React, { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

// CSS STYLES
import '../styles/pages/Register.css';

// IMAGES
import LogoImg from '../assets/images/logo.png';
import api from '../services/api';


function Register() {
  const goBack = useHistory();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [contact, setContact] = useState('');
  const [stateUf, setStateUf] = useState('');
  const [city, setCity] = useState('');
  const [address, setaddress] = useState('');
  const [image, setImage] = useState('');
  const [stateSelect, setStateSelect] = useState(false)


  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    
    // verificando se o stado foi selecionado
    if(stateUf === '') {
      return setStateSelect(true)
    }

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

      return alert(`Camping ${dataBody.name} foi Criado!`), 
      goBack.push('/')
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
            required
            onChange={(event) => setName(event.target.value)}
          />

          <label>Estado</label>
          <select 
          id="estado" 
          name="estado"
          value={stateUf}
          required
          onChange={event => setStateUf(event.target.value)}
          >
            <option value='' selected>
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
          {
            stateSelect && "Selecione um stado"
          }

          <label>Cidade</label>
          <input
            type="text"
            placeholder="Digite sua cidade..."
            value={city}
            required
            onChange={(event) => setCity(event.target.value)}
          />

          <label>Endereço</label>
          <input
            type="text"
            placeholder="Digite seu endereço..."
            value={address}
            required
            onChange={(event) => setaddress(event.target.value)}
          />

          <label>Whatsapp</label>
          <input
            type="number"
            placeholder="(xx) xxxxx-xxxx"
            value={contact}
            required
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
            required
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
