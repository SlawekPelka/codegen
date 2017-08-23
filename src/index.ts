import gencodes from './helpers/generateCodes';

function getCodes (filiaal: any, xtimes: any): void {
    for (let z: number = 0; z < xtimes.length; z++) {
        let generated: any = new gencodes(filiaal[z], xtimes[z]);
        let link = gencodes.codeLink(generated);
    }

    
}

document.getElementById('startgen').addEventListener('click', function() {

    let filiaal: string = document.getElementById('filiaal').value;
    let xtimes: string = document.getElementById('timenumbers').value;

    let splFiliaal: string[] = filiaal.split(',');
    let splxTimes: string[] = xtimes.split(',');

    getCodes(splFiliaal, splxTimes);
});