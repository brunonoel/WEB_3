/*import React, { useState } from 'react';
import './DetalleCurriculo.css';

const DetalleCurriculo = ({ curriculo }) => {
  const [fotoAmpliada, setFotoAmpliada] = useState(false);
  const [fotoSeleccionada, setFotoSeleccionada] = useState(null);
  const [avatarAmpliado, setAvatarAmpliado] = useState(false);

  const handleAvatarClick = (foto) => {
    setFotoSeleccionada(foto);
    setFotoAmpliada(true);
    setAvatarAmpliado(true);
  };

  const handleCloseFotoAmpliada = () => {
    setFotoAmpliada(false);
  };

  return (
    <div className="detalle-curriculo">
      <div className="curriculo-info">
        <div className={`avatar ${avatarAmpliado ? 'avatar-ampliado' : ''}`} onClick={() => handleAvatarClick(curriculo.foto)}>
          <img src={curriculo.foto} alt={curriculo.nombre} />
        </div>
        <div className="curriculo-details">
          <h2>{curriculo.nombre}</h2>
          <p>{curriculo.email}</p>
          <p>Teléfono: {curriculo.telefono}</p>
          <h3>Educación:</h3>
          <p>Título: {curriculo.educacion.titulo}</p>
          <p>Institución educativa: {curriculo.educacion.institucion}</p>
          <p>Año de graduación: {curriculo.educacion.anoGraduacion}</p>
          <h3>Experiencia Laboral:</h3>
          <p>Empresa: {curriculo.experienciaLaboral.empresa}</p>
          <p>Cargo: {curriculo.experienciaLaboral.cargo}</p>
          <p>Fecha de inicio: {curriculo.experienciaLaboral.fechaInicio}</p>
          <p>Fecha de fin: {curriculo.experienciaLaboral.fechaFin}</p>
          <p>Descripción: {curriculo.experienciaLaboral.descripcion}</p>
        </div>
      </div>
      {fotoAmpliada && (
        <div className="foto-ampliada" onClick={handleCloseFotoAmpliada}>
          <div className="foto-ampliada-contenido">
            <span className="close" onClick={handleCloseFotoAmpliada}>&times;</span>
            <img src={fotoSeleccionada} alt="Foto ampliada" />
          </div>
        </div>
      )}
    </div>
  );
};

export default DetalleCurriculo;
*/

import React, { useState } from 'react';
import './DetalleCurriculo.css';

const DetalleCurriculo = ({ curriculo }) => {
  const [fotoAmpliada, setFotoAmpliada] = useState(false);
  const [fotoSeleccionada, setFotoSeleccionada] = useState(null);
  const [avatarAmpliado, setAvatarAmpliado] = useState(false);

  const handleAvatarClick = (foto) => {
    setFotoSeleccionada(foto);
    setFotoAmpliada(true);
    setAvatarAmpliado(true);
  };

  const handleCloseFotoAmpliada = () => {
    setFotoAmpliada(false);
  };

  return (
    <div className="detalle-curriculo">
      <div className="curriculo-info">
        <div className={`avatar ${avatarAmpliado ? 'avatar-ampliado' : ''}`} onClick={() => handleAvatarClick(curriculo.foto)}>
          <img src={curriculo.foto} alt={curriculo.nombre} />
        </div>
        <div className="curriculo-details">
          <h2>{curriculo.nombre}</h2>
          <p>{curriculo.email}</p>
          <p>Teléfono: {curriculo.telefono}</p>
          <h3>Educación:</h3>
          <p>Título: {curriculo.educacion.titulo}</p>
          <p>Institución educativa: {curriculo.educacion.institucion}</p>
          <p>Año de graduación: {curriculo.educacion.anoGraduacion}</p>
          <h3>Experiencia Laboral:</h3>
          <p>Empresa: {curriculo.experienciaLaboral.empresa}</p>
          <p>Cargo: {curriculo.experienciaLaboral.cargo}</p>
          <p>Fecha de inicio: {curriculo.experienciaLaboral.fechaInicio}</p>
          <p>Fecha de fin: {curriculo.experienciaLaboral.fechaFin}</p>
          <p>Descripción: {curriculo.experienciaLaboral.descripcion}</p>
        </div>
      </div>
      {fotoAmpliada && (
        <div className="foto-ampliada" onClick={handleCloseFotoAmpliada}>
          <div className="foto-ampliada-contenido">
            <span className="close" onClick={handleCloseFotoAmpliada}>&times;</span>
            <img src={fotoSeleccionada} alt="Foto ampliada" />
          </div>
        </div>
      )}
    </div>
  );
};

export default DetalleCurriculo;
