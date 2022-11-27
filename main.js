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

console.log(arbol.preorderRestulado('+--3*42/*6396'));
console.log(arbol.postorderResultado('342*-63*9/-6+'));
