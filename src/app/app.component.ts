import { Component, OnInit } from '@angular/core';
import { Vingador } from './vingador';
import '../assets/css/style.css';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title: string;
    vingadores: Array<Vingador>;
    selecionado: Vingador;
    novo: Vingador = new Vingador(0, '', '');

    constructor() {
        this.title = 'Vingadores';
        this.vingadores = [
            new Vingador(1, 'Capitão América', 'Steve Rogers'),
            new Vingador(2, 'Viúva Negra', 'Natasha Romanoff'),
            new Vingador(3, 'Ms. Marvel', 'Carol Danvers'),
            new Vingador(4, 'Deadpool', 'Wade Wilson'),
            new Vingador(5, 'Gavião Arqueiro', 'Clint Barton')
        ];
    }

    ngOnInit(): void {
    }

    heroiSelecionado(vingador: Vingador): void {
        this.selecionado = vingador;
    }

    cadastrar(): void {
        const novoId: number = this.vingadores.length + 1;       
        this.vingadores.push(new Vingador(novoId, this.novo.nome, this.novo.pessoa));
        this.novo = new Vingador(0, '', '');
    }

    RemoverVingador(idVingador: number): void{ //idVingador é o id que o usuario passa

        let idv: number = idVingador - 1; //Como o id que ele passou é diferente da posição dele no array, é feito isso
        console.log(this.vingadores[idv]);
        if(this.vingadores[idv].id == idVingador) //Só exclui se o id for igual ao id que o usuario passou, se o usuario passar um id que nao existe não vai ser excluido
        {
            this.vingadores.splice(idv, 1);
        }
        console.log(this.vingadores)
    }

    RemoverV(selecionado: number): void{
        this.vingadores.splice(selecionado, 1);
    }
}
