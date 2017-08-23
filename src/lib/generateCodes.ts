import randompick from './randomPick';
import * as fs from "fs";

export default class gencodes {

    private codeArr: any = [];
    private alphabet: string[] = ['a','c','d','e','f','g','h','j','k','l','m','n','p','q','r','t','u','v','w','x','y'];
    private numbers: string[] = ['2','3','4','6','7','9'];

    constructor(private source: string, private times: string) {
        this.gen();
    }

    private gen() {
        for (let i: number = 0; i < Number(this.times); i++) {

            let first: any = new randompick(this.alphabet).get();
            let second: any = new randompick(this.numbers).get();
            let third: any = new randompick(this.alphabet).get();
            let fourth: any = new randompick(this.numbers).get();
            let fifth: any = new randompick(this.alphabet).get();
            let sixth: any = new randompick(this.alphabet).get();

            this.codeArr.push(`${this.source}-${first}${second}${third}-${fourth}${fifth}${sixth}`);
        }

        this.removeDuplicate();
    }

    private removeDuplicate() {
        let filterCodes: any = Array.from(new Set(this.codeArr));
        if (filterCodes.length != Number(this.times)) {
            let difference: number = Math.round(Number(this.times) - filterCodes.length);
            this.times = difference.toString();
            this.gen();
        }
    }

    public codeLink(generated: string[]) {
        let fname: string = Date.now();

        fs.writeFile(`${__dirname}/../codes/${fname}.txt`, generated.join('\n'),(err) => {
            if (err) throw err;
            return `/codes/${fname}.txt`;
        });
    }
}