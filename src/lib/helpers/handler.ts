import gencodes from './generateCodes';
import * as fileSaver from 'file-saver';

export default class Handler {

    private filiaal: any;
    private xtimes: any;
    private totalCodes: number;
    private finalCodes: string[] = [];

    private xtimesCheck: any = /([0-9]+|,)/;

    constructor() {
        this.filiaal = document.getElementById('filiaal');
        this.xtimes = document.getElementById('timenumbers');

        this.validate();
    }

    private validate() {
        if (!this.xtimesCheck.test(this.xtimes.value)) {
            document.querySelector('.container').insertAdjacentHTML('afterbegin', '<div class="alert alert-danger">Copy x times field accepts only numbers (sparated by comma).</div>');
            this.xtimes.offsetParent.className += " has-error";
        } else {
            this.xtimes.offsetParent.classList.remove("has-error");
            this.generateCodes();
        }
    }

    private splitInput() {
        let splFiliaal: string = this.filiaal.value.replace(/\n/g, "").split(',');
        let splXtimes: string = this.xtimes.value.replace(/\n/g, "").split(',');

        this.filiaal = splFiliaal;
        this.xtimes = splXtimes;
    }

    private generateCodes() {
        this.splitInput();

        try {
            for (let i: number = 0; i < this.xtimes.length; i++) {
                let generated: any = new gencodes(this.filiaal[i], this.xtimes[i]);
                this.totalCodes = Number(this.xtimes[i]);
                this.removeDuplicates(generated.codes());
            }
            this.download(this.finalCodes);
        } catch (e) {
            console.error(e);
        }
    }

    private removeDuplicates(codes: any) {
        let unique = codes.filter(function(e, i, self) {
            return i == self.indexOf(e);
        });

       this.addMissing(unique);
    }

    private addMissing(codes: any) {
        let uniqueCount: number = codes.length;
        let filiaalName: string = codes[0].split('-')[0];
        let difference: number = Math.max(this.totalCodes - uniqueCount);
        console.log({name: filiaalName, expected: this.totalCodes, uniqueCount, difference});

        if (difference < 0) {
            let tooMuch: number = Math.max(uniqueCount - this.totalCodes);
            console.log(`u-oh overflow... removing last ${tooMuch} items`);

            for (let i: number = 0; i < tooMuch; i++) {
                let idx = codes.reverse().indexOf(codes.reverse()[i]);
                codes.reverse().splice(idx, 1);
            }
        }

        if (difference > 0) {
            let newCodes = new gencodes(filiaalName, difference);
            for (let i:number = 0; i < newCodes.codes().length; i++) {
                codes.push(newCodes.codes()[i]);
            }
            this.removeDuplicates(codes);
        } else {
            this.finalCodes.push(codes);
        }

    }

    private download(generated: string[]) {
        let fname: string = Date.now().toString();

        let blob = new Blob([generated.join(',').split(',').join('\n')], {type: "text/plain;charset=utf-8"});
        fileSaver.saveAs(blob, fname);
    }
}