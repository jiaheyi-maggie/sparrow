import React from 'react';
import { VictoryLabel, VictoryChart, VictoryZoomContainer, VictoryAxis, VictoryBar, VictoryTheme, VictoryLine  } from 'victory-native';
import { COLORS, FONTS } from '../../constants/theme';

const CryptoChart = ({ data, changePct, title }) =>  {
    return (
        <VictoryChart height={320} width={410}
            // domainPadding={{x: 5}}
            alignment="start"
            // containerComponent={<VictoryZoomContainer />}
            >

            <VictoryLabel 
                text={title}
                x={190}
                y={25}
                textAnchor="middle"
                style={{ ...FONTS.h3, fill: '#7E9181'}}
            />

            <VictoryAxis
                style={{
                    axis: { stroke: "none" },
                    tickLabels: { fill: "none" },
                    grid: { stroke: "gray" },
                }}
                tickValues={[0, 24, 48, 72, 96, 120, 144, 168]}
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

            <VictoryLabel 
                text="7-day period"
                x={190}
                y={290}
                textAnchor="middle"
                style={{ ...FONTS.h3, fill: '#7E9181'}}
            />
        </VictoryChart>
    );
}

  
export default CryptoChart;