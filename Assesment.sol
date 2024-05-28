// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract contractItemPricer {
    mapping(string => uint256) public itemPrices;

    event PriceSet(string itemName, uint256 price);
    event PriceReset(string itemName);

    function setItemPrice(string memory _itemName, uint256 _price) external {
        if (_price <= 0) {
            revert("Price must be greater than zero");
        }
        itemPrices[_itemName] = _price;
        emit PriceSet(_itemName, _price);
    }

    function getItemPrice(string memory _itemName) external view returns (uint256) {
        return itemPrices[_itemName];
    }

    function checkPriceValidity(string memory _itemName) external view {
        require(itemPrices[_itemName] > 0, "Price is not set for this item");
        assert(itemPrices[_itemName] <= 1000); 
    }

    function resetItemPrice(string memory _itemName) external {
        if (itemPrices[_itemName] == 0) {
            revert("Price is not set for this item");
        }
        delete itemPrices[_itemName];
        emit PriceReset(_itemName);
    }
}
