import React, { Component }  from 'react';
import { Text, SafeAreaView, View, TouchableOpacity, Image, Modal, TextInput, Alert, FlatList, Keyboard } from 'react-native';
import { addBudget } from '../../app/actions/addBudget';
import { updateRecurring } from '../../app/actions/updateRecurring';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withNavigation } from 'react-navigation';
import periods from '../../data/periods';
import styles from '../../styles/homeStyle';
import store from '../../app/store';
import { FONTS } from '../../constants/theme';

export class AddCategoriesDetail extends Component {

    constructor(props) {
        super(props);

        this.state={
            title: '',
            value: 0,
            period: 'time period',
            optional: 0,
            notes:'',
            id: `${this.props.categories.length}`,
            sum: 0,
            modalVisible: false,
            keyboardOffset: 100,
            pageOffset: 0
        }

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
        this.onOptionalChange = this.onOptionalChange.bind(this);
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleAddCategories = this.handleAddCategories.bind(this);
        this.calculateRecurring = this.calculateRecurring.bind(this);
        this.calculateSum = this.calculateSum.bind(this);
    }

    componentDidMount() {
        store.dispatch({
            type: "updateNewCategory",
            newCategory: {
                checked: true,
                id: this.state.id,
                title: this.state.title,
                value: this.state.value,
                optional: this.state.optional,
                period: this.state.period,
                sum: this.state.sum
            }
            
        });
    };

    // calculate annual sum based on selection
    calculateSum(p, v, o) {
        if (v === 0) {
            return 0;
        }
        if (o !== 0) {
            return v * o;
        }
        switch (p) {
            case 'year':
                return v;
            case 'quarter':
                return v * 4;
            case 'month':
                return v * 12;
            case 'week':
                return v * 52;
            case 'day':
                return v * 365;
        }
    };

    // add new category into recurring bill
    calculateRecurring() {
        const newRecurring = this.props.shortTerm[0] + this.calculateSum(this.state.period, this.state.value, this.state.optional);
        return ([newRecurring, this.props.shortTerm[1]]);
    };


    /* Change in content handlers */
    handleAddCategories() {
        store.dispatch({
            type: "updateNewCategory",
            newCategory: {
                ...this.props.newCategory,
                optional: this.state.optional,
                title: this.state.title,
                value: this.state.value,
                sum: this.calculateSum(this.state.period, this.state.value, this.state.optional)

            }
        });

        this.calculateRecurring();
        updateRecurring(this.calculateRecurring());
        addBudget(store.getState().user.newCategory);
        this.props.navigation.goBack();
    };

    onTitleChange(text) {
        this.setState({
            title: text
        });
    };

    onValueChange(value) {
        this.setState({
            value: parseFloat(value)
        });
    };

    onOptionalChange(option) {
        switch (this.state.period) {
            case "year":
                if (option > 1) {
                    Alert.alert("That goal seems a little too ambitious...")
                }
            case "quarter":
                if (option > 4) {
                    Alert.alert("That goal seems a little too ambitious...")
                }
            case "month":
                if (option > 12) {
                    Alert.alert("That goal seems a little too ambitious...")
                }
            case "week":
                if (option > 52) {
                    Alert.alert("That goal seems a little too ambitious...")
                }
            case "day":
                if (option > 366) {
                    Alert.alert("That goal seems a little too ambitious...")
                }
        }
        this.setState({
            optional: parseFloat(option)
        })
    };

    // For time period drop downs
    handleClickOpen = () => {
        this.setState({modalVisible: !this.state.modalVisible});
    };


