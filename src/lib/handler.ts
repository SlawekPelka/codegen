import gencodes from './helpers/generateCodes';

function getCodes(filiaal: any, xtimes: any): any {
    return new Promise((resolve, reject) => {
        try {
            let genArr: string[] = [];
            let generated: any;

            for (let i: number = 0; i < xtimes.length; i++) {
                generated = new gencodes(filiaal[i], xtimes[i]);
                genArr.push(generated.codes());
            }

            resolve(generated.download(genArr));
        } catch (e) {
            reject(e);
        }
    });
}

document.getElementById('startgen').addEventListener('click', function() {

    let filiaal: any = document.getElementById('filiaal');
    let xtimes: any = document.getElementById('timenumbers');

    let splFiliaal: string[] = filiaal.value.split(',');
    let splxTimes: string[] = xtimes.value.split(',');

    getCodes(splFiliaal, splxTimes);
});