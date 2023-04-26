import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 70vh;
  padding: 50px;
  background-color: var(--light-brown);
`;

const FormActivityBox = styled.form`
  display: flex;
  max-width: 350px;
  flex-direction: column;
  text-align: center;
  padding: 2rem 1.2rem 1.2rem 1.2rem;
  border: 1px solid var(--medium-brown);
  box-shadow: 3px 3px var(--medium-brown);
  color: var(--medium-brown);
`;

const Title = styled.h2``;

const SubTitle = styled.h5`
  margin-bottom: 1rem;
`;

const CountriesLabel = styled.h4`
  margin: 1rem;
`;

const BottomForm = styled.div`
  text-align: center;
  padding-top: 1.2rem;
`;

const FormField = styled.div`
  margin-top: 0.8em;
  width: 100%;
`;

const ButtonSubmit = styled.button`
  padding: 0.5rem 0.9rem;
`;

const ErrorMsg = styled.div`
  color: red;
  font-size: 0.7rem;
`;

export default function Form() {
  const [temperaments, setTemperaments] = useState([]);

  if (!temperaments.length)
    fetch('http://localhost:3001/temperaments')
      .then(response => response.json())
      .then(response => setTemperaments(response))
      .catch(() => {
        alert('No pudo cargarse los temperamentos. Intentelo nuevamente por favor.');
      });

  const countries = useSelector(state => state.countries);
  const dispatch = useDispatch();

  const [buttonEnable, setButtonEnable] = useState(true);
  const [formChanged, setFormChanged] = useState(false);

  const [formData, setFormData] = useState({
    name: { value: '', valid: false },
    difficulty: { value: '', valid: false },
    duration: { value: '', valid: false },
    season: { value: '', valid: false },
    countries: { value: [], valid: true },
    img: { value: '', valid: true },
  });

  useEffect(() => {
    if (formChanged) {
      for (const prop in formData) {
        //console.log(`${prop}: `);
        if (formData[prop].hasOwnProperty('error') || formData[prop].valid === false) {
          console.log('encontroe error', formData);
          setButtonEnable(true);
          return;
        }
      }
      setButtonEnable(false);
    }
  }, [formData]);

  const handleForm = event => {
    event.preventDefault();
    console.log('formData', formData);
  };

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      if (event.target.name === 'countryInput') {
        event.preventDefault();
        return;
      }
    }
  };

  const onChangeName = event => {
    const currentValue = event.target.value;

    if (currentValue.length === 0) {
      setFormData({
        ...formData,
        name: {
          value: currentValue,
          error: 'El campo no debe estar vacio.',
          valid: false,
        },
      });
      return;
    }

    //TODO: El campo solo debe tener solo letras

    setFormData({ ...formData, name: { value: currentValue, valid: true } });
  };

  const onChangeDifficulty = event => {
    const currentValue = event.target.value;

    if (currentValue === 'Dificultad') {
      setFormData({
        ...formData,
        difficulty: {
          value: currentValue,
          error: 'Seleccione una dificultad.',
          valid: false,
        },
      });
      return;
    }

    setFormData({
      ...formData,
      difficulty: { value: currentValue, false: true },
    });
  };

  const onChangeDuration = event => {
    const currentValue = event.target.value;

    if (currentValue.length === 0) {
      setFormData({
        ...formData,
        duration: {
          value: currentValue,
          error: 'La duración no puede estar vacia.',
          valid: false,
        },
      });
      return;
    }

    //TODO: Verificar que sea solo numreos

    if (currentValue < 0) {
      setFormData({
        ...formData,
        duration: {
          value: currentValue,
          error: 'La duracion no puede ser negativa.',
          valid: false,
        },
      });
      return;
    }

    if (currentValue > 72) {
      setFormData({
        ...formData,
        duration: {
          value: currentValue,
          error: 'La duracion no puede mayor a 72 horas.',
          valid: false,
        },
      });
      return;
    }

    setFormData({
      ...formData,
      duration: { value: currentValue, valid: true },
    });
  };

  const onChangeSeason = event => {
    const currentValue = event.target.value;

    if (currentValue === 'Estación') {
      setFormData({
        ...formData,
        season: {
          value: currentValue,
          error: 'Seleccione una estación.',
          valid: false,
        },
      });
      return;
    }

    setFormData({
      ...formData,
      season: { value: currentValue, valid: true },
    });
  };

  return (
    <Section>
      <FormActivityBox
        onChange={() => setFormChanged(true)}
        onSubmit={handleForm}
        onKeyDown={handleKeyDown}>
        <Title>AGREGAR NUEVA RAZA</Title>
        <SubTitle>Rellena todos los campos</SubTitle>
        <FormField>
          {/* <StyledInput type="text" name="name" placeholder="Nombre" onChange={e => onChangeName(e)} />
        {formData.name.error && <ErrorMsg>{formData.name.error}</ErrorMsg>} */}
        </FormField>
        {/* <StyledSelect
        backColor="#d9e6ee"
        color="#31429e"
        label="#1b1e3f"
        options={['Dificultad', '1', '2', '3', '4']}
        onChange={e => onChangeDifficulty(e)}
      /> */}
        {formData.difficulty.error && <ErrorMsg>{formData.difficulty.error}</ErrorMsg>}
        <FormField>
          {/* <StyledInput
          type="number"
          name="duration"
          placeholder="Duración"
          onChange={e => onChangeDuration(e)}
        /> */}
          {formData.duration.error && <ErrorMsg>{formData.duration.error}</ErrorMsg>}
        </FormField>
        {/* <StyledSelect
        backColor="#d9e6ee"
        color="#31429e"
        label="#1b1e3f"
        options={['Estación', 'Verano', 'Otoño', 'Invierno', 'Primavera']}
        onChange={e => onChangeSeason(e)}
      /> */}
        {formData.season.error && <ErrorMsg>{formData.season.error}</ErrorMsg>}
        <CountriesLabel>Temperamentos:</CountriesLabel>
        {/* <MultiSelect formData={formData} setFormData={setFormData} countries={countries} /> */}
        <FormField>{/* <StyledInput placeholder="URL de imagen" /> */}</FormField>
        <BottomForm>
          <ButtonSubmit type="submit" disabled={buttonEnable}>
            Agregar
          </ButtonSubmit>
        </BottomForm>
      </FormActivityBox>
    </Section>
  );
}
