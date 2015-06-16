import AppView from './views/app-view';

export default class App {

  DELTA_TIME:number;
  LAST_TIME: number;
  
  appView:AppView;

  /**
   * App contructor
   * @return void
   */
  constructor() {
    
    this.DELTA_TIME = 0;
    this.LAST_TIME = Date.now();

    this.addListeners();
    
    this.appView = new AppView();

  }

  /**
   * addListeners
   * @return void
   */
  addListeners() {

    window.addEventListener( 'resize', this.onResize.bind(this) );
    TweenLite.ticker.addEventListener( 'tick', this.update.bind(this) );

  }

  /**
   * update
   * - Triggered on every TweenLite tick
   * @return void
   */
  update() {

    this.DELTA_TIME = Date.now() - this.LAST_TIME;
    this.LAST_TIME = Date.now();


  }

  /**
   * onResize
   * - Triggered when window is resized
   * @param  {obj} evt
   * @return void
   */
  onResize( evt ) {

    let w = window.innerWidth;
    let h = window.innerHeight;

  }

}