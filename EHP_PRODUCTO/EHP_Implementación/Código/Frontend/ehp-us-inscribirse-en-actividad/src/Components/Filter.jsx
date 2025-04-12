import { Select } from "antd";
import { Container, Wrapper } from "../assets/css/Filter.css";
import { Button } from "antd";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import { ConfigProvider } from "antd";
import locale from "antd/locale/es_ES";
import { create } from "zustand";

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

const useStore = create((set) => (
    {
        count: 0,
        inc: () => set((state) => ({count: state.count+1}))
    }
))

function Filter() {
    const counter = useStore((state) => state.count)
    const incCounter = useStore((state) => state.inc)
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
                    <Button onClick={incCounter}>{counter}</Button>
                </Container>
            </Wrapper>
        </>
    );
}

export default Filter;
