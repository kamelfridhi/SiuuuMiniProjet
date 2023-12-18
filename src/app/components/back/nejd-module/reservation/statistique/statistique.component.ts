import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {
@Input() size2: Number;

  ngOnInit(): void {
    console.log(this.size2);
  }

}
