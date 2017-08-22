import randompick from './randomPick';

export default class gencodes {

    private codeArr: string[];
    private alphabet: string[] = ['a','c','d','e','f','g','h','j','k','l','m','n','p','q','r','t','u','v','w','x','y'];
    private numbers: string[] = ['2','3','4','6','7','9'];

    constructor(private source: string, private times: string) {
        this.gen(this.source, this.times);
    }

    private gen(source: string, times: string) {
        
        this.codes(this.codeArr);
    }

    public codes(codes: string[]) {
        return codes;
    }
}