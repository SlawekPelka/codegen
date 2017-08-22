export default class randompick {

    constructor(private arr: string[]) {
        this.generate(this.arr);
    }

    private generate(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
}