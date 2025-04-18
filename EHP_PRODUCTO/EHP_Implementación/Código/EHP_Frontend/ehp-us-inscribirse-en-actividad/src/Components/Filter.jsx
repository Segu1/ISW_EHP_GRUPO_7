import { S } from "../assets/css/Filter.css";
import { Select, DatePicker, ConfigProvider } from "antd";
import dayjs from "dayjs";
import locale from "antd/locale/es_ES";

const disabledDate = (current) => {
    return current && current < dayjs().startOf("day");
};

function Filter({ tipoActividad, selectedCategory, selectedDate, onChangeCategory, onChangeDate }) {
    return (
        <>
            <S.Wrapper>
                <S.Container>
                    <Select
                        value={selectedCategory}
                        placeholder="Filtrar categoría"
                        options={tipoActividad}
                        onChange={onChangeCategory}
                        style={{ minWidth: 130 }}
                    />
                    <ConfigProvider locale={locale}>
                        <DatePicker
                            value={selectedDate}
                            disabledDate={disabledDate}
                            format="DD-MM-YYYY"
                            onChange={onChangeDate}
                        />
                    </ConfigProvider>
                </S.Container>
            </S.Wrapper>
        </>
    );
}

export default Filter;
