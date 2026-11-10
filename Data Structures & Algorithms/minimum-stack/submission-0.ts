class MinStack {
    /**
     * [value, currentMin]
     */
    private stack:[number, number][] = [];
    constructor() {}

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        let currentMin:number;

        if(this.stack.length === 0){
            currentMin = val;
        }else {
            currentMin = Math.min(val,this.getMin())
        }

        this.stack.push([val, currentMin]);
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
       return this.stack[this.stack.length-1][0];
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.stack[this.stack.length-1][1];
    }
}
