pragma solidity ^0.8.0;

contract CopyrightHolders {
    address public uploaderAddress;
    address[] public sellerAddresses;
    uint[] public proportion;
    uint public uploadedSong;
    uint public sellerContractDate;
    uint public songPrice;

    function getsellerAddresses() public view returns(address[] memory) {
        return sellerAddresses;
    }
    function getProportion() public view returns(uint[] memory) {
        return proportion;
    }
}