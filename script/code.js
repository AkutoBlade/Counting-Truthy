function Create(){
    let container = document.getElementById("container");
    
    container.innerHTML=`<form>
    <h1 id="Head" style="text-align:center;">Counting Truthy</h1>
    </label>
    <label class="Interest">List:
         <input id="List" type="text" placeholder="list">
         
        </input>
        </label>
        <br>
        <br>
       </label>
        <label class="Interest">Result:
         <input id="Result" type="text" placeholder="results">
         
        </input>
        </label>
        <br>
        <br>
        <button id="Button" type="button" onclick="countingTruthy()">Count</button>
    </form>`
    
    }
    
    Create()

    let boolean =[true,false,true,false,true,false,true]
    document.getElementById('List').value= boolean;

    function countingTruthy(){
       let count = document.getElementById('Result');
        count.value= boolean.filter(Boolean).length;
    }