    handleComponentDidMount() {
        return (
            <Modal animationType="slide"> 
                <SafeAreaView style={[styles.modalContainer, {bottom: this.state.pageOffset}]}>
                    <View style={{
                        flexDirection: 'row', 
                        alignItems: 'baseline',
                        justifyContent: 'space-between'
                        }}>

                        {/* Display name */}
                        <Text style={styles.title2}>New Category</Text>
                        {/* add button */}
                        <TouchableOpacity onPress={() => this.handleAddCategories()} style={styles.addButtonContainer}>
                            <View style={{flexDirection: 'row', alignItems:'center'}}>
                                <Image 
                                    source={require('../../assets/Icons/add.png')}
                                    resizeMode='contain'
                                    style={{
                                        width: 20,
                                        height: 20,
                                        tintColor: '#264653',
                                        marginRight: 10
                                    }}
                                />
                                <Text style={styles.addText}>Add</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    {/* Main Content */}

                    {/* Title */}
                    <Text style={styles.listText}>Category Name</Text>
                    <TextInput
                        value={this.state.title}
                        onChangeText={(text) => this.onTitleChange(text)}
                        style={styles.textInput}
                        placeholder='Shopping...'
                    />

                    {/* Value + Period */}
                    <Text style={[styles.listText,{marginTop:10}]}>Value + Period</Text>
                    <View style={styles.textInputContainerValue}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={styles.addTextGuide}>I want to spend $ </Text>
                            <TextInput
                                value={this.state.value}
                                onChangeText={(value) => this.onValueChange(value)}
                                style={styles.textInputValue}
                                keyboardType='numeric'
                                placeholder='289...'
                            />
                        </View>

                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={styles.addTextGuide}>per </Text>

                            {/* Period Dropdown */}
                            <SafeAreaView style={styles.startView}>
                                <Modal
                                    animationType="fade"
                                    transparent={true}
                                    visible={this.state.modalVisible}
                                    onRequestClose={() => this.setState({modalVisible: !this.state.modalVisible})}
                                >
                                    {/* View for the list of time periods */}
                                    <View style={styles.centeredView}>
                                        <View style={styles.modalView}>
                                            <Text style={styles.listText2}>Select a time period</Text>
                                            <FlatList 
                                                data={periods}
                                                renderItem={({ item }) => (
                                                    <TouchableOpacity
                                                        style={[styles.button, styles.buttonClose]}
                                                        onPress={() => {
                                                            this.setState({modalVisible: false}); 
                                                            this.setState({period: item.title});
                                                            store.dispatch(
                                                                {
                                                                    type: "updateNewCategory",
                                                                    newCategory: {
                                                                        ...this.props.newCategory,
                                                                        period: item.title
                                                                    }
                                                                }
                                                            );
                                                        }}
                                                    >
                                                        <Text style={styles.textStyle}>{item.title}</Text>
                                                    </TouchableOpacity>
                                                )}
                                                keyExtractor={item => item.id}
                                            />
                                        </View>
                                    </View>
                                </Modal>

                                <TouchableOpacity style={[styles.button, styles.buttonOpen]} onPress={() => this.handleClickOpen()}>
                                    <View style={{flexDirection:'row', alignItems: 'center', justifyContent: 'space-between'}}>
                                        <Text style={styles.textStyle2}> {this.state.period} </Text>
                                        <Image 
                                        source={require('../../assets/Icons/down-arrow.png')} 
                                        resizeMode='contain'
                                        style={{marginTop: 5, width: 20, height: 20, tintColor: '#fff'}}
                                        />
                                    </View>
                                </TouchableOpacity>
                            </SafeAreaView>
                        </View>

                        {/* Optional */}
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={styles.addTextGuide}>for </Text>
                            <TextInput
                                value={this.state.optional}
                                onChangeText={(option) => this.onOptionalChange(option)}
                                style={styles.textInputValue}
                                keyboardType='numeric'
                                placeholder='3...'
                            />
                            <Text style={styles.addTextGuide2}> {this.state.period}s</Text>
                            <Text style={styles.addTextGuide}> per year.</Text>
                        </View>
                    </View>

                    {/* Note */}
                        <Text style={[styles.listText,{marginTop:10}]}>Note to Self</Text>
                        <View style={styles.textInputContainerValue2}>
                            <TextInput
                                value={this.state.notes}
                                maxLength={32}
                                onFocus={() => this.setState({pageOffset: this.state.keyboardOffset})}
                                onChangeText={(text) => this.setState({notes: text, pageOffset: this.state.keyboardOffset})}
                                style={{
                                    ...FONTS.body2,
                                    backgroundColor: '#fff',
                                    borderRadius: 15,
                                    paddingVertical: 10,
                                    fontSize: 18,
                                    color: '#E76F51',
                                    elevation: 2,
                                    textAlign: 'left',
                                    height: 180,
                                    paddingLeft: 10,
                                    flex: 1
                                }}
                                placeholder='Not essential for me this month...'
                                onEndEditing={() => {
                                    this.setState({pageOffset: 0});
                                }}
                                onSubmitEditing={() => {
                                    this.setState({pageOffset: 0});
                                }}
                                returnKeyLabel='done'
                            />
                        </View>

                        {/* Cancel Button */}
                        <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 170}}>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.cancelButtonContainer}>
                                <Text style={styles.cancelText}>Cancel</Text>
                            </TouchableOpacity>
                        </View>

                </SafeAreaView>
            </Modal>
        );
    }

    render() {
        return(
            this.handleComponentDidMount()
        );
    }
};

const mapStateToProps = (store) => ({
  categories: store.user.categories,
  newCategory: store.user.newCategory,
  shortTerm: store.user.shortTerm
});

const mapDispatchProps = (dispatch) => bindActionCreators({ addBudget, updateRecurring }, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(withNavigation(AddCategoriesDetail));