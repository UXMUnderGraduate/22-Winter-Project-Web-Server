pragma solidity ^0.8.0;

import ".\Buyer.sol";
import ".\Buser.sol";

contract Contract {
    Buser buyer;
    Seller seller;

    address owner;
    uint ContractDate;

    bool private alreadySetBuyer = false;
    bool private alreadySetSeller = false;
    bool contractEnd = false;
    uint private index = 0;

    modifier mustCheck() {
        require(buyer.wantToBuy() == seller.uploadedSong(), "buyer.wantToBuy() != seller.uploadedSong()");
        if (contractEnd)
            alreadySetBuyer = false;
        _;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only Owner can call this function.");
        _;
    }

    modifier modSetSeller() {
        require(!alreadySetSeller, "alreadySetSeller");
        _;
        alreadySetSeller = true;
    }

    modifier modSetBuyer() {
        require(!alreadySetBuyer, "alreadySetBuyer");
        contractEnd = false;
        _;
        alreadySetBuyer = true;
    }

    modifier modBuyerSendMoney(uint amount) {
        require(amount % 10000 == 0, "amount%10000 != 0");
        require(msg.sender == buyer.buyerAddress(), "msg.sender != buyer.buyerAddress()");
        require(msg.sender.balance > amount, "msg.sender.balance <= amount");
        require(amount == seller.songPrice(), "amount != seller.songPrice()");
        require(amount == msg.value, "amount != msg.value");
        // require(amount == address(this).balance, "amount != address(this).balance");
        _;
    }

    modifier modWithdrawToSeller() {
        require(!contractEnd, "contractEnd.");
        //require(msg.sender == seller.uploaderAddress(), "msg.sender != seller.sellerAddresses()");
        // require(address(this).balance > 0, "address(this).balance <= 0" ); //0원일 때 호출 방지
        _;
    }

    function setSeller(
        address[] memory addresses, uint[] memory proportions, uint songId, uint songPrice) public modSetSeller() {

        seller = new Seller({
        _uploaderAddress : msg.sender,
        _addresses : addresses,
        _proportions : proportions,
        toUpload : songId,
        price : songPrice
        });
        // 백엔드에서 업로드시 check해줄거기 때문에
        // proportion의 합이 10000인지 체크하지 않아도 됨.
    }

    function setBuyer(uint songId) public modSetBuyer() {
        buyer = new Buyer({
        _address : msg.sender,
        toBuy : songId
        });
    }

    function buyerSendMoney(uint amount) public payable mustCheck() modBuyerSendMoney(amount) {}

    function withdrawToSeller() public payable mustCheck() modWithdrawToSeller() {
        address reciever = seller.getsellerAddresses()[index];
        payable(reciever).transfer(address(this).balance / 10000 * seller.getProportion()[index]);
        index++;
        if (index >= seller.getsellerAddresses().length) {
            index = 0;
            // if(seller.songPrice() > 0)
            //     require(address(this).balance % seller.songPrice() == 0, "something Wrong.");
            contractEnd = true;
        }
    }

    // function withdrawByAdmin() public payable mustCheck() {
    //     require(msg.sender == admin, "Only admin can call this function.");
    //     payable(msg.sender).transfer(address(this).balance);
    // }

    function getBalance() public view returns (uint) {
        return address(this).balance;
    }

    function destroy() public onlyOwner {
        selfdestruct(payable(owner));
    }

    constructor() {
        owner = msg.sender;
        ContractDate = block.timestamp;
    }
}