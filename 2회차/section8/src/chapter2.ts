/**
 * inter : 조건부 타입 내에서 타입 추론하기
 */

type FuncA = () => string;
type FuncB = () => number;

type Return<T> = T extends () => infer R ? R : never

type A = Return<FuncA>
type B = Return<FuncB>


/**
 * 예제
 */

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
// 1. T는 프로미스 타입이어야 한다.
// 2. 프로미스 타압의 결과값 타입을 반환해야 한다.

type PromiseA = PromiseUnpack<Promise<number>>;
type PromiseB = PromiseUnpack<Promise<string>>;