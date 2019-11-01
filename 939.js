var minAreaRect = function(points) {
    let XS =  [], YS = [];
    points.map(item => {
        XS.push(item[0])
        YS.push(item[1])
    })
    console.error(XS, YS)
};
minAreaRect([[1,1],[1,3],[3,1],[3,3],[2,2]])
