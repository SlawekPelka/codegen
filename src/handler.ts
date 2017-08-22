const filiaal: string = document.getElementById('filiaal').innerHTML;
const xtimes: string = document.getElementById('timenumbers').innerHTML;

import gencodes from './helpers/generateCodes';

function getCodes (filiaal: string, xtimes: string): void {
    let gen = new gencodes(source, times);
    return gen;
}