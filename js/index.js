window.onload=function(){
	let table=document.querySelector('table');
	let tbody=document.querySelector('tbody');
	table.ondblclick=function(e){
		let  eve=e.target;
		console.log(eve);
		if(eve.nodeName=='TD'  && eve.className != "del"){
			let  td=eve.innerText;
			eve.innerText="";
			let  input=document.createElement('input');
			input.value=td;
			input.setAttribute('autofocus','true');
			let  width=eve.offsetWidth;
			input.style.width=`${width}px`;
			eve.appendChild(input);
			input.onblur=function(){
				let inv=input.value;
				eve.removeChild(input);
				eve.innerText=inv;
			}
		}else  if(eve.nodeName=='BUTTON'){
                let delf = eve.parentNode.parentNode.parentNode;
                let  del=eve.parentNode.parentNode;
                delf.removeChild(del);
            }
	}
	let button = document.querySelector(".tianjia");
        button.ondblclick = function () {
            let tr = document.createElement("tr");
            let xinxi=prompt("请输入信息，|分离,不输为默认信息");
            let arr=xinxi.split("|");
            let arr1=arr[0]?arr[0].trim():'张三';
            let arr2=arr[1]?arr[1].trim():20;
            let arr3=arr[2]?arr[2].trim():'男';
            let arr4=arr[3]?arr[3].trim():'山西';
            tbody.appendChild(tr);
            tr.innerHTML = `
        <tr>
			<td>${arr1}</td>
			<td>${arr2}</td>
			<td>${arr3}</td>
			<td>${arr4}</td>
			<td class="del"><button>删除</button></td>
		</tr>`
			tr.setAttribute('align','center');
			tr.setAttribute('bgcolor','yellow');
        }
}