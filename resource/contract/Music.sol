pragma solidity ^0.8.0;


contract Music {
    byte32 private immutable id;
    uint private constant TOTAL_RATE = 100_000;

    struct CopyrightHolder {
        address _address;
        uint rate;
        uint balance;
    }

    CopyrightHolder private _CopyrightHolder;

    constructor(byte32 _id){
        id = _id;
    }

    function purchase(address _buyerAddress) public payable {
        // sender랑 구매자 주소 비교 검증
        // 넣은 돈 비율에 받게 분배하는 함수 호출
    }

    function divideProfit(uint amount) private {
        // amount에 비율 곱하고 전체 비율로 나눠서 각자 금액 확인
        // balance 증가 시키기
    }

    function settle() public {
        // 호출자와 저작권자의 주소 비교
          // 일치자가 없으면 예외
        // 일치하는 사람에게 금액 전부 송금
    }

    function getCopyrightHolders() public view {
        return _CopyrightHolder;
    }
}
