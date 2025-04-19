import { useEffect } from "react";
import { S } from "../../assets/css/Cards.css";
import { useActivitiesStore } from "../../store/activities";
//import Card from "./Card";
import Filter from "../../Components/Filter";
import Navbar from "../../Components/Navbar";
import { useState } from "react";
import { I } from "../../assets/img";
import { AnimatePresence } from "motion/react";
import dayjs from "dayjs";
import { Button, Modal, Skeleton } from "antd";
import { useNavigate } from "react-router";
import { Avatar } from "antd";
import CardV2 from "./Card";
import { Empty } from "antd";

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
    const navigate = useNavigate();
    const getData = useActivitiesStore();
    const [dataLoaded, setDataLoaded] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(
        tipoActividad[0].value
    );
    const [selectedDate, setSelectedDate] = useState(dayjs());
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedActivity, setSelectedActivity] = useState({});

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
                    <div className="flex md:flex-nowrap flex-wrap w-full bg-gray-200 rounded-xl border-b-3 border-gray-300 h-150 p-2 gap-7">
                        <div
                            style={{
                                "--image-url": `url(${imageByCategory(
                                    selectedCategory
                                )})`,
                            }}
                            className="md:w-1/2 w-full md:h-full h-1/3 bg-[image:var(--image-url)] bg-no-repeat bg-center bg-cover rounded-lg flex justify-center items-center"
                        >
                            <h1 className="rounded-xl w-full text-center text-[6vh] bg-neutral-900/50 text-amber-50 uppercase">{selectedCategory}</h1>
                        </div>
                        <div className="md:w-1/2 w-full md:h-full h-1/2">
                            <div className="flex overflow-y-auto overflow-x-hidden md:max-h-[581px] max-h-[330px] flex-col gap-3 p-5 bg-gray-100 rounded-lg">
                                {getData.loading ? (
                                    <>
                                        <Skeleton
                                            active
                                            paragraph={{
                                                rows: 1,
                                                width: "100%",
                                            }}
                                            title={false}
                                        />
                                        <Skeleton
                                            active
                                            paragraph={{
                                                rows: 1,
                                                width: "100%",
                                            }}
                                            title={false}
                                        />
                                        <Skeleton
                                            active
                                            paragraph={{
                                                rows: 1,
                                                width: "100%",
                                            }}
                                            title={false}
                                        />
                                    </>
                                ) : getData.error ? (
                                    <p>
                                        Error fetching data: {getData.errorData}
                                    </p>
                                ) : (
                                    getData.filteredActivities.length ? (
                                        getData.filteredActivities?.map(
                                            ({
                                                id,
                                                cupos,
                                                nombre,
                                                fecha_inicio,
                                                fecha_fin,
                                                inscriptos,
                                            }) => (
                                                <CardV2
                                                    key={id}
                                                    cupos={cupos}
                                                    nombre={nombre}
                                                    fecha_inicio={fecha_inicio}
                                                    fecha_fin={fecha_fin}
                                                    inscriptos={inscriptos}
                                                    onClick={() => { navigate(
                                                        `/actividades/${id}`
                                                    ) }}
                                                />
                                            )
                                        )
                                    ) : (
                                        <div className="flex justify-center items-center">
                                            <Empty description={false} image={I.image_empty} />
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </S.Wrapper>
            </S.Main>
        </>
    );
}
export default Cards;
