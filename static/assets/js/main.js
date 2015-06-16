(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var app_view_1 = require('./views/app-view');
var App = (function () {
    /**
     * App contructor
     * @return void
     */
    function App() {
        this.DELTA_TIME = 0;
        this.LAST_TIME = Date.now();
        this.addListeners();
        this.appView = new app_view_1.default();
    }
    /**
     * addListeners
     * @return void
     */
    App.prototype.addListeners = function () {
        window.addEventListener('resize', this.onResize.bind(this));
        TweenLite.ticker.addEventListener('tick', this.update.bind(this));
    };
    /**
     * update
     * - Triggered on every TweenLite tick
     * @return void
     */
    App.prototype.update = function () {
        this.DELTA_TIME = Date.now() - this.LAST_TIME;
        this.LAST_TIME = Date.now();
    };
    /**
     * onResize
     * - Triggered when window is resized
     * @param  {obj} evt
     * @return void
     */
    App.prototype.onResize = function (evt) {
        var w = window.innerWidth;
        var h = window.innerHeight;
    };
    return App;
})();
exports.default = App;

},{"./views/app-view":2}],2:[function(require,module,exports){
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var base_view_1 = require('./base-view');
var AppView = (function (_super) {
    __extends(AppView, _super);
    function AppView() {
        _super.call(this);
        console.log('[AppView constructor]');
    }
    return AppView;
})(base_view_1.default);
exports.default = AppView;

},{"./base-view":3}],3:[function(require,module,exports){
/// <reference path="../../../typings/backbone/backbone.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BaseView = (function (_super) {
    __extends(BaseView, _super);
    function BaseView(options) {
        _super.call(this, options);
        console.log('[BaseView constructor]');
        this.elStyle = this.el.style;
    }
    BaseView.prototype.show = function () {
        this.el.classList.remove('hide');
    };
    BaseView.prototype.hide = function () {
        this.el.classList.add('hide');
    };
    BaseView.prototype.transitionIn = function () {
    };
    BaseView.prototype.transitionOut = function () {
    };
    BaseView.prototype.resize = function (w, h) {
        if (w === void 0) { w = 0; }
        if (h === void 0) { h = 0; }
        this.el.style.width = this.width + 'px';
        this.el.style.height = this.height + 'px';
    };
    return BaseView;
})(Backbone.View);
exports.default = BaseView;

},{}],4:[function(require,module,exports){
/// <reference path="../../typings/jquery/jquery.d.ts" />
/// <reference path="../../typings/underscore/underscore.d.ts" />
/// <reference path="../../typings/backbone/backbone.d.ts" />
/// <reference path="../../typings/greensock/greensock.d.ts" />
var app_1 = require('./app');
window.onload = function () {
    var app = new app_1.default();
};

},{"./app":1}]},{},[4])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwic3JjL3NjcmlwdHMvYXBwLnRzIiwic3JjL3NjcmlwdHMvdmlld3MvYXBwLXZpZXcudHMiLCJzcmMvc2NyaXB0cy92aWV3cy9iYXNlLXZpZXcudHMiLCJzcmMvc3JjL3NjcmlwdHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSx5QkFBb0Isa0JBQWtCLENBQUMsQ0FBQTtBQUV2QztJQU9FOzs7T0FHRztJQUNIO1FBRUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFFNUIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRXBCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxrQkFBTyxFQUFFLENBQUM7SUFFL0IsQ0FBQztJQUVEOzs7T0FHRztJQUNILDBCQUFZLEdBQVo7UUFFRSxNQUFNLENBQUMsZ0JBQWdCLENBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFFLENBQUM7UUFDOUQsU0FBUyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUUsQ0FBQztJQUV0RSxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILG9CQUFNLEdBQU47UUFFRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzlDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBRzlCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILHNCQUFRLEdBQVIsVUFBVSxHQUFHO1FBRVgsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUMxQixJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO0lBRTdCLENBQUM7SUFFSCxVQUFDO0FBQUQsQ0EzREEsQUEyREMsSUFBQTtBQTNERCxxQkEyREMsQ0FBQTs7Ozs7Ozs7O0FDN0RELDBCQUFxQixhQUFhLENBQUMsQ0FBQTtBQUVuQztJQUFxQywyQkFBUTtJQUUzQztRQUNFLGlCQUFPLENBQUM7UUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVILGNBQUM7QUFBRCxDQVBBLEFBT0MsRUFQb0MsbUJBQVEsRUFPNUM7QUFQRCx5QkFPQyxDQUFBOzs7QUNURCxnRUFBZ0U7Ozs7Ozs7QUFFaEU7SUFBc0MsNEJBQTZCO0lBT2xFLGtCQUFhLE9BQVE7UUFDcEIsa0JBQU0sT0FBTyxDQUFDLENBQUM7UUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFFcEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztJQUVoQyxDQUFDO0lBRUQsdUJBQUksR0FBSjtRQUVHLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUVwQyxDQUFDO0lBRUQsdUJBQUksR0FBSjtRQUVHLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUVqQyxDQUFDO0lBRUQsK0JBQVksR0FBWjtJQUVBLENBQUM7SUFFRCxnQ0FBYSxHQUFiO0lBRUEsQ0FBQztJQUVELHlCQUFNLEdBQU4sVUFBUSxDQUFZLEVBQUUsQ0FBWTtRQUExQixpQkFBWSxHQUFaLEtBQVk7UUFBRSxpQkFBWSxHQUFaLEtBQVk7UUFDakMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUUzQyxDQUFDO0lBRUYsZUFBQztBQUFELENBekNBLEFBeUNDLEVBekNxQyxRQUFRLENBQUMsSUFBSSxFQXlDbEQ7QUF6Q0QsMEJBeUNDLENBQUE7OztBQzNDRCx5REFBeUQ7QUFDekQsaUVBQWlFO0FBQ2pFLDZEQUE2RDtBQUM3RCwrREFBK0Q7QUFFL0Qsb0JBQWdCLE9BQU8sQ0FBQyxDQUFBO0FBRXhCLE1BQU0sQ0FBQyxNQUFNLEdBQUc7SUFFZCxJQUFJLEdBQUcsR0FBRyxJQUFJLGFBQUcsRUFBRSxDQUFDO0FBRXRCLENBQUMsQ0FBQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgQXBwVmlldyBmcm9tICcuL3ZpZXdzL2FwcC12aWV3JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIHtcblxuICBERUxUQV9USU1FOm51bWJlcjtcbiAgTEFTVF9USU1FOiBudW1iZXI7XG4gIFxuICBhcHBWaWV3OkFwcFZpZXc7XG5cbiAgLyoqXG4gICAqIEFwcCBjb250cnVjdG9yXG4gICAqIEByZXR1cm4gdm9pZFxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgXG4gICAgdGhpcy5ERUxUQV9USU1FID0gMDtcbiAgICB0aGlzLkxBU1RfVElNRSA9IERhdGUubm93KCk7XG5cbiAgICB0aGlzLmFkZExpc3RlbmVycygpO1xuICAgIFxuICAgIHRoaXMuYXBwVmlldyA9IG5ldyBBcHBWaWV3KCk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBhZGRMaXN0ZW5lcnNcbiAgICogQHJldHVybiB2b2lkXG4gICAqL1xuICBhZGRMaXN0ZW5lcnMoKSB7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ3Jlc2l6ZScsIHRoaXMub25SZXNpemUuYmluZCh0aGlzKSApO1xuICAgIFR3ZWVuTGl0ZS50aWNrZXIuYWRkRXZlbnRMaXN0ZW5lciggJ3RpY2snLCB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpICk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiB1cGRhdGVcbiAgICogLSBUcmlnZ2VyZWQgb24gZXZlcnkgVHdlZW5MaXRlIHRpY2tcbiAgICogQHJldHVybiB2b2lkXG4gICAqL1xuICB1cGRhdGUoKSB7XG5cbiAgICB0aGlzLkRFTFRBX1RJTUUgPSBEYXRlLm5vdygpIC0gdGhpcy5MQVNUX1RJTUU7XG4gICAgdGhpcy5MQVNUX1RJTUUgPSBEYXRlLm5vdygpO1xuXG5cbiAgfVxuXG4gIC8qKlxuICAgKiBvblJlc2l6ZVxuICAgKiAtIFRyaWdnZXJlZCB3aGVuIHdpbmRvdyBpcyByZXNpemVkXG4gICAqIEBwYXJhbSAge29ian0gZXZ0XG4gICAqIEByZXR1cm4gdm9pZFxuICAgKi9cbiAgb25SZXNpemUoIGV2dCApIHtcblxuICAgIGxldCB3ID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgbGV0IGggPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgfVxuXG59IiwiaW1wb3J0IEJhc2VWaWV3IGZyb20gJy4vYmFzZS12aWV3JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwVmlldyBleHRlbmRzIEJhc2VWaWV3IHtcbiAgICBcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICBjb25zb2xlLmxvZygnW0FwcFZpZXcgY29uc3RydWN0b3JdJyk7XG4gIH1cbiAgXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvYmFja2JvbmUvYmFja2JvbmUuZC50c1wiIC8+XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VWaWV3IGV4dGVuZHMgQmFja2JvbmUuVmlldzxCYWNrYm9uZS5Nb2RlbD4ge1xuXHRcblx0d2lkdGg6bnVtYmVyO1xuXHRoZWlnaHQ6bnVtYmVyO1xuXG4gIGVsU3R5bGU6T2JqZWN0O1xuXHRcblx0Y29uc3RydWN0b3IgKG9wdGlvbnM/KSB7XG5cdFx0c3VwZXIob3B0aW9ucyk7XG5cdFx0Y29uc29sZS5sb2coJ1tCYXNlVmlldyBjb25zdHJ1Y3Rvcl0nKTtcblxuICAgIHRoaXMuZWxTdHlsZSA9IHRoaXMuZWwuc3R5bGU7XG5cblx0fVxuXHRcblx0c2hvdygpIHtcblx0XHRcbiAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcblxuXHR9XG5cdFxuXHRoaWRlKCkge1xuXHRcdFxuICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIFxuXHR9XG5cdFxuXHR0cmFuc2l0aW9uSW4oKSB7XG5cdFx0XG5cdH1cblx0XG5cdHRyYW5zaXRpb25PdXQoKSB7XG5cdFx0XG5cdH1cblx0XG5cdHJlc2l6ZSggdzpudW1iZXIgPSAwLCBoOm51bWJlciA9IDAgKSB7XG5cdFx0dGhpcy5lbC5zdHlsZS53aWR0aCA9IHRoaXMud2lkdGggKyAncHgnO1xuXHRcdHRoaXMuZWwuc3R5bGUuaGVpZ2h0ID0gdGhpcy5oZWlnaHQgKyAncHgnO1xuXHRcdFxuXHR9XG5cdFxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2pxdWVyeS9qcXVlcnkuZC50c1wiIC8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy91bmRlcnNjb3JlL3VuZGVyc2NvcmUuZC50c1wiIC8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9iYWNrYm9uZS9iYWNrYm9uZS5kLnRzXCIgLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2dyZWVuc29jay9ncmVlbnNvY2suZC50c1wiIC8+XG5cbmltcG9ydCBBcHAgZnJvbSAnLi9hcHAnO1xuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICBcbiAgbGV0IGFwcCA9IG5ldyBBcHAoKTtcblxufVxuXG4iXX0=
