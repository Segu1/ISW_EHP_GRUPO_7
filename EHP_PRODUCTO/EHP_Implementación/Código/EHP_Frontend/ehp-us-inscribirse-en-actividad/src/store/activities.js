import axios from "axios";
import { create } from "zustand";
import dayjs from "dayjs";

const initialState = {
    loading: false,
    success: false,
    error: false,
    data: [],
    errorData: null,
    filteredActivities: []
}

export const useActivitiesStore = create((set) => ({
    ...initialState,

    execute: async() => {
        set({...initialState, loading: true});
        try {
            //const res = await axios.get("https://api-generator.retool.com/Jl0MGu/activities");
            const res = await axios.get("http://localhost:5050/actividades");
            set({...initialState, success: true, data: res.data})
        } catch (err) {
            console.error("Error in data fetch: ", err);
            set({...initialState, error: true, errorData: err.message})
        }
    },
    filterActivities(category, date) {
        set((state) => {
            if(category && date) {
                return {
                    filteredActivities: [
                        ...state.data.filter(
                            (x) => x.nombre === category && dayjs(x.fecha_inicio).isSame(date, "day")
                        )
                    ]
                }
            } else if(category) {
                return {
                    filteredActivities: [
                        ...state.data.filter(
                            (x) => x.nombre === category
                        )
                    ]
                }
            } else {
                return {
                    filteredActivities: []
                }
            }
        })
    }
}))