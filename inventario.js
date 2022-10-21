
export default class Inventario {
  constructor(){
    this.first = null;
  }

  
  agregar(producto) {
    if (!this.first) {
      this.first = producto;
    } else if (!this.first.next) {
      this.first.next = producto;
    } else {
      this._recorridoRecursivo(this.first).next = producto;
    }
  }

    _recorridoRecursivo(producto) {
      if (producto.next) return this._recorridoRecursivo(producto.next);
      return producto;
    }


  buscar(codigo){
    let aux = this.first;

    while (aux != null) {
        if (aux.codigo == codigo) {
            return aux;
        } else {
            aux = aux.next;
        }
    }
    return false;
  }


  eliminar(codigo){
    let aux = this.first;

    if (aux == null) {
        return false;
    } else {
        if (aux.codigo == codigo) {
            this.first = aux.next;
            return true;
        } else {
            while (aux.next != null) {
                if (aux.next.codigo == codigo) {
                    aux.next = aux.next.next;
                    return true;
                } else {
                    aux = aux.next;
                }
            }
        }
    }
    return false;

  }



  listado(){
    let res="";
    let temp=this.first;
    while(temp!=null){
        res+=temp.palabra + " ";
        temp=temp.next;
    }
    return res;
  }

  ListadoInv(){
    let aux = this.first;
    let str = "";
    while (aux){
      str = aux.numero + " " + str;
      aux = aux.next;
    }
    return str; 
  }

  insertar(posicion, producto) {
    let aux = this.first;

    if (aux == null) {
        return false;
    } else {
        if (posicion == 0) {
            producto.next = aux;
            this.first = producto;
            return true;
        } else {
            let i = 0;
            while (aux.next != null) {
                if (i == posicion - 1) {
                    producto.next = aux.next;
                    aux.next = producto;
                    return true;
                } else {
                    aux = aux.next;
                    i++;
                }
            }
        }
    }
    return false;
}


objetoTexto(producto ={}){
  return  `{codigo: ${producto.codigo}, nombre: ${producto.nombre}, cantidad: ${producto.cantidad}, costo: ${producto.costo}}`;
}
}