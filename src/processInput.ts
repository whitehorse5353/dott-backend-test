type TwoDimensionMatrix = number[][];

const generateTwoDimensionArray = (row: number, column: number): TwoDimensionMatrix =>
    Array(row).fill(0).map(_ => Array(column).fill(100));

interface ExploreAndFindDistance {
    (dist: TwoDimensionMatrix,
     row: number,
     col: number,
     d: number
    ): TwoDimensionMatrix
}

const exploreAndFindDistance: ExploreAndFindDistance = (dist: TwoDimensionMatrix, row: number, col: number, d: number): TwoDimensionMatrix => {
    let n = dist.length,
        m = dist[0].length;
    if (row >= 0 && row < n && col >= 0 && col < m && dist[row][col] > d) {
        dist[row][col] = d;
        exploreAndFindDistance(dist, row + 1, col, d + 1);
        exploreAndFindDistance(dist, row - 1, col, d + 1);
        exploreAndFindDistance(dist, row, col + 1, d + 1);
        exploreAndFindDistance(dist, row, col - 1, d + 1);
    }
    return dist;
};

const output = (dist: TwoDimensionMatrix): string => dist.map(_row => _row.join(' ')).join('\n');

interface ProcessTree {
    (numberOfTestCases: number,
     rows: number,
     columns: number,
     inputTree: TwoDimensionMatrix): void
}

const processTree: ProcessTree = (numberOfTestCases: number, rows: number, columns: number, inputTree: TwoDimensionMatrix) => {
    for (let range = 0; range < numberOfTestCases; range++) {
        let dist: TwoDimensionMatrix = generateTwoDimensionArray(rows, columns);
        for (let rows in inputTree) {
            let row = inputTree[rows];
            for (let node in row) {
                if (row[node] === 1) {
                    exploreAndFindDistance(dist, parseInt(rows), parseInt(node), 0);
                }
            }
        }
        console.log(output(dist));
    }
    return;
};

export {
    processTree
};
