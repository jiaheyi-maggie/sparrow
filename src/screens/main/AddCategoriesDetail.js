import React, { Component }  from 'react';
import { Text, SafeAreaView, View, ScrollView, TouchableOpacity, Image, Modal, TextInput } from 'react-native';
// import { fetchBudget } from '../../app/actions/fetchBudget';
import { addBudget } from '../../app/actions/addBudget';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withNavigation } from 'react-navigation';
import styles from '../../styles/homeStyle';
import store from '../../app/store';
import NewPicker from '../../components/picker/NewPicker';

export class AddCategoriesDetail extends Component {

    constructor(props) {
        super(props);

        this.state={
            modalVisible: true,
            title: '',
            value: 0,
            period: '',
            optional: 0,
            notes:'',
            id: this.props.categories.length,
            sum: 0
        }

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
        this.onOptionalChange = this.onOptionalChange.bind(this);
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
                period: this.props.newCategory,
                sum: this.state.sum
            }
        });
    };

    // componentDidUpdate() {
    //     this.props.addBudget();
    // }

    handleAddCategories() {
        const length = this.props.categories.length;
        // dummy data to test out
        addBudget({
            checked: true,
            id: `${length}`,
            optional: 0,
            period: 'year',
            sum: 2000,
            title: "Alcohol",
            value: 50
        })
        this.props.navigation.goBack();
    };

    onTitleChange(text) {
        this.setState({
            title: text
        })
    };

    onValueChange(value) {
        this.setState({
            value: value
        })
    };

    onOptionalChange(option) {
        // TODO: alert when option is not realistic
        // switch (period) {
            
        // }
        this.setState({
            optional: option
        })
    };


    // onNoteChange(note) {
    //     this.setState({
    //         note: note
    //     })
    // }


    handleComponentDidMount(categories) {
        console.log(this.state);
        return (
            <Modal animationType="slide"> 
                <SafeAreaView style={styles.modalContainer}>
                    <ScrollView>
                        <View style={{
                            flexDirection: 'row', 
                            alignItems: 'baseline',
                            justifyContent: 'space-between'
                            }}>

                            {/* Display name */}
                            <Text style={styles.title}>New Category</Text>
                            {/* add button */}
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.addButtonContainer}>
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

                        {/* TODO: Main Content */}
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
                                <Text style={styles.addText}>per</Text>
                                {/* period selector */}
                                <NewPicker period={this.state.period}/>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={styles.addTextGuide}>for </Text>
                                    <TextInput
                                        value={this.state.optional}
                                        onChangeText={(option) => this.onOptionalChange(option)}
                                        style={styles.textInputValue}
                                        keyboardType='numeric'
                                    />
                                    <Text style={styles.addTextGuide}>{this.state.period}s </Text>
                                    <Text style={styles.addTextGuide}> per year.</Text>
                                </View>
                            </View>
                        </View>

                    </ScrollView>
                </SafeAreaView>
            </Modal>
        );
    }

    render() {
        const { categories } = this.props;
        return(
            this.handleComponentDidMount(categories)
        );
    }
};

const mapStateToProps = (store) => ({
  categories: store.user.categories,
  newCategory: store.user.newCategory,
});

const mapDispatchProps = (dispatch) => bindActionCreators({ addBudget }, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(withNavigation(AddCategoriesDetail));