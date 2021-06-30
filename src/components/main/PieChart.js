import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { VictoryPie, VictoryLabel, VictoryChart } from 'victory-native';
import Svg from 'react-native-svg';

const PieChart = ({ data }) => {
    // const ChartClick = Platform.select({
    //     ios: TouchableOpacity,
    //     android: Svg
    // });

    return (
        <View>
            <TouchableOpacity >
            <VictoryPie
                events={[{
                    target: "data",
                    eventHandlers: {
                    onClick: () => {
                        return [
                        {
                            target: "data",
                            mutation: ({ style }) => {
                            return style.fill === "#c43a31" ? null : { style: { fill: "#c43a31" } };
                            }
                        }, {
                            target: "labels",
                            mutation: ({ text }) => {
                            return text === "clicked" ? null : { text: "clicked" };
                            }
                        }
                        ];
                    }
                    }
                }]}
                data={data}
                x="title"
                y="sum"
                // colorScale={['#78C0E0','#5EAFD9','#448DD1','#2D51A5','#212B8F','#150578', '#0E0E52' ]}
                colorScale={["#222e50", "#115471", "#007991", "#439a86", "#bcd8c1", "#d3d9a3","#e9d985"  ]}
                cornerRadius={8}
                innerRadius={70}
                labelRadius={({ innerRadius }) => innerRadius+30 }
                labelPlacement={'vertical'}
                labelComponent={
                    <VictoryLabel 
                        textAnchor='start'
                        backgroundPadding={2}
                        dx={-10}
                    />
                }
                style={{ labels: { fill: "#FFCF56", fontSize: 20, fontWeight: "bold" } }}
                padAngle={1}
                radius={130}
                name='averageViewPie'
                width={400}
                height={320}
            />
            </TouchableOpacity>
        </View>
    );
}

export default PieChart;

