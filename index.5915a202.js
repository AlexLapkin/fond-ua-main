document.querySelector(".payment-form").addEventListener("submit",(async function(e){let t=document.getElementsByName("amount")[0].value;fetch("/makePayment",{method:"POST",body:JSON.stringify({amount:t}),headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{console.log(e)})).catch((e=>{console.error(e)}))}));
//# sourceMappingURL=index.5915a202.js.map
