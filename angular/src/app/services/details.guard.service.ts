import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class detailGuarService implements CanActivate {
    constructor(private _router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

        let id = +route.url[1].path;
        console.log(id);
//        if (id === null || id === undefined || id < 1) {
        if (id < 1) {
            console.log("Not valid id ");
            this._router.navigate(['/home']);
            return false;
            //throw new Error("Method not implemented.");
        }
        return true;
    }
}