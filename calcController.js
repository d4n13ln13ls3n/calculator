class CalcController {
    constructor() {
        this._displayCalc = "0";
        this.dataAtual;
        this.initialize;
        
        this.initialize();
    }
    
    initialize(){
        let displayCalcEl = document.querySelector("#display");
        let dateEl = document.querySelector("#data");
        let timeEl = document.querySelector("#hora");
        displayCalcEl.innerHTML = "4567";
    }
    
    get displayCalc() {
        return this._displayCalc;
    }

    set displayCalc(valor) {
        this._displayCalc = valor; 
    }
}
    get currentDate() {
        return this.dataAtual;
    }
    
    set currentDate(valor) {
        this.dataAtual = valor;
    }
    