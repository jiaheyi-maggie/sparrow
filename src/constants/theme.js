import React from 'react';
import { Dimensions } from 'react-native';
import { DefaultTheme } from '@react-navigation/native';

const { width, height } = Dimensions.get("window");

export const COLORS = {
	primary: "#264653",
	secondary: "#2A94AF",
	bluebell:"#7699D4",
	purple: "#7768AE",
	melon: '#ffdadb',

	white: "#fff",
	bone: "#D7CEB2",
	tea:'#defade',
	grass: "#33691e",
	red: "#E76F51",
	black: "#000000",
	yellow: '#FFF4CB',
	orange: '#F4A261',
	lightGreen: '#90ee90',
	lightSalmon: '#FAA381',
	desertGreen: '#7E9181',
	gray: "#212125",
	gray1: "#1f1f1f",
	lightGray: "#3B3B3B",
	lightGray2: '#212125',
	lightGray3: '#757575',
	lightGray4: '#bababa',
	transparentWhite: 'rgba(255, 255, 255, 0.2)',
	transparentBlack: 'rgba(0, 0, 0, 0.8)',
	transparentBlack1: 'rgba(0, 0, 0, 0.4)',
};

export const SIZES = {
	// global sizes
	base: 8,
	font: 14,
	radius: 12,
	padding: 24,

	// font sizes
	largeTitle: 40,
	h1: 30,
	h2: 22,
	h22: 18, 
	h3: 16,
	h4: 14,
	h5: 12,
	body1: 30,
	body2: 22,
	body3: 16,
	body4: 14,
	body5: 12,

	// app dimensions
	width,
	height
};

export const FONTS = {
	// h1: { fontFamily: "Ubuntu-Bold", fontSize: SIZES.h1, lineHeight: 30 },
	// h2: { fontFamily: "Ubuntu-Bold", fontSize: SIZES.h2, lineHeight: 30 },
	// h22: { fontFamily: "Ubuntu-Medium", fontSize: SIZES.h22, lineHeight: 30 },
	// h22b: { fontFamily: "Ubuntu-Bold", fontSize: SIZES.h22, lineHeight: 30 },
	// h3: { fontFamily: "Ubuntu-Bold", fontSize: SIZES.h3, lineHeight: 22 },
	// h33: { fontFamily: "Ubuntu-Medium", fontSize: SIZES.h3, lineHeight: 22 },
	// h4: { fontFamily: "Ubuntu-Medium", fontSize: SIZES.h4, lineHeight: 22 },
	// h5: { fontFamily: "Ubuntu-Medium", fontSize: SIZES.h5, lineHeight: 22 },
	// body1: { fontFamily: "Ubuntu-Light", fontSize: SIZES.body1, lineHeight: 36 },
	// body2: { fontFamily: "Ubuntu-Light", fontSize: SIZES.body2, lineHeight: 30 },
	// body22: { fontFamily: "Ubuntu-Medium", fontSize: 20, lineHeight: 30 },
	// body3: { fontFamily: "Ubuntu-Light", fontSize: SIZES.body3, lineHeight: 22 },
	// body4: { fontFamily: "Ubuntu-Light", fontSize: SIZES.body4, lineHeight: 22 },
	// body5: { fontFamily: "Ubuntu-Light", fontSize: SIZES.body5, lineHeight: 22 },
	h1: { fontWeight: "bold", fontSize: SIZES.h1, lineHeight: 30 },
	h2: {  fontSize: SIZES.h2, lineHeight: 30 },
	h22: { fontSize: SIZES.h22, lineHeight: 30 },
	h22b: { fontWeight: "bold", fontSize: SIZES.h22, lineHeight: 30 },
	h3: { fontSize: SIZES.h3, lineHeight: 22 },
	h33: { fontSize: SIZES.h3, lineHeight: 22 },
	h4: {  fontSize: SIZES.h4, lineHeight: 22 },
	h5: {  fontSize: SIZES.h5, lineHeight: 22 },
	body1: { fontSize: SIZES.body1, lineHeight: 36 },
	body2: { fontSize: SIZES.body2, lineHeight: 30 },
	body22: {  fontSize: 20, lineHeight: 30 },
	body3: { fontSize: SIZES.body3, lineHeight: 22 },
	body4: { fontSize: SIZES.body4, lineHeight: 22 },
	body5: { fontSize: SIZES.body5, lineHeight: 22 },
};

/* TODO: change header color for navigators */
const theme = {
	...DefaultTheme,
	colors: {
	...DefaultTheme.colors,
	primary: 'rgb(255, 45, 85)',
	border: '#fff',
	},
};

export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;


export default theme;