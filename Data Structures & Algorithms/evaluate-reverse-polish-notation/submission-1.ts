class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        /**
         *  when it come + , - , * , / then last two number 
         * we have to pop means find the number ,and do the operation , example [a,b,*] => a*b  measn when we find * come then stack.pop() => b, then agian stack.pop() = a then do the operation and push the stack , result will be stack.pop()
         */ 
        let stack : number[] = [];
        for(let token of tokens){
            if(token === "+" || token === "-" || token === "*" || token === "/"){
                let result = 0
                let b:number = Number(stack.pop());
                let a:number = Number(stack.pop());

                switch(token){
                    case "+":
                        result = a+b ;
                        break; 
                    case "-":
                        result = a-b;
                        break;
                    case "*":
                        result = a * b;
                        break;
                    case "/":
                        result = Math.trunc(a/b);  
                        break;
                } 
                stack.push(result);
            }else {
                stack.push(Number(token))
            }
        }

        console.log(tokens)

        return Number(stack.pop())
    }
}
