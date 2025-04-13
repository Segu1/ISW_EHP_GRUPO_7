import { useEffect } from "react";
import { S } from "../../assets/css/Cards.css";
import { useActivitiesStore } from "../../store/activities";
import Card from "./Card";
import Filter from "../../Components/Filter";
import Navbar from "../../Components/Navbar";
import { useState } from "react";

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
    const [dataLoaded, setDataLoaded] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState(tipoActividad[0].value);

    useEffect(() => {
        const fetch = async () => {
            await getData.execute();
            setDataLoaded(true)
        };

        fetch();
    }, []);

    useEffect(() => {
        if(dataLoaded && selectedCategory) {
            getData.filterActivities(selectedCategory)
        }
    }, [dataLoaded, selectedCategory]);
    
    return (
        <>
            <Navbar site="Actividades" />
            <S.Main>
                <Filter
                    tipoActividad={tipoActividad}
                    selectedCategory={selectedCategory}
                    onChangeCategory={(value) => setSelectedCategory(value)}
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
