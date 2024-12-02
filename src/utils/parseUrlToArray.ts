import { pathToKoreanMap } from "@/constants/pathToKoreanMap";

/**
 * 주어진 URL 영어 경로명을 미리 정의된 매핑을 사용하여 한글로 변환하는 함수.
 *
 * @param {string} url - 변환할 전체 URL.
 * @returns {string[]} - 변환된 한글 경로 배열.
 *
 * @example
 * const url = "http://localhost:3000/activityReport/policyList";
 * const result = parseUrlToArray(url);
 * console.log(result); // ["활동 보고", "정책 목록"]
 */
export const parseUrlToArray = (url: string): string[] => {
  const segments = url.split("/").filter(Boolean);

  return segments
    .filter((segment) => pathToKoreanMap[segment])
    .map((segment) => pathToKoreanMap[segment]);
};
