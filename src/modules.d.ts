declare module 'vue-material';
declare module 'ts-color-class' {
    export class Color {
        // constructor();
        // constructor(any: Color);
        // constructor(any: string);
        constructor(any: number[]);
        // constructor(any: HSL);
        // constructor(any: any);
        // constructor(any: Color, alpha: number);
        // constructor(any: string, alpha: number);
        // constructor(any: number[], alpha: number);
        // constructor(any: HSL, alpha: number);
        // constructor(any: any, alpha: number);
        // constructor(any: number, green: number, blue: number);
        // constructor(any: number, green: number, blue: number, alpha: number);
        // constructor(any?: any, green?: number, blue?: number, alpha?: number);
        getRed(): number;
        getGreen(): number;
        getBlue(): number;
    }
}