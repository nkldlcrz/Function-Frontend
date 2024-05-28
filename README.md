# Function-Fronted

For this project, create a simple contract with 2-3 functions. Then show the values of those functions in frontend of the application.

## Description

This Solidity contract named contractItemPricer is designed to manage and track the prices of items.

## Description Each Statement and Function

# This code is a React application that provides a user interface for managing item prices. 
pragma solidity ^0.8.0;
This line specifies that the contract should be compiled using a Solidity compiler version greater than or equal to 0.8.0 and less than 0.9.0.

Contract Structure:
contract contractItemPricer {
This line declares the start of the Solidity contract named contractItemPricer.

State Variables:
mapping(string => uint256) public itemPrices;
This line declares a state variable itemPrices as a mapping from string (item name) to uint256 (item price). This mapping will store the prices of items.

Events:
event PriceSet(string itemName, uint256 price);
event PriceReset(string itemName);
These lines define two events:

PriceSet: Triggered when a new price is set for an item.
PriceReset: Triggered when the price of an item is reset.
setItemPrice Function:

function setItemPrice(string memory _itemName, uint256 _price) external {
This function allows the contract owner to set the price for a specific item. It takes two parameters: _itemName (the name of the item) and _price (the price of the item). If the price is less than or equal to zero, it reverts with an error message. Otherwise, it sets the price for the item in the itemPrices mapping and emits the PriceSet event.

getItemPrice Function:
function getItemPrice(string memory _itemName) external view returns (uint256) {
This function allows anyone to retrieve the price of a specific item by providing the item's name. It returns the price of the item stored in the itemPrices mapping.

checkPriceValidity Function:
function checkPriceValidity(string memory _itemName) external view {
This function allows anyone to check the validity of the price for a specific item. It requires that the price for the item is greater than zero and asserts that the price is less than or equal to 1000.

resetItemPrice Function:
function resetItemPrice(string memory _itemName) external {
This function allows the contract owner to reset the price of a specific item. If the price for the item is already zero, it reverts with an error message. Otherwise, it deletes the price of the item from the itemPrices mapping and emits the PriceReset event.

The contract provides functionalities to set, retrieve, check validity, and reset item prices while emitting events for price changes.

# This code is a React application that provides a user interface for managing item prices. 

Import Statements:
import React, { useState } from 'react';
This imports the necessary modules from React, including the useState hook which enables functional components to manage state.

Functional Component Declaration:
const App = () => {
This declares a functional component named App.

State Variables:
const [itemName, setItemName] = useState('');
const [price, setPrice] = useState('');
const [message, setMessage] = useState('');
const [itemPrices, setItemPrices] = useState({});
These lines use the useState hook to declare four state variables:

itemName: Stores the name of the item.
price: Stores the price of the item.
message: Stores messages to be displayed to the user.
itemPrices: Stores the mapping of item names to their prices.
Functions for Setting, Getting, and Resetting Item Prices:

setItemPrice: Simulates setting the price of an item. It parses the price input, checks if it's a valid number greater than zero, updates the itemPrices state, and sets a message.

getItemPrice: Simulates getting the price of an item. It retrieves the price from the itemPrices state based on the item name and sets a message.

resetItemPrice: Simulates resetting the price of an item. It checks if the item price is already set, deletes the item from the itemPrices state, and sets a message.

UI Rendering:
The return statement renders the user interface using JSX. It consists of:

Inputs for entering the item name and price.
Buttons for setting, getting, and resetting item prices.
A paragraph to display messages to the user.

Export Statement:
export default App
This exports the App component as the default export from this module.


## License

MIT License

## Author/s

* Nicole D. Bautista (8210179@ntc.edu.ph)
