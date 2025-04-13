import { useState } from "react";
import { Select, DatePicker, Button, ConfigProvider } from "antd";
import { Container, Wrapper } from "../assets/css/Filter.css";
import dayjs from "dayjs";
import locale from "antd/locale/es_ES";

const disabledDate = (current) => {
    return current && current < dayjs().startOf('day');
};

const tipoActividad = [
    { value: "Tirolesa", label: <span>Tirolesa</span> },
    { value: "Safari", label: <span>Safari</span> },
    { value: "Palestra", label: <span>Palestra</span> },
    { value: "Jardinería", label: <span>Jardinería</span> },
];

function Filter({props}) {

    const [categoria, setCategoria] = useState(null);
    const [fecha, setFecha] = useState(dayjs());

    const handleCategoriaChange = (value) => {
        setCategoria(value);
    };

    const handleFechaChange = (date) => {
        setFecha(date);
    };

    const handleFiltrar = () => {
        props.recibeData(fecha, categoria)
    };

    return (
        <Wrapper>
            <Container>
                <Select
                    placeholder="Filtrar categoría"
                    options={tipoActividad}
                    onChange={handleCategoriaChange}
                    value={categoria}
                    style={{ width: 200 }}
                />
                <ConfigProvider locale={locale}>
                    <DatePicker
                        disabledDate={disabledDate}
                        defaultValue={fecha}
                        onChange={handleFechaChange}
                        format="DD-MM-YYYY"
                    />
                </ConfigProvider>
                <Button onClick={handleFiltrar}>Filtrar</Button>
            </Container>
        </Wrapper>
    );
}

export default Filter;

