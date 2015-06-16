export default class NumberUtils {

  constructor() {
      
  }

  static randomBetween( min, max ) {

    return Math.floor( Math.random() * ( max - min + 1 ) + min );

  }

  static limit( number, min, max ) {

    return Math.min( Math.max( min, number), max );

  }

  static map( num, min1, max1, min2, max2, round ) {

    let num1 = ( num - min1 ) / ( max1 - min1 )
    let num2 = ( num1 * ( max2 - min2 ) ) + min2

    if ( round ) {
      return Math.round( num2 );
    }

    return num2;

  }

  static hex2rgb( hex ) {

    hex = (hex.substr(0,1)=="#") ? hex.substr(1) : hex;
    return [parseInt(hex.substr(0,2), 16), parseInt(hex.substr(2,2), 16), parseInt(hex.substr(4,2), 16)];
    
  }

  static toRadians( degree ) {

    return degree * ( Math.PI / 180 );

  }

  static toDegree ( radians ) {

    return radians * ( 180 / Math.PI );

  }

  static distanceBetween( p1, p2 ) {

    return Math.sqrt( Math.pow( (p1.x - p2.x), 2 ) + Math.pow( ( p1.y - p2.y ), 2) );

  }
  
}