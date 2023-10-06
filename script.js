//your JS code here. If requir
document.addEventListener("DOMContentLoaded", () => {
const button=document.getElementById("btn");

const output=document.getElementById("output");
const input=document.getElementById("ip");

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
		 .then((result) => createPromiseWithDelay(2000, () => result))
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
