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
    novo: Vingador = new Vingador(0, '', '','');

    constructor() {
        this.title = 'Vingadores';
        this.vingadores = [
            new Vingador(0, 'Capitão América', 'Steve Rogers',  'https://upload.wikimedia.org/wikipedia/pt/b/bc/Steven_Rogers_%28Earth-616%29.jpg'),
            new Vingador(1, 'Viúva Negra', 'Natasha Romanoff', 'https://upload.wikimedia.org/wikipedia/pt/1/1c/Black_Widow_Vol_6_12.jpg'),
            new Vingador(2, 'Ms. Marvel', 'Carol Danvers', 'https://i.pinimg.com/736x/b1/f0/a1/b1f0a1bc45eab780722ebc34b3145e25--captain-marvel-shazam-marvel-dc.jpg'),
            new Vingador(3, 'Deadpool', 'Wade Wilson', 'https://upload.wikimedia.org/wikipedia/pt/c/ce/Deadpool_Vol_4_7.jpg'),
            new Vingador(4, 'Gavião Arqueiro', 'Clint Barton', 'https://upload.wikimedia.org/wikipedia/pt/c/cc/Gavi%C3%A3o_Arqueiro_por_Clint_Langley.JPG')
        ];
    }

    ngOnInit(): void {
    }

    heroiSelecionado(vingador: Vingador): void {
        this.selecionado = vingador;
    }

    cadastrar(): void {
        const novoId: number = this.vingadores.length + 1;       
        this.vingadores.push(new Vingador(novoId, this.novo.nome, this.novo.pessoa, this.novo.urlDaFoto));
        this.novo = new Vingador(0, '', '','');
    }

    RemoverVingador(index: number): void{ //nome é o nome do Vingador passado por parametro
            //this.vingadores.splice(nome, 1);
        var id = index;
        for (let i of this.vingadores) {
            if(index== i.id){
                if(this.vingadores.length!=1){
                    this.vingadores.splice(id,1);
                
                }
                else{
                    this.vingadores.splice(0,1)
                }
                
            }
        }
    }
}
