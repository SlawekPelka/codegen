import randompick from './randomPick';
import * as fileSaver from 'file-saver';

export default class gencodes {

    private codeArr: any = [];
    private alphabet: string[] = ['a','c','d','e','f','g','h','j','k','l','m','n','p','q','r','t','u','v','w','x','y'];
    private numbers: string[] = ['2','3','4','6','7','9'];

    constructor(private source: string, private times: string) {
        this.gen();
    }

    private getLetter() {
        return new randompick(this.alphabet).get();
    }

    private getNumber() {
        return new randompick(this.numbers).get();
    }

    private gen() {

        for (let i: number = 0; i < Number(this.times) ; i++) {
            this.codeArr.push(`${this.source}-${this.getLetter()}${this.getNumber()}${this.getLetter()}-${this.getNumber()}${this.getLetter()}${this.getLetter()}`);
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

    public download(generated: string[]) {
        let fname: string = Date.now().toString();

        let blob = new Blob([generated.join(',').split(',').join('\n')], {type: "text/plain;charset=utf-8"});
        fileSaver.saveAs(blob, fname);
    }

    public codes() {
        return this.codeArr;
    }
}