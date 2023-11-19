type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

// 객체는 프로퍼티가 더작은것이 슈퍼타입이다.
// 즉 dog가 animal로 업캐스팅이 된다.
// 반대로 animal이 dog로 down 캐스팅이 되지않는다.

let animal: Animal = {
  name: '기린',
  color: 'yellow',
};

let dog: Dog = {
  name: '돌돌이 ',
  color: 'brown',
  breed: '진도',
};

animal = dog;
