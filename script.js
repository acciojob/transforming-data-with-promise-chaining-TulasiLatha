//your JS code here. If requir
document.addEventListener("DOMContentLoaded", () => {
 const input = document.getElementById("ip");
  const button = document.getElementById("btn");
  const output = document.getElementById("output");

	function createPromiseWithDelay(delay,callback){
		return new Promise((resolve)=>{
			setTimeout(()=>{
				resolve(callback());
			},delay)
		})
	}
button.addEventListener("click",()=>{
	const inputValue=parseFloat(input.value);//converting into number

	createPromiseWithDelay(2000, ()=>inputValue)//created promise
		 .then((Result) => createPromiseWithDelay(2000, () => Result))
	.then((Result)=>createPromiseWithDelay(1000, ()=>Result*2))
	.then((Result)=>createPromiseWithDelay(1000, ()=>Result-3))
	.then((Result)=>createPromiseWithDelay(1000,()=>Result/2))
	.then((Result)=>createPromiseWithDelay(1000, ()=>Result+10))
	.then((finalResult)=>{
		output.textContent=`Final Result: ${finalResult}`;
		
	})
	.catch((error)=>{
		console.error(error);
	})
})
})
