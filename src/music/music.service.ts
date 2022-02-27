import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from 'src/user/user.repository';
import { CreateMusicDto } from './dto/create-music.dto';
import { UpdateMusicDto } from './dto/update-music.dto';
import { User } from 'src/user/schemas/user.schema';
import { web3Generator } from 'src/common/web3';
// import * as contractJson from './solidity/music.json';

@Injectable()
export class MusicService {
  constructor(private readonly userRepository: UserRepository) {}
  async create(createMusicDto: CreateMusicDto, user: User) {
    // const web3 = web3Generator.getInstance();
    // const contractJson = JSON.parse('./solidity/music.json');
    // const contractABI = contractJson['abi'];
    // contractABI.forEach((element) => {
    //   AbiItem(element);
    // });
    // const contractBytecode: string = JSON.stringify(
    //   contractJson['data']['bytecode'],
    // );
    const {
      musicName,
      albumName,
      price,
      copyrighterEmail,
      copyrighterRoyaltyRate,
      playerEmail,
      playerRoyaltyRate,
      agencyEmail,
      agencyRoyaltyRate,
    } = createMusicDto;

    // 입력된 이메일 검증
    const copyrighter = await this.userRepository.findUserByEmail(
      copyrighterEmail,
    );
    if (!copyrighter) {
      throw new UnauthorizedException('저작권자의 이메일이 존재하지 않습니다.');
    }
    if (copyrighter.email != user.email) {
      throw new UnauthorizedException(
        '현재 사용자와 저작권자가 동일하지 않습니다.',
      );
    }
    const copyrighterName = copyrighter.nickname;
    const copyrighterAddress = copyrighter.metamaskId;

    const player = await this.userRepository.findUserByEmail(playerEmail);
    if (!player) {
      throw new UnauthorizedException('실연자의 이메일이 존재하지 않습니다.');
    }
    const playerName = player.nickname;
    const playerAddress = player.metamaskId;

    const agency = await this.userRepository.findUserByEmail(agencyEmail);
    if (!agency) {
      throw new UnauthorizedException('음반사의 이메일이 존재하지 않습니다.');
    }
    const agencyName = agency.nickname;
    const agencyAddress = agency.metamaskId;

    // 로열티 비율 검증
    if (copyrighterRoyaltyRate + playerRoyaltyRate + agencyRoyaltyRate != 100) {
      throw new UnauthorizedException('비율의 합이 100이 아닙니다.');
    }

    // 로열티 계산
    const copyrighterRoyalty = (price * copyrighterRoyaltyRate) / 100;
    const playerRoyalty = (price * playerRoyaltyRate) / 100;
    const agencyRoyalty = (price * agencyRoyaltyRate) / 100;

    // 컨트랙트 객체 생성
    // const contract = new web3.eth.Contract(contractABI);

    // const deployedContract = contract.deploy({
    //   data: contractBytecode,
    //   arguments: [
    //     musicName,
    //     albumName,
    //     copyrighterName,
    //     copyrighterRoyalty,
    //     playerName,
    //     playerAddress,
    //     playerRoyalty,
    //     agencyName,
    //     agencyAddress,
    //     agencyRoyalty,
    //   ],
    // });

    // const newContractInstance = await deployedContract.send({
    //   from: copyrighterAddress,
    //   gas: 1500000,
    //   gasPrice: '30000000000',
    // });

    // const contractAddress: string = newContractInstance.options.address;
    // return contractAddress;
  }

  findAll() {
    return `This action returns all music`;
  }

  findOne(id: number) {
    return `This action returns a #${id} music`;
  }

  update(id: number, updateMusicDto: UpdateMusicDto) {
    return `This action updates a #${id} music`;
  }

  remove(id: number) {
    return `This action removes a #${id} music`;
  }
}
