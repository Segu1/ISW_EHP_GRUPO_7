import { useEffect } from "react";
import { S } from "../../assets/css/Cards.css";
import { useActivitiesStore } from "../../store/activities";
import Card from "./Card";
import Filter from "../../Components/Filter";
import Navbar from "../../Components/Navbar";
import { useState } from "react";
import { I } from "../../assets/img";
import { AnimatePresence } from "motion/react";
import dayjs from "dayjs";

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

function Cards() {
    const getData = useActivitiesStore();
    const [dataLoaded, setDataLoaded] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(
        tipoActividad[0].value
    );
    const [selectedDate, setSelectedDate] = useState(dayjs());

    const imageByCategory = (category) => {
        switch (category) {
            case "Tirolesa":
                return I.image_tirolesa;
            case "Safari":
                return I.image_safari;
            case "Palestra":
                return I.image_palestra;
            case "Jardinería":
                return I.image_jardineria;
        }
    };

    useEffect(() => {
        const fetch = async () => {
            await getData.execute();
            setDataLoaded(true);
        };

        fetch();
    }, []);

    useEffect(() => {
        if (dataLoaded && (selectedCategory || selectedDate)) {
            getData.filterActivities(selectedCategory, selectedDate);
        }
    }, [dataLoaded, selectedCategory, selectedDate]);

    console.log(selectedDate);
    

    return (
        <>
            <Navbar site="Actividades" />
            <S.Main>
                <S.CoverPhotoMain>
                    <AnimatePresence>
                        <S.CoverPhotoAbs
                            key={selectedCategory}
                            imageURL={imageByCategory(selectedCategory)}
                            initial={{ opacity: 0, backgroundSize: "120%" }}
                            animate={{ opacity: 1, backgroundSize: "110%" }}
                            exit={{ opacity: 0, backgroundSize: "100%" }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        ></S.CoverPhotoAbs>
                    </AnimatePresence>
                </S.CoverPhotoMain>
                <Filter
                    tipoActividad={tipoActividad}
                    selectedCategory={selectedCategory}
                    selectedDate={selectedDate}
                    onChangeCategory={(value) => setSelectedCategory(value)}
                    onChangeDate={(value) => setSelectedDate(value)}
                />
                <S.Wrapper>
                    {getData.loading ? (
                        <p>Cargando...</p>
                    ) : getData.error ? (
                        <p>Error fetching data: {getData.errorData}</p>
                    ) : (
                        //{"id":1,"nombre":"Tirolesa","cupos":10,"requiere_talla":false,"fecha_inicio":"2025-03-21T00:00:00.000Z","fecha_fin":"2025-03-22T00:00:00.000Z","inscriptos":0}
                        <S.Container>
                            {getData.filteredActivities?.map(
                                ({
                                    id,
                                    cupos,
                                    nombre,
                                    fecha_inicio,
                                    fecha_fin,
                                    inscriptos,
                                }) => (
                                    <Card
                                        key={id}
                                        cupos={cupos}
                                        nombre={nombre}
                                        fecha_inicio={fecha_inicio}
                                        fecha_fin={fecha_fin}
                                        inscriptos={inscriptos}
                                    />
                                )
                            )}
                        </S.Container>
                    )}
                </S.Wrapper>
            </S.Main>
        </>
    );
}
export default Cards;
