/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  class Planning {
    constructor() {
      this.route = ["JFK"];
      this.index = 1;
      this.target = {};
      this.ticketLength = tickets.length + 1;
    }
    findRoute() {
      let nextTarget = this.findNext();
      if (nextTarget.nextCode && this.index <= this.ticketLength) {
        this.route.push(nextTarget.nextCode);
        this.index += 1;
        tickets.splice(nextTarget.nextIndex, 1);
        return this.findRoute();
      }
      return this.route;
    }
    findNext() {
      let nextCode = "",
        nextIndex = 0;
      tickets.map((item, index) => {
        if (item[0] === this.route[this.route.length - 1]) {
          nextIndex =
            nextCode && nextCode.charCodeAt(0) < item[1].charCodeAt(0)
              ? nextIndex
              : index;
          nextCode =
            nextCode && nextCode.charCodeAt(0) < item[1].charCodeAt(0)
              ? nextCode
              : item[1];
        }
      });
      return {
        nextCode,
        nextIndex,
      };
    }
  }
  return new Planning().findRoute();
};
const tickets = [
  ["JFK", "SFO"],
  ["JFK", "ATL"],
  ["SFO", "ATL"],
  ["ATL", "JFK"],
  ["ATL", "SFO"],
];
console.error(findItinerary(tickets));
