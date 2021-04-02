import Color from 'ts-color-class';

/** A color with additional classification information */
export class AnnotatedColor {
    id: string;
    caption: string;
    iconName: string;
    color: Color;

    /** Initializes an annotated color */
    constructor(id:string, caption:string, color:Color, iconName: string) {
        this.id = id;
        this.caption = caption;
        this.color = color;
        this.iconName = iconName;
      }
  }