// 인덱스 시그니처

type ContryCodes = {
  [key: string]: string;
  // 인덱스 시그니처에는 key랑 똑같은 값으로만 설정해줄 수 있음
  Korea: string;
};

const contryCodes: ContryCodes = {
  Korea: 'ko',
  UnitedState: 'us',
  UnitedKingdom: 'uk',
};

console.log(contryCodes.Korea);
