import React from 'react';
import { VictoryLabel, VictoryChart, VictoryZoomContainer, VictoryAxis, VictoryBar, VictoryTheme, VictoryLine  } from 'victory-native';
import { COLORS } from '../../constants/theme';

const CryptoChart = ({ data, changePct }) =>  {
    return (
        <VictoryChart height={350} width={410}
            domainPadding={{x: 5}}
            alignment="start"
            containerComponent={<VictoryZoomContainer />}
            >
                
            <VictoryAxis
                style={{
                    axis: { stroke: "none" },
                    tickLabels: { fill: "none" },
                    grid: { stroke: "gray" }
                }}
            />
            
            <VictoryAxis dependentAxis
                style={{ axis: { stroke: "gray" }, tickLabels: { fontSize: 12, fill:'gray' } }}
                crossAxis={false}
            />

            <VictoryLine 
                data={data}
                style={{
                    data: { stroke: (changePct > 0) ? COLORS.lightGreen: COLORS.red }
                }}

            />
        </VictoryChart>
    );
}

  
export default CryptoChart;