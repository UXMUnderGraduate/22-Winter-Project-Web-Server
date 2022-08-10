pragma solidity ^0.8.0;

import "./Music.sol";

contract Registration {
//    mapping(byte32 -> Music) private musicMap;

    /*
        @author : dojinyou
        @param param1
        @param param2
        @param param3
        @param param4
        @return boolean
    */
    function register(byte32 id) {
        return musicMap[id] = new Music(id);
    }

    /*
        @author : dojinyou
        @param param1
        @param param2
        @param param3
        @param param4
        @return boolean
    */
    function purchase(Music _musicAddress) {
        _musicAddress.
    }
}

// 데이터가 엄청 많이 등록 되면, 이걸 어떻게 찾을 것인가?
// 컨트랙트의 이더리움 주소은 트랜잭션 수신 / 컨트랜트로 자금 보내기 / 함수 호출에 사용
// 컨트랙트에서 컨트랙트 호출 가능
// function FunctionName([parameters]) {public|private|internal|external} [pure|constant|view|payable] [modifiers] [returns (return types)]
