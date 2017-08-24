export default class randompick {

    public code: string;

    constructor(private arr: string[]) {
        this.generate();
    }

    private generate() {
        this.code = this.arr[Math.floor(Math.random() * this.arr.length)];
    }

    public get() {
        return this.code;
    }
}