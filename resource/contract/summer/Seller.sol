pragma solidity ^0.8.0;
import ".\CopyrightHolders.sol";

contract Seller is CopyrightHolders {
    event log(address[] _address);
    constructor(address _uploaderAddress, address[] memory _addresses, uint[] memory _proportions, uint toUpload, uint price) {
        uploaderAddress = _uploaderAddress;
        sellerAddresses = _addresses;
        proportion = _proportions;
        uploadedSong = toUpload;
        songPrice = price;
        sellerContractDate = block.timestamp;
        emit log(sellerAddresses);
    }
}
