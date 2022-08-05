pragma solidity >= 0.4.23;

contract Music {
    address public owner;

    string public musicName;
    string public albumName;
    uint public date;

    string public copyrighterName;
    address private copyrighterAddr;
    uint private copyrighterRoyalty;
    string public playerName;
    address private playerAddr;
    uint private playerRoyalty;
    string public agencyName;
    address private agencyAddr;
    uint private agencyRoyalty;

    uint public b;

    // 음악가 공개키
    // 시그니처 파일 해시값
    // 음원 원본 IPFS 해시값

    uint public price;

    // 정산 함수
    function settle() public payable {
        // 생산자들에게 royalty 전송

        copyrighterAddr.transfer(copyrighterRoyalty);
        playerAddr.transfer(playerRoyalty);
        agencyAddr.transfer(agencyRoyalty);
    }

    // 생성자 함수
    constructor (string memory _musicName, string memory _albumName, //음악가 공개키,
        string memory _copyrighterName, uint _copyrighterRoyalty,
        string memory _playerName, address _playerAddr, uint _playerRoyalty,
        string memory _agencyName, address _agencyAddr, uint _agencyRoyalty)

    public {
        owner = msg.sender;
        musicName = _musicName;
        albumName = _albumName;
        //음악가 공개키
        copyrighterName = _copyrighterName;
        copyrighterAddr = owner;
        copyrighterRoyalty = _copyrighterRoyalty;
        playerName = _playerName;
        playerAddr = _playerAddr;
        playerRoyalty = _playerRoyalty;
        agencyName = _agencyName;
        agencyAddr = _agencyAddr;
        agencyRoyalty = _agencyRoyalty;
        price = _copyrighterRoyalty + _playerRoyalty + _agencyRoyalty;
        date = now;
        b = owner.balance;
    }
}
