
import React from 'react';
import 'bulma/bulma';
import { List } from 'react-feather';

export default function SearchBar() {
    constructor(props); {
    super(props);
    this.state = {
        list: ["This Side of Paradise", "The Martian", "Fates and Furies", "A Little Life"]
    };
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    };
        
    addItem(e); {
        // Create variables for our list, the item to add, and our form
        let list = this.state.list;
        const newItem = document.getElementById("addInput");
        const form = document.getElementById("addItemForm");
        
        // If input has a value
        if (newItem.value != "") {
            // Add the new item to the end of list array
            list.push(newItem.value);
            // use that to set the state for list
            this.setState({ list: list });
            // reset the form
            newItem.classList.remove("is-danger");
            form.reset()
        }
        else {
            // If input doesn't have a vaule, make the border red 
            newItem.classList.add("is-danger");
        }
    }
        
    removeItem(item); {
        // Put list into an array
        const list = this.state.list.slice();
        // Check to see if item passed in matches item in array
        list.some((el, i) => {
            if (el === item) {
                // If item matches, remove it from array
                list.splice(i, 1);
                return true;
            }
        });
        // Set state to list
        this.setState({
            list: list
        });
    }
        
    return(
        <div className="content">
            <div className="container">
                <section className="section">
                    <const List items={this.state.list} delete={this.removeItem} />
                </section>
                <hr />
                <section className="section">
                    <form className="form" id="addItemForm">
                        <input type="text" className="input" id="addInput" placeholder="Search..."/>
                            <button className="button is-info" onClick={this.addItem}>Add Item</button>
                    </form>
                </section>
            </div>
        </div>
    );
}

def List() {
    constructor(props); {
    super(props);
    this.state = {
        filtered: []
    };
    this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount(); { t
        this.setState({filtered: this.props.items
        });
    }

    componentWillReceiveProps(nextProps); {
    this.setState({
        filtered: nextProps.items
    })
}

    handleChange(e); {
        // Variable to hold original version of list
        let currentlist = [];
        // Variable to hold filtered list before putting into state
        let newList = [];
        // If the search bar isn't empty
        if (e.target.value !== "") {
            // Assign the original list to currentList
            currentList = this.props.items;
            // Use.filter() to determine which items should be displayed based on search terms
            newList = currentList.filter(item => {
                // Change current item to lowercase
                const lc = item.toLowerCase();
                // Change search item to lowercase
                const filter = e.target.value.toLowerCase();
                // Check to see if current list item includes search term
                // If it does, it will be added to newList. Using lower case eliminates
                //issues with capitalization in search terms and search content
                return lc.includes(filter);
            });
        }
        else {
            // If search bar is empty, set newList to original list
            newList = this.props.items;
        }
        // set filtered state based on rules added to newList
        this.setState({
            filtered: newList
        });
    }

        return (
            <div>
                <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />
                    <ul>
                        {this.state.filtered.map(item => (<li key={item}>{item} &nbsp; 
                        <span className="delete" onClick={() => this.props.delete(item)} />
                        </li>))}
                    </ul>
            </div>
        )
}                    
             