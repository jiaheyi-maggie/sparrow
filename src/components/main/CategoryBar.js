import React from 'react';
import { VictoryLabel, VictoryChart, VictoryZoomContainer, VictoryBar, VictoryTheme, Bar } from 'victory-native';
import { Alert } from 'react-native';

// TODO: click and show number
const CategoryBar = ({ data }) =>  {
    return (
        <VictoryChart height={350} width={420}
            domainPadding={{x: 5}}
            alignment="start"
            containerComponent={
                <VictoryZoomContainer 
                    zoomDomain={{ x: [0.5, 5.5], y: [0, 12000]}}
                />
            }
            theme={VictoryTheme.material}
            >

            <VictoryLabel 
                text={"Yearly Budget by Categories"}
                x={190}
                y={18}
                textAnchor="middle"
                style={{ fill: '#7E9181', fontSize: 16 }}
            />

            <VictoryLabel 
                text={"(zoom in/out to view more)"}
                x={190}
                y={38}
                textAnchor="middle"
                style={{ fill: '#E76F51', fontSize: 14 }}
            />

            <VictoryBar
                data={data}
                categories={{x: data.map(obj => obj.title)}}
                x='title'
                y='sum'
                barRatio={1.2}
                alignment="middle"
                cornerRadius={5}
            />
        </VictoryChart>
    );
}

  
export default CategoryBar;