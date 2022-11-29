class nodo{
    constructor(nuevo){
        this.nuevo = nuevo; 
        this.hizq = null; 
        this.hder = null;
        this.sig = null;
        this.ant = null;
    }
}

class arbolBinario{
    constructor(){
        this.raiz = null;
        this.cadPre = '';
        this.cadPost = '';
    }

    agregar(expresion){
        let nodos = this.nodoSeparado(expresion);
        for(let i=0; i<nodos.length; i++){
            if(this.primero == null){
                this.primero = nodos[i];
                this.primero.sig = nodos[i+1];
            }else{
                nodos[i].sig = nodos[i+1];
                nodos[i].ant = nodos[i-1];
            }                
        }
        console.log(nodos)
        return nodos;
    }

    nodoSeparado(exp){
        let nodos = [];
        for(let i=0; i<exp.length; i++){
            nodos.push(new nodo(exp[i]));
        }
        return nodos;
    }

    formarArbol(nodos){
        aux = this.primero;
        while(aux.sig != null){
            aux = aux.sig;
        }
    }

    /*agregar(nuevo){
        if(this.raiz === null){
            this.raiz = nuevo; 
        }else{
            this._agregar(nuevo, this.raiz)
        }
    }

    _agregar(nuevo, nodox){
        if(nuevo < nodox.nuevo){
            if(nodox.hizq === null){
                nodox.hizq = nuevo; 
            }else{
                this._agregar(nuevo, nodox.hizq);
            }
        }else{
            if(nodox.hder === null){
                nodox.hder = nuevo; 
            }else{
                this._agregar(nuevo, nodox.hder);
            }
        }
    }*/

    preorderRestulado(expresion){
        let aux;
        let expRes = [];
        let expA=[];
        for(let i=0; i<expresion.length; i++){
            expA[i] = !isNaN(expresion[i]) ? parseInt(expresion[i]) : expresion[i];
        }
        while(expA.length > 0){
            if(!isNaN(expA[expA.length-1])){
                expRes.push(expA.pop());
            }else{
                aux = expA.pop();
                expRes.push(this.operacion(aux, expRes.pop(), expRes.pop()))
            }
        }
        return expRes[0];
    }

    preorder(){
        if(this.primero === null){
            return null;
        }else{
            this._preorder(this.primero);
        }
        return this.cadPre;
    }

    _preorder(nodox){
        this.cadPre += `${nodox.nuevo}`; 
        if(nodox.hizq !== null){
            this._preorder(nodox.hizq);
        }
        if(nodox.hder !== null){ 
            this._preorder(nodox.hder);
        }
    }

    postorder(){
        if(this.primero === null){
            return null;
        }else{
            this._postorder(this.primero);
        }
        return this.cadPost;
    }

    _postorder(nodox){
        if(nodox.hizq !== null){
            this._preorder(nodox.hizq);
        }
        if(nodox.hder !== null){ 
            this._preorder(nodox.hder);
        }
        this.cadPost += `${nodox.nuevo}`;
    }

    postorderResultado(expresion){
        let aux;
        let expRes = [];
        let expA=[]
        let n1;
        for(let i=0; i<expresion.length; i++){
            expA[i] = !isNaN(expresion[i]) ? parseInt(expresion[i]) : expresion[i];
        }
        while(expA.length > 0){
            if(!isNaN(expA[0])){
                expRes.push(expA.shift());
            }else{
                aux = expA.shift();
                n1 =expRes.pop();
                expRes.push(this.operacion(aux, expRes.pop(), n1))
            }
        }
        return expRes[0];
    } 

    operacion(operador, n1, n2){
        if(operador === '/'){
            return (n1)/(n2);
        }else if(operador === '*'){
            return (n1)*(n2);
        }else if(operador === '+'){
            return (n1)+(n2);
        }
        return (n1)-(n2);
    }
}

let arbol = new arbolBinario();
arbol.agregar('3-4*2-6*3/9+6');
console.log(arbol.preorderRestulado('+--3*42/*6396'));
console.log(arbol.postorderResultado('342*-63*9/-6+'));
