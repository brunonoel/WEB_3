import React, { useState, useEffect } from 'react';
import FormularioRegistro from './FormularioRegistro';
import ListaCurriculos from './ListaCurriculos';
import DetalleCurriculo from './DetalleCurriculo';
import './App.css';

const App = () => {
  const [curriculos, setCurriculos] = useState([]);
  const [curriculosFiltrados, setCurriculosFiltrados] = useState([]);
  const [curriculoSeleccionado, setCurriculoSeleccionado] = useState(null);
  const [filtro, setFiltro] = useState('');

  useEffect(() => {
    console.log("Cargando currículos desde localStorage...");
    const curriculosGuardados = JSON.parse(localStorage.getItem('curriculos'));
    if (curriculosGuardados && curriculosGuardados.length > 0) {
      console.log("Currículos cargados:", curriculosGuardados);
      setCurriculos(curriculosGuardados);
    }
  }, []);

  const guardarCurriculosEnLocalStorage = (curriculos) => {
    localStorage.setItem('curriculos', JSON.stringify(curriculos));
  };

  const registrarCurriculo = (nuevoCurriculo) => {
    const nuevosCurriculos = [...curriculos, nuevoCurriculo];
    setCurriculos(nuevosCurriculos);
    guardarCurriculosEnLocalStorage(nuevosCurriculos);
  };

  const buscarCurriculos = () => {
    const resultados = curriculos.filter((curriculo) => {
      // Lógica para filtrar currículos según el criterio de búsqueda
      return (
        curriculo.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
        curriculo.email.toLowerCase().includes(filtro.toLowerCase()) ||
        curriculo.aniosExperiencia.toString().includes(filtro) ||
        curriculo.anioEgreso.toString().includes(filtro)
      );
    });
    setCurriculosFiltrados(resultados);
  };

  const handleBuscar = () => {
    buscarCurriculos();
  };

  const handleFiltroChange = (event) => {
    setFiltro(event.target.value);
    if (event.target.value === '') {
      setCurriculosFiltrados([]);
    } else {
      buscarCurriculos(); // Realizar la búsqueda en cada cambio del filtro
    }
  };

  const verDetalleCurriculo = (curriculo) => {
    setCurriculoSeleccionado(curriculo);
  };

  const eliminarCurriculo = (curriculo) => {
    const nuevosCurriculos = curriculos.filter((c) => c !== curriculo);
    setCurriculos(nuevosCurriculos);
    guardarCurriculosEnLocalStorage(nuevosCurriculos);
    setCurriculoSeleccionado(null);
  };

  return (
    <div>
      <h1>Registro de Currículos</h1>
      <FormularioRegistro onRegistrar={registrarCurriculo} />
      <div>
        <input type="text" value={filtro} onChange={handleFiltroChange} placeholder="Buscar por nombre, email, años trabajados, año egresado" />
        <button onClick={handleBuscar}>Buscar</button>
      </div>
      <ListaCurriculos
        curriculos={curriculosFiltrados.length ? curriculosFiltrados : curriculos}
        onVerDetalle={verDetalleCurriculo}
        onEliminar={eliminarCurriculo}
      />
      {curriculoSeleccionado && <DetalleCurriculo curriculo={curriculoSeleccionado} />}
    </div>
  );
};

export default App;
