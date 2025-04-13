import { S } from "../assets/css/Filter.css";
import { Select, DatePicker, Button, ConfigProvider } from "antd";
import dayjs from "dayjs";
import locale from "antd/locale/es_ES";

const disabledDate = (current) => {
    return current && current < dayjs().startOf("day");
};

function Filter({ tipoActividad, selectedCategory, onChangeCategory }) {
    return (
        <>
            <S.Wrapper>
                <S.Container>
                    <Select
                        value={selectedCategory}
                        placeholder="Filtrar categoría"
                        options={tipoActividad}
                        onChange={onChangeCategory}
                        style={{minWidth: 130}}
                    />
                    <ConfigProvider locale={locale}>
                        <DatePicker
                            disabledDate={disabledDate}
                            defaultValue={dayjs()}
                            format="DD-MM-YYYY"
                        />
                    </ConfigProvider>
                </S.Container>
            </S.Wrapper>
        </>
    );
}

export default Filter;

