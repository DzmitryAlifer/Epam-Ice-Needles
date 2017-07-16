export class InMemoryDataService {
  createDb() {
    let playerss = [{
      id: 1,
      firstName: 'Denis',
      lastName: 'Avmochkin',
      nickName: '' ,
      jerseyNum: 80,
      isInFirstTeam: true,
      isInSecondTeam: false,
      trainingCount: 100,
      isEpamer: true,
      position: 'RD/LD',
      positiveVotes: 0,
      negativeVotes: 0
    },{
      id: 2,
      firstName: 'Dzmitry',
      lastName: 'Alifer',
      nickName: '' ,
      jerseyNum: 96,
      isInFirstTeam: false,
      isInSecondTeam: true,
      trainingCount: 1,
      isEpamer: true,
      position: 'D',
      positiveVotes: 0,
      negativeVotes: 0
    },{
      id: 3,
      firstName: 'Ivan',
      lastName: 'Baranov',
      nickName: '' ,
      jerseyNum: 5,
      isInFirstTeam: false,
      isInSecondTeam: true,
      trainingCount: 1,
      isEpamer: false,
      position: '',
      positiveVotes: 0,
      negativeVotes: 2
    },{
      id: 4,
      firstName: 'Maryia',
      lastName: 'Tsiaseika',
      nickName: '' ,
      jerseyNum: 31,
      isInFirstTeam: false,
      isInSecondTeam: true,
      trainingCount: 1,
      isEpamer: true,
      position: 'G',
      positiveVotes: 3,
      negativeVotes: 0
    },{
      id: 5,
      firstName: 'Raman',
      lastName: 'Bachyla',
      nickName: '' ,
      jerseyNum: 99,
      isInFirstTeam: false,
      isInSecondTeam: true,
      trainingCount: 1,
      isEpamer: true,
      position: 'RW/LW',
      positiveVotes: 0,
      negativeVotes: 1
    },{
      id: 6,
      firstName: 'Alexander',
      lastName: 'Varenik',
      nickName: '' ,
      jerseyNum: 17,
      isInFirstTeam: false,
      isInSecondTeam: true,
      trainingCount: 1,
      isEpamer: false,
      position: 'C',
      positiveVotes: 2,
      negativeVotes: 1
    },{
      id: 7,
      firstName: 'Aliaksandr',
      lastName: 'Zhauniak',
      nickName: '' ,
      jerseyNum: 71,
      isInFirstTeam: true,
      isInSecondTeam: false,
      trainingCount: 1,
      isEpamer: false,
      position: 'C'
    },{
      id: 8,
      firstName: 'Sergey',
      lastName: 'Baradyntsev',
      nickName: '' ,
      jerseyNum: 47,
      isInFirstTeam: true,
      isInSecondTeam: false,
      trainingCount: 1,
      isEpamer: true,
      position: 'RW'
    },{
      id: 9,
      firstName: 'Andrey',
      lastName: 'Grusha',
      nickName: '' ,
      jerseyNum: 22,
      isInFirstTeam: true,
      isInSecondTeam: false,
      trainingCount: 1,
      isEpamer: false,
      position: 'C'
    },{
      id: 10,
      firstName: 'Andrey',
      lastName: 'Ivanov',
      nickName: '' ,
      jerseyNum: 10,
      isInFirstTeam: false,
      isInSecondTeam: true,
      trainingCount: 1,
      isEpamer: true,
      position: 'D'
    },{
      id: 11,
      firstName: 'Dmitry',
      lastName: 'Bosenko',
      nickName: '' ,
      jerseyNum: 89,
      isInFirstTeam: false,
      isInSecondTeam: true,
      trainingCount: 1,
      isEpamer: true,
      position: 'LW'
    },{
      id: 12,
      firstName: 'Artem',
      lastName: 'Kogut',
      nickName: '' ,
      jerseyNum: 9,
      isInFirstTeam: false,
      isInSecondTeam: true,
      trainingCount: 1,
      isEpamer: true,
      position: 'RD'
    },{
      id: 13,
      firstName: 'Dzmitry',
      lastName: 'Kharytanovich',
      nickName: '' ,
      jerseyNum: 39,
      isInFirstTeam: true,
      isInSecondTeam: false,
      trainingCount: 1,
      isEpamer: true,
      position: 'D'
    },{
      id: 14,
      firstName: 'Maxim',
      lastName: 'Pretkel',
      nickName: '' ,
      jerseyNum: 30,
      isInFirstTeam: false,
      isInSecondTeam: true,
      trainingCount: 1,
      isEpamer: true,
      position: 'G'
    },{
      id: 15,
      firstName: 'Pavel',
      lastName: 'Guzikov',
      nickName: '' ,
      jerseyNum: 11,
      isInFirstTeam: false,
      isInSecondTeam: true,
      trainingCount: 1,
      isEpamer: true,
      position: 'LD'
    },{
      id: 16,
      firstName: 'Sergey',
      lastName: 'Labyko',
      nickName: '' ,
      jerseyNum: 4,
      isInFirstTeam: false,
      isInSecondTeam: true,
      trainingCount: 1,
      isEpamer: true,
      position: 'RD'
    },{
      id: 17,
      firstName: 'Sergey',
      lastName: 'Surus',
      nickName: '' ,
      jerseyNum: 63,
      isInFirstTeam: true,
      isInSecondTeam: false,
      trainingCount: 1,
      isEpamer: false,
      position: 'LW'
    },{
      id: 18,
      firstName: 'Vadim',
      lastName: 'Konovod',
      nickName: '' ,
      jerseyNum: 20,
      isInFirstTeam: false,
      isInSecondTeam: true,
      trainingCount: 1,
      isEpamer: true,
      position: 'RW'
    }
    ];
    return { playerss };
  }
}
