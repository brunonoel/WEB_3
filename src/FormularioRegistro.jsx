import React, { useState } from 'react';
import './FormularioRegistro.css';

const FormularioRegistro = ({ onRegistrar }) => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [titulo, setTitulo] = useState('');
  const [institucion, setInstitucion] = useState('');
  const [anoGraduacion, setAnoGraduacion] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [cargo, setCargo] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [foto, setFoto] = useState(null);

  const handleRegistrar = () => {
    // Validar los campos antes de enviar
    if (!nombre || !email || !telefono) {
      alert('Por favor completa todos los campos obligatorios');
      return;
    }

    // Crear un objeto con los datos del currículo
    const nuevoCurriculo = {
      nombre,
      email,
      telefono,
      educacion: {
        titulo,
        institucion,
        anoGraduacion
      },
      experienciaLaboral: {
        empresa,
        cargo,
        fechaInicio,
        fechaFin,
        descripcion
      },
      foto
    };

    // Enviar el nuevo currículo al componente padre
    onRegistrar(nuevoCurriculo);

    // Limpiar los campos después de enviar
    setNombre('');
    setEmail('');
    setTelefono('');
    setTitulo('');
    setInstitucion('');
    setAnoGraduacion('');
    setEmpresa('');
    setCargo('');
    setFechaInicio('');
    setFechaFin('');
    setDescripcion('');
    setFoto(null);
  };

  const handleFotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="formulario-registro">
      <input
        type="text"
        placeholder="Nombre completo"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="text"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Teléfono"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
      />
      <h3>Educación</h3>
      <input
        type="text"
        placeholder="Título obtenido"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <input
        type="text"
        placeholder="Institución educativa"
        value={institucion}
        onChange={(e) => setInstitucion(e.target.value)}
      />
      <input
        type="text"
        placeholder="Año de graduación"
        value={anoGraduacion}
        onChange={(e) => setAnoGraduacion(e.target.value)}
      />
      <h3>Experiencia Laboral</h3>
      <input
        type="text"
        placeholder="Empresa"
        value={empresa}
        onChange={(e) => setEmpresa(e.target.value)}
      />
      <input
        type="text"
        placeholder="Cargo"
        value={cargo}
        onChange={(e) => setCargo(e.target.value)}
      />
      <input
        type="date"
        placeholder="Fecha de inicio"
        value={fechaInicio}
        onChange={(e) => setFechaInicio(e.target.value)}
      />
      <input
        type="date"
        placeholder="Fecha de fin"
        value={fechaFin}
        onChange={(e) => setFechaFin(e.target.value)}
      />
      <textarea
        placeholder="Descripción de responsabilidades"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />
      <input
        type="file"
        onChange={handleFotoChange}
      />
      <button onClick={handleRegistrar}>Registrar</button>
    </div>
  );
};

export default FormularioRegistro;
