//your JS code here. If requir
const button=document.getElementById("btn");

const output=document.getElementById("output");
const input=document.getElementByid("ip");

	function createPromiseWithDelay(delay,callback){
		return new Promise((resolve)=>{
			setTimeOut(()=>{
				resolve(callback());
			},delay)
		})
	}
button.addEventListener("click",()=>{
	const inputValue=parseFloat(input.value);

	createPromiseWithDelay(2000, ()=>inputValue)
	.then((result)=>createPromiseWithDelay(1000, ()=>result*2))
	.then((result)=>createPromiseWithDelay(1000, ()=>result-3))
	.then((result)=>createPromiseWithDelay(1000,()=>result/2))
	.then((result)=>createPromiseWithDelay(1000, ()=>result+2))
	.then((finalResult)=>{
		output.textContent=`finalresult:${finalResult}`;
		
	})
	.catch((error)=>{
		console.error(error);
	})
})
	
