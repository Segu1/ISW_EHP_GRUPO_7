import { Select } from "antd";
import { Container, Wrapper } from "../assets/css/Filter.css";
import { Button } from "antd";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import { ConfigProvider } from "antd";
import locale from "antd/locale/es_ES";

const disabledDate = (current) => {
    return current && current < dayjs().startOf('day');
};

const tipoActividad = [
    {
        value: "Tirolesa",
        label: <span>Tirolesa</span>,
    },
    {
        value: "Safari",
        label: <span>Safari</span>,
    },
    {
        value: "Palestra",
        label: <span>Palestra</span>,
    },
    {
        value: "Jardinería",
        label: <span>Jardinería</span>,
    },
];

function Filter() {
    return (
        <>
            <Wrapper>
                <Container>
                    <Select
                        placeholder="Filtrar categoría"
                        options={tipoActividad}
                    />
                    <ConfigProvider locale={locale}>
                        <DatePicker
                            disabledDate={disabledDate}
                            defaultValue={dayjs()}
                            format="DD-MM-YYYY"
                        />
                    </ConfigProvider>
                </Container>
            </Wrapper>
        </>
    );
}

export default Filter;
