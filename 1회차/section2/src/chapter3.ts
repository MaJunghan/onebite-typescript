// 객체
// 타입스크립트는 구조적 타입 시스템

type User = {
  id?: number; // 옵셔널
  readonly name: string;
};

const user: User = {
  id: 1,
  name: '마정한',
};

const user2: User = {
  name: '마정한2',
};
