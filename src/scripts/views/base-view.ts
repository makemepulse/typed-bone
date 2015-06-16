/// <reference path="../../../typings/backbone/backbone.d.ts" />

export default class BaseView extends Backbone.View<Backbone.Model> {
	
	width:number;
	height:number;

  elStyle:Object;
	
	constructor (options?) {
		super(options);
		console.log('[BaseView constructor]');

    this.elStyle = this.el.style;

	}
	
	show() {
		
    this.el.classList.remove('hide');

	}
	
	hide() {
		
    this.el.classList.add('hide');
    
	}
	
	transitionIn() {
		
	}
	
	transitionOut() {
		
	}
	
	resize( w:number = 0, h:number = 0 ) {
		this.el.style.width = this.width + 'px';
		this.el.style.height = this.height + 'px';
		
	}
	
}