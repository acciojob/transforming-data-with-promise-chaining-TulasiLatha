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
	.then((result)=>createPromiseWithDelay(1000, ()=>result*2))
	.then((result)=>createPromiseWithDelay(1000, ()=>result-3))
	.then((result)=>createPromiseWithDelay(1000,()=>result/2))
	.then((result)=>createPromiseWithDelay(1000, ()=>result+10))
	.then((finalResult)=>{
		output.textContent=`finalresult:${finalResult}`;
		
	})
	.catch((error)=>{
		console.error(error);
	})
})
})
