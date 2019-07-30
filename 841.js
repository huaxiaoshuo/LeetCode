var canVisitAllRooms = function (rooms) {
    let entered = [0],
        toEnter = rooms[0];
    let underA = function (toEnter) {
        let enters = []
        if (!toEnter) return
        toEnter.map((enterItem) => {
            if (entered.indexOf(enterItem) === -1) {
                entered.push(enterItem)
                enters = [...enters, ...rooms[enterItem]]
            }
        })
        if (enters.length) {
            underA(enters)
        }
    }
    underA(toEnter)
    return entered.length === rooms.length
};
canVisitAllRooms([[1,3],[3,0,1],[2],[0]])
