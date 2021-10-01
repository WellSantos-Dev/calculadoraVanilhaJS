function Calculadora() {

  this.display = document.querySelector('.display')
  
  this.inicia = () => {
    this.capturaClique()
    this.capturaEnter()
  }

  this.capturaClique = () => {
    document.addEventListener('click', e => {
      const el = e.target;
      
      if(el.classList.contains('btn-num')) {
        this.addNumberDisplay(el)
      }

      if(el.classList.contains('btn-clear')) {
        this.clear();
      }

      if(el.classList.contains('btn-del')) {
        this.del();
      }

      if(el.classList.contains('btn-eq')) {
        this.realizaConta();
      }
    })
  }

  this.addNumberDisplay = (el) => {
    this.display.value += el.innerText
    this.display.focus()
  }

  this.clear = () => {
    this.display.value = ''
  }

  this.del = () => {
    this.display.value = this.display.value.slice(0, -1)
  }

  this.realizaConta = () => {
    try {
      const conta = eval(this.display.value);

      if(!conta) {
        alert("Conta inválida");
        return;
      }

      this.display.value = conta

    } catch(err) {
      alert('Conta invalida!')
      this.del()
      return;
    }
  }

  this.capturaEnter = () => {
    document.addEventListener('keypress', e => {
      const el = e;
      if(el.keyCode == 13) {
        this.realizaConta()
      }
    })
  }

}

const calculadora = new Calculadora();
calculadora.inicia();