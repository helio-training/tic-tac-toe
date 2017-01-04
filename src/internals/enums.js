export default (Enum) => {
  return {
    /**
     * Converts back and forth
     * @param val
     * @returns {*}
     */
    convert(val) {
      console.log(Enum[val]);
      return Enum[val];
    }
  }
};
