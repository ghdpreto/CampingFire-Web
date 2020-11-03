import React, { useEffect, useState } from 'react';

import { Link, useHistory, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Camp } from '../models/CampModel';
import api from '../services/api';

// CSS STYLES
import '../styles/pages/EditCamping.css';

// IMAGES
import LogoImg from '../assets/images/logo.png';

interface ICampParams {
  id: string;
}

function EditCamping() {
  const params = useParams<ICampParams>();
  const [camp, setCamp] = useState<Camp>();
  const { register, handleSubmit  } = useForm<Camp>();
  const goBack = useHistory();
  

  async function loadCamp() {
    await api.get(`campings/${params.id}`).then((response) => {
      setCamp(response.data);
    });
  }

  async function updateCamp(data: Camp) {

    await api
      .put(`campings/${camp?._id}`, data)
      .then((response) => {
        console.log(response)
        return alert(`Camping ${camp?.name}, foi Atualizado!`), 
        goBack.push(`/camping/${camp?._id}`)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCamp();
  }, [params.id]);

  return (
    <div id="page-edit">
      <Link to="/">
        <img src={LogoImg} className="logo-camping-fire" alt="Camping Fire" />
      </Link>
      <Link to="/">
        <button className="btn-back">Voltar</button>
      </Link>
      <div className="container">
        <h1>Editar</h1>

        <form onSubmit={handleSubmit(updateCamp)}>
          <label>Nome do local</label>
          <input
            type="text"
            placeholder="Digite o nome do local..."
            name="name"
            defaultValue={camp?.name}
            ref={register}
            required
          />

          <label>Estado</label>

          <select
            id="estado"
            name="location.state"
            defaultValue={camp?.location.state}
            ref={register}
            required
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

          <label>Cidade</label>
          <input
            type="text"
            placeholder="Digite sua cidade..."
            defaultValue={camp?.location.city}
            name="location.city"
            ref={register}
            required
          />

          <label>Endereço</label>
          <input
            type="text"
            placeholder="Digite seu endereço..."
            defaultValue={camp?.location.address}
            name="location.address"
            ref={register}
            required
          />

          <label>Whatsapp</label>
          <input
            type="number"
            placeholder="(xx) xxxxx-xxxx"
            name="contact"
            defaultValue={camp?.contact}
            ref={register}
            required
          />

          <label>Sobre</label>
          <textarea
            name="description"
            placeholder="Descreva seu camping..."
            cols={5}
            rows={8}
            defaultValue={camp?.description}
            ref={register}
            required
          />
          <button type="submit">Salvar</button>
        </form>
      </div>
    </div>
  );
}

export default EditCamping;
