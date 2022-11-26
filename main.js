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
        let expA=[];
        for(let i=0; i<expresion.length; i++){
            expA[i] = !isNaN(expresion[i]) ? parseInt(expresion[i]) : expresion[i];
        }
        console.log(expA);
        return 1;
        for(let i=expA.length-1; i>0; i--){
            if(!isNaN(expA[expA.length-1])){
                expRes.push(expA.pop());
            }else{
                aux = expA.pop();
                expRes.push(this.operacion(aux, expA.pop(), expA.pop()))
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
        console.log(n1)
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

let arbol = new arbolBinario();

arbol.preorderRestulado('+--3*42/*6396');
