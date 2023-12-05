import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {debounceTime, distinctUntilChanged, switchMap} from "rxjs";
import {UniversiteService} from "../../../../_Services/universite.service";
declare var $: any;

@Component({
  selector: 'app-afficheuv',
  templateUrl: './afficheuv.component.html',
  styleUrls: ['./afficheuv.component.css']
})
export class AfficheuvComponent implements OnInit {
  inputValue = '';
  locations: any[] = [];

  constructor(private mapService: UniversiteService) {}

  ngOnInit() {}

  onInputChange() {
    this.mapService.autocomplete(this.inputValue).subscribe(data => {
      this.locations = data.map((item: { display_name: any; lat: any; lon: any; }) => ({
        label: item.display_name,
        value: item.display_name,
        lat: item.lat,
        lon: item.lon
      }));
    });
  }

  onSelectLocation(location: any) {
    this.inputValue = location.label;
    // Optionally, you can use location.lat and location.lon here
    this.locations = []; // Clear the suggestions
  }
}
