/**
 * Finds values in bitmasks that match the given bit
 */
export default (bit: number, bitMasks: { [name: number]: number }): number[] =>
  Object.values(bitMasks).reduce(
    (accumulator, currentBit) => {
      if ((bit & currentBit) === currentBit) {
        accumulator.push(currentBit);
      }

      return accumulator;
    },
    [] as number[]
  );
