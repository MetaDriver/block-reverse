/**
 * Created by Master on 2019-02-03.
 */

const TRH = (3 ** 0.5 / 2);   //  TRH :: TRiangle Height


export class Index {
    // i = 0;
    // j = 0;

    constructor(i, j) {
        this.i = i;
        this.j = j;
    };

    clone() {
        return new Index(this.i, this.j);
    };

    fromPoint (point, ci) {
        this.i = Math.round(point.y / TRH);
        this.j = ((point) => {
            let t = Math.round(point.x * 2) / 2;
            return  t - 0.25*( (ci%2 + (t % 1)*2)*2-1 );
        })(point);
        return this;
    };
}


export class Point {
    // x = 0;
    // y = 0;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    };

    clone() {
        return new Point(this.x, this.y);
    };
    fromIdx = function (indx, ci) {
        this.x =  indx.j + 0.5*( (ci%2 + (indx.i % 2))*2-1) ;
        // this.x = !(indx.i % 2) ? indx.j + 0.5*( (ci%2)*2-1) : indx.j - 0.5*( (ci%2)*2-1  );
        this.y = indx.i * TRH;
        return this;
    };
}

export class Vector {
    x = 0;
    y = 0;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

export function radius(point) {
    return (point.x * point.x + point.y * point.y) ** 0.5;
}

