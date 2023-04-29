import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        bgColor: string;
        boxColor: string;
        shadowColor: string;
        textColor: string;
        pointColor1: string;
        pointColor2: string;
    }
}
