import React, { useEffect } from "react";
import anychart from "anychart";
const PieChart = ({ width, height, title, background, id, datos }) => {
    if (!title) title = "Tabla";
    if (!width) width = "500px";
    if (!height) height = "400px";
    if (!background) background = "";
    if (!datos) datos = [];

    useEffect(() => {
        const pintar = () => {
            var data = datos;
            //Creación de la grafica
            var chart = anychart.pie(data);
            //Titulo de la grafica
            chart.title(title);
            //Color de fondo
            chart.background("#505050b2");
            
            // set the container id
            chart.container(id);
            // initiate drawing the chart
            chart.draw();
        };
        pintar();
    }, []);
    return <div id={id} style={{ width: width, height: height }}></div>;
};

export default PieChart;
