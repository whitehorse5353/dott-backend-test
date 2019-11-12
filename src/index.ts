import {readFileSync} from 'fs';
import {resolve} from 'path';

import {processTree} from './processInput';

const inputURL: string = resolve('.', 'stdin.txt');

const processInput = (inputURL: string): void => {
    const file = readFileSync(inputURL, 'utf8');
    const fileInput = file.trim().split('\n');
    const [numberOfTestCases, axis, ...rest] = fileInput;
    const [row, column] = axis.split(' ');
    const tree = rest.map(_row =>
        _row.split('').map(v =>
            parseInt(v, 10)));
    return processTree(parseInt(numberOfTestCases, 10),
        parseInt(row),
        parseInt(column), tree);
};

processInput(inputURL); // execute
