class nodo{

}

class arbolBinario{
    preorder(){

    }

    postorder(){
        
    }

    preorderRestulado(expresion){
        let aux;
        let expRes = [];
        for(let i=0; i<expresion.length; i++){
            aux = expresion.pop();
            if(isNaN(expresion[aux])){
                expRes.push(aux);
            }else{
                expRes.push(this.operacion(aux, expRes.pop(), expRes.pop()))
            }
        }
        return expRes[0];
    }

    postorderResultado(expresion){
        let aux;
        let expRes = [];
        for(let i=0; i<expresion.length; i++){
            aux = expresion.shift();
            if(isNaN(expresion[aux])){
                expRes.unshift(aux);
            }else{
                expRes.unshift(this.operacion(aux, expRes.shift(), expRes.shift()))
            }
        }
        return expRes[0];
    }

    operacion(operador, n1, n2){
        if(operador === '/'){
            return n1/n2;
        }else if(operador === '*'){
            return n1*n2;
        }else if(operador === '+'){
            return n1+n2;
        }
        return n1-n2;
    }
}
