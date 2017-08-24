import gencodes from './generateCodes';

export default class Handler {

    private filiaal: any;
    private xtimes: any;

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
        let splFiliaal: string = this.filiaal.value.split(',');
        let splXtimes: string = this.xtimes.value.split(',');

        this.filiaal = splFiliaal;
        this.xtimes = splXtimes;
    }

    private generateCodes() {
        this.splitInput();

        try {
            for (let i: number = 0; i < this.xtimes.length; i++) {
                let generated: any = new gencodes(this.filiaal[i], this.xtimes[i]);
                generated.download(generated.codes());
            }
        } catch (e) {
            console.error(e);
        }
    }
}