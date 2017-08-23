export default class randompick {

    public code: string;

    constructor(private arr: string[]) {
        this.generate(this.arr);
    }

    private generate(arr) {
        this.code = arr[Math.floor(Math.random() * arr.length)];
    }

    public get() {
        return this.code;
    }
}