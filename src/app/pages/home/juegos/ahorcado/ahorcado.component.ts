import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrl: './ahorcado.component.css'
})
export class AhorcadoComponent implements OnInit{

  title = "Ahorcado"
  message = ""
  intentarDenuevo = false
  seguirJugando = false
  started = false
  finished = false

  life = 7
  wordLength = 100
  atualLength = 0

  chosenWord: string[] = ["","","","","","","","","",""];
  wordBottom: string[] = ["","","","","","","","","",""];

  img_link: string[] = ["https://i.imgur.com/beOIy49.png","https://i.imgur.com/MeG1Tri.png","https://i.imgur.com/XtMRZjQ.png","https://i.imgur.com/9tPGDHe.png","https://i.imgur.com/Hugs2pT.png","https://i.imgur.com/JttNCxV.png","https://i.imgur.com/GaBzOhR.png","https://i.imgur.com/JoRWXM0.png"]

  words = [ //reemplazar palabras
    'batata', 'biscoito', 'bolacha', 'massa', 'roberto',
    'pedro', 'lucas', 'arthur', 'banana', 'salchicha',
    'cachorro', 'cadela', 'pobre', 'rico', 'pessoa', 
    'paulo', 'zevran', 'ferro', 'skyrim', 'oblivion',
    'warframe','felipe', 'arma',  'espada', "peru"
  ];

  ngOnInit(): void {

    let btn_a = document.getElementById("0");
    //@ts-ignore
    btn_a.addEventListener("click", (e:Event) => this.choice("a","0"));
    let btn_b = document.getElementById("1");
    //@ts-ignore
    btn_b.addEventListener("click", (e:Event) => this.choice("b","1"));
    let btn_c = document.getElementById("2");
    //@ts-ignore
    btn_c.addEventListener("click", (e:Event) => this.choice("c","2"));
    let btn_d = document.getElementById("3");
    //@ts-ignore
    btn_d.addEventListener("click", (e:Event) => this.choice("d","3"));
    let btn_e = document.getElementById("4");
    //@ts-ignore
    btn_e.addEventListener("click", (e:Event) => this.choice("e","4"));
    let btn_f = document.getElementById("5");
    //@ts-ignore
    btn_f.addEventListener("click", (e:Event) => this.choice("f","5"));
    let btn_g = document.getElementById("6");
    //@ts-ignore
    btn_g.addEventListener("click", (e:Event) => this.choice("g","6"));
    let btn_h = document.getElementById("7");
    //@ts-ignore
    btn_h.addEventListener("click", (e:Event) => this.choice("h","7"));
    let btn_i = document.getElementById("8");
    //@ts-ignore
    btn_i.addEventListener("click", (e:Event) => this.choice("i","8"));
    let btn_j = document.getElementById("9");
    //@ts-ignore
    btn_j.addEventListener("click", (e:Event) => this.choice("j","9"));
    let btn_k = document.getElementById("10");
    //@ts-ignore
    btn_k.addEventListener("click", (e:Event) => this.choice("k","10"));
    let btn_l = document.getElementById("11");
    //@ts-ignore
    btn_l.addEventListener("click", (e:Event) => this.choice("l","11"));
    let btn_m = document.getElementById("12");
    //@ts-ignore
    btn_m.addEventListener("click", (e:Event) => this.choice("m","12"));
    let btn_n = document.getElementById("13");
    //@ts-ignore
    btn_n.addEventListener("click", (e:Event) => this.choice("n","13"));
    let btn_o = document.getElementById("14");
    //@ts-ignore
    btn_o.addEventListener("click", (e:Event) => this.choice("o","14"));
    let btn_p = document.getElementById("15");
    //@ts-ignore
    btn_p.addEventListener("click", (e:Event) => this.choice("p","15"));
    let btn_q = document.getElementById("16");
    //@ts-ignore
    btn_q.addEventListener("click", (e:Event) => this.choice("q","16"));
    let btn_r = document.getElementById("17");
    //@ts-ignore
    btn_r.addEventListener("click", (e:Event) => this.choice("r","17"));
    let btn_s = document.getElementById("18");
    //@ts-ignore
    btn_s.addEventListener("click", (e:Event) => this.choice("s","18"));
    let btn_t = document.getElementById("19");
    //@ts-ignore
    btn_t.addEventListener("click", (e:Event) => this.choice("t","19"));
    let btn_u = document.getElementById("20");
    //@ts-ignore
    btn_u.addEventListener("click", (e:Event) => this.choice("u","20"));
    let btn_v = document.getElementById("21");
    //@ts-ignore
    btn_v.addEventListener("click", (e:Event) => this.choice("v","21"));
    let btn_w = document.getElementById("22");
    //@ts-ignore
    btn_w.addEventListener("click", (e:Event) => this.choice("w","22"));
    let btn_x = document.getElementById("23");
    //@ts-ignore
    btn_x.addEventListener("click", (e:Event) => this.choice("x","23"));
    let btn_y = document.getElementById("24");
    //@ts-ignore
    btn_y.addEventListener("click", (e:Event) => this.choice("y","24"));
    let btn_z = document.getElementById("25");
    //@ts-ignore
    btn_z.addEventListener("click", (e:Event) => this.choice("z","25"));
    }
  //@ts-ignore
    choice(z, id): void
  {
    if (this.started == true && this.finished == false)
    {
      let fail = true
      for (var i = 0; i < 10; i++)
      {
        if (this.chosenWord[i] == z)
        {
          //@ts-ignore
          document.getElementById("l_" + i.toString()).style.visibility = "visible";
          this.atualLength += 1;
          fail = false
        }
      }

      if (fail == true)
      {
        this.life -= 1;
      }
      //@ts-ignore
      document.getElementById("forca").setAttribute("src", this.img_link[this.life])
      //@ts-ignore
      document.getElementById(id).hidden = true

      if (this.life <= 0)
      {
        this.finished = true;
        this.intentarDenuevo = true;
        this.message = "PERDISTE!";
      }
      if (this.atualLength >= this.wordLength)
      {
        this.message = "GANASTE!";
        this.seguirJugando = true;
        this.finished = true;
      }
    }
  }

  game_start(): void
  {
    if (this.started == false)
    {
      this.life = 7
      let i = Math.round((Math.random() * 25) + 1);
      for (let z =0; z < this.words[i].length;z++)
      {
      this.chosenWord[z] = this.words[i].charAt(z)
      this.wordBottom[z] = "_"
      }
      this.atualLength = 0
      this.wordLength = this.words[i].length
      this.started = true
      //@ts-ignore
      document.getElementById("forca").setAttribute("src", this.img_link[this.life])
      this.message = ""
    }
    else
    {
      for (let c = 0; c < 26;c++)
      {
        //@ts-ignore
        document.getElementById(c.toString()).hidden = false
      }
      for (let z =0; z < this.chosenWord.length;z++)
      {
      this.chosenWord[z] = ""
      this.wordBottom[z] = ""
      }
      for (var e = 0; e < 10; e++)
      {
        //@ts-ignore
        document.getElementById("l_" + e.toString()).style.visibility = "hidden";
      }

      let i = Math.round((Math.random() * 25) + 1);
      for (let z =0; z < this.words[i].length;z++)
      {
      this.chosenWord[z] = this.words[i].charAt(z)
      this.wordBottom[z] = "_"
      }

      this.atualLength = 0
      this.wordLength = this.words[i].length
      this.life = 7
      this.finished = false
      this.started = true
      //@ts-ignore
      document.getElementById("forca").setAttribute("src", this.img_link[this.life])
      this.message = ""
    }
  }
}
