pragma solidity >=0.5.1;


contract Music {
    address public owner;

    string public musicName;
    string public albumName;
    uint public date;

    string public copyrighterName;
    address payable copyrighterAddr;
    uint private copyrighterRoyalty;
    string public playerName;
    address payable playerAddr;
    uint private playerRoyalty;
    string public agencyName;
    address payable agencyAddr;
    uint private agencyRoyalty;

    uint public b;
    
    // 음악가 공개키
    // 시그니처 파일 해시값
    // 음원 원본 IPFS 해시값

    uint public price;

    // 정산 함수
    function settle(address payable _to1 ,address payable _to2, address payable _to3) public payable {
        // 생산자들에게 royalty 전송

        if (msg.value >= copyrighterRoyalty + playerRoyalty + agencyRoyalty) {
            _to1.transfer(copyrighterRoyalty);
            _to2.transfer(playerRoyalty);
            _to3.transfer(agencyRoyalty);
        }
        
    }

    // 생성자 함수
    constructor (string memory _musicName, string memory _albumName, //음악가 공개키, 
        string memory _copyrighterName, uint _copyrighterRoyalty, 
        string memory _playerName, address payable _playerAddr, uint _playerRoyalty, 
        string memory _agencyName, address payable _agencyAddr, uint _agencyRoyalty)

    public {
        musicName = _musicName;
        albumName = _albumName;
        //음악가 공개키
        copyrighterName = _copyrighterName;
        copyrighterAddr = payable(msg.sender); // 도진 수정 : address -> payable address type 변경 추가
        copyrighterRoyalty = _copyrighterRoyalty;
        playerName = _playerName;
        playerAddr = _playerAddr;
        playerRoyalty = _playerRoyalty;
        agencyName = _agencyName;
        agencyAddr = _agencyAddr;
        agencyRoyalty = _agencyRoyalty;
        price = _copyrighterRoyalty + _playerRoyalty + _agencyRoyalty;
        date = block.timestamp; // 도진 수정 : now -> block.timestamp now 지원 종료된 기능이라고 해서 변경함.
        b = owner.balance;
    }
}

// -저작권자(이름, 주소, 받아야 할 로열티)
// -실연자(이름, 주소, 받아야 할 로열티)
// -음반사(이름, 주소, 받아야 할 로열티)
// -곡명
// -앨범명