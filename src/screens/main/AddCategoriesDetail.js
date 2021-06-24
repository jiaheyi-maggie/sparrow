import React, { Component }  from 'react';
import { Text, SafeAreaView, View, ScrollView, TouchableOpacity, Image, Modal, TextInput, Alert, FlatList } from 'react-native';
// import { fetchBudget } from '../../app/actions/fetchBudget';
import { addBudget } from '../../app/actions/addBudget';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withNavigation } from 'react-navigation';
import periods from '../../data/periods';
import styles from '../../styles/homeStyle';
import store from '../../app/store';

export class AddCategoriesDetail extends Component {

    constructor(props) {
        super(props);

        this.state={
            modalVisible: true,
            title: '',
            value: 0,
            period: 'time period',
            optional: 0,
            notes:'',
            id: this.props.categories.length,
            sum: 0,
            modalVisible: false
        }

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
        this.onOptionalChange = this.onOptionalChange.bind(this);
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleAddCategories = this.handleAddCategories.bind(this);
        // this.onNoteChange = this.onNoteChange(this);

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

    handleAddCategories() {
        addBudget(this.props.newCategory);
        this.props.navigation.goBack();
    };

    onTitleChange(text) {
        this.setState({
            title: text
        })
        store.dispatch(
            {
                type: 'updateNewCategory',
                newCategory: {
                    ...this.props.newCategory,
                    title: this.state.title
                }
            }
        );
    };

    onValueChange(value) {
        this.setState({
            value: value
        })
        store.dispatch(
            {
                type: 'updateNewCategory',
                newCategory: {
                    ...this.props.newCategory,
                    value: this.state.value
                }
            }
        );
    };

    onOptionalChange(option) {
        // TODO: alert when option is not realistic
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
                if (option > 48) {
                    Alert.alert("That goal seems a little too ambitious...")
                }
            case "day":
                if (option > 366) {
                    Alert.alert("That goal seems a little too ambitious...")
                }
        }
        this.setState({
            optional: option
        })
        store.dispatch(
            {
                type: 'updateNewCategory',
                newCategory: {
                    ...this.props.newCategory,
                    title: this.state.optional
                }
            }
        );
    };


    // onNoteChange(note) {
    //     this.setState({
    //         note: note
    //     })
    // }

    // For time period drop downs
    handleClickOpen = () => {
        this.setState({modalVisible: !this.state.modalVisible});
    };


    handleComponentDidMount() {
        return (
            <Modal animationType="slide"> 
                <SafeAreaView style={styles.modalContainer}>
                    <View style={{
                        flexDirection: 'row', 
                        alignItems: 'baseline',
                        justifyContent: 'space-between'
                        }}>

                        {/* Display name */}
                        <Text style={styles.title}>New Category</Text>
                        {/* add button */}
                        <TouchableOpacity onPress={() => this.handleAddCategories()} style={styles.addButtonContainer}>
                            <View style={{flexDirection: 'row'}}>
                            <Image 
                                source={require('../../assets/Icons/add.png')}
                                resizeMode='contain'
                                style={{
                                    width: 23,
                                    height: 23,
                                    tintColor: '#264653',
                                    marginRight: 15
                                }}
                            />
                            <Text style={styles.addText}>Add</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    {/* Main Content */}
                    {/* text fields */}
                    <View style={styles.textInputContainer}>
                        <Text style={styles.listText}>Category Name</Text>
                        <TextInput
                            value={this.state.title}
                            onChangeText={(text) => this.onTitleChange(text)}
                            style={styles.textInput}
                        />
                    </View>

                    <View style={styles.textInputContainer}>
                        <Text style={styles.listText}>Value + Period</Text>
                        <View style={styles.textInputContainerValue}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={styles.addTextGuide}>I want to spend $ </Text>
                                <TextInput
                                    value={this.state.value}
                                    onChangeText={(value) => this.onValueChange(value)}
                                    style={styles.textInputValue}
                                    keyboardType='numeric'
                                />
                            </View>

                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={styles.addText}>per</Text>

                                {/* Period Dropdown */}
                                <SafeAreaView style={styles.startView}>
                                    <Modal
                                        animationType="fade"
                                        transparent={true}
                                        visible={this.state.modalVisible}
                                        onRequestClose={() => {this.setState({modalVisible: !this.state.modalVisible})}}
                                    >
                                        {/* View for the list of time periods */}
                                        <View style={styles.centeredView}>
                                            <View style={styles.modalView}>
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
                                                                    newCategory: this.state.period
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
                                            style={{marginTop: 5, width: 25, height: 25, tintColor: '#fff'}}
                                            />
                                        </View>
                                    </TouchableOpacity>
                                </SafeAreaView>
                            </View>

                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={styles.addTextGuide}>for </Text>
                                <TextInput
                                    value={this.state.optional}
                                    onChangeText={(option) => this.onOptionalChange(option)}
                                    style={styles.textInputValue}
                                    keyboardType='numeric'
                                />
                                <Text style={styles.addTextGuide2}> {this.state.period}s</Text>
                                <Text style={styles.addTextGuide}> per year.</Text>
                            </View>
                        </View>
                    </View>

                    {/* TODO: Note */}

                    {/* Cancel Button */}
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
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
});

const mapDispatchProps = (dispatch) => bindActionCreators({ addBudget }, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(withNavigation(AddCategoriesDetail));