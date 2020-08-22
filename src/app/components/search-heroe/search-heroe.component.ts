import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from 'src/app/service/heroes.service';
// import { Heroe } from 'src/app/interface/heroe';


@Component({
  selector: 'app-search-heroe',
  templateUrl: './search-heroe.component.html',
  styleUrls: ['./search-heroe.component.css']
})
export class SearchHeroeComponent implements OnInit {
  heroe: any[] = [];
  // data: Heroe[] = [];
  termino: string;

  constructor(private activatedRoute: ActivatedRoute, private heroeService: HeroesService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      // console.log(params['termino']);
      this.termino = params['termino'];
      this.heroe = this.heroeService.buscarHeroes(params['termino']);
      console.log(this.heroe);
    });
  }
}
