/**
 *
 * @param Enum
 * @returns {*}
 */
export default (Enum) => {
  return {
    
    /**
     * Converts back and forth
     * @param val
     * @returns {*}
     */
    convert(val) {
      return Enum[val];
    }
  }
};
