import randompick from './randomPick';

export default class gencodes {

    private codeArr: any[] = [];
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

    private shuffle(a: string[]) {
        for (let i = a.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [a[i - 1], a[j]] = [a[j], a[i - 1]];
        }
        return a;
        // Thank you stackoverflow: https://stackoverflow.com/a/6274381/7814800
    }

    private createPartial() {
        let part: string[] = [
            this.getLetter(),
            this.getNumber(),
            this.getLetter()
        ];

        part = this.shuffle(part);
        return part.join('');
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
                this.codeArr.push(`${this.source}-${this.createPartial()}-${this.createPartial()}`);
            }
            console.log(batchCount);
        }
    }

    public codes() {
        return this.codeArr;
    }
}