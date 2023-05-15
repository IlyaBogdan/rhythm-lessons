export class Pulsation {

    private pulseMap: Array<number>;
    
    private hard = 1;
    private soft = 0;

    public countOfParts: number;
    public devision: number;

    constructor(countOfParts: number, devision: number) {
        this.pulseMap = Array(countOfParts).fill(this.soft);
        this.pulseMap[0] = this.hard;

        this.countOfParts = countOfParts;
        this.devision = devision;
    }

    public setHard(part: number) {
        this.pulseMap[part] = this.hard;
    }

    public setSoft(part: number) {
        this.pulseMap[part] = this.soft;
    }

}