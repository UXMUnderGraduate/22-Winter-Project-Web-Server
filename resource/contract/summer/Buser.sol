pragma solidity ^0.8.0;

library Buser {
    address public buyerAddress;
    uint public wantToBuy; //음원 id
    uint public buyerContractDate;

    event log(address _address);

    constructor(address _address, uint toBuy) {
        buyerAddress = _address;
        wantToBuy = toBuy;
        buyerContractDate = block.timestamp;
        emit log(buyerAddress);
    }
}
