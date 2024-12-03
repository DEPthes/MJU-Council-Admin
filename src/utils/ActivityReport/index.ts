/** FulfillmentType 값에 따라 bar 이행도를 리턴하는 함수
 * @param FulfillmentType status: 0 | 1 | 2
 * @return 10 | 55 | 100
 */
export const getFulfillmentRate = (status: number) => {
  const fulfillmentMap: Record<number, number> = {
    0: 10,
    1: 55,
    2: 100,
  };
  return fulfillmentMap[status];
};
