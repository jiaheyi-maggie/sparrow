import React, { Component, PureComponent }  from 'react';
import { Text, SafeAreaView, View, ScrollView, TouchableOpacity, Pressable, Image } from 'react-native';
import { VictoryChart, VictoryBar, VictoryLabel, VictoryZoomContainer, VictoryLine, VictoryVoronoiContainer, VictoryGroup, VictoryTooltip, VictoryScatter } from 'victory-native';
import store from '../../app/store';

const CategoryBar = ({ data }) => {

    return (
        <VictoryChart
        domainPadding={{x: 5}}
        alignment="start"
        containerComponent={
            <VictoryZoomContainer zoomDomain={{ y: [0, 10000]}}/>
        }
        >
        <VictoryBar
            data={data}
            categories={{x: data.array.forEach(element => {
                return element.title
            })}}
            x='title'
            y='sum'
            style={{
                data: { fill: "#FAA381", stroke: "black", strokeWidth: 1 },
            }}
            barRatio={0.9}
            alignment="start"
            cornerRadius={5}
            labels={({ datum }) => datum.x}
            events={[{
                target: "data",
                eventHandlers: {
                    onPress: () => {
                    return [
                        {
                        target: "data",
                        mutation: (props) => {
                            const fill = props.style && props.style.fill;
                            return fill === "black" ? null : { style: { fill: "black" } };
                        }
                        }
                    ];
                    }
                }
                }]}
            />
        </VictoryChart>
    );
    
};

export default CategoryBar;