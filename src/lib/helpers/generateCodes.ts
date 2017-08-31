import randompick from './randomPick';

export default class gencodes {

    private codeArr: any = [];
    private batchSize: any = 10;
    private alphabet: string[] = ['a','c','d','e','f','g','h','j','k','l','m','n','p','q','r','t','u','v','w','x','y'];
    private numbers: string[] = ['2','3','4','6','7','9'];

    constructor(private source: string, private times: any) {
        this.gen();
    }

    private getLetter() {
        return new randompick(this.alphabet).get();
    }

    private getNumber() {
        return new randompick(this.numbers).get();
    }

    private gen() {
        if (Math.round(Number(this.times)) >= this.batchSize) {
            this.times = Math.max(Math.round(Number(this.times)) / this.batchSize);
        } else {
            this.times = Math.round(Number(this.times));
            this.batchSize = 1;
        }

        for (let batchCount: number = 0; batchCount < this.batchSize; batchCount++) {
            for (let i: number = 0; i < this.times ; i++) {
                this.codeArr.push(`${this.source}-${this.getLetter()}${this.getNumber()}${this.getLetter()}-${this.getNumber()}${this.getLetter()}${this.getLetter()}`);
            }
            console.log(batchCount);
        }
    }

    public codes() {
        return this.codeArr;
    }
}