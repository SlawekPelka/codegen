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
            document.querySelector('.container').insertAdjacentHTML('afterbegin', '<div class="alert alert-dismissible alert-danger"><button type="button" class="close" data-dismiss="alert">&times;</button>Copy x times fields accepts only numbers (sparated by comma).</div>');
            this.filiaal.offsetParent.className += " has-error";
            this.filiaal.className += " form-control";
        }
    }
}