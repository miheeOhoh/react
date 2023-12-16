// 제네릭을 사용하여 모든 종류의 함수에 대해 적용할 수 있도록
export const debounce = <T extends (...args: any) => any>(
  fn: T,
  delay: number
) => {
  // timeout을 setTimeout의 반환 타입으로 초기화
  let timeout: ReturnType<typeof setTimeout>;
  // ...args의 타입은 T의 인자 타입
  // T의 결과값 타입으로 반환
  return (...args: Parameters<T>): ReturnType<T> => {
    let result: any;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      // 함수 실행 결과 result에 할당
      result = fn(...args);
    }, delay);
    return result;
  };
};

// ex)
// const debouncedOnChange = debounce<typeof onChange>(onChange, 500);
