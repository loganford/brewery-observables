// beerLineup.component.ts
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var BeerLineupComponent = (function () {
    function BeerLineupComponent(beerLineupService, sourceService) {
        this.beerLineupService = beerLineupService;
        this.sourceService = sourceService;
    }
    BeerLineupComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get current lineup on init
        this.beerLineupService.getBeers().subscribe(function (beers) {
            // If beers successfully return, update the source service
            _this.sourceService.setBeerLineup(beers);
        }, function (err) {
            console.error(err);
        });
    };
    BeerLineupComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'beerLineup.component.html',
            styleUrls: ['beerLineup.component.css'],
            changeDetection: core_1.ChangeDetectionStrategy.Default
        })
    ], BeerLineupComponent);
    return BeerLineupComponent;
}());
exports.BeerLineupComponent = BeerLineupComponent;
