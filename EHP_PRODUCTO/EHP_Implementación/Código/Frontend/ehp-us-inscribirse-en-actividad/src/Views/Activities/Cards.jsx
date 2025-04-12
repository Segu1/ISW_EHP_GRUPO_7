import { useEffect } from "react";
import { Container } from "../../assets/css/Cards.css";
import { useActivitiesStore } from "../../store/activities";
import Card from "./Card";
import { useRef } from "react";

function Cards() {
    const getData = useActivitiesStore();
    const refOptionCategory = useRef()

    useEffect(() => {
        const fetchAndFilter = async () => {
            await getData.execute();
            const defaultCategory = refOptionCategory.current?.value;
            if (defaultCategory) {
                getData.filterActivities(defaultCategory)
            }
        };

        fetchAndFilter();
    }, []);

    return (
        <>
            Actividades
            <select
                id="categories"
                ref={refOptionCategory}
                onChange={(event) =>
                    getData.filterActivities(event.target.value)
                }
            >
                <option value="Jardineria">Jardineria</option>
                <option value="Tirolesa">Tirolesa</option>
                <option value="Palestra">Palestra</option>
                <option value="Safari">Safari</option>
            </select>
            {getData.loading ? (
                <p>Cargando...</p>
            ) : getData.error ? (
                <p>Error fetching data: {getData.errorData}</p>
            ) : (
                <Container>
                    {getData.filteredActivities?.map(
                        ({
                            id,
                            cupos,
                            nombre,
                            fechaDesde,
                            fechaHasta,
                            inscriptos,
                        }) => (
                            <Card
                                key={id}
                                cupos={cupos}
                                nombre={nombre}
                                fechaDesde={fechaDesde}
                                fechaHasta={fechaHasta}
                                inscriptos={inscriptos}
                            />
                        )
                    )}
                </Container>
            )}
        </>
    );
}
export default Cards;
