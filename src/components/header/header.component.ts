import { Component } from "@angular/core";
import { DataStorageService } from "../../app/shared/data-storage.service";


@Component({
    selector: 'app-header',
    templateUrl: '../header/header.component.html'
})
export class HeaderComponent {

    constructor(private dataStorageService: DataStorageService) { }

    onSaveData() {
        this.dataStorageService.storeRecipes();
    }

    onFetchData() {
        this.dataStorageService.fetchRecipes();
    }

}