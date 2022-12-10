function solution(genres, plays) {
  const changeArrToObj = ( arr, keyName ) => {
    return Object.fromEntries(Object.entries({...arr})
    .map(([ key, val ]) => ([ key, {id: key, [keyName]: val} ]))
  )};
  const genreObj = changeArrToObj(genres, 'genre');
  const playObj = changeArrToObj(plays, 'play');
  // 장르와 재생 횟수를 각각 {키: 값} 객체로 만들고 고유번호(id) 부여
  /*
  console.log(genreObj);
  {
    '0': { id: '0', genre: 'classic' },
    '1': { id: '1', genre: 'pop' },
    '2': { id: '2', genre: 'classic' },
    '3': { id: '3', genre: 'classic' },
    '4': { id: '4', genre: 'pop' }
  }
  */
  
  let musicArr = [];
  for (const key in genreObj) {
    musicArr.push({...genreObj[key], ...playObj[key]});
  }
  // 장르 객체와 재생 횟수 객체를 병합해 배열에 넣음
  /*
  console.log(musicArr);
  [
    { id: '0', genre: 'classic', play: 500 },
    { id: '1', genre: 'pop', play: 600 },
    { id: '2', genre: 'classic', play: 150 },
    { id: '3', genre: 'classic', play: 800 },
    { id: '4', genre: 'pop', play: 2500 }
  ]
  */
  
  let playsPerGenre = {};
  musicArr.forEach(({genre, play}) => {
    if (!Object.keys(playsPerGenre).includes(genre)) {
      playsPerGenre[genre] = play;
    } else {
      playsPerGenre[genre] += play;
    }
  });
  // 장르별 총 재생 횟수 구하기
  // console.log(playsPerGenre)
  // { classic: 1450, pop: 3100 }
  
  const sortedGenres = Object.entries(playsPerGenre).sort(([, a], [, b]) => b - a);
  // 재생 횟수에 따라 장르 정렬
  // console.log(sortedGenres);
  // [ [ 'pop', 3100 ], [ 'classic', 1450 ] ]

  let answer = [];
  sortedGenres.forEach((val, i) => {
    val[1] = musicArr
      .filter(music => music.genre === val[0]) // 장르별로 노래를 추출해서 배열에 넣음
      .sort((a, b) => b.play - a.play) // 한 장르 안에서 재생 횟수 내림차순으로 노래 정렬
      .slice(0, 2); // 앞에서부터 노래 2개씩 자름
    answer.push(...val[1].map(x => +x.id))
  });
  /*
  console.log(sortedGenres);
  [
    [
      'pop',
      [
        { id: '4', genre: 'pop', play: 2500 },
        { id: '1', genre: 'pop', play: 600 }
      ]
    ],
    [
      'classic',
      [
        { id: '3', genre: 'classic', play: 800 },
        { id: '0', genre: 'classic', play: 500 }
      ]
    ]
  ]
  */
  
  return answer;
  // [ 4, 1, 3, 0 ]
}